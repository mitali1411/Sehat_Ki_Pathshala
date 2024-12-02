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

      <section className='container-fluid' id='contact'>
        <h2 className='text-dark text-center text-uppercase my-3'>Contact Us</h2>
        
        <Map/>

        <div className="box3 d-flex align-items-start justify-content-start">
        <div className="box2">
          <span className='d-flex align-items-center justify-content-start'>
            <i className="fa-solid fa-location-dot"></i>
            <p className='px-2'>Our Address:</p>
          </span>
            <h6 className='text-secondary'>41 A, Ashish Nagar Garden, Bengali Square, Indore - 452016</h6>
        </div>
        </div>
      </section>

      <Footer/>
      <CopyRight/>
      <Sticky/>
    </>
  )
}

export default Contact