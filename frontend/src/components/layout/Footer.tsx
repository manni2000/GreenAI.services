import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  interface HandleNavigationProps {
    path: string;
  }

  const handleNavigation = ({ path }: HandleNavigationProps): void => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1120] text-gray-400 text-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8">
          {/* Column 1 - About */}
          <div className="md:col-span-1 pl-8">
            <h3 className="text-5xl font-bold mb-4">
              <span className="text-green-400 inline">Green</span>
              <span className="text-white inline">AI</span>
            </h3>
            <p className="text-base leading-relaxed">
              At Green AI, we empower businesses with cutting-edge artificial
              intelligence solutions, driving innovation and sustainability
              across industries. Let's create a smarter future together.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="pl-8">
            <h4 className="text-2xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => handleNavigation({ path: "/#home" })}
                  className="hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to="/services"
                  onClick={() => handleNavigation({ path: "/" })}
                  className="hover:text-green-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  onClick={() => handleNavigation({ path: "/" })}
                  className="hover:text-green-400 transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  onClick={() => handleNavigation({ path: "/" })}
                  className="hover:text-green-400 transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => handleNavigation({ path: "/" })}
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="pl-8">
            <h4 className="text-2xl font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/educational-innovations"
                  className="hover:text-green-400 transition-colors"
                >
                  Educational Innovations
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-experience"
                  className="hover:text-green-400 transition-colors"
                >
                  Customer Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/robotic-automation"
                  className="hover:text-green-400 transition-colors"
                >
                  Robotic Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/carbon-footprint"
                  className="hover:text-green-400 transition-colors"
                >
                  Carbon Management
                </Link>
              </li>
              <li>
                <Link
                  to="/generative-ai-chatbot"
                  className="hover:text-green-400 transition-colors"
                >
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link
                  to="/industrial-automation"
                  className="hover:text-green-400 transition-colors"
                >
                  Industrial Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Stay Connected */}
          <div>
            <h4 className="text-2xl font-semibold text-white mb-4">
              Stay Connected
            </h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors bg-gray-800 p-2 rounded-full hover:scale-110 transform transition-transform"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors bg-gray-800 p-2 rounded-full hover:scale-110 transform transition-transform"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors bg-gray-800 p-2 rounded-full hover:scale-110 transform transition-transform"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors bg-gray-800 p-2 rounded-full hover:scale-110 transform transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">
                  Email: education@greenai.services
                </p>
                <p className="text-gray-400">Phone: +91 89819 41888</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; 2024 GreenAI. All rights reserved.
          </p>
          <Link
            to="/privacy-policy"
            className="text-gray-400 hover:text-green-400"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
