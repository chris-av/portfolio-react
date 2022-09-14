import React, { useEffect, useState, useRef } from 'react';


export default function useIsVisible(ref) {
  const [ isVisible, setIsVisible ] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    }
  }, [ref]);

  return isVisible;

}

