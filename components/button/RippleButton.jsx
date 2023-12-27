"use client"
import React, { useState } from 'react';

// Define the RippleButton component
function RippleButton({ text, buttonClasses, onClick, type, icon }) {
  // State to manage ripples
  const [ripples, setRipples] = useState([]);

  // Function to add a ripple
  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rippleContainer.width, rippleContainer.height);
    const x = event.clientX - rippleContainer.left - size / 2;
    const y = event.clientY - rippleContainer.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(), // Generate a unique ID for each ripple
    };
    setRipples((prevRipples) => prevRipples.concat(newRipple));

    if (onClick) {
      onClick(event);
    }
  };

  // Function to handle ripple animation end
  const handleAnimationEnd = (id) => {
    setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== id));
  };

  // Determine the button type (default is "button")
  const buttonType = type || 'button';

  // Render the RippleButton component
  return (
    <div className="relative">
      <button
        type={buttonType}
        className={`relative overflow-hidden ${buttonClasses}`}
        onClick={addRipple}
      >
        {/* Render the icon if it exists in the props */}
        {icon && (
          <div className="icon-container">{icon}</div>
        )}
        {text}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-slate-100 opacity-70"
            style={{
              left: ripple.x + 'px',
              top: ripple.y + 'px',
              width: ripple.size + 'px',
              height: ripple.size + 'px',
              transform: 'scale(0)',
              animation: 'ripple 600ms linear',
            }}
            onAnimationEnd={() => handleAnimationEnd(ripple.id)}
          ></span>
        ))}
      </button>
    </div>
  );
}

// Export the RippleButton component
export default RippleButton;