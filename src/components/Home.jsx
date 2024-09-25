import React from 'react'
import Image from '../assets/Owner.jpg'

const Home = () => {
  return (
    <div className='d-flex align-items-start justify-content-around flex-wrap-reverse'>
      
        <div id='uncle' className='p-5'> 
            <img src={Image} alt="" />
        </div>
        
        <div className='d-flex flex-column align-items-start justify-content-center p-5'>
        <h1 className='mt-4'>नमस्ते,</h1> 
        <h4>मैं आपका वेब डेवलपर हूँ!</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam necessitatibus <br /> dolore modi quos nulla, aperiam harum illum, porro deleniti officiis, dignissimos <br /> laborum molestiae mollitia tenetur! Magni magnam porro ut iure?</p>
        </div>

    </div>
  )
}

export default Home