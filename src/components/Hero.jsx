import React from 'react';
import { styles } from '../styles';
import { ComputersCanvas, EarthCanvas } from '../components';
import { motion } from 'framer-motion';
import useMobile from './hooks/useMobile';

const Hero = () => {
  const isMobile = useMobile();

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
            A Software Engineer <br className="sm:block hidden" />
            with a keen eye for crafting performant <br />
            and elegant web applications
          </p>
        </div>
      </div>

      {/* Computer Canvas */}
      {isMobile ? (
        <EarthCanvas isMobile={isMobile} />
      ) : (
        <ComputersCanvas isMobile={isMobile} />
      )}

      {/* Scroller Gif using framer motion */}
      {!isMobile && (
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary justify-center flex items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
