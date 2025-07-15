import about from './../../public/assets/about.jpg'

export default function AboutSection() {
  return (
    <section className="flex flex-col-reverse gap-12 md:flex-row items-center px-10 md:px-16 py-12">

      <div className="md:w-1/2 relative">
        <img src={about} alt="" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
      </div>
      
      <div className="md:w-1/2 space-y-6">
       <h2 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-2">About Us</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering the Future of Tech in Africa
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8">
              DML Technologies is more than just a company; it's a movement. We are dedicated to discovering and nurturing talent across Africa, providing the tools and platforms necessary for a new generation of innovators to build their dreams and shape the future. Our mission is to bridge the gap between potential and opportunity.
        </p>
        <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300">
              Learn More
        </button>
      </div>

    </section>
  )
}