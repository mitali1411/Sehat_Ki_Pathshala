import React from 'react'
import Logo from '../assets/Logo2.png'

const Footer = () => {
  return (
    <footer className=''>

        <img src={Logo} alt="" />

      <div className="box d-flex align-items-center">
        <i className='bx bxs-phone-call'></i>
        <span>
        <h4>Call Us</h4>
        <a href=''>+91-9074010119</a>
        </span>
      </div>

      <div className='box1'>
        <h4>Follow Us</h4>
          <a href='https://api.whatsapp.com/send?phone=919074010119' target='_blank'><i className='bx bxl-whatsapp'></i></a>
       
          <a href='https://www.facebook.com/people/Sehat-Ki-Paathshala/61556904706327/?mibextid=ZbWKwL' target='_blank'><i className='bx bxl-facebook-circle'></i></a>  

          <a href='https://www.instagram.com/sehat_ki_pathshala.by_deep?igsh=dzlyeW10cTM0dDZs' target='_blank'><i className='bx bxl-instagram-alt'></i></a>
      </div>
    </footer>
  )
}

export default Footer