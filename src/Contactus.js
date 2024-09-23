import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t6qysno', 
        'template_fu6wqqp', 
        form.current,
        'YiqRH-6Hk_y0Na0Vc'   
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <div className='contactimage'></div>
      <div className='maps'>
        <iframe
        title='sucess'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.997569041057!2d78.36621959904807!3d17.44777355574783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1713188360486!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='allforms'>
        <ul className='alladdress'>
          <span id="heading11">&nbsp;&nbsp;&nbsp;&nbsp;CONTACT US </span>
          <li>
            <span id="one">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            &nbsp;&nbsp;&nbsp;Plot#07,Hitech-City,Hyderabad-500081,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telangana,India
          </li>
          <li>
            <span id="one">
              <i className="fa-solid fa-phone"></i>
            </span>
            &nbsp;&nbsp;&nbsp;040-55 05 05 05
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timing:9:30AM TO 6:30 PM
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Mon-Sat)
          </li>
          <li>
            <span id="one">
              <i className="fa-solid fa-envelope"></i>
            </span>
            &nbsp;&nbsp;&nbsp; Info@ayolinstitutions.net
          </li>
          <li>
            <span id="one">
              <i className="fa-brands fa-chrome"></i>
            </span>
            &nbsp;&nbsp;&nbsp;Ayolinstitutions.app
          </li>
        </ul>
        <form ref={form} onSubmit={sendEmail} className="forms">
          <div id="heading11">GET IN TOUCH</div>
          <div>Fill the form, We're here to listen and assist you</div>
          <div id="forms">
            <input name="from_name" placeholder="Your Name" required />
          </div>
          <div id="forms">
            <input type="email" name="from_email" placeholder="Email Id" required />
          </div>
          <div id="forms">
            <input name="user_phone" placeholder="Mobile Number" required />
          </div>
          <div id="forms">
            <textarea  className='msg'name="message" placeholder="Your Message" required />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" id="button">&nbsp;Submit&nbsp;</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
