import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingContact from './components/FloatingContact'
import Home from './pages/Home'
import About from './pages/About'
import Practice from './pages/Practice'
import Lawyers from './pages/Lawyers'
import Results from './pages/Results'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Booking from './pages/Booking'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/practice"     element={<Practice />} />
        <Route path="/lawyers"      element={<Lawyers />} />
        <Route path="/results"      element={<Results />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog"         element={<Blog />} />
        <Route path="/contact"      element={<Contact />} />
        <Route path="/booking"      element={<Booking />} />
        <Route path="*"             element={<Home />} />
      </Routes>
      <Footer />
      <FloatingContact />
    </>
  )
}
