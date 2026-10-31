"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type TypewriterProps = {
  text: string;
  /** Milliseconds between each character. */
  speed?: number;
  /** Milliseconds before typing starts. */
  startDelay?: number;
  className?: string;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

export function Typewriter({
  text,
  speed = 45,
  startDelay = 400,
  className,
}: TypewriterProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setTyped((current) => {
          if (current >= text.length) {
            if (interval) clearInterval(interval);
            return current;
          }
          return current + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay, prefersReducedMotion]);

  const visible = prefersReducedMotion ? text : text.slice(0, typed);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {visible}
        <span className="ml-1 inline-block h-[0.9em] w-[0.55em] translate-y-[0.12em] animate-blink bg-foreground" />
      </span>
    </span>
  );
}
