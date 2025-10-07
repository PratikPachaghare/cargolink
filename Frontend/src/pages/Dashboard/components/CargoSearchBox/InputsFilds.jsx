// InputField.jsx
import React from "react";

const InputField = ({
  icon: Icon,
  label,
  value,
  placeholder,
  onChange,
  className = "",
  type = "text", // "text" or "select"
  options = [] // used only when type="select"
}) => (
  <div className={`relative flex flex-col justify-center px-3 py-1 flex-grow ${className}`}>
    <label className="text-xs font-semibold text-gray-500 mb-0.5">{label}</label>
    <div className="flex items-center space-x-3">
      <Icon className="w-6 h-6 text-gray-700" />
      
      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="flex-grow text-gray-800 text-lg font-medium focus:outline-none bg-transparent pt-0.5"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-grow text-gray-800 text-lg font-medium focus:outline-none placeholder-gray-400 bg-transparent pt-0.5"
        />
      )}
    </div>
    <div className="h-8 invisible"></div>
  </div>
);

export default InputField;
