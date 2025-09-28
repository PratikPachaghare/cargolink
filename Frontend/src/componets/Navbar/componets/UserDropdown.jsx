import React, { useState } from 'react';
import { Truck, Map, ClipboardList, HelpCircle, UserCircle, Menu, X, ChevronDown } from 'lucide-react';


const UserDropdown = () => (
    <div className="relative group">
        <button className="flex items-center space-x-2 p-2 text-white hover:text-sky-300 transition duration-150">
            <UserCircle className="w-6 h-6" />
            <span className="text-sm font-semibold hidden lg:inline">My Account</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 hidden lg:inline" />
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 z-50">
            <a href="#profile" className="block px-4 py-3 text-sm hover:bg-blue-500 hover:text-white">Profile Settings</a>
            <a href="#history" className="block px-4 py-3 text-sm hover:bg-blue-500 hover:text-white">Booking History</a>
            <div className="border-t border-gray-100"></div>
            <a href="#logout" className="block px-4 py-3 text-sm hover:bg-red-500 hover:text-white">Sign Out</a>
        </div>
    </div>
);

export default UserDropdown;