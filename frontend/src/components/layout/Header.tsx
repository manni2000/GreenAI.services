import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo-bg.png";

interface HeaderProps {
  user: any;
  setUser: (user: any) => void;
}

const Header: React.FC<HeaderProps> = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/signin");
  };

  return (
    <header className="bg-white text-gray-800 shadow-sm fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-50" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/industries"
              className="hover:text-green-600 transition-colors font-large"
            >
              Industries
            </Link>
            <Link
              to="/why-greenai"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Why GreenAI
            </Link>
            <Link
              to="/education"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Education
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Contact
            </Link>

            {/* Auth Buttons or Avatar */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2"
                >
                  <User className="w-6 h-6 text-gray-700" />
                  <span className="text-gray-700 font-medium">{user.name}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link
              to="/"
              className="block hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block hover:text-green-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/industries"
              className="block hover:text-green-600 transition-colors"
            >
              Industries
            </Link>
            <Link
              to="/why-greenai"
              className="block hover:text-green-600 transition-colors"
            >
              Why GreenAI
            </Link>
            <Link
              to="/education"
              className="block hover:text-green-600 transition-colors"
            >
              Education
            </Link>
            <Link
              to="/contact"
              className="block hover:text-green-600 transition-colors"
            >
              Contact
            </Link>

            {/* Mobile Auth Buttons or Avatar */}
            {user ? (
              <div className="pt-4 space-y-2">
                <button
                  onClick={handleSignOut}
                  className="block w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-left"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-4 space-y-2">
                <Link
                  to="/signin"
                  className="block w-full px-4 py-2 text-green-600 hover:text-green-700 font-medium transition-colors text-left"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-left"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
