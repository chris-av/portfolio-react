"use client";
import { useEffect, useRef, useState, ReactNode, MutableRefObject } from 'react';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';
import classnames from 'classnames';

import useIsVisible from '@/hooks/useIsVisible';
import { pitch, disciplines, Experience } from '@/data/homepage.data';


export default function Services({ messageRef }: { messageRef: MutableRefObject<HTMLDivElement | null> }) {
  const [systems, web] = disciplines;

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

      {/* 01 — Systems & Data Engineering: the primary discipline */}
      <section className="pb-12">
        <FadeIn>
          <DisciplineHeading number={systems.number} title={systems.title} />
        </FadeIn>

        <FadeIn>
          <div className="py-8">
            {systems.focusHeading && <SubHeading>{systems.focusHeading}</SubHeading>}
            <div className="grid gap-x-12 lg:grid-cols-3">
              {systems.focusAreas.map(({ id, title, description, focus }) => (
                <div key={id} className="border-t-2 border-purple-500 py-8 dark:border-purple-light">
                  <h3 className="mb-4 text-xl md:text-2xl">{title}</h3>
                  <p className="text-gray-700 lg:text-lg dark:text-gray-300">{description}</p>
                  <TagList tags={focus} />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="py-8">
            <SubHeading>Selected Experience</SubHeading>
            <ExperienceGrid experience={systems.experience} />
            <div className="mt-10 text-center lg:text-right">
              <Link
                href="/resume"
                className="text-lg font-bold text-purple-500 underline underline-offset-4 dark:text-purple-light"
              >
                Explore full work history →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 02 — Web & Application Engineering: intentionally quieter than 01 */}
      <section className="pb-24">
        <FadeIn>
          <DisciplineHeading number={web.number} title={web.title} secondary />
        </FadeIn>

        <FadeIn>
          {web.focusAreas.map(({ id, title, description, focus }) => (
            <div key={id} className="grid gap-x-12 py-8 lg:grid-cols-[1fr_2fr]">
              <h3 className="mb-4 text-xl md:text-2xl">{title}</h3>
              <div>
                <p className="text-gray-700 lg:text-lg dark:text-gray-300">{description}</p>
                <TagList tags={focus} />
              </div>
            </div>
          ))}
        </FadeIn>

        <FadeIn>
          <div className="py-8">
            <SubHeading>Selected Experience</SubHeading>
            <ExperienceGrid experience={web.experience} secondary />
          </div>
        </FadeIn>
      </section>

    </div>
  );
}

function DisciplineHeading({ number, title, secondary = false }: { number: string; title: string; secondary?: boolean }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-gray-200 pb-4 md:gap-6 dark:border-white/10">
      <span
        className={classnames(
          "font-mono font-bold text-purple-500 dark:text-purple-light",
          secondary ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl",
        )}
      >
        {number}
      </span>
      <h2
        className={classnames(
          "font-extrabold",
          secondary ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl",
        )}
      >
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
      {children}
    </h3>
  );
}

function ExperienceGrid({ experience, secondary = false }: { experience: Experience[]; secondary?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {experience.map(({ id, domain, organization, jobtitle, range, summary, resumeAnchor }) => (
        // scroll={false} lets ScrollToHash on /resume smooth-scroll to the entry
        // instead of Next jumping straight to it.
        <Link
          key={id}
          href={`/resume#${resumeAnchor}`}
          scroll={false}
          className={classnames(
            "flex flex-col rounded-xl border border-gray-200 p-6 text-inherit no-underline transition-colors hover:border-purple-500 hover:text-inherit dark:border-white/10 dark:hover:border-purple-light",
            !secondary && "bg-gray-50 dark:bg-white/5",
          )}
        >
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-purple-500 dark:text-purple-light">
            {domain}
          </div>
          <h4 className={classnames("mb-1", secondary ? "text-xl" : "text-2xl")}>{organization}</h4>
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 border-b border-gray-200 pb-4 dark:border-white/10">
            <span className="font-bold">{jobtitle}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{range}</span>
          </div>
          <p className="mb-0 text-gray-700 dark:text-gray-300">{summary}</p>
        </Link>
      ))}
    </div>
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
