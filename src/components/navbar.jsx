import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LogoImage from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="w-15 h-15 font-extrabold tracking-wide">
          <img src={LogoImage} alt="Logo" />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-16">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About DML', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'The Team', href: '#team' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'Contact Us', href: '#contact' },
          ].map(link => (
            <li
              key={link.name}
              className="relative cursor-pointer after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100"
            >
              <a href={link.href}>{link.name}</a>
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
          {[
            { name: 'Home', href: '#home' },
            { name: 'About DML', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'The Team', href: '#team' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'Contacts Us', href: '#contact' },
          ].map(item => (
            <a href={item.href}
            key={item.name}
            onClick={() => setOpen(false)}
            className="w-full text-center py-2 hover:bg-gray-700 transition rounded"
            >
            {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
