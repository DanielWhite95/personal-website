import { projects } from "@/app/lib/projects";
import { ProjectsCarousel } from "@/app/ui/projects-carousel";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Postgres",
  "Docker",
  "Self-hosting",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="who-am-i"
        className="relative scroll-mt-24 overflow-hidden border-b border-black/[.06] dark:border-white/[.08]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55rem_30rem_at_15%_-10%,rgba(99,102,241,0.14),transparent_60%)]"
        />

        <div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/[.08] bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-700 backdrop-blur dark:border-white/[.12] dark:bg-white/[.04] dark:text-zinc-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Hi, I’m Daniele
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            I build things for the web,{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              and I enjoy the process.
            </span>
          </h1>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            <p>
              I’m a software developer with a soft spot for clean interfaces,
              fast feedback loops and projects that solve small, everyday
              problems. Most of my work happens in TypeScript, React and
              Next.js, with a healthy amount of tinkering on the side.
            </p>
            <p>
              This site is where I collect the things I’ve built, the ideas I’m
              exploring and the projects I’m currently working on. Have a look
              around — and get in touch if something catches your eye.
            </p>
          </div>

          <ul className="mt-8 flex max-w-2xl flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-black/[.08] bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-white/[.12] dark:bg-white/[.04] dark:text-zinc-300"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#personal-projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:bg-zinc-700 dark:hover:bg-zinc-200"
            >
              Explore my projects
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
            <a
              href="mailto:daniele.marsella95@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/[.1] bg-white px-6 text-sm font-semibold text-zinc-800 transition hover:border-transparent hover:bg-black/[.04] dark:border-white/[.15] dark:bg-white/[.03] dark:text-zinc-200 dark:hover:bg-white/[.08]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="personal-projects" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
          <ProjectsCarousel projects={projects} />
        </div>
      </section>

      <footer className="border-t border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-zinc-400">
          <p>© Daniele. Built with Next.js.</p>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-full border border-black/[.08] bg-white text-zinc-600 transition hover:border-transparent hover:bg-black/[.04] hover:text-zinc-950 dark:border-white/[.12] dark:bg-white/[.03] dark:text-zinc-300 dark:hover:bg-white/[.08] dark:hover:text-zinc-50"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <span
              aria-hidden="true"
              className="h-4 w-px bg-black/[.1] dark:bg-white/[.15]"
            />

            <a
              href="#top"
              className="font-medium text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
