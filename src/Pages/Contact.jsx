import React from 'react'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Sticky from '../components/Sticky'

const Contact = () => {
  return (
    <>
      <Navbar/>

      <div className='container-fluid' id='contact'>
        <h2 className='text-dark text-center text-uppercase my-3'>Contact Us</h2>
        
        <Map/>

        <div className="box3 d-flex align-items-start justify-content-start">
        {/* <div className="box2 d-flex align-items-center justify-content">
          <i class='bx bx-mobile display-4 mx-2' ></i>
          <span>
            <p>Give us a call</p>
            <a href='tel:+919074010119'>+91-9074010119</a>
            <br />
            <a href="tel:+918718810605">+91-8718810605</a>
          </span>
        </div> */}

        {/* <div className="box2 d-flex align-items-center justify-content">
          <i class='bx bx-envelope display-4 mx-2' ></i>
          <span>
            <p>Send us an email</p>
            <a href='mailto:kamblearyan90@gmail.com'>kamblearyan90@gmail.com</a>
          </span>
        </div> */}

        <div className="box2">
          <span className='d-flex align-items-center justify-content-start'>
            <i className="fa-solid fa-location-dot"></i>
            <p className='px-2'>Our Address:</p>
          </span>
            <h6 className='text-secondary'>41 A, Ashish Nagar Garden, Bengali Square, Indore - 452016</h6>
        </div>
        </div>
      </div>

      <Footer/>
      <CopyRight/>
      <Sticky/>
    </>
  )
}

export default Contact