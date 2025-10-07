import React from 'react';

export default function WhyChooseUs() {
  return (
    // Use full width and center content inside for better responsiveness
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto"> 

        {/* Section Title */}
        <div className="text-center mb-12">
          {/* Main Heading: Use a dark blue and ensure no underline */}
          <h2 className="text-4xl font-bold text-blue-900 mb-4 inline-block no-underline">
            WHY CHOOSE US
          </h2>
          
          {/* Description: Ensure text is centered and readable on all screens */}
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
            Choose Us For Tailored IT Solutions That Drive Success, With Expert Professionals Dedicated To Your Business Growth.
          </p>
        </div>
        
        {/* Stat Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          
          {/* Card 1: Years Experience (Blue) */}
          <StatCard number="6+" description="Years Experience" color="text-blue-600" />

          {/* Card 2: Projects Done (Purple) */}
          <StatCard number="400+" description="Projects Done" color="text-purple-500" />

          {/* Card 3: Team Support (Pink) */}
          <StatCard number="24/7" description="Team Support" color="text-pink-500" />

          {/* Card 4: Industry Awards (Blue) */}
          <StatCard number="10+" description="Industry Awards" color="text-blue-600" />

          {/* Card 5: Core Professionals (Yellow) */}
          <StatCard number="15+" description="Core Professionals" color="text-yellow-600" />
        </div>
      </div>
    </div>
  );
}

// Helper component for cleaner card rendering
const StatCard = ({ number, description, color }) => (
  <div className="flex flex-col items-center bg-white rounded-lg p-6 
                border border-gray-100 shadow-md transition-shadow duration-300 hover:shadow-lg">
    <h3 className={`text-4xl font-bold ${color} mb-2 inline-block`}>
      {number}
    </h3>
    <p className="text-gray-600 text-base text-center">
      {description}
    </p>
  </div>
);