import img1 from '../assets/gallery.png';
import img2 from '../assets/gallery.png';
import img3 from '../assets/gallery.png';
import img4 from '../assets/gallery.png';
import img5 from '../assets/gallery.png';
import img6 from '../assets/gallery.png';
import img7 from '../assets/gallery.png';
import img8 from '../assets/gallery.png';
import img9 from '../assets/gallery.png';
import img10 from '../assets/gallery.png';

export default function GallerySection() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <p className="text-gray-400 mt-2">A glimpse into our work and moments</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              overflow-hidden rounded-2xl shadow-lg 
              ${index % 3 === 0 ? 'row-span-2' : ''}
              ${index % 4 === 0 ? 'col-span-2' : ''}
            `}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover 
                transform hover:scale-105 hover:rotate-1 hover:brightness-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
