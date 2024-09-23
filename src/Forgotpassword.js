import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

function Forgotpassword() {
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [conpass, setConpass] = useState('');
  const navigate = useNavigate(); 
  
  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roll, email, pass, conpass }),
      });

      if (response.status === 200) {
        toast.success("Password Changed Successfully");  
        navigate('/studentlogin'); 
      } else {
        const result = await response.json();
        toast.error(result.message || "Failed to reset password");  
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");  
    }
  };

  return (
    <div className="centers">
      <Toaster/>
      <div className="wrappers">
        <div id="reset">RESET PASSWORD</div>
        <div>
          <input
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Roll Number"
            id="roll"
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter new password"
            id="password"
          />
        </div>
        <div>
          <input
            value={conpass}
            onChange={(e) => setConpass(e.target.value)}
            type="password"
            placeholder="Confirm password"
            id="confirm-password"
          />
        </div>
        <div id="resetpass">
          <button onClick={handleForgot} className="resetpass">Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
