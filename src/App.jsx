
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
            <Route path='/' element={<Home />} />
             <Route path="/about-us" element={<About />} />
             <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default App
