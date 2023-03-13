import React, { useState } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex gap-2 items-center"
          to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] cursor-pointer font-bold">
            Shaunak Thakar
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
