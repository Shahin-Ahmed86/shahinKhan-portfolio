import React, { useContext, useRef, useState } from 'react';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import "./Contact.css"
import { ThemeContext } from '../../context';

const Contact = () => {
      const formRef = useRef();
      const [done, setDone] = useState(false);
      const theme = useContext(ThemeContext);
      const darkMode = theme.state.darkMode;
      
      
      const handleSubmit = (e) => {
        e.preventDefault();
         emailjs
           .sendForm(
             "service_gc7c1zl",
             "template_6yrgczw",
             formRef.current,
             "JwqUtRwt5wULwCm1h"
           )
           .then(
             (result) => {
               console.log(result.text);
               setDone(true);
             },
             (error) => {
               console.log(error.text);
             }
           );
      }
    return (
      <div className="c">
        
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="phone" className="c-icon" />
                60111136938
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                mohammad.shahinkhan199@gmail.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                malaysia, kuala lampur
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />{" "}
              <br />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <br />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Send Your Email</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;