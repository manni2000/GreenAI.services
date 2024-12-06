import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleSendMessage = () => {
    const newErrors = { name: "", email: "", message: "" };

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    const mailtoLink = `mailto:education@greenai.services?subject=Contact%20Form&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business with AI? Contact us today to
            discuss how we can help you achieve your goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start justify-center">
          <div className="flex justify-center md:justify-start">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Contact Information
              </h3>
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">
                    Address: GreenAI Services Pvt Ltd, Kolkata, West Bengal,
                    700037 India
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Phone: +91 89819 41888</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">
                    Email: education@greenai.services
                  </span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4 justify-center">
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Facebook className="w-6 h-6 text-green-600 hover:text-green-400 transition-colors" />
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Linkedin className="w-6 h-6 text-green-600 hover:text-green-400 transition-colors" />
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Twitter className="w-6 h-6 text-green-600 hover:text-green-400 transition-colors" />
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Instagram className="w-6 h-6 text-green-600 hover:text-green-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <form
              className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Drop a message
              </h3>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-green-500"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-green-500"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-green-500"
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
