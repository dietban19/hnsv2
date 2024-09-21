import React from 'react';
import Buttons from './Buttons';

const Hero = () => {
  return (
    <div className="font-poppins flex h-[35rem] items-center justify-center bg-sky-50 px-32">
      <div className="flex flex-col gap-6 text-center text-indigo-900 md:w-1/2">
        <div className="mb-8 flex flex-col gap-2">
          {' '}
          <div className="text-xl font-bold lg:text-3xl">Step Into Courage</div>
          <div className="text-lg font-light md:text-2xl">
            Your VR Journey Away from Fear
          </div>
          <Buttons />
        </div>
      </div>
      <div className="mt-8 sm:w-1/2">
        <img src="/hero1.1.svg" />
      </div>
    </div>
  );
};

export default Hero;
