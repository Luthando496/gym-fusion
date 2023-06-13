import { useState } from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Classes from './pages/Classes'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import GallerySecond from './pages/GallerySecond'
import About from './pages/About'
import Schedule from './pages/Schedule'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/page-1" element={<Gallery />} />
        <Route path="/gallery/page-2" element={<GallerySecond />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
