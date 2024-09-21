import React from 'react'
import Result1 from '../assets/1.jpg'
import Result2 from '../assets/2.jpg'
import Result3 from '../assets/3.jpg'
import Result4 from '../assets/4.jpg'
import Result5 from '../assets/5.jpg'
import Result6 from '../assets/6.jpg'
import Result7 from '../assets/7.jpg'
import Result8 from '../assets/8.jpg'
import Result9 from '../assets/9.jpg'
import Result10 from '../assets/10.jpg'


const Slider = () => {
  return (
    <div className='carousel-container p-5'>
        <h2 className='text-center'>Our Results</h2>

        <div id="carouselExampleSlidesOnly" className="carousel slide py-4" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src={Result1} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result2} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result3} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result4} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result5} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result6} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result7} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result8} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result9} className="img-fluid d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={Result10} className="img-fluid d-block w-100" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider