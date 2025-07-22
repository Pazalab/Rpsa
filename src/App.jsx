
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SingleService from './pages/SingleService'
import Portfolio from './pages/Portfolio'
import { useEffect } from 'react'
import SingleProject from './pages/SingleProject'

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0, 0)
  }, [ location]) 
  return (
    <Routes>
            <Route path='/' element={<Home />} />
             <Route path="/about-us" element={<About />} />
             <Route path="/services" element={<Services />} />
             <Route path="/contact-us" element={<Contact />} />
             <Route path="/service/:name" element={<SingleService />} />
             <Route path='/projects' element={<Portfolio /> } />
             <Route path='/projects/view/:name' element={<SingleProject />} />
    </Routes>
  )
}

export default App
