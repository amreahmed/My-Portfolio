import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import "./contact.css"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';

const CONTACT = () => {
  const { t } = useTranslation();
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_vtr18z5', 'template_trd91ej', form.current, 'B-aQGY121V7S7eObe').then(() => {
      
        Swal.fire({
          title: t("swal"),
          color: "#fff",
          icon: "success",
          background: "#2c2c6c",
        
          
        });
      });
      
      e.target.reset();
    };

  return (
    
    <section id='contact'>
      <h5>{t("contact_h5")}</h5>
      <h2>{t("contact_h2")}</h2>

      <div className="container content__container">
        <div className="contact__options">
         <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
          <h4>{t("email")}</h4>
          <h5>amr43103@gmail.com</h5>
          <a href="mailto:amr43103@gmail.com" target='_blank'>{t("message_send")}</a>
         </article>
         <article className="contact__option">
          <PiTelegramLogo className='contact__option-icon'/>
          <h4>{t("telegram")}</h4>
          <h5>@amreahmed</h5>
          <a href="https://t.me/amreahmed" target='_blank'>{t("message_send")}</a>
         </article>
         <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
          <h4>{t("whatsapp")}</h4>
          <h5>+201063806119</h5>
          <a href="https://api.whatsapp.com/send?phone=201063806119" target='_blank'>{t("message_send")}</a>
         </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={t("place1")} required/>
          <input type="email" name="email" placeholder={t("place2")} required/>
          <textarea name="message" rows="7" placeholder={t("place3")} required></textarea>
          <button type="submit" className='btn btn-primary'>{t("contact_btn")}</button>
        </form>
      </div>
    </section>
  
  )
}

export default CONTACT
