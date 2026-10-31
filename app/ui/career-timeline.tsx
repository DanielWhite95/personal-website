import type { CareerEntry } from "@/app/lib/career";

export function CareerTimeline({ entries }: { entries: CareerEntry[] }) {
  return (
    <section id="career" className="scroll-mt-24 border-y-4 border-foreground bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            <span aria-hidden="true" className="select-none text-zinc-400 dark:text-zinc-500">$ </span>
              tree ~/work
          </p>
          <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            Career
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            A timeline of the teams, roles and experiences that have shaped my work.
          </p>
        </div>

        <ol className="relative ml-2 border-l-4 border-foreground sm:ml-3">
          {entries.map((entry) => (
            <li key={`${entry.company}-${entry.start}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span
                aria-hidden="true"
                className={`absolute -left-[11px] top-1 size-4 border-4 border-foreground ${entry.current ? "bg-foreground" : "bg-background"}`}
              />
              <article className="border-4 border-foreground bg-background p-5 shadow-[6px_6px_0_var(--foreground)] sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                      {entry.start} — {entry.end}
                    </p>
                    <h3 className="mt-2 text-xl font-bold sm:text-2xl">{entry.role}</h3>
                    <p className="mt-1 font-mono text-sm font-semibold">
                      {entry.company} <span className="text-zinc-500 dark:text-zinc-400">· {entry.location}</span>
                    </p>
                  </div>
                  {entry.current && (
                    <span className="inline-flex w-fit items-center gap-2 border-4 border-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide">
                      <span aria-hidden="true" className="size-2 bg-foreground" />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-5 max-w-3xl leading-7 text-zinc-700 dark:text-zinc-300">
                  {entry.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="border-2 border-foreground px-2.5 py-1 font-mono text-xs font-medium">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
        {entries.length === 0 && (
          <p className="border-4 border-foreground bg-background p-5 font-mono text-sm">
            Career history coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
