import img1 from './../assets/office1.jpg';
import img2 from './../assets/webdev.jpg';
import img3 from './../assets/webdev.jpg';

export default function GallerySection() {
  const images = [img1, img2, img3];

  return (
    <section id='gallery' className="py-10 pb-20 sm:pb-10 px-8 md:px-16 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <p className="text-gray-400 mt-2">A glimpse into our work and moments</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 h-[350px] md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[350px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl shadow-lg
              ${index % 3 === 1 ? 'md:col-span-2' : ''}`}
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
