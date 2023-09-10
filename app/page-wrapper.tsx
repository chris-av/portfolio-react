"use client";
import { useRef, } from 'react';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';


export default function PageWrapper() {
  const ref = useRef<null | HTMLDivElement>(null);
  return (
    <div>
      <Introduction messageRef={ref} />

      <Services messageRef={ref} />

    </div>
  );
}

