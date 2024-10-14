
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SingleService from './pages/SingleService'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Routes>
            <Route path='/' element={<Home />} />
             <Route path="/about-us" element={<About />} />
             <Route path="/services" element={<Services />} />
             <Route path="/contact-us" element={<Contact />} />
             <Route path="/service/:name" element={<SingleService />} />
             <Route path='/our-work' element={<Portfolio /> } />
    </Routes>
  )
}

export default App
