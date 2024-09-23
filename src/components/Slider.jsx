import React from 'react'
// import Result1 from '../assets/1.png'
// import Result2 from '../assets/2.png'
// import Result3 from '../assets/3.png'
// import Result4 from '../assets/4.png'
// import Result5 from '../assets/5.png'
// import Result6 from '../assets/6.png'
// import Result7 from '../assets/7.png'
// import Result8 from '../assets/8.png'
// import Result9 from '../assets/9.png'
// import Result10 from '../assets/10.png'
import Result11 from '../assets/11.jpg'
import Result12 from '../assets/12.jpg'
import Result13 from '../assets/13.jpg'
import Result14 from '../assets/14.jpg'
// import Result15 from '../assets/15.jpg'



const Slider = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div id="carouselExampleIndicators" 
                     className="carousel slide" 
                     data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Result11} className="d-block w-100" alt="Slide 1"/>
                        </div>

                        <div className="carousel-item">
                            <img src={Result12} className="d-block w-100" alt="Slide 1"/>
                        </div>

                        <div className="carousel-item">
                            <img src={Result13} className="d-block w-100" alt="Slide 1"/>
                        </div>

                        <div className="carousel-item">
                            <img src={Result14} className="d-block w-100" alt="Slide 1"/>
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