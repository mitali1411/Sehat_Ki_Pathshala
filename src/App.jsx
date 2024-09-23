import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Form from './components/Form'
import Slider from './components/Slider'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar/>
      <Home/>
      <Slider/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App