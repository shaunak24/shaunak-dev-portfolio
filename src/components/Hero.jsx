import React from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from '../components';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute flex flex-row inset-0 top-[120px] max-w-7xl mx-auto items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Circle */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* Line using gradient */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Introduction */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Shaunak</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a Software Engineer, <br className="sm:block hidden" />
            building performant web applications
          </p>
        </div>
      </div>
      {/* Computer Canvas */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
