import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import TestimonialSection from './components/testimonialsection'
import ServicesSection from './components/servicessection'
import ContactSection from './components/contactsection'
import AboutSection from './components/aboutsection'
import Footer from './components/footer'

function App() {
  return (
    <>
    <div className='bg-gray-900 text-white w-full'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
    </>
  )
}

export default App
