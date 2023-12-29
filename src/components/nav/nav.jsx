import React from 'react'
import "./nav.css"
import { IoHomeOutline } from "react-icons/io5";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { useEffect, useRef } from 'react';
import { Link, animateScroll as scroll, Events, scroller } from 'react-scroll';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  

  
  return (
    <nav>
      <a href="#home"   onClick={()=> setActiveNav('#home')} className= {activeNav === "#home" ? 'active' : ''} ><IoHomeOutline/></a>
      <a href="#about"  onClick={()=> setActiveNav('#about')} className= {activeNav === "#about" ? 'active' : ''}><LuUser2/></a>
      <a href="#expirenice"  onClick={()=> setActiveNav('#expirenice')} className= {activeNav === "#expirenice" ? 'active' : ''}><RiBook2Line/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className= {activeNav === "#services" ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className= {activeNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
