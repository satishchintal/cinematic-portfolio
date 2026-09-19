'use client'
import { useEffect, useRef } from 'react'

export default function CinematicVideo(){
  const videoRef=useRef<HTMLVideoElement>(null)
  const pointerRef=useRef({x:.5,y:.5})
  const targetRef=useRef(0)
  const currentRef=useRef(0)
  const rafRef=useRef<number | null>(null)

  useEffect(()=>{
    const video=videoRef.current; if(!video) return

    const pointer=(e:PointerEvent)=>{
      pointerRef.current={x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight}
      targetRef.current=e.clientX/window.innerWidth
      document.documentElement.style.setProperty('--cine-x',`${e.clientX}px`)
      document.documentElement.style.setProperty('--cine-y',`${e.clientY}px`)
    }

    const scroll=()=>{
      const scrollable=document.documentElement.scrollHeight-window.innerHeight
      const scrollProgress=scrollable>0?window.scrollY/scrollable:0
      targetRef.current=(scrollProgress+pointerRef.current.x)/2
    }

    const playVideo=async()=>{
      try{
        video.playbackRate=.01
        await video.play()
      }catch{
        // some browsers block autoplay until interaction; the background should still render and remain muted
      }
    }

    const tick=()=>{
      const {x,y}=pointerRef.current
      const dx=(x-.5),dy=(y-.5)
      currentRef.current+=(targetRef.current-currentRef.current)*.10
      if(video.duration) video.currentTime=currentRef.current*video.duration
      video.style.transform=`scale(1.06) translate3d(${dx*-15}px,${dy*-15}px,0) rotateX(${dy*-2}deg) rotateY(${dx*2}deg)`
      rafRef.current=requestAnimationFrame(tick)
    }

    video.addEventListener('loadeddata',playVideo)
    if(video.readyState>=2){ void playVideo() }
    window.addEventListener('pointermove',pointer,{passive:true})
    window.addEventListener('scroll',scroll,{passive:true})
    scroll()
    rafRef.current=requestAnimationFrame(tick)

    return()=>{
      video.removeEventListener('loadeddata',playVideo)
      window.removeEventListener('pointermove',pointer)
      window.removeEventListener('scroll',scroll)
      if(rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  },[])

  return <div className="cine-stage" aria-hidden="true">
    <video ref={videoRef} src="/video/portfolio-background.mp4" playsInline muted autoPlay loop preload="auto" className="cine-video" />
    <div className="cine-vignette"/><div className="cine-glow"/><div className="cine-grain"/><div className="cine-scan"/>
    <div className="cine-progress"><span/></div>
  </div>
}
