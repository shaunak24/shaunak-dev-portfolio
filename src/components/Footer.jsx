import React from 'react';
import { styles } from '../styles';
import { socialMedia } from '../constants';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import useMobile from './hooks/useMobile';

const Footer = () => {
  const isMobile = useMobile();

  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-5 bg-primary`}
    >
      <div
        className={`w-full flex ${
          isMobile && 'flex-col gap-6'
        } justify-between items-center max-w-7xl mx-auto`}
      >
        <a className="flex gap-2 items-center" href="#">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] cursor-pointer font-bold">
            Shaunak Thakar
          </p>
        </a>
        <p className="text-white text-[18px] cursor-pointer font-bold">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className="list-none flex flex-row gap-10">
          {socialMedia.map((item) => (
            <li key={item.name} className="bg-tertiary rounded-lg">
              <a href={item.link} target="_blank">
                <IconButton size="large" aria-label={item.name} color="inherit">
                  <item.icon />
                </IconButton>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
