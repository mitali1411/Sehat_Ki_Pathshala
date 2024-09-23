import React from 'react'
import Image from '../assets/girl1.png'

const Home = () => {
  return (
    <div className='d-flex align-items-start justify-content-center flex-wrap'>
        
        <div className='d-flex flex-column align-items-start justify-content-center p-5'>
        <h1>नमस्ते,</h1> 
        <h4>मैं आपका वेब डेवलपर हूँ!</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam necessitatibus <br /> dolore modi quos nulla, aperiam harum illum, porro deleniti officiis, dignissimos <br /> laborum molestiae mollitia tenetur! Magni magnam porro ut iure?</p>
        </div>

        <div id='uncle'>
            <img src={Image} alt="" />
        </div>
    </div>
  )
}

export default Home