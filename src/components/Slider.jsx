import React from 'react'
import Result1 from '../assets/1.jpg'
import Result2 from '../assets/2.jpg'
import Result3 from '../assets/3.jpg'
import Result4 from '../assets/4.jpg'
import Result5 from '../assets/5.jpg'



const Slider = () => {
  return (
    <div className="container py-5">
        <h2 className='text-center my-4'>OUR RESULTS</h2>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div id="carouselExampleIndicators" 
                     className="carousel slide" 
                     data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Result1} className="d-block w-100" alt="Slide 1"/>
                        </div>

                        <div className="carousel-item">
                            <img src={Result2} className="d-block w-100" alt="Slide 1"/>
                        </div>

                        <div className="carousel-item">
                            <img src={Result3} className="d-block w-100" alt="Slide 1"/>
                        </div>

                        <div className="carousel-item">
                            <img src={Result4} className="d-block w-100" alt="Slide 1"/>
                        </div>

                        <div className="carousel-item">
                            <img src={Result5} className="d-block w-100" alt="Slide 1"/>
                        </div>


                    </div>
                    <button className="carousel-control-prev" 
                            type="button" 
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" 
                              aria-hidden="true">
                          </span>
                        <span className="visually-hidden">
                              Previous
                          </span>
                    </button>
                    <button className="carousel-control-next" type="button" 
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" 
                              aria-hidden="true">
                          </span>
                        <span className="visually-hidden">
                              Next
                          </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider