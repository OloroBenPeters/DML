export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding / Logo */}
        <div>
          <h2 className="text-xl font-bold">DML</h2>
          <p className="text-sm mt-2 text-gray-400">
            Dedicated to delivering top-tier products and services with innovation and excellence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#members" className="hover:text-white">Members</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="mailto:info@dml.com" className="hover:text-white">dmltechnologieslagos@gmail.com</a></li>
            <li>Phone: <a href="tel:+2348065280371" className="hover:text-white">+234 806 528 0371</a></li>
            <li>Address: 106 Oshodi-Apapa Express Way, Cele Bus Stop, Lagos</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-6">
        © {new Date().getFullYear()} DML. All rights reserved.
      </div>
    </footer>
  );
}
