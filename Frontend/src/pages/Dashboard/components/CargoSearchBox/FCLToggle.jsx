
import React from 'react';
import { HardHat } from 'lucide-react';



const FCLToggle = ({ isFCL, toggleFCL }) => (
    <div className="flex flex-col justify-center items-start px-3 py-1 border-l border-gray-200 w-full lg:w-[220px]">
        {/* Invisible spacer to occupy the vertical space of the 'label' in other fields for top alignment */}
        <div className="h-[1.5rem] invisible"></div> 
        
        <div className="flex items-start space-x-3 w-full">
            <HardHat className="w-6 h-6 text-gray-500" />
            <div className="flex flex-col flex-grow">
                <span className="text-sm font-semibold text-gray-800">Full Container Load</span>
                <span className="text-xs text-blue-500 cursor-pointer hover:underline">View options</span>
            </div>
            
            <div 
                className={`relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 ml-4 cursor-pointer
                ${isFCL ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={toggleFCL}
                role="switch"
                aria-checked={isFCL}
            >
                <div 
                    className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 
                    ${isFCL ? 'translate-x-6' : 'translate-x-0.5'}`}
                ></div>
            </div>
        </div>
        {/* Invisible spacer to match the height of 'Today/Tomorrow' buttons */}
        <div className="h-4 invisible"></div>
    </div>
);


export default FCLToggle;