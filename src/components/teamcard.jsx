export default function TeamCard({ image, name, description}) {
  

  return (
    <div className="flex flex-col items-center w-full h-full p-4 bg-gray-800 rounded-lg hover:transition-transform hover:scale-105 hover:border-2 border-cyan-400 opacity-70 hover:opacity-100">
      <img
        src={image}
        alt={`${name} service`}
        className="h-70 w-full rounded-lg object-cover mb-4"
      />
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}