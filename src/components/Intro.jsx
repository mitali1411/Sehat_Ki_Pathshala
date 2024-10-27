import React from 'react'
import Image from '../assets/Owner.png'

const Home = () => {
  return (
    <div id='home' className='d-flex align-items-center justify-content-around flex-wrap-reverse'>
      
        <div id='owner' className='d-flex align-items-center justify-content-center'> 
            <img src={Image} alt="" />
        </div>
        
        <div id='intro' className='p-5 d-flex flex-column align-items-start justify-content-center'>
        <h1 className='mt-1'>नमस्ते,</h1> 
        {/* <h2 className='h2'>मैं आपका हेल्थ कोच हूँ!</h2> */}
        <p className='para'>सेहत की पाठशाला में आपका स्वागत है! मेरा नाम दीप है और मैं पिछले 10 वर्षो से लोगो के अच्छे स्वास्थ के लिए काम करता हूँ! यहाँ हम आपको बताते हैं कि बिना कठिन व्यायाम किए भी आप आसानी से अपना वजन घटा या बढ़ा सकते हैं। सही खानपान और दिनचर्या में छोटे-छोटे बदलाव लाकर आप अपने स्वास्थ्य को सुधार सकते हैं। संतुलित आहार, नियमित हल्की गतिविधियाँ और मानसिक संतुलन आपके लक्ष्य तक पहुँचने में मदद करेंगे।</p>
        </div>

    </div>
  )
}
export default Home