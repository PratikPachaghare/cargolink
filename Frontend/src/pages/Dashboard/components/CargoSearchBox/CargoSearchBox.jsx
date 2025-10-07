import React, { useState } from "react";
import { Plane, Ship, Calendar, Search, Repeat2 } from "lucide-react";
import InputField from "./InputsFilds";
import DateInputField from "./DataInputFild";
import FCLToggle from "./FCLToggle";

export default function CargoSearchBox() {
  const [origin, setOrigin] = useState("Mumbai, India");
  const [destination, setDestination] = useState("Hamburg, Germany");
  const [date, setDate] = useState("2025-10-15");
  const [isFCL, setIsFCL] = useState(false);

  // 🔹 Location data array
  const locations = [
    "Mumbai, India",
    "Delhi, India",
    "Chennai, India",
    "Kolkata, India",
    "Hamburg, Germany",
    "Rotterdam, Netherlands",
    "Singapore",
    "Shanghai, China"
  ];

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSearch = () => {
    console.log(
      `Searching for cargo from ${origin} to ${destination} on ${date}. FCL: ${isFCL}`
    );
  };

  return (
    <div className=" relative -top-20 flex flex-col items-center pt-24 pb-12 font-sans">
      <div className="w-full max-w-6xl mx-auto -mt-16 relative bg-white rounded-2xl shadow-xl p-2 md:p-4">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Origin Dropdown */}
          <InputField
            icon={Plane}
            label="From"
            type="select"
            value={origin}
            placeholder="Select origin port"
            onChange={(e) => setOrigin(e.target.value)}
            options={locations}
            className="flex-grow-[1.5]"
          />

          {/* Swap Button */}
          <div className="flex items-center justify-center p-0.5 border-gray-200 ml-4 mr-4">
            <button
              onClick={handleSwap}
              aria-label="Swap Origin and Destination"
              className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Repeat2 className="w-5 h-5 mx-auto" />
            </button>
          </div>

          {/* Destination Dropdown */}
          <InputField
            icon={Ship}
            label="To"
            type="select"
            value={destination}
            placeholder="Select destination port"
            onChange={(e) => setDestination(e.target.value)}
            options={locations}
            className="flex-grow-[1.5]"
          />

          {/* Date Input */}
          <DateInputField date={date} setDate={setDate} />

          {/* Toggle */}
          <FCLToggle isFCL={isFCL} toggleFCL={() => setIsFCL(!isFCL)} />
        </div>
      </div>

      {/* Search Button */}
      <div className="w-full max-w-xs absolute bottom-0 transform translate-y-1/2">
        <button
          onClick={handleSearch}
          className="w-full relative -top-12 flex items-center justify-center space-x-3 bg-blue-500 text-white text-xl font-bold py-2 rounded-xl shadow-2xl shadow-blue-400/50 hover:bg-blue-700 transition duration-200 transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <Search className="w-6 h-5" />
          <span>Search vehical</span>
        </button>
      </div>
    </div>
  );
}
