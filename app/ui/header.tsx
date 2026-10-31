"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const sections = [
  { id: "who-am-i", label: "Who Am I", shortLabel: "About" },
  {
    id: "personal-projects",
    label: "Personal Projects",
    shortLabel: "Projects",
  },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  // Ignore the scroll spy while a programmatic smooth scroll is running.
  const scrollLockUntil = useRef(0);
  const [active, setActive] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const updateActive = () => {
      if (Date.now() < scrollLockUntil.current) return;

      let current: SectionId = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 140) {
          current = section.id;
        }
      }

      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const scrollToTarget = (
    event: MouseEvent<HTMLAnchorElement>,
    id: SectionId | "top",
  ) => {
    event.preventDefault();

    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    let top = 0;

    if (id !== "top") {
      const element = document.getElementById(id);
      if (!element) return;
      top = Math.max(
        0,
        element.getBoundingClientRect().top + window.scrollY - headerHeight,
      );
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    scrollLockUntil.current = Date.now() + 900;
    setActive(id === "top" ? sections[0].id : id);

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    const hash = id === "top" ? "" : `#${id}`;
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${hash}`,
    );
  };

  return (
    <header
      ref={headerRef}
      id="top"
      className="sticky top-0 z-50 border-b border-black/[.08] bg-background/80 backdrop-blur-md dark:border-white/[.145]"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          onClick={(event) => scrollToTarget(event, "top")}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
            DM
          </span>
          <span className="hidden sm:inline">Daniele</span>
        </a>

        <nav aria-label="Page sections">
          <ul className="flex items-center gap-1 sm:gap-2">
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(event) => scrollToTarget(event, section.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors sm:px-4 ${
                      isActive
                        ? "bg-black/[.06] text-zinc-950 dark:bg-white/[.1] dark:text-zinc-50"
                        : "text-zinc-600 hover:bg-black/[.04] hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[.06] dark:hover:text-zinc-50"
                    }`}
                  >
                    <span className="sm:hidden">{section.shortLabel}</span>
                    <span className="hidden sm:inline">{section.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
