export default function ServicesSectionCard({ image, name, description, isActive }) {
  const base = "flex flex-col items-center min-w-[300px] flex-shrink-0 bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-500 snap-center";
  const active   = "scale-105 border-2 border-cyan-400 opacity-100";
  const inactive = "scale-95 opacity-60";

  return (
    <div className={`${base} ${isActive ? active : inactive}`}>
      <img
        src={image}
        alt={`${name} service`}
        className="h-40 w-40 rounded-full object-cover mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}





// export default function ServicesSectionCard({ image, name, description }) {
//     return (
//         <div className="flex flex-col items-center min-w-[300px] flex-shrink-0 bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 snap-start">
//             <img src={image} alt={`${name} service`} className="h-40 w-40 rounded-full object-cover mb-4" />
//             <div className="text-center">
//                 <h3 className="text-lg font-semibold mb-2">{name}</h3>
//                 <p className="text-gray-400 text-sm">{description}</p>
//             </div>
//         </div>
//     );
// }