import React from 'react'
import Intro from '../components/Intro'
import Slider from '../components/Slider'
import Form from './Form'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import Sticky from '../components/Sticky'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <section id='home'>
      <Navbar/>
      <h2 className='text-center mt-5' id='tag'>आश्वासन नहीं, परिणामों की दुनिया</h2>
      <Intro/>
      <Slider/>
      <Form/>
      <Footer/>
      <CopyRight/>
      <Sticky/>
    </section>
  )
}

export default Home