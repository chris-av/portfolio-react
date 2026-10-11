"use client";
import { useEffect } from 'react';

// Smooth-scrolls to the element named by the URL fragment (e.g. /resume#dnc)
// once the page mounts, since client-side navigation doesn't animate it.
export default function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) { return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return null;
}
