"use client";
import { useRef, } from 'react';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';
import Image from 'next/image';
import Link from 'next/link';
import { fiverr, upwork, } from '@/data/socials';

export default function PageWrapper() {
  const ref = useRef<null | HTMLDivElement>(null);
  return (
    <div>
      <Introduction messageRef={ref} />
      <Services messageRef={ref} />

      <div className="mx-auto my-24 flex min-h-[350px] max-w-[800px] flex-col justify-around px-12 font-bold">
        <h2 className="font-bond mb-12 text-center text-2xl lg:mb-0 lg:text-4xl">Find me in the following platforms!</h2>
        <div className="relative mx-auto my-12 flex h-[85px] w-full flex-col items-center justify-around lg:w-3/4 lg:flex-row">
          <a href={fiverr} target="_blank" rel="noopener noreferrer" className="left-0 top-1/2 -translate-y-1/2 transform lg:absolute">
            <div className="border-1 w-[150px] rounded-xl border-[#0079D0] p-4 shadow-[0_6px_12px_0_rgba(0,121,208,0.6)] transition-all hover:w-[200px] lg:w-[180px]">
              <Image
                src="/fiverr.svg"
                alt="Fiverr Logo"
                height={29}
                width={97}
                className="w-full"
              />
            </div>
          </a>
          <div className="my-4 lg:my-0" />
          <a href={upwork} target="_blank" rel="noopener noreferrer" className="right-0 top-1/2 -translate-y-1/2 lg:absolute ">
            <div className="border-1 w-[150px] rounded-xl border-[#00d559] p-4 shadow-[0_6px_12px_0_rgba(0,213,89,0.6)] transition-all hover:w-[220px] lg:w-[200px]">
              <Image
                src="/upwork-logo.svg"
                alt="Upwork Logo"
                height={28}
                width={102}
                className="w-full"
              />
            </div>
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-[1250px] px-12 text-center text-2xl lg:mt-0">
          Check out my work history&nbsp;
          <span>
            <Link
              href="/resume"
              className="font-bold text-blue-900 underline"
              target="_blank" rel="noopener noreferrer"
            >here</Link>
          </span>
          .
        </div>
      </div>

    </div>
  );
}
