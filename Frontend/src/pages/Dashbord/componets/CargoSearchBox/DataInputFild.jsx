import React from 'react';
import { Calendar } from 'lucide-react';


// 2. Date Input with 'Today/Tomorrow' buttons (Mimics image style)
const DateInputField = ({ date, setDate }) => (
    // This field naturally uses the extra vertical space for the buttons
    <div className="flex flex-col px-3 py-1 border-l border-gray-200 w-full lg:w-[250px]">
        <label className="text-xs font-semibold text-gray-500 mb-0.5">Date of Shipment</label>
        <div className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-gray-700" />
            {/* Input is styled to hide default calendar button */}
            <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex-grow text-gray-800 text-lg font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                style={{ appearance: 'none', WebkitAppearance: 'none' }} 
            />
        </div>
        
        {/* Today / Tomorrow Buttons (using blue theme) */}
        <div className="flex space-x-3 mt-2">
            <button className="text-sm font-semibold px-4 py-1.5 rounded-lg bg-blue-100 text-blue-700 transition duration-150 hover:bg-blue-200">
                Today
            </button>
            <button className="text-sm font-semibold px-4 py-1.5 rounded-lg bg-sky-100 text-sky-700 transition duration-150 hover:bg-sky-200">
                Tomorrow
            </button>
        </div>
    </div>
);

export default DateInputField;