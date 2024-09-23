import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

function Admission() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3iojgus', 
        'template_450ueno', 
        form.current,
        'YiqRH-6Hk_y0Na0Vc'
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log('Error:', error.text);
          toast.error('Failed to send message.');

        }
      );
  };

  return (
    <>
    <Toaster/>
    <div className='center'>
      <div className='admissionbox'>
        <div id="heading12">ADMISSION ENQUIRY FORM</div>
        <div id="important">Please ensure you fill in all the required fields (marked *) before proceeding.</div>
        <form ref={form} onSubmit={sendEmail}>
          <div id="yearboard">
            <span>
              <select name="academic_year" className="custom-select" required>
                <option value="" disabled>Select Academic Year*</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
            </span>
            <span>
              <select name="board" className="custom-select" required>
                <option value="" disabled>Select Board*</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="STATE">STATE</option>
              </select>
            </span>
          </div>
          <div id="board">
            <span>
              <select name="state" className="custom-select" required>
                <option value="" disabled>Select State*</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
              </select>
            </span>
            <span>
              <select name="city" className="custom-select" required>
                <option value="" disabled>Select City*</option>
                <option value="Vijayawada">Vijayawada</option>
                <option value="Hi-tech city">Hi-tech city</option>
              </select>
            </span>
          </div>
          <div id="yearboard">
            <span>
              <select name="grade" className="custom-select" required>
                <option value="" disabled>Select Grade*</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </span>
          </div>
          <div id="yearboard">
            <span>
              <input name="from_name" type='text' placeholder='Name of Child*' required />
            </span>
            <span>
              <input name="parent_name" type='text' id="parent" placeholder='Parent Name*' required />
            </span>
          </div>
          <div className='numid'>
            <span><input name="user_phone" type='text' placeholder='Mobile Number*' required /></span>
            <span><input name="user_email" type='email' id="parent" placeholder='Email Id*' required /></span>
          </div>
          <div className='message'>
            <textarea name="message" id="message" placeholder='Your Message' required />
          </div>
          <div id="buttons">
            <button id="admsub" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Admission;
