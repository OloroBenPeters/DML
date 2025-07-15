import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">DML</div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-16">
          {['Home', 'Products', 'Services', 'Members', 'Contacts'].map(link => (
            <li
              key={link}
              className="relative cursor-pointer after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          {['Home', 'Products', 'Services', 'Members', 'Contacts'].map(item => (
            <div
              key={item}
              className="w-full text-center py-2 hover:bg-gray-700 transition rounded"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
