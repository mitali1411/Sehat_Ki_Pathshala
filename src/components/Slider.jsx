import React from 'react'
import Result1 from '../assets/1.jpg'
import Result2 from '../assets/2.jpg'
import Result3 from '../assets/3.jpg'
import Result4 from '../assets/4.jpg'
import Result5 from '../assets/5.jpg'
import Result6 from '../assets/6.jpg'
import Result7 from '../assets/7.jpg'
import Result8 from '../assets/8.jpg'


const Slider = () => {
  return (
    <div className="container py-5" id='slider'>
        <h2 className='text-center text-dark'>OUR RESULTS</h2>
        <p className='text-center text-body-secondary'>Transform your body and life with real, lasting results.</p>
        <div className="row">
            <div className="col-md-8 offset-md-2">

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={Result1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Result2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Result3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Result4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Result5} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Result6} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Result7} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Result8} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <div id="carouselExampleControls" data-mdb-carousel-init className="carousel slide" data-mdb-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Result1} className="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div className="carousel-item active">
                        <img src={Result2} className="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div className="carousel-item active">
                        <img src={Result3} className="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div className="carousel-item active">
                        <img src={Result4} className="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div className="carousel-item active">
                        <img src={Result5} className="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div className="carousel-item active">
                        <img src={Result6} className="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div className="carousel-item active">
                        <img src={Result7} className="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div className="carousel-item active">
                        <img src={Result8} className="d-block w-100" alt="Slide 1"/>
                    </div>
        
                </div>
                <button data-mdb-button-init className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button data-mdb-button-init className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            </div>
        </div>
    </div>

    
  )
}

export default Slider