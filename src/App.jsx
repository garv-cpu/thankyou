import React from 'react';

// The main App component that will be rendered.
// It displays a thank you message for the donation.
const App = () => {
  return (
    // Main container, full screen and centered
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4 font-sans">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        {/* Heart icon as an inline SVG to avoid dependencies */}
        <svg 
          className="text-pink-500 w-16 h-16 mx-auto mb-6 animate-pulse" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M462.3 62.6C407.5 15.9 328 14.2 248.8 111.9L248 112.9L247.2 111.9C168 14.2 88.5 15.9 33.7 62.6C-2.4 97.5 -8.3 162.7 20.2 208.6L247.9 458.1L476.2 208.6C504.7 162.7 498.8 97.5 462.3 62.6Z"/>
        </svg>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Thank You!
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          Your generous donation is greatly appreciated and will help support the development of Pocket Notes.
        </p>
      </div>
    </div>
  );
};

export default App;
