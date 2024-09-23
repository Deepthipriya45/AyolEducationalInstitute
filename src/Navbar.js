import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); 
  };

  const handleCourseChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = `/${selectedValue}`; 
    }
  };

  return (
    <div>
      <div id="top">
        <div id="ayolheading">AYOL Educational Institutions</div>
      </div>
      <nav>
        <input type='checkbox' id="sidebar-active"/>
        <label for="sidebar-active" className='open-sidebar-button'>
        <i class="fa-solid fa-bars"></i>
        </label>
        <label id='overlay' for="sidebar-active"></label>
      <div className="navi">
        <div className='links-container'>
        <label for="sidebar-active" className='close-sidebar-button'>
        <i class="fa-solid fa-xmark"></i>
        </label>
        <Link to="/" className="name" id="name">
          AYOL
        </Link>

        <a href="/" className="navtypes">Home</a>
        <a href="/aboutus" className="navtypes">About Us</a>
        
        <select onChange={handleCourseChange} className="course-select">
          <option  value="">Courses</option>
          <option id='cours' value="Kindergarten">Kindergarten</option>
          <option  id='cours'  value="Primary">Primary</option>
          <option  id='cours'value="Middleyears">Middle Years</option>
        </select>

        <a href="/studentlogin" className="navtypes" id="stu">Student Login</a>
        <a href="/admission" className="navtypes">Admission</a>
        <a href="/contactus" className="navtypes">Contact Us</a>
        </div>
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
