import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNavItems, utilityNavItems } from "./components/Item";
import NavItem from "./components/NavItem";
import UserDropdown from "./components/UserDropdown";
import LogoImage from "../../assets/Mainlogo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-blue-600 shadow-lg sticky top-0 z-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left */}
            <div className="flex items-center">
              <img src={LogoImage} alt="Logo" className="h-12 w-12 mr-2" />
              <span className="text-xl font-extrabold text-white">
                Cargo<span className="text-sky-300">Link</span>
              </span>
              <div className="hidden md:ml-10 md:flex md:space-x-4">
                {primaryNavItems.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center space-x-4 text-white">
              {utilityNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 p-2 hover:text-sky-300"
                >
                  <item.icon className="w-6 h-6" />
                  <span className="hidden lg:inline">{item.name}</span>
                </Link>
              ))}

              {user ? (
                <UserDropdown />
              ) : (
                <Link
                  to="/signin"
                  className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile menu btn */}
            <div className="flex md:hidden">
              <button onClick={toggleMenu} className="text-white p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
