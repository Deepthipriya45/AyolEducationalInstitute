import React, { useEffect, useState } from "react";

function Afterlogin() {
  const [roll, setRoll] = useState("");

  useEffect(() => {
    const storedRoll = localStorage.getItem("roll-number");
    if (storedRoll) {
      setRoll(storedRoll);
    }
  }, []);

  return (
    <>
      <div id="top">
        <div id="ayolheading">AYOL Educational Institutions</div>
      </div>

      <div id="loginnav">
        <div id='ayolname'>AYOL Educational Institutions</div>
        <div id="iconuser">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>

      <div className="loginhome">Welcome To World of AYOL</div>
      <div id="rollnum">{roll}</div>
      <div className='ourcourses'>Our Courses</div>

      <div className='allcourses'>
        <a href='/kindergarten' className="course1" id='pre'></a>
        <a href='/primary' className="course1" id="primary"></a>
        <a href="/middleyears" className="course1" id="highschool"></a>
      </div>

      <div className='schooltypes'>
        <p>Kinder&nbsp;Garten</p>
        <p>Primary</p> 
        <p>Middle&nbsp;Years</p> 
      </div>

      <div className='heading1'>AYOL&nbsp;Scholarships</div>
      <div className='scholar'>
        <div className='vismi'>
          <div className='vision'>
            <div className="vision-img" id="visionimg"></div>
            <p>AYOLCET</p>
            <ul>
              <li>The Scholarships are provided according to the merit of a student.</li>
              <li>Scholarships are provided for Supporting Special Talents.</li>
              <li>This exam helps us to know the standard of a child.</li>
              <li>AYOLCET is conducted on a yearly basis.</li>
            </ul>
          </div>
          
          <div className="vision">
            <div className="vision-img1" align="center"></div>
            <p>Female Education</p>
            <ul>
              <li>We will provide special scholarships for Women Education.</li>
              <li>We feel females will empower equal to males.</li>
              <li>We feel gender bias should be omitted.</li>
              <li>This scholarship helps women develop the country.</li>
              <li>By this, they can help their parents with the income.</li>
            </ul>
          </div>

          <div className="vision">
            <div className='sports'></div>
            <p>Sports</p>
            <ul>
              <li>We will provide scholarships also for sports.</li>
              <li>Scholarships to pursue your academic and athletic goals.</li>
              <li>This will help students achieve their goals.</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="heading2">Why AYOL</div>
      <div className='adv'>
        <div id="adv1"></div>
        <div id="adv2"></div>
        <div id="adv3"></div>
        <div id="adv4"></div>
        <div id="adv5"></div>
      </div>
    </>
  );
}

export default Afterlogin;
