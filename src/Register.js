import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [roll, setRoll] = useState('');
  const [mobilno, setMobileno] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [conpass, setConpass] = useState('');

  const handleregister = (e) => {
    e.preventDefault();
    if (pass !== conpass) {
      toast.error("Passwords don't match");
      return;
    } else {
      fetch('http://localhost:4000/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          roll,         
          mobile: mobilno,
          email,       
          ucha: pass    
        })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Something went wrong!");
        });

      setRoll('');
      setMobileno('');
      setEmail('');
      setPass('');
      setConpass('');
    }
  };

  return (
    <div>
      <Toaster />
      <div className='centers'>
        <div className="wrappers">
          <div id="reset">CREATE ACCOUNT</div>

          <div>
            <input
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              placeholder='Roll Number'
              id="roll"
            />
          </div>
        

          <div>
            <input
              value={mobilno}
              onChange={(e) => setMobileno(e.target.value)}
              type="number"
              id="mobilno"
              placeholder='Enter Mobile Number'
            />
          </div>

          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type='email'
              placeholder='Enter Your mail'
              required
            />
          </div>

          <div>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="password"
              type="password"
              placeholder='Enter new password'
            />
          </div>

          <div>
            <input
              value={conpass}
              onChange={(e) => setConpass(e.target.value)}
              id="confirm-password"
              type="password"
              placeholder='Confirm password'
            />
          </div>

          <div id="resetpass">
            <button className='resetpass' onClick={handleregister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
