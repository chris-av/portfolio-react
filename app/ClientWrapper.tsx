"use client";
import { useRef, } from 'react';
import Introduction from '@/components/Introduction';
import Cryptos from '@/components/Cryptos';
import Services from '@/components/Services';


export default function ClientWrapper() {
  const ref = useRef<null | HTMLDivElement>(null);
  return (
    <div>
      <Introduction messageRef={ref} />

      <Services messageRef={ref} />

      <h1 className="mb-12 mt-24 text-center text-4xl">Wanna donate ? </h1>

      <Cryptos />

    </div>
  );
}

