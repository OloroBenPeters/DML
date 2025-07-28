import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import TestimonialSection from './components/testimonialsection'
import ServicesSection from './components/servicessection'
import ContactSection from './components/contactsection'
import AboutSection from './components/aboutsection'
import Footer from './components/footer'
import GallerySection from './components/gallerysection'
import TeamSection from './components/teamsection'

function App() {
  return (
    <>
    <div className='bg-gray-900 text-white w-full'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
    </>
  )
}

export default App
