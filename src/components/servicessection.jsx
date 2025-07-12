import webdev        from './../../public/assets/webdev.jpg';
import mobiledev     from './../../public/assets/mobiledev.jpg';
import datascience   from './../../public/assets/datascience.jpg';
import ServicesSectionCard from './servicessectioncard';
import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const autoPlayRef  = useRef(null);

  const services = [
    { id:1, name:'Web Development',    description:'Build responsive and dynamic websites.', image:webdev },
    { id:2, name:'Mobile Development', description:'Create mobile apps for iOS and Android.', image:mobiledev },
    { id:3, name:'Data Science',       description:'Analyze data to gain insights.',          image:datascience },
    { id:4, name:'Web Development',    description:'Build responsive and dynamic websites.', image:webdev },
    { id:5, name:'Mobile Development', description:'Create mobile apps for iOS and Android.', image:mobiledev },
    { id:6, name:'Data Science',       description:'Analyze data to gain insights.',          image:datascience },
  ];

  // ⬇️ Scroll only the INNER container to center the target card
  const scrollToCard = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index];
    if (!card) return;

    const offset = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
    container.scrollTo({ left: offset, behavior: 'smooth' });
  };

  // ⬅️ / ➡️ Handlers
  const handlePrev = () => setCurrentIndex(i => (i === 0 ? services.length - 1 : i - 1));
  const handleNext = () => setCurrentIndex(i => (i === services.length - 1 ? 0 : i + 1));

  // 🔄 When currentIndex changes, scroll to that card
  useEffect(() => {
    scrollToCard(currentIndex);
  }, [currentIndex]);

  // ▶️ Auto‑play every 3s, pausing while hovered
  useEffect(() => {
    // Clear old interval
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    autoPlayRef.current = setInterval(() => {
      // only advance if not hovered
      if (containerRef.current?.dataset.hovered === 'false') {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold">SERVICES</h2>
        <p className="text-gray-400 mt-2">Discover our services</p>
      </div>

      <div 
        className="relative"
        onMouseEnter={() => containerRef.current.dataset.hovered = 'true'}
        onMouseLeave={() => containerRef.current.dataset.hovered = 'false'}
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous service"
          className="absolute top-1/2 left-2 md:left-4 z-10 p-2 bg-black bg-opacity-40 rounded-full text-white transform -translate-y-1/2 hover:bg-opacity-60 transition"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Carousel */}
        <div
          ref={containerRef}
          data-hovered="false"
          className="carousel-container flex overflow-x-auto space-x-6 px-4 py-4 scrollbar-hide snap-x snap-mandatory overscroll-x-contain"
        >
          {services.map((svc, idx) => (
            <ServicesSectionCard
              key={svc.id}
              image={svc.image}
              name={svc.name}
              description={svc.description}
              isActive={idx === currentIndex}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next service"
          className="absolute top-1/2 right-2 md:right-4 z-10 p-2 bg-black bg-opacity-40 rounded-full text-white transform -translate-y-1/2 hover:bg-opacity-60 transition"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}








// import webdev from './../assets/webdev.jpg'
// import mobiledev from './../assets/mobiledev.jpg'
// import datascience from './../assets/datascience.jpg'
// import ServicesSectionCard from './servicessectioncard'
// import { useRef, useEffect } from 'react'

// export default function ServicesSection() {
//     // const Services = [webdev, mobiledev, webdev, mobiledev, webdev];
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;

//         let direction = 1;

//         const scroll = () => {
//             if (container) {
//                 // Pause scrolling if the user is hovering over the container
//                 if (container.matches(':hover')) {
//                     return;
//                 }

//                 // Adjust the scroll position
//                 container.scrollLeft += direction * 1; // Slowed down for a smoother effect

//                 // Check boundaries and reverse direction
//                 if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
//                     direction = -1;
//                 } else if (container.scrollLeft <= 0) {
//                     direction = 1;
//                 }
//             }
//         };

//         const interval = setInterval(scroll, 20); // Adjust interval for speed

//         return () => clearInterval(interval);
//     }, []);

//     const services = [
//         {
//             id: 1,
//             name: 'Web Development',
//             description: 'Build responsive and dynamic websites.',
//             image: webdev,
//         },
//         {
//             id: 2,
//             name: 'Mobile Development',
//             description: 'Create mobile applications for iOS and Android.',
//             image: mobiledev,
//         },
//         {
//             id: 3,
//             name: 'Data Science',
//             description: 'Analyze data to gain insights and make decisions.',
//             image: datascience
//         },
//         {
//             id: 4,
//             name: 'Web Development',
//             description: 'Build responsive and dynamic websites.',
//             image: webdev,
//         },
//         {
//             id: 5,
//             name: 'Mobile Development',
//             description: 'Create mobile applications for iOS and Android.',
//             image: mobiledev,
//         },
//         {
//             id: 6,
//             name: 'Data Science',
//             description: 'Analyze data to gain insights and make decisions.',
//             image: datascience
//         },
//     ]

//     return (
//         <section className='py-16 px-8 md:px-16 bg-gray-900 text-white'>
//             {/* Heading */}
//             <div className="text-center mb-12">
//                 <h2 className='text-3xl font-bold'>SERVICES</h2>
//                 <p className='text-gray-400 mt-2'>Discover our services</p>
//             </div>

//             {/* Services Grid */}
//             <div ref={containerRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
//                 {services.map(service => (
//                     <ServicesSectionCard
//                         key={service.id}
//                         image={service.image}
//                         name={service.name}
//                         description={service.description}
//                     />
//                 ))}
//             </div>

//         </section>
//     )
// }