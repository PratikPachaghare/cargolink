import React, { useState } from "react";
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
<<<<<<< Updated upstream
=======
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
>>>>>>> Stashed changes

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // global auth state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignIn = () => navigate("/signin");
  const handleSignUp = () => navigate("/signup");
  const handleLogout = () => {
    logout();      // Updates auth state & localStorage
    navigate("/"); // Redirect to Home
  };

  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center">
<<<<<<< Updated upstream
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
=======
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
>>>>>>> Stashed changes
              <img
                src={LogoImage}
                alt="CargoLink Logo"
                className="h-12 w-12 border rounded-4xl text-sky-300 mr-2"
              />
              <span className="text-xl font-extrabold text-white tracking-wider">
                Cargo<span className="text-sky-300">Link</span>
              </span>
            </div>

<<<<<<< Updated upstream
            {/* Primary Navigation Links (Desktop) */}
            <div className="hidden md:ml-10 md:flex md:space-x-4">
=======
            {/* Primary Navigation (Desktop) */}
            <div className="hidden md:flex md:ml-10 md:space-x-4">
>>>>>>> Stashed changes
              {primaryNavItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </div>
          </div>

<<<<<<< Updated upstream
          {/* Right Section: Utility and Account (Desktop) */}
          <div className="hidden md:ml-6 md:flex md:items-center space-x-4 text-white">
            {/* Utility Icons/Links */}
            {utilityNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 p-2 rounded-lg hover:text-sky-300 transition duration-150"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-sm font-semibold hidden lg:inline">
                  {item.name}
                </span>
              </a>
=======
          {/* Right Section (Desktop) */}
          <div className="hidden md:flex md:items-center md:ml-6 space-x-4">
            {utilityNavItems.map((item) => (
              <NavItem key={item.name} item={item} />
>>>>>>> Stashed changes
            ))}

            {!isLoggedIn ? (
              <>
                <button
                  onClick={handleSignIn}
                  className="text-white bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="text-blue-600 bg-white hover:bg-sky-100 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <UserDropdown onLogout={handleLogout} />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 shadow-xl border-t border-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {primaryNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.route);
                  toggleMenu();
                }}
                className="w-full flex items-center space-x-3 px-3 py-2 text-base font-medium rounded-md text-white hover:text-sky-300 hover:bg-blue-700 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}

            {utilityNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.route);
                  toggleMenu();
                }}
                className="w-full flex items-center space-x-3 px-3 py-2 text-base font-medium rounded-md text-white hover:text-sky-300 hover:bg-blue-700 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}

            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    handleSignIn();
                    toggleMenu();
                  }}
                  className="w-full px-3 py-2 text-left text-base font-medium text-white hover:text-sky-300 hover:bg-blue-700 rounded-md"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    handleSignUp();
                    toggleMenu();
                  }}
                  className="w-full px-3 py-2 text-left text-base font-medium text-white hover:text-sky-300 hover:bg-blue-700 rounded-md"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="w-full flex items-center space-x-3 px-3 py-2 text-base font-medium rounded-md text-white hover:text-sky-300 hover:bg-blue-700 transition-colors"
              >
                <UserCircle className="w-5 h-5" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
