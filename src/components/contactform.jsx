import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        // Reset form data after submission
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name<span className="text-cyan-400">*</span>
                </label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:outline-none"/>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email<span className="text-cyan-400">*</span>
                </label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:outline-none"/>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message<span className="text-cyan-400">*</span>
                </label>
                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:outline-none"></textarea>
            </div>

            <button type="submit" className="w-full py-3 bg-cyan-400 text-gray-900 font-semibold rounded hover:bg-cyan-500 transition">
                Send Message
            </button>

        </form>
    );
}