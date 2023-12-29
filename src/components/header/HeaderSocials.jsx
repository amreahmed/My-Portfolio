import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/amr-ezzat-0936612a2/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/amreahmed" target='_blank'><FaGithub/></a>
        <a href="https://discord.com/users/257147010488991744" target='_blank'><FaDiscord /></a>
      
    </div>
  )
}

export default HeaderSocials


