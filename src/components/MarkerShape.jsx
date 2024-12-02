import React from 'react';

const MarkerShape = ({top, left}) => {
  return (
    <div
      style={{
        position: 'absolute', // Enables positioning relative to the parent
        top: '370px',             // Dynamically set the top position
        left: left,           // Dynamically set the left position
        // width: '100px',       // Match the SVG's width
        // height: '150px',      // Match the SVG's height
      }}
    >
      <svg width="100" height="150" viewBox="0 0 100 150">
        {/* Background Circle */}
        <circle cx="50" cy="50" r="20" fill="white" />

        {/* Inner Circle */}
        <circle cx="50" cy="50" r="15" fill="#81BFB7" />

        {/* Triangle */}
        <polygon points="50,80 40,67 60,67" fill="white" />
      </svg>
    </div>
  );
};

export default MarkerShape;
