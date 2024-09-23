import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentLogin() {
  const [emails, setEmails] = useState('');
  const [passw, setPassw] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = async (e) => {
    e.preventDefault(); 
  
    try {
      const response = await fetch('http://localhost:4000/studentlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emails, passw }),
      });
  
      if (response.status === 200) {
        const data = await response.json(); 
        const token = data.authToken; 
        const rollNumber = data.roll;
        const email = data.email;
        localStorage.setItem('token', token);
        if (rollNumber) { 
          localStorage.setItem('roll-number', rollNumber);
        }
        localStorage.setItem('email',email);
       
        toast.success("Login successful!"); 
        navigate('/afterlogin');
      } else {
        toast.error("Login failed!"); 
      }
    } catch (error) {
      console.log('Error during login:', error);
      toast.error("An error occurred during login!"); 
    }
  };
  

  return (
    <div className='centers'>
      <Toaster/>
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h2 style={{ marginBottom: '50px' }}>Login</h2>
          
          <div className='input-box'>
            <input 
              type='text' 
              name='email' 
              placeholder='Username' 
              value={emails} 
              onChange={(e) => setEmails(e.target.value)} 
              required 
            />
            <i className="fa-solid fa-user"></i>
          </div>
          
          <div className='input-box'>
            <input 
              type='password' 
              name='password' 
              placeholder='Password' 
              value={passw}
              onChange={(e) => setPassw(e.target.value)} 
              required 
            />
            <i className="fa-solid fa-lock"></i>
          </div>
          
          <div className='register-link'>
            <span>Don't have an account? <Link to="/Register">Register</Link></span>
          </div>
          
          <div id="loginbtn" style={{ marginBottom: '20px' }}>
            <button className='buttons'  type='submit'>Login</button>
          </div>

          <div id="forgot">
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default StudentLogin;
