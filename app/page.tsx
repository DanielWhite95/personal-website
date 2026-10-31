import { projects } from "@/app/lib/projects";
import { ProjectsCarousel } from "@/app/ui/projects-carousel";
import { Typewriter } from "@/app/ui/typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <FaGithub/>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    icon: (
      <FaLinkedin/>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="who-am-i"
        className="scroll-mt-24 border-b-4 border-foreground"
      >
        <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="inline-flex items-center gap-2 border-4 border-foreground bg-background px-3 py-1.5 font-mono text-sm font-medium text-foreground">
            <span aria-hidden="true" className="select-none">~/</span>
            Hi, I’m Daniele
          </p>

          <h1 className="mt-6 max-w-3xl font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span aria-hidden="true" className="select-none text-zinc-400 dark:text-zinc-500">
              ${" "}
            </span>
            <Typewriter text="I build things for the web, and I enjoy the process." />
          </h1>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-zinc-700 dark:text-zinc-300 sm:text-lg">
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
                className="border-4 border-foreground bg-background px-3 py-1.5 font-mono text-sm font-medium text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#personal-projects"
              className="inline-flex h-12 items-center justify-center gap-2 border-4 border-foreground bg-foreground px-6 font-mono text-sm font-semibold text-background transition hover:bg-background hover:text-foreground"
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
              className="inline-flex h-12 items-center justify-center border-4 border-foreground bg-background px-6 font-mono text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background"
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

      <footer className="border-t-4 border-foreground">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 font-mono text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-zinc-400">
          <p>© Daniele. Built with Next.js.</p>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center border-4 border-foreground bg-background text-foreground transition hover:bg-foreground hover:text-background"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <span
              aria-hidden="true"
              className="h-4 w-1 bg-foreground"
            />

            <a
              href="#who-am-i"
              className="font-medium text-foreground underline-offset-4 transition hover:underline"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
