import React from 'react'
import B1 from '../assets/1.jpg'
import B2 from '../assets/2.jpg'
import B3 from '../assets/3.jpg'
import B4 from '../assets/4.jpg'
import B5 from '../assets/5.jpg'
import B6 from '../assets/6.jpg'
import B7 from '../assets/7.jpg'
import B8 from '../assets/8.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Blogs = () => {

  const cardsData = [
    { name: "Mrs. Namrata verma", detail: "Lost 33 kg", image: B1, p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus tempore minima consequuntur sapiente est quibusdam, beatae quo nemo autem velit exercitationem numquam. Necessitatibus sit sapiente a eveniet ea expedita ipsum!" },
    { name: "Mrs. Neha", detail: "Lost 16 kg", image: B2 },
    { name: "Mr. Abhishek", detail: "Lost 10 kg", image: B3 },
    { name: "Mr. Kamal", detail: "Lost 25 kg", image: B4 },
    { name: "Mr. Khuman Singh", detail: "Lost 11 kg", image: B5 },
    { name: "Ms. Vaishnavi", detail: "Lost 17 kg", image: B6 },
    { name: "Mrs. Laxmi", detail: "Lost 10 kg", image: B7 },
    { name: "Mrs. Renu Upadhyay", detail: "Lost 17 kg", image: B8 },

  ];
  

  return (
    <>
    <section id="blogs">
      <Navbar/>
      <h2 className='text-center text-dark my-3 text-uppercase'>Our Achievements</h2>
      <div className="container mt-4 d-flex align-items-center justify-content-between flex-wrap">
      {cardsData.map((card, index) => (
              <div className="card m-5 shadow" style={{ maxWidth: "500px" }} key={index}>
                <div className="row g-0">
                  <div className="col-md-4" xs={12} md={12} lg={6}>
                    <img src={card.image} className="img-fluid rounded-start" alt={card.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-dark">Name: {card.name}</h5>
                      <p className="card-text text-dark">Result: {card.detail} <span className='text-danger'></span></p>
                      <p className="card-text">{card.p}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </section>
        <Footer/>
        </>

  )
}

export default Blogs