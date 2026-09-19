'use client'
import { useEffect, useRef } from 'react'

export default function CinematicVideo(){
  const videoRef=useRef<HTMLVideoElement>(null)
  const pointerRef=useRef({x:.5,y:.5})
  const targetRef=useRef(0)
  const currentRef=useRef(0)
  const readyRef=useRef(false)
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

    const handleMetadata=()=>{
      if(!Number.isFinite(video.duration)||video.duration<=0) return
    }

    const initializeVideo=()=>{
      if(!Number.isFinite(video.duration)||video.duration<=0) return
      readyRef.current=true
      video.pause()
      try{
        video.currentTime=0
      }catch{
        readyRef.current=false
      }
    }

    const tick=()=>{
      const {x,y}=pointerRef.current
      const dx=(x-.5),dy=(y-.5)
      currentRef.current+=(targetRef.current-currentRef.current)*.10
      if(readyRef.current&&Number.isFinite(video.duration)&&video.duration>0){
        const desiredTime=currentRef.current*video.duration
        if(Math.abs(video.currentTime-desiredTime)>.001){
          try{
            video.currentTime=desiredTime
          }catch{
            readyRef.current=false
          }
        }
      }
      video.style.transform=`scale(1.06) translate3d(${dx*-15}px,${dy*-15}px,0) rotateX(${dy*-2}deg) rotateY(${dx*2}deg)`
      rafRef.current=requestAnimationFrame(tick)
    }

    video.addEventListener('loadedmetadata',handleMetadata)
    video.addEventListener('canplay',initializeVideo)
    if(video.readyState>=3) initializeVideo()
    window.addEventListener('pointermove',pointer,{passive:true})
    window.addEventListener('scroll',scroll,{passive:true})
    scroll()
    rafRef.current=requestAnimationFrame(tick)

    return()=>{
      video.removeEventListener('loadedmetadata',handleMetadata)
      video.removeEventListener('canplay',initializeVideo)
      window.removeEventListener('pointermove',pointer)
      window.removeEventListener('scroll',scroll)
      if(rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  },[])

  return <div className="cine-stage" aria-hidden="true">
    <video ref={videoRef} src="/video/portfolio-background.mp4" playsInline muted preload="auto" className="cine-video" />
    <div className="cine-vignette"/><div className="cine-glow"/><div className="cine-grain"/><div className="cine-scan"/>
    <div className="cine-progress"><span/></div>
  </div>
}
