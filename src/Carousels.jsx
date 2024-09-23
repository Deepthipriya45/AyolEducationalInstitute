import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import React from 'react'

const Carousels = () => {
  return (
    <MDBCarousel interval={2000}  fade>
    <MDBCarouselItem itemId={1}>
      <img src={require('./img/students1.jpg')} height="400px" id='images' className='d-block w-100' alt='...' />
    </MDBCarouselItem>
    <MDBCarouselItem itemId={2}>
      <img src={require('./img/studentt.jpg')} height="400px"id='images' className='d-block w-100' alt='...' />
    </MDBCarouselItem>
    
    <MDBCarouselItem itemId={3}>
      <img src={require('./img/love.jpg')} height="400px"id='images' className='d-block w-100' alt='...' />
    </MDBCarouselItem>
    <MDBCarouselItem itemId={4}>
      <img src={require('./img/games.jpg')} height="400px" id='images'className='d-block w-100' alt='...' />
    </MDBCarouselItem>
    <MDBCarouselItem itemId={5}>
      <img src={require('./img/about.jpg')} height="400px" id='images'className='d-block w-100' alt='...' />
    </MDBCarouselItem>
  </MDBCarousel>
  )
}

export default Carousels
