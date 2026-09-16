'use client'
import { useEffect, useRef } from 'react'

export default function CinematicVideo(){
  const videoRef=useRef<HTMLVideoElement>(null)
  const pointerRef=useRef({x:.5,y:.5})
  const rafRef=useRef<number | null>(null)

  useEffect(()=>{
    const video=videoRef.current; if(!video) return

    const pointer=(e:PointerEvent)=>{
      pointerRef.current={x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight}
      document.documentElement.style.setProperty('--cine-x',`${e.clientX}px`)
      document.documentElement.style.setProperty('--cine-y',`${e.clientY}px`)
    }

    const playVideo=async()=>{
      try{
        await video.play()
      }catch{
        // some browsers block autoplay until interaction; the background should still render and remain muted
      }
    }

    const tick=()=>{
      const {x,y}=pointerRef.current
      const dx=(x-.5),dy=(y-.5)
      video.style.transform=`scale(1.06) translate3d(${dx*-15}px,${dy*-15}px,0) rotateX(${dy*-2}deg) rotateY(${dx*2}deg)`
      rafRef.current=requestAnimationFrame(tick)
    }

    video.addEventListener('loadeddata',playVideo)
    if(video.readyState>=2){ void playVideo() }
    window.addEventListener('pointermove',pointer,{passive:true})
    rafRef.current=requestAnimationFrame(tick)

    return()=>{
      video.removeEventListener('loadeddata',playVideo)
      window.removeEventListener('pointermove',pointer)
      if(rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  },[])

  return <div className="cine-stage" aria-hidden="true">
    <video ref={videoRef} src="/video/portfolio-background.mp4" playsInline muted autoPlay loop preload="auto" className="cine-video" />
    <div className="cine-vignette"/><div className="cine-glow"/><div className="cine-grain"/><div className="cine-scan"/>
    <div className="cine-progress"><span/></div>
  </div>
}
