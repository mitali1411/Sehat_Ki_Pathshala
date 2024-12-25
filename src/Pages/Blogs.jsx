import React from 'react'
// import B1 from '../assets/1.jpg'
// import B2 from '../assets/2.jpg'
// import B3 from '../assets/3.jpg'
// import B4 from '../assets/4.jpg'
// import B5 from '../assets/5.jpg'
// import B6 from '../assets/6.jpg'
// import B7 from '../assets/7.jpg'
// import B8 from '../assets/8.jpg'
import B1 from '../assets/11.jpg'
import B2 from '../assets/12.jpg'
import B3 from '../assets/13.jpg'
import B4 from '../assets/14.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import Sticky from '../components/Sticky'


const Blogs = () => {

  const cardsData = [
    { name: "Mr. Kamal", image: B4, p:"Rejected for her weight, Riddhi worked hard and lost 10kg in just 2 months, finally achieving her dream of becoming an air hostess." },
    { name: "Mr. Devendra", image: B2, p:"Devendra lost 24kg by changing his habits. Once struggling with BP, diabetes, and walking issues, he now lives a healthy and active life." },
    { name: "Mrs. Namrata", image: B3, p:"Namrata lost 35kg, overcoming health issues like BP and acidity that once required daily pills. Now, she lives a healthy, energetic, and pill-free life." },
    { name: "Jain Family", image: B1, p:"Mr. and Mrs. Jain lost 45kg together by changing their habits. Mr. Jain shed 14kg, and Mrs. Jain lost 31kg, overcoming asthma and BP issues. She no longer needs to carry her pump everywhere and now enjoys a healthier, happier life." },
  ];
  

  return (
    <>
    <section id="blogs" className='container-fluid'>
      <Navbar/>
      <h2 className='text-dark my-3 text-uppercase text-center'>Our Achievements</h2>
      <div className="container mt-4">
      <div className="row g-5">
      {cardsData.map((card, index) => (              
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card shadow-sm border-2 rounded">
                    <img src={card.image} className="card-img-top" alt={card.name}/>
                    <div className="card-body">
                      {/* <h5 className="card-title text-dark">{card.name}</h5> */}
                      <p className="card-text text-body-secondary">{card.p}</p>
                    </div>
                  </div>
                </div>
              
            ))}
            </div>
            </div>
        </section>
        <Footer/>
        <CopyRight/>
        <Sticky/>
        </>

  )
}

export default Blogs