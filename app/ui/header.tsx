"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { withBasePath } from "../lib/base-path";
import Image from "next/image";

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
      className="sticky top-0 z-50 border-b-4 border-foreground bg-background"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          onClick={(event) => scrollToTarget(event, "top")}
          className="flex items-center gap-2.5 font-mono font-semibold tracking-tight"
        >
          <Image className="flex size-8 items-center justify-center border-4 border-foreground bg-foreground text-xs font-bold text-background"
          alt="Profile logo"
          src={withBasePath("/profile.jpg")}
          width={460}
          height={460}
          />
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
                    className={`block border-4 px-3 py-2 font-mono text-sm font-medium whitespace-nowrap transition-colors sm:px-4 ${
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-transparent text-zinc-600 hover:border-foreground hover:text-foreground dark:text-zinc-400"
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
