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

      <div className="mx-auto flex max-w-[800px] flex-col items-center justify-around p-12 font-bold lg:flex-row">
        <a href={fiverr} target="_blank" rel="noopener noreferrer">
          <div className="w-[150px] rounded-xl border border-black p-4 shadow-sm shadow-black transition-all hover:border-blue-900 hover:shadow-blue-900 lg:w-[250px]">
            <Image
              src="/fiverr.svg"
              alt="Fiverr Logo"
              height={29}
              width={97}
              className="w-full"
            />
          </div>
        </a>
        <div className="my-8 lg:my-0" />
        <a href={upwork} target="_blank" rel="noopener noreferrer">
          <div className="w-[150px] rounded-xl border border-black p-4 shadow-sm shadow-black transition-all hover:border-blue-900 hover:shadow-blue-900 lg:w-[250px]">
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

      <div className="mx-auto my-12 max-w-[1250px] p-12 text-center text-2xl">
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
  );
}
