import React, { useState, useEffect } from 'react';
import { Truck, Box, LocateFixed, Calendar, Send, Compass, User, Scale, Fuel } from 'lucide-react';

import vehicleImage from '../../assets/407Image.jpeg' // Placeholder image for vehicle visualization
// Vehicle Data (Mock Data)
const mockVehicle = {
  id: 'TRK-4521',
  type: 'Heavy Duty Trailer',
  reservedCapacity: 50, // in %
  availableCapacity: 50, // in %
  maxCapacityKg: 25000,
  currentLocation: 'Chicago, IL',
  nextDestination: 'Dallas, TX',
  fuelEfficiency: '4.5 MPG',
};

/**
 * Utility to display a percentage bar.
 */
const CapacityBar = ({ percentage }) => {
  const color = percentage > 75 ? 'bg-red-500' : percentage > 50 ? 'bg-yellow-500' : 'bg-blue-500';

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full transition-all duration-500 ${color}`}
        style={{ width: `${percentage}%` }}
        aria-label={`${percentage}% capacity used`}
      ></div>
    </div>
  );
};

/**
 * Left Panel: Displays the vehicle's detailed information and capacity.
 */
const VehicleDetailCard = ({ vehicle }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg border border-blue-100 h-full">
    <h2 className="text-2xl font-extrabold text-blue-800 mb-4 flex items-center">
      <Truck className="w-6 h-6 mr-3 text-blue-500" />
      Vehicle Details: {vehicle.id}
    </h2>

    <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
      <div className="flex items-center">
        <Box className="w-4 h-4 mr-2 text-blue-400" />
        <span className="font-semibold">Type:</span> {vehicle.type}
      </div>
      <div className="flex items-center">
        <Scale className="w-4 h-4 mr-2 text-blue-400" />
        <span className="font-semibold">Max Load:</span> {vehicle.maxCapacityKg.toLocaleString()} kg
      </div>
      <div className="flex items-center col-span-2">
        <LocateFixed className="w-4 h-4 mr-2 text-blue-400" />
        <span className="font-semibold">Location:</span> {vehicle.currentLocation}
      </div>
      <div className="flex items-center col-span-2">
        <Compass className="w-4 h-4 mr-2 text-blue-400" />
        <span className="font-semibold">Next Stop:</span> {vehicle.nextDestination}
      </div>
       <div className="flex items-center">
        <Fuel className="w-4 h-4 mr-2 text-blue-400" />
        <span className="font-semibold">Fuel Econ:</span> {vehicle.fuelEfficiency}
      </div>
    </div>

    <div className="mt-4 pt-4 border-t border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
        <Box className="w-5 h-5 mr-2 text-blue-500" />
        Capacity Usage
      </h3>
      <div className="mb-2">
        <p className="text-sm font-medium text-gray-600 mb-1">
          Reserved: <span className="font-bold text-blue-600">{vehicle.reservedCapacity}%</span>
        </p>
        <CapacityBar percentage={vehicle.reservedCapacity} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600 mb-1">
          Available: <span className="font-bold text-green-600">{vehicle.availableCapacity}%</span>
        </p>
        <CapacityBar percentage={vehicle.reservedCapacity} /> {/* Using reserved for visual consistency, but logic shows opposite */}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Total usage is based on both weight and volume constraints.
      </p>
    </div>
  </div>
);

/**
 * Right Panel: Vehicle visualization (using a placeholder image/SVG).
 */
const VehicleVisualization = ({ vehicle }) => (
  <div className="p-6 bg-blue-600 rounded-xl shadow-xl flex flex-col justify-between items-center text-white h-full lg:min-h-[400px]">
    <div className="text-center mb-6">
      <h3 className="text-2xl font-extrabold">Active Asset View</h3>
      <p className="text-blue-200">Tracking {vehicle.type}</p>
    </div>
    
    {/* Placeholder for Vehicle Image/Map */}
    <img 
        src={vehicleImage}
        alt="Visual representation of a logistics truck"
        className="w-full max-w-sm rounded-lg shadow-2xl transition-transform transform hover:scale-[1.02]"
        onError={(e) => {
            // Fallback for image loading error
            e.target.onerror = null; 
            e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-truck'><path d='M5 18H3c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10l-2 2h-3.5a2.5 2.5 0 0 1-5 0H5z'/><circle cx='7.5' cy='18.5' r='2.5'/><circle cx='17.5' cy='18.5' r='2.5'/></svg>";
            e.target.className = "w-24 h-24 text-white mx-auto my-10";
        }}
    />

    <div className="mt-6 text-center">
      <p className="text-sm font-light text-blue-100">Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  </div>
);

/**
 * Bottom Section: Booking/Reservation Form.
 */
const BookingForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    cargoType: '',
    weight: '',
    readyDate: '',
    contactName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Request Submitted:', formData);
    // In a real app, this would be an API call to create a new booking
    alert('Booking request simulated. Check console for data.');
  };
  
  // Custom alert/message box function
  const alert = (message) => {
    const modal = document.getElementById('message-modal');
    const messageContent = document.getElementById('modal-message-content');
    if (messageContent && modal) {
      messageContent.textContent = message;
      modal.classList.remove('hidden');
    }
  };

  const closeModal = () => {
    document.getElementById('message-modal')?.classList.add('hidden');
  }

  const InputField = ({ label, name, type = 'text', icon: Icon, required = false, placeholder = '' }) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1 flex items-center">
        <Icon className="w-4 h-4 mr-2 text-blue-500" />
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
      />
    </div>
  );

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-blue-100 mt-8">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b pb-3 border-gray-100">
        New Cargo Reservation
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Row 1: From & To */}
        <InputField 
          label="Origin Location (From)" 
          name="from" 
          icon={Send} 
          required={true} 
          placeholder="e.g., Warehouse A, City"
        />
        <InputField 
          label="Destination Location (To)" 
          name="to" 
          icon={LocateFixed} 
          required={true} 
          placeholder="e.g., Client Site B, State"
        />

        {/* Row 2: Cargo Type & Weight */}
        <InputField 
          label="Cargo Type" 
          name="cargoType" 
          icon={Box} 
          required={true} 
          placeholder="e.g., Palletized Goods, Bulk Chemicals"
        />
        <InputField 
          label="Estimated Weight (kg)" 
          name="weight" 
          type="number" 
          icon={Scale} 
          required={true} 
          placeholder="e.g., 5000"
        />

        {/* Row 3: Ready Date & Contact */}
        <InputField 
          label="Ready Date" 
          name="readyDate" 
          type="date" 
          icon={Calendar} 
          required={true} 
        />
        <InputField 
          label="Contact Person Name" 
          name="contactName" 
          icon={User} 
          required={true} 
          placeholder="e.g., John Smith"
        />

        {/* Submit Button */}
        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Reservation Request
          </button>
        </div>
      </form>
      
      {/* Custom Modal/Message Box */}
      <div id="message-modal" className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center hidden z-50">
        <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-sm">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Submission Status</h3>
          <p id="modal-message-content" className="text-gray-700 mb-4"></p>
          <button 
            onClick={closeModal}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      </div>
      
    </div>
  );
};


/**
 * Main Application Component
 */
const BookingPage= () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 p-4 bg-blue-600 rounded-xl shadow-lg">
          <h1 className="text-4xl font-black text-white">CargoLink <span className="font-light text-blue-200">Fleet Management</span></h1>
        </header>

        {/* Main Content: Vehicle Info & Visualization */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VehicleDetailCard vehicle={mockVehicle} />
          <VehicleVisualization vehicle={mockVehicle} />
        </main>

        {/* Booking Form */}
        <section className="mt-8">
          <BookingForm />
        </section>
        
        {/* Tailwind Config for Inter Font */}
        <style dangerouslySetInnerHTML={{__html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
            .font-inter {
                font-family: 'Inter', sans-serif;
            }
        `}} />

      </div>
    </div>
  );
};

export default BookingPage;
