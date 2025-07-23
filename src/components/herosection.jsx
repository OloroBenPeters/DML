import hero1 from './../assets/hero1.png';
import hero2 from './../assets/office2.jpg';
import hero3 from './../assets/hero.jpg';

export default function HeroSection() {
  return (
    <section id='home' className="relative h-screen overflow-hidden text-white">
      {/* Mobile/Tablet View: Background Image with Overlay */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={hero2}
          alt="Background Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col-reverse gap-12 md:flex-row items-center px-6 md:px-16 py-16 h-full">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            DML Technologies
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            Empowering your business with innovative software solutions. We specialize in web, mobile, and cloud technologies to help you grow, streamline operations, and achieve digital excellence.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              More Details
            </button>
            <a href="#contact">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                Contact Us
              </button>
            </a>
          </div>
        </div>

        {/* Desktop View: Image Stack */}
        <div className="hidden md:flex md:w-1/2 justify-center mt-12 md:mt-0 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="relative w-[280px] sm:w-[350px] lg:w-[450px] h-[360px] sm:h-[450px] lg:h-[580px] perspective-1000">
            <img
              src={hero1}
              alt="Innovative technology solutions"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-[-8deg] hover:rotate-[-5deg] hover:scale-105 transition duration-700 ease-in-out z-30"
            />
            <img
              src={hero2}
              alt="Web and mobile development"
              className="absolute top-10 left-10 w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-[4deg] hover:rotate-[7deg] hover:scale-105 transition duration-700 ease-in-out z-20 hover:z-30"
            />
            <img
              src={hero3}
              alt="Cloud technology expertise"
              className="absolute top-20 left-20 w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-[-3deg] hover:rotate-[-1deg] hover:scale-105 transition duration-700 ease-in-out z-10 hover:z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
