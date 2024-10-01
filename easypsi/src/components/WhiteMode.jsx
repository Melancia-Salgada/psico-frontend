import React from 'react';

const WhiteMode = ({ onToggle }) => {
  const toggleWhiteMode = () => {
    onToggle(prev => !prev); // Notify the parent component about the toggle
  };

  return (
    <div>
      <div className="fixed bottom-5 right-5">
        <button
          onClick={toggleWhiteMode}
          className="w-14 h-14 bg-azul rounded-full flex items-center justify-center shadow-lg"
        >
          {/* Icon for the button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-white"
          >
            <circle cx="12" cy="12" r="5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhiteMode;
