import React, { use, useState } from "react";
import {
  Truck,
  Map,
  ClipboardList,
  HelpCircle,
  UserCircle,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { primaryNavItems, utilityNavItems } from "./componets/Item";
import NavItem from "./componets/NavItem";
import UserDropdown from "./componets/UserDropdown";
import LogoImage from "../../assets/Mainlogo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section: Logo and Primary Links (Desktop) */}
          <div className="flex items-center">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={()=>navigate("/")}>
              <img
                src={LogoImage}
                alt="CargoLink Logo"
                className="h-12 w-12 border rounded-4xl text-sky-300 mr-2"
                
              />
              <span className="text-xl font-extrabold text-white tracking-wider">
                Cargo<span className="text-sky-300">Link</span>
              </span>
            </div>

            {/* Primary Navigation Links (Desktop) */}
            <div className="md:ml-10 md:flex md:space-x-4 " >
              {primaryNavItems.map((item) => (
                <NavItem item={item} />
              ))}
            </div>
          </div>

          {/* Right Section: Utility and Account (Desktop) */}
          <div className="hidden md:ml-6 md:flex md:items-center space-x-4">
            {/* Utility Icons/Links */}
            {utilityNavItems.map((item) => (
                <NavItem item={item} />
            ))}

            {/* Account Dropdown */}
            <UserDropdown />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-blue-900 shadow-xl border-t border-blue-700`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Primary Links */}
          {primaryNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="text-white hover:bg-blue-700 hover:text-sky-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}

          {/* Utility Links */}
          <div className="pt-2 border-t border-blue-700 mt-2 space-y-1">
            {utilityNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="text-white hover:bg-blue-700 hover:text-sky-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-3"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
            <a
              href="#account"
              onClick={toggleMenu}
              className="text-white hover:bg-blue-700 hover:text-sky-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <UserCircle className="w-5 h-5" />
              <span>Account Settings</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
