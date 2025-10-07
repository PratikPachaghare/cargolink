import React from 'react';


const Loader = ({ size = 'h-10 w-10', color = 'border-blue-500' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* The Spinner Element */}
      <div 
        className={`${size} ${color} border-4 border-solid border-t-transparent rounded-full animate-spin`}
       style={{ animationDuration: '0.8s' }} 
      >
      </div>
      
      {/* Optional: Loading Text */}
      <p className="mt-3 text-lg font-medium text-gray-700">Loading...</p>
    </div>
  );
};

export default Loader;
