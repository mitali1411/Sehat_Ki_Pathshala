import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Form from './components/Form'
import Slider from './components/Slider'
import Footer from './components/Footer'
import CopyRight from './components/CopyRight'

const App = () => {
  return (
    <>
      <Navbar/>
      <a href="https://api.whatsapp.com/send?phone=919074010119" target='_blank'><i className='bx bxl-whatsapp' id='fixed'></i></a>
      <Home/>
      <Slider/>
      <Form/>
      <Footer/>
      <CopyRight/>
    </>
  )
}

export default App