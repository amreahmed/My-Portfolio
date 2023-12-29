import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
const contact = () => {
  return (
    
    <section id='contact'>
      <h5>Get In Tuch</h5>
      <h2>Contact Me</h2>

      <div className="container content__container">
        <div className="contact__options">
         <article className="contact__option">
          <MdOutlineMail/>
          <h4>Email</h4>
          <h5>amr43103@gmail.com</h5>
          <a href="mailto:amr43103@gmail.com" target='_blank'>Send a message</a>
         </article>
         <article className="contact__option">
          <PiTelegramLogo/>
          <h4>Telegram</h4>
          <h5>@amreahmed</h5>
          <a href="https://t.me/amreahmed" target='_blank'>Send a message</a>
         </article>
         <article className="contact__option">
            <FaWhatsapp />
          <h4>Whatsapp</h4>
          <h5>+201063806119</h5>
          <a href="https://api.whatsapp.com/send?phone=201063806119" target='_blank'>Send a message</a>
         </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        </form>
      </div>
    </section>
  
  )
}

export default contact
