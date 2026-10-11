"use client";
import { useEffect, useRef, useState, ReactNode, MutableRefObject } from 'react';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';

import useIsVisible from '@/hooks/useIsVisible';
import { pitch, focusAreas, selectedExperience } from '@/data/homepage.data';


export default function Services({ messageRef }: { messageRef: MutableRefObject<HTMLDivElement | null> }) {
  return (
    <div className="mx-auto w-full max-w-[1250px] px-6 pt-16 md:px-12 lg:pt-0" ref={messageRef}>

      <FadeIn>
        <section className="py-16 lg:py-24">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-purple-500 dark:text-purple-light">
            {pitch.role}
          </p>
          <p className="max-w-[1000px] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {pitch.headline}
          </p>
          <div className="my-8 h-[3px] w-24 rounded-xl bg-purple-500" />
          <p className="max-w-[750px] text-lg text-gray-600 lg:text-xl dark:text-gray-300">
            {pitch.body}
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12">
          <SectionHeading>What I Work On</SectionHeading>
          <div className="grid gap-x-12 lg:grid-cols-3">
            {focusAreas.map(({ id, title, description, focus }, i) => (
              <div key={id} className="border-t border-gray-200 py-8 dark:border-white/10">
                <div className="mb-4 font-mono text-sm font-bold text-purple-500 dark:text-purple-light">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-4 text-xl md:text-2xl">{title}</h3>
                <p className="text-gray-700 lg:text-lg dark:text-gray-300">{description}</p>
                <TagList tags={focus} />
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12">
          <SectionHeading>Selected Experience</SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            {selectedExperience.map(({ id, domain, organization, jobtitle, range, summary }) => (
              <article
                key={id}
                className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-purple-500 dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-light"
              >
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-purple-500 dark:text-purple-light">
                  {domain}
                </div>
                <h3 className="mb-1 text-2xl">{organization}</h3>
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 border-b border-gray-200 pb-4 dark:border-white/10">
                  <span className="font-bold">{jobtitle}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{range}</span>
                </div>
                <p className="mb-0 text-gray-700 dark:text-gray-300">{summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center lg:text-right">
            <Link
              href="/resume"
              className="text-lg font-bold text-purple-500 underline underline-offset-4 dark:text-purple-light"
            >
              Explore full work history →
            </Link>
          </div>
        </section>
      </FadeIn>

    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-purple-500 md:text-4xl dark:text-purple-light">{children}</h2>
      <div className="mb-8 mt-2 h-[3px] w-full rounded-xl bg-purple-500" />
    </>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="rounded-md bg-gray-100 px-3 py-1 text-sm font-bold dark:bg-white/10">
          {tag}
        </span>
      ))}
    </div>
  );
}

// Fades a section in the first time it scrolls into view, then stays put.
function FadeIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (isVisible) { setHasShown(true); }
  }, [isVisible]);

  const style = useSpring({
    opacity: hasShown ? 1 : 0,
    config: { duration: 700 },
  });

  return (
    <animated.div ref={ref} style={style}>
      {children}
    </animated.div>
  );
}
