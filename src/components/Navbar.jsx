import React from 'react';
import Logo from '../assets/Logo2.png'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg d-flex align-items-center justify-content-between px-5'>
      <img src={Logo} alt="" />
      
       <div className='icons'>
       <a target='_blank' href="https://api.whatsapp.com/send?phone=918718810605"><i className='bx bxl-whatsapp' ></i></a>
       <a target='_blank' href="https://www.facebook.com/people/Sehat-Ki-Paathshala/61556904706327/?mibextid=ZbWKwL"><i className='bx bxl-facebook' ></i></a>
       <a target='_blank' href="https://www.instagram.com/sehat_ki_pathshala.by_deep?igsh=dzlyeW10cTM0dDZs"><i className='bx bxl-instagram'></i></a>
       </div>
      




    </nav>
  )
}

export default Navbar