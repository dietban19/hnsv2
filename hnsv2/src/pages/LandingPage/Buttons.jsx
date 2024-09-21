import React from 'react';

const Buttons = () => {
  return (
    <div className="flex justify-center gap-3">
      <button className="font-poppins cursor-pointer rounded-full border border-sky-300 px-4 py-2 text-base text-sky-500">
        Learn More
      </button>
      <button className="font-poppins rounded-full border border-sky-400 bg-sky-300 px-4 py-2 text-base text-white">
        Get Started
      </button>
    </div>
  );
};

export default Buttons;
