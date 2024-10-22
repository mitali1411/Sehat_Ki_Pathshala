import React from 'react'
import Logo from '../assets/Logo2.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import wa from '../assets/wha.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className=''>

        <img src={Logo} alt="" />

      <div className="box">
        <span className='d-flex align-items-center'>
          <i className='bx bxs-phone-call'></i>
          <h4>Call Us</h4>
        </span>

        <a href='tel:+919074010119'>+91-9074010119</a>
        <br />
        <a href="tel:+918718810605">+91-8718810605</a>
      </div>

      <div className="box">
        <h4>Quick Links</h4>
        <ol>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About Us</li></Link>
          <Link to='/contact'><li>Contact Us</li></Link>
        </ol>
      </div>

      <div className='box1'>
        <h4>Follow Us</h4>

          <a href="https://api.whatsapp.com/send?phone=919074010119">
            <img src={wa} alt="" />
          </a>
       
          <a href="https://www.facebook.com/people/Sehat-Ki-Paathshala/61556904706327/?mibextid=ZbWKwL" className='mx-2'>
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