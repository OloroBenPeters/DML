export default function TestimonialSectionCard({ image, name, description }) {
    

    return (
        <div className="flex flex-col items-center min-w-[300px] flex-shrink-0 bg-gray-800 p-6 rounded-2xl hover:border-2 border-cyan-400 hover:transition-transform hover:scale-110 snap-center">
            <img src={image} alt="" className="h-16 w-16 rounded rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-400 text-center">{description}</p>
        </div>
    )
}