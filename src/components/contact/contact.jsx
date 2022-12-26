import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_buky8vq', 'template_eguwifp', form.current, 'wJM-_Ql_-ScMyHCOn')
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>a.villanueva0046@gmail.com</h5>
            <a href="mailto:a.villanueva0046@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Aner Villanueva Garcia</h5>
            <a href="https://www.linkedin.com/in/aner-villanueva-garcia-353491212" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+34626259642" target='_blank'>+34 626 259 642</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default contact