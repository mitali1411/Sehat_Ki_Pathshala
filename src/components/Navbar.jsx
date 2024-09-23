import React from 'react';
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar d-flex align-items-center justify-content-around">
            <img src={Logo} alt="" />
            <h3 className='text-uppercase'><a href="">Sehat Ki Pathshala</a></h3>
            <i className='bx bxs-phone-call' id='call'></i>
    </nav>
  )
}

export default Navbar