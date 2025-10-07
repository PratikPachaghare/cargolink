import React, { useState } from "react";
import { UserCircle, ChevronDown } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  if (!user) return null; // don’t show dropdown if not logged in

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 text-white hover:text-sky-300 transition duration-150"
      >
        <UserCircle className="w-6 h-6" />
        <span className="text-sm font-semibold hidden lg:inline">
          My Account
        </span>
        <ChevronDown
          className={`w-4 h-4 hidden lg:inline transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden z-50">
          <a
            href="#profile"
            className="block px-4 py-3 text-sm hover:bg-blue-500 hover:text-white"
          >
            Profile Settings
          </a>
          <a
            href="#history"
            className="block px-4 py-3 text-sm hover:bg-blue-500 hover:text-white"
          >
            Booking History
          </a>
          <div className="border-t border-gray-100"></div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 text-sm hover:bg-red-500 hover:text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
