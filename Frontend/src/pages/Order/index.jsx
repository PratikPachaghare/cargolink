import React, { useState } from 'react';
import orderImg from '../../assets/requastPageImage.png'
import orderCompleateImg from '../../assets/OrderCompleImage.png'

const requestOrder = {
  id: 'ORD12346',
  status: 'Pending',
  vehicle: 'Four-Wheeler (Tempo)',
  from: 'Pune, Maharashtra',
  to: 'Chennai, Tamil Nadu',
  date: '2025-10-13',
  driver: 'To be assigned',
  eta: 'TBD',
  cargoType: 'Electronics',
  weight: '1200 kg',
  price: '₹ 8,500',
  description: 'Fragile electronics, handle with care. Pickup between 9-11am.',
};

const acceptedOrder = {
  id: 'ORD12345',
  status: 'Accepted',
  vehicle: 'Large Truck',
  from: 'Mumbai, Maharashtra',
  to: 'Delhi, NCR',
  date: '2025-10-12',
  driver: 'Rajesh Kumar',
  eta: '6 hrs',
  cargoType: 'Furniture',
  weight: '2500 kg',
  price: '₹ 15,000',
  description: 'Bulk furniture shipment. Includes insurance and express delivery.',
};

export default function OrderPage() {
  const [activeTab, setActiveTab] = useState('request');
  const [showRequestDetails, setShowRequestDetails] = useState(false);
  const [showAcceptedDetails, setShowAcceptedDetails] = useState(false);

  return (
    <div className='flex justify-evenly'>
        <div className='ml-32 m-5 '><img src={activeTab === 'request' ? orderImg :orderCompleateImg } alt="" /> </div>
        <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">My Orders</h1>

      {/* Tabs */}
      <div className="flex w-full mb-6">
        <button
          className={`flex-1 py-3 rounded-l-xl font-semibold transition ${
            activeTab === 'request'
              ? 'bg-yellow-500 text-white shadow'
              : 'bg-gray-100 text-yellow-700 hover:bg-yellow-100'
          }`}
          onClick={() => setActiveTab('request')}
        >
          Request
        </button>
        <button
          className={`flex-1 py-3 rounded-r-xl font-semibold transition ${
            activeTab === 'accepted'
              ? 'bg-green-500 text-white shadow'
              : 'bg-gray-100 text-green-700 hover:bg-green-100'
          }`}
          onClick={() => setActiveTab('accepted')}
        >
          Accepted
        </button>
      </div>

      {/* Scrollable Section */}
      <div className="overflow-y-auto mt-4 max-h-[400px]">
        {/* Request Section */}
        {activeTab === 'request' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-600 font-semibold text-lg">Request</span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">{requestOrder.status}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-semibold text-gray-700">{requestOrder.vehicle}</div>
                <div className="text-gray-500 text-sm">{requestOrder.from} → {requestOrder.to}</div>
                <div className="text-gray-400 text-xs mt-1">Date: {requestOrder.date}</div>
                <div className="text-gray-600 text-xs">Cargo: {requestOrder.cargoType}</div>
                <div className="text-gray-600 text-xs">Weight: {requestOrder.weight}</div>
                <div className="text-gray-600 text-xs">Price: {requestOrder.price}</div>
                {showRequestDetails && (
                  <div className="mt-2 text-gray-500 text-xs bg-yellow-50 p-2 rounded">
                    {requestOrder.description}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-end">
                <div className="text-blue-700 font-medium">Driver: {requestOrder.driver}</div>
                <div className="text-gray-600 text-sm">ETA: {requestOrder.eta}</div>
                <button className="mt-2 px-4 py-1 bg-yellow-500 text-white rounded-full text-sm hover:bg-yellow-600 transition">Cancel Request</button>
                <button
                  className="mt-2 px-4 py-1 bg-gray-200 text-yellow-700 rounded-full text-xs hover:bg-yellow-100 transition"
                  onClick={() => setShowRequestDetails((prev) => !prev)}
                >
                  {showRequestDetails ? 'Hide Details' : 'Show More Details'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Accepted Section */}
        {activeTab === 'accepted' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-600 font-semibold text-lg">Accepted</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">{acceptedOrder.status}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-semibold text-gray-700">{acceptedOrder.vehicle}</div>
                <div className="text-gray-500 text-sm">{acceptedOrder.from} → {acceptedOrder.to}</div>
                <div className="text-gray-400 text-xs mt-1">Date: {acceptedOrder.date}</div>
                <div className="text-gray-600 text-xs">Cargo: {acceptedOrder.cargoType}</div>
                <div className="text-gray-600 text-xs">Weight: {acceptedOrder.weight}</div>
                <div className="text-gray-600 text-xs">Price: {acceptedOrder.price}</div>
                {showAcceptedDetails && (
                  <div className="mt-2 text-gray-500 text-xs bg-green-50 p-2 rounded">
                    {acceptedOrder.description}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-end">
                <div className="text-blue-700 font-medium">Driver: {acceptedOrder.driver}</div>
                <div className="text-gray-600 text-sm">ETA: {acceptedOrder.eta}</div>
                <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">Track Order</button>
                <button
                  className="mt-2 px-4 py-1 bg-gray-200 text-green-700 rounded-full text-xs hover:bg-green-100 transition"
                  onClick={() => setShowAcceptedDetails((prev) => !prev)}
                >
                  {showAcceptedDetails ? 'Hide Details' : 'Show More Details'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
}
