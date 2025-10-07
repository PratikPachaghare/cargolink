import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

// Mock data for the vehicle categories
const vehicles = [
  // Icon placeholder: You would replace the emoji with a proper SVG component or Image/Icon library
  { name: 'Two-Wheeler', icon: '🛵' },
  { name: 'Three-Wheeler (Auto)', icon: ' 🛺 ' },
  { name: 'Three-Wheeler  (tampo)', icon: ' 🛺 ' },
  { name: 'Four-Wheeler (Tempo)', icon: ' 🚐 ' },
  { name: 'Small Truck', icon: ' 🚚 ' },
  { name: 'Large Truck', icon: ' 🚛 ' },
  { name: 'Packers & Movers', icon: ' 📦 ' },
  { name: 'Intercity Courier', icon: ' ✈️ ' },
];

const availableCities = ['Ahmedabad', 'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad'];

const VehicleSelector = () => {
  const [selectedCity, setSelectedCity] = useState('Ahmedabad');
  const navigate = useNavigate(); // Initialize navigate

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Handler for card click
  const handleVehicleClick = (vehicle) => {
    navigate('/bookingForm', { state: { vehicle, city: selectedCity } });
  };

  return (
    <div className=" md:p-6 max-w-10/12 mx-auto bg-gray-50 rounded-lg shadow-inner">
      {/* 1. LOCATION SELECTOR COMPONENT */}
      <div className="flex items-center mb-6">
        {/* Location Icon */}
        <svg 
          className="w-5 h-5 text-blue-600 mr-2" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
            clipRule="evenodd"
          />
        </svg>

        {/* City Dropdown Selector */}
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="text-lg font-semibold text-gray-800 bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer p-0 m-0 appearance-none"
        >
          {availableCities.map(city => (
            <option key={city} value={city} className="text-gray-700">
              {city}
            </option>
          ))}
        </select>
        
        {/* Custom Dropdown Arrow (to override browser default appearance-none) */}
        <svg className="w-4 h-4 text-gray-600 ml-1 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        

      </div>

      {/* 2. HORIZONTAL SCROLL CONTAINER */}
      <div 
        className="flex overflow-x-scroll whitespace-nowrap pb-4 space-x-4 
                   scrollbar-hide" // Use 'scrollbar-hide' if you have the plugin
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // For Firefox/IE compatibility
      >
        {vehicles.map((vehicle, index) => (
          /* Individual Vehicle Card */
          <div 
            key={index} 
            className="flex-shrink-0 w-[137px] h-40 bg-white rounded-xl shadow-md 
                       flex flex-col items-center justify-center p-2 cursor-pointer 
                       hover:shadow-lg transition duration-200 transform hover:-translate-y-1"
            onClick={() => handleVehicleClick(vehicle)} // Add click handler
          >
            {/* Icon Box: Light Blue Background */}
            <div className="w-20 h-20 bg-blue-50/70 rounded-lg flex items-center justify-center mb-2">
              <span className="text-4xl">
                {vehicle.icon}
              </span>
            </div>
            {/* Vehicle Name */}
            <p className="text-xs font-semibold text-gray-700 text-center whitespace-normal leading-tight">
              {vehicle.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelector;