import React from 'react'
import Logo from '../assets/Logo2.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import wa from '../assets/wha.png'


const Footer = () => {
  return (
    <footer className=''>

        <img src={Logo} alt="" />

      <div className="box">
        <span className='d-flex align-items-center'>
          <i className='bx bxs-phone-call'></i>
          <h4>Call Us</h4>
        </span>

        <a href=''>+91-9074010119</a>
        <br />
        <a href="">+91-8718810605</a>
      </div>

      <div className='box1'>
        <h4>Follow Us</h4>

          <a href="https://api.whatsapp.com/send?phone=919074010119">
            <img src={wa} alt="" />
          </a>
       
          <a href="https://www.facebook.com/people/Sehat-Ki-Paathshala/61556904706327/?mibextid=ZbWKwL">
            <img src={fb} alt="" />
          </a>

          <a href="https://www.instagram.com/sehat_ki_pathshala.by_deep?igsh=dzlyeW10cTM0dDZs">
            <img src={insta} alt="" />
          </a>
      </div>
    </footer>
  )
}

export default Footer