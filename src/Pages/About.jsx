import React from 'react'
import Navbar from '../components/Navbar'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'

const About = () => {
  return (
    <section id='about'>
      <Navbar/>
      <AboutContent/>
      <Footer/>
      <CopyRight/>
    </section>
  )
}

export default About