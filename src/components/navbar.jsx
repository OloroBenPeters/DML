import { useState } from "react";
import {HiMenu, HiX} from "react-icons/hi";


export default function Navbar() {
    let [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-8 py-4">
            <div className="text-4xl font-bold">DML</div>
            
            {/* desktop view */}
            <ul className="hidden md:flex flex gap-4 space-x-6">
                {['Home', 'Products', 'Services', 'Members', 'Contacts'].map(link => (
                    <li key={link} className="hover:text-blue-400 cursor-pointer">{link}</li>
                ))}

            </ul>

            <button className="hidden md:block border border-blue-400 px-4 py-1 rounded">
                Sign In
            </button>


            {/* mobile view */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            {open && (
                <div className="absolute top-16 left-0 w-full bg-gray-800 z-50 flex flex-col items-center py-4 space-y-4 md:hidden">
                    {['Home','Products', 'Services', 'Members', 'Contacts', 'Sign In'].map(item => (
                        <div key={item} className="text-lg hover:text-blue-400 cursor-pointer">{item}</div>
                    ))}
                </div>
            )}

        </nav>
    )

}