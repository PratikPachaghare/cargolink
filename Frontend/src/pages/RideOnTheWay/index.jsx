import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUser,
  FaWeightHanging,
  FaClock,
  FaGasPump,
  FaRoad,
  FaRoute,
} from "react-icons/fa";

import download1 from "../../assets/tempo/download1.jpeg";
import download2 from "../../assets/tempo/download2.jpeg";
import download3 from "../../assets/tempo/download3.jpeg";

const rides = [
  {
    id: 1,
    from: "Pune",
    to: "Mumbai",
    vehicle: "Container Truck",
    driver: "Rohit Sharma",
    availableWeight: "2.5 Tons",
    departure: "Today, 3:00 PM",
    fuelType: "Diesel",
    distance: "148 km",
    image: download1,
    status: "On Route",
  },
  {
    id: 2,
    from: "Nagpur",
    to: "Nashik",
    vehicle: "Mini Tempo",
    driver: "Sanjay Patil",
    availableWeight: "800 kg",
    departure: "Today, 6:30 PM",
    fuelType: "CNG",
    distance: "600 km",
    image: download2,
    status: "Starting Soon",
  },
  {
    id: 3,
    from: "Delhi",
    to: "Jaipur",
    vehicle: "Open Truck",
    driver: "Amit Verma",
    availableWeight: "4 Tons",
    departure: "Tomorrow, 8:00 AM",
    fuelType: "Diesel",
    distance: "280 km",
    image: download3,
    status: "Scheduled",
  },
  {
    id: 4,
    from: "Surat",
    to: "Ahmedabad",
    vehicle: "Auto Loader",
    driver: "Mahesh Yadav",
    availableWeight: "300 kg",
    departure: "Today, 4:15 PM",
    fuelType: "CNG",
    distance: "263 km",
    image: download1,
    status: "On Route",
  },
];

const RidesOnTheWay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, to } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
          🚛 Rides On The Way
        </h1>

        {from && to && (
          <h2 className="text-2xl font-semibold text-blue-800 mt-4">
            {from} → {to}
          </h2>
        )}

        {!from && !to && (
          <p className="text-gray-600 mt-2">
            Explore vehicles already on route — find a perfect ride for your
            cargo.
          </p>
        )}
      </div>

      {/* Ride Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rides.map((ride) => (
          <div
            key={ride.id}
            onClick={() => navigate("/bookingForm", { state: { ride } })}
            className="relative bg-white rounded-2xl shadow-md border border-blue-100 p-5 hover:shadow-xl hover:scale-[1.03] hover:border-blue-400 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Vehicle Image */}
            <div className="flex justify-center mb-4">
              <img
                src={ride.image}
                alt={ride.vehicle}
                className="w-56 h-40 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Route Info */}
            <div className="flex items-center justify-center mb-4 text-gray-800">
              <FaMapMarkerAlt className="text-blue-600 mr-2 text-lg" />
              <span className="font-semibold text-lg">{ride.from}</span>
              <FaRoute className="mx-3 text-blue-500 text-lg" />
              <span className="font-semibold text-lg">{ride.to}</span>
            </div>

            {/* Details */}
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-500" />
                <strong>Driver:</strong> {ride.driver}
              </div>
              <div className="flex items-center gap-2">
                <FaWeightHanging className="text-blue-500" />
                <strong>Available Capacity:</strong> {ride.availableWeight}
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-500" />
                <strong>Departure:</strong> {ride.departure}
              </div>
              <div className="flex items-center gap-2">
                <FaGasPump className="text-blue-500" />
                <strong>Fuel Type:</strong> {ride.fuelType}
              </div>
              <div className="flex items-center gap-2">
                <FaRoad className="text-blue-500" />
                <strong>Distance:</strong> {ride.distance}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  ride.status === "On Route"
                    ? "bg-blue-500 text-white"
                    : ride.status === "Starting Soon"
                    ? "bg-yellow-400 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {ride.status}
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RidesOnTheWay;
