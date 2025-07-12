import hero from './../assets/hero.jpg'

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse gap-12 md:flex-row items-center px-10 md:px-16 py-12">
      
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-6xl font-bold">DML Technologies</h1>
        <p className="text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis aut nulla! Corporis at, temporibus sint placeat quis qui totam ad rerum hic ea voluptatibus sit, tempora voluptate, consectetur vero.
        </p>

        <div className="flex space-x-4">
          <button className="bg-blue-500 px-6 py-2 rounded hover:scale-105 hover:border-1 border-blue-500 hover:bg-white hover:text-blue-500">More Details</button>
        </div>

      </div>

      <div className="md:w-1/2 relative">
        <img src={hero} alt="" className="w-full rounded rounded-[50px]" />
      </div>

    </section>
  )
}