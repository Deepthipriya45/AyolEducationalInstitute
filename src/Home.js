import React from 'react';
import Carousels from './Carousels';

function Home() {
  return (
    <>
        <Carousels/>
      <div className='ourcourses'>Our Courses</div>
      <div className='allcourses'>
        <a href='/kindergarten' className="course1" id='pre' onclick="flipImage()"> 
        </a>
        <div id='kin1'>Kinder garten</div>
        <a href='/primary' className="course1" id="primary">
        </a>
        <div id='kin1'>Primary</div>
        <a href="/middleyears" className="course1" id="highschool">
 </a>
 <div id='kin1'>MiddleYears</div>
      </div>
      <div className='schooltypes'>
      <p id='kin'>Kinder&nbsp;Garten</p>
      <p id='kin'>Primary</p> 
      <p id='kin'>Middle&nbsp;Years</p> 
      </div>
      <div className='heading1'>AYOL&nbsp;ScholarShips</div>
      <div className='scholar'>
     <div className='vismi'>
     <div className='vision'>
  <div className="vision-img" id="visionimg"></div>
  <p id="ayolhead">AYOLCET</p>
  <ul start="1">
  <li>The ScholarShips are provided according to the merit of a student.</li>
 
  <li>ScholarShips are provided for Supporting Special Talents</li>
  <li> This exam helps us to know the standard of a child </li>
  <li>AYOLCET is conducted on a yearly basis.</li>
  </ul>
</div>
   <div className="vision">
   <div className="vision-img1" align="center"></div>
   <p id="ayolhead">Female Education</p>
   <ul start="1">
    <li>We will provide special scholarships for Women Education.</li>
    <li>We feel females will empower equal to mens.</li>
    <li>We feel gender-bias should be Omitted. </li>
    <li>This scholarships make women to develop the country.</li>
    <li>By this they can help their parents with the income.</li>
   </ul>
   </div>
   <div className="vision">
    <div className='sports' id="ayolhead"></div>
    <p id="ayolhead">Sports</p>
    <ul start="1">
      <li>We will provided scholarship also for sports</li>
      <li>scholarships to pursue your academic and athletic goals.</li>
      <li>This will help students to achieve their goals.</li>
    </ul>
   </div>
   </div>
   </div>
   <div id="heading2">Why AYOL</div>
   <div className='adv'>
    <div  className="advs"id="adv1"></div>
    <div className="advs" id="adv2"></div>
    <div  className="advs"id="adv3"></div>
    <div  className="advs"id="adv4"></div>
    <div className="advs"id="adv5"></div>
   </div>
    </>
  );
}

export default Home;
