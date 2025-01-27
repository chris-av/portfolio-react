"use client";
import { useEffect, useState, useRef, MutableRefObject } from 'react';

export default function useIsVisible(ref : MutableRefObject<Element | null>) {
  const [ isVisible, setIsVisible ] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
  }, []);

  useEffect(() => {
    if (!ref.current) { return; }
    observerRef.current?.observe(ref.current);
    return () => {
      observerRef.current?.disconnect();
    }
  }, [ref]);

  return isVisible;

}
