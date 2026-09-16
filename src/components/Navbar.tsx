'use client'
import {useState} from 'react'
import {Menu,X} from 'lucide-react'
const links=[['ABOUT','about'],['WORK','projects'],['JOURNEY','experience'],['SKILLS','skills'],['CONTACT','contact']]
export default function Navbar(){const [open,setOpen]=useState(false);return <nav className="nav"><a href="#top" className="brand" data-magnetic>Satish Chintal<span>.</span></a><div className="nav-links">{links.map(([l,id])=><a key={id} href={'#'+id} data-magnetic>{l}</a>)}</div><button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>{open&&<div className="mobile-drawer">{links.map(([l,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{l}</a>)}</div>}</nav>}
