import React from 'react'; // It's good practice to import React if you're using JSX
import hero1 from './../../public/assets/hero.jpg';
import hero2 from './../../public/assets/hero2.png';
import hero3 from './../../public/assets/hero.jpg';

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse gap-12 md:flex-row items-center px-6 md:px-16 py-16 h-screen overflow-hidden">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-8 text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          DML Technologies
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
          Empowering your business with innovative software solutions. We specialize in web, mobile, and cloud technologies to help you grow, streamline operations, and achieve digital excellence.
        </p>

        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            More Details
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Contact Us
          </button>
        </div>
      </div>

      {/* Image Stack */}
      <div className="md:w-1/2 flex justify-center md:justify-center mt-12 md:mt-0 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        <div className="relative w-[280px] sm:w-[350px] lg:w-[450px] h-[360px] sm:h-[450px] lg:h-[580px] perspective-1000">
          {/* Top image */}
          <img
            src={hero1}
            alt="Innovative technology solutions"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-[-8deg] hover:rotate-[-5deg] hover:scale-105 transition duration-700 ease-in-out z-30"
          />
          {/* Middle image */}
          <img
            src={hero2}
            alt="Web and mobile development"
            className="absolute top-10 left-10 w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-[4deg] hover:rotate-[7deg] hover:scale-105 transition duration-700 ease-in-out z-20"
          />
          {/* Bottom image */}
          <img
            src={hero3}
            alt="Cloud technology expertise"
            className="absolute top-20 left-20 w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-[-3deg] hover:rotate-[-1deg] hover:scale-105 transition duration-700 ease-in-out z-10"
          />
        </div>
      </div>
    </section>
  );
} 


// import hero1 from './../../public/assets/hero2.png';
// import hero2 from './../../public/assets/hero2.png'; // add another image


// export default function HeroSection() {
//   return (
//     <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-16 py-12 min-h-screen">
      
//       {/* Text Section */}
//       <div className="md:w-1/2 space-y-6 text-center md:text-left">
//         <h1 className="text-4xl md:text-6xl font-bold">
//           <span className="typing">DML Technologies</span>
//         </h1>
//         <p className="text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis aut nulla! Corporis at, temporibus sint placeat quis qui totam ad rerum hic ea voluptatibus sit, tempora voluptate, consectetur vero.
//         </p>

//         <div className="flex justify-center md:justify-start space-x-4">
//           <button className="bg-blue-500 px-6 py-2 rounded hover:scale-105 border border-blue-500 hover:bg-transparent hover:text-blue-500 transition">
//             More Details
//           </button>
//         </div>
//       </div>

//       {/* Overlapping Images Section */}
//       <div className="md:w-1/2 relative flex justify-center md:justify-end">
//         {/* First Image */}
//         <img 
//           src={hero1} 
//           alt="Hero 1" 
//           className="w-40 md:w-60 rounded-2xl shadow-xl transform rotate-[-6deg] relative z-20"
//         />

//         {/* Second Image, overlapping slightly */}
//         <img 
//           src={hero2} 
//           alt="Hero 2" 
//           className="w-40 md:w-60 rounded-2xl shadow-xl transform rotate-[6deg] -ml-10 md:-ml-16 mt-10 relative z-10"
//         />
//       </div>
//     </section>
//   );
// }
