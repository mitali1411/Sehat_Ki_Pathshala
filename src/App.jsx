import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Form from './Pages/Form'
import About from './Pages/About'
import Slider from './components/Slider'
import Footer from './components/Footer'
// import CopyRight from './components/CopyRight'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'
import Blogs from './Pages/Blogs'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/result' element={<Slider/>}/> */}
      {/* <Route path='/info' element={<Form/>}/> */}
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      {/* <Route path='/contact' element={<Footer/>}/> */}
      <Route path='/result' element={<Blogs/>}/>
      </Routes>
    </Router>
  )
}

export default App