import ContactForm from "./contactform";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="py-16 px-8 md:px-16 bg-gray-900 text-white">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-gray-400 mt-2">We'd love to hear from you!</p>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Contact Info */}
                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <FaMapMarkerAlt size={24} className="mt-1 text-cyan-400" />
                        <div>
                            <h3 className="text-lg font-semibold">Our Office</h3>
                            <p className="text-gray-400">Cele/Ijesha Link Bridge, Isolo, Lagos State.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <FaPhoneAlt size={24} className="mt-1 text-cyan-400" />
                        <div>
                            <h3 className="text-lg font-semibold">Call Us</h3>
                            <p className="text-gray-400">+234 123 4567</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <FaEnvelope size={24} className="mt-1 text-cyan-400" />
                        <div>
                            <h3 className="text-lg font-semibold">Email Us</h3>
                            <p className="text-gray-400">dml@gmail.com</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500">
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <ContactForm />
            </div>

        </section>
    )
}