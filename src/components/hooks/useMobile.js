import React, { useEffect, useState } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add event listener for changes to screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // set initial value of isMobile state variable
    setIsMobile(mediaQuery.matches);

    // callback fn to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add callback function as listener for changes to media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

export default useMobile;
