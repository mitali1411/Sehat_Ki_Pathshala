import React from 'react'
import Logo from '../assets/Logo2.png'

const Footer = () => {
  return (
    <footer className=''>
      <img src={Logo} alt="" />

    <div className='icon'>
      <h4 className='text-center'>CONTACT US</h4>
      <span className='icon'>
        <i className='bx bxs-phone-call'></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bxl-instagram-alt' ></i>
        <i className='bx bxl-facebook-circle'></i>       
      </span>
      </div>
    </footer>
  )
}

export default Footer