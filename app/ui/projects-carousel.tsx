"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { Project } from "@/app/lib/projects";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-4 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const maxIndex = Math.max(0, projects.length - visibleCount);
  const activeIndex = Math.min(index, maxIndex);

  const scrollToIndex = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;

    const target = Math.max(0, Math.min(next, projects.length - 1));
    const card = track.children[target] as HTMLElement | undefined;
    if (!card) return;

    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setIndex(target);
  }, [projects.length]);

  // Measure how many cards fit in the viewport.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const first = track.children[0] as HTMLElement | undefined;
      if (!first) return;

      const styles = getComputedStyle(track);
      const gap =
        parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const count = Math.max(
        1,
        Math.round((track.clientWidth + gap) / (first.offsetWidth + gap)),
      );

      setVisibleCount(Math.min(count, projects.length));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);

    return () => observer.disconnect();
  }, [projects.length]);

  // Keep the active dot in sync with manual scrolling / swiping.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      let closest = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, cardIndex) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closest = cardIndex;
        }
      });

      setIndex(Math.min(closest, maxIndex));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [maxIndex]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(Math.min(activeIndex + 1, maxIndex));
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(Math.max(activeIndex - 1, 0));
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
            Things I build
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            Personal Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A mix of side projects, experiments and tools I use myself. Select a
            card to see the project, its code or the live version.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="flex size-10 items-center justify-center rounded-full border border-black/[.1] bg-white text-zinc-700 transition hover:border-transparent hover:bg-black/[.04] disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/[.15] dark:bg-white/[.03] dark:text-zinc-300 dark:hover:bg-white/[.08]"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex >= maxIndex}
            aria-label="Next project"
            className="flex size-10 items-center justify-center rounded-full border border-black/[.1] bg-white text-zinc-700 transition hover:border-transparent hover:bg-black/[.04] disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/[.15] dark:bg-white/[.03] dark:text-zinc-300 dark:hover:bg-white/[.08]"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Personal projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4 focus-visible:ring-offset-background [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, projectIndex) => (
          <article
            key={project.title}
            aria-roledescription="slide"
            aria-label={`${projectIndex + 1} of ${projects.length}`}
            className="w-[88%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[.08] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[.08] dark:border-white/[.1] dark:bg-white/[.03] dark:hover:shadow-black/40"
            >
              <div
                className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="text-5xl drop-shadow-sm" aria-hidden="true">
                  {project.emoji}
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-black/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-black/[.04] px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-white/[.06] dark:text-zinc-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Visit project
                  <ArrowIcon direction="right" />
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => {
          const isActive = activeIndex === dotIndex;

          return (
            <button
              key={dotIndex}
              type="button"
              onClick={() => scrollToIndex(dotIndex)}
              aria-label={`Go to project ${dotIndex + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                isActive
                  ? "w-6 bg-indigo-600 dark:bg-indigo-400"
                  : "w-2 bg-black/[.15] hover:bg-black/[.3] dark:bg-white/[.2] dark:hover:bg-white/[.4]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
