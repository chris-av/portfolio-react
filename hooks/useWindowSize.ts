import { useState, useEffect } from 'react';


export default function useWindowSize() {

  // initialize state with undefined
  const [ windowSize, setWindowSize ] = useState({
    width: 0,
    height: 0,
  });

  // useEffect gets called on client
  // if you are on the client, there must be a window
  useEffect(() => {

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // event listener
    window.addEventListener('resize', handleResize);

    // call handler right away so state gets updated with initial window size
    handleResize();

    // remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return windowSize;

}



