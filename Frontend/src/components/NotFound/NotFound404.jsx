import React from "react";
import { useNavigate } from "react-router-dom";



const ErrorContent = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md w-full space-y-8 mt-7 mb-7 m-auto text-center p-8 bg-white dark:bg-blue-500 shadow-xl rounded-xl transition duration-500 hover:shadow-2xl">
      {/* Visual Icon (Inline SVG for robustness) */}
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-20 h-20 text-white dark:text-white opacity-75 transition duration-500"
        >
          {/* Simple frowning face icon */}
          <circle cx="12" cy="12" r="10" />
          <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </div>

      {/* Main Error Code */}
      <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-white opacity-90 transition duration-500">
        404
      </h1>

      {/* Descriptive Message */}
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Oops! Page Not Found.
      </h2>

      {/* Explanatory Text */}
      <p className="mt-2 text-base text-gray-500 dark:text-white">
        It looks like the page you were searching for either doesn't exist or
        has been moved. Don't worry, we'll help you get back on track.
      </p>

      {/* Call to Action Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 w-full flex justify-center items-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transform transition duration-150 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0v-7a1 1 0 011-1h2a1 1 0 011 1v7m-6 0h6"
          />
        </svg>
        Go Back Home
      </button>

      {/* Optional: Footer/Support Link */}
      <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
        If you believe this is an error, please check the URL or contact
        support.
      </div>
    </div>
  );
};

export default ErrorContent;
