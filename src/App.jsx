import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import TestimonialSection from './components/testimonialsection'
import ServicesSection from './components/servicessection'
import ContactSection from './components/contactsection'
import AboutSection from './components/aboutsection'
import GallerySection from './components/gallerysection'

function App() {
  return (
    <>
    <div className='bg-gray-900 text-white w-full'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
    </>
  )
}

export default App
