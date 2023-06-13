import { useState } from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Classes from './pages/Classes'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
