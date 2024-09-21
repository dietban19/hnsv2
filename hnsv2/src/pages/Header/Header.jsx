import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Navbar from './Navbar';
import Buttons from './Buttons';
const Header = ({ setTab, tab }) => {
  return (
    <div className="flex items-center justify-evenly px-4 py-4 lg:px-0 lg:py-6">
      <div className="max-h-12 max-w-[6rem] lg:max-w-[7rem]">
        <img src="logotransparent.png" />
      </div>
      <Navbar setTab={setTab} tab={tab} />
      <Buttons />
      <div className="block lg:hidden">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
