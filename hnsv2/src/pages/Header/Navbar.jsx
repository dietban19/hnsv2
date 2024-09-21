import React from 'react';
import { RiHomeHeartFill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
const Navbar = ({ setTab, tab }) => {
  const tabs = [
    { name: 'Home', icon: <RiHomeHeartFill size={25} /> },
    { name: 'About', icon: <IoIosPeople size={25} /> },
  ];
  return (
    <div className="rounded-full bg-white p-2">
      <ul className="flex gap-3">
        {tabs.map((item, index) => (
          <li
            onClick={() => setTab(index)}
            key={index}
            className={`font-poppins relative flex cursor-pointer items-center justify-center rounded-full ${tab == index ? 'bg-blue-50' : ''} p-1 px-2 pl-10 text-base`}
          >
            <div
              className={`font-medium ${tab == index ? 'text-blue-600' : 'text-neutral-500'}`}
            >
              {item.name}
            </div>
            <div
              className={`absolute bottom-0 left-0 top-0 flex w-[2rem] shrink-0 items-center justify-center rounded-full ${tab == index ? 'bg-blue-400 text-white' : 'text-neutral-500'} `}
            >
              {item.icon}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
