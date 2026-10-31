export type Project = {
  title: string;
  description: string;
  /** Where the card should send the viewer. */
  href: string;
  tags: string[];
  year: string;
  /** Large glyph shown in the card banner. */
  emoji: string;
  /** Tailwind gradient classes used for the card banner. */
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "SuperMauroBros",
    description:
      "A computer graphics project to learn WebGL, with custom shaders and a hand-rolled rendering pipeline.",
    href: "https://danielwhite95.github.io/SuperMauroBros/",
    tags: ["WebGL", "GLSL", "JavaScript"],
    year: "2024",
    emoji: "🎮",
    gradient: "from-rose-500 to-orange-600",
  },
  {
    title: "Learn To Fly",
    description:
      "An experiment to learn Rust by implementing a genetic algorithm that evolves agents to fly through a course.",
    href: "https://danielwhite95.github.io/learn-to-fly-rs",
    tags: ["Rust", "Genetic Algorithms", "Simulation"],
    year: "2024",
    emoji: "🦀",
    gradient: "from-orange-600 to-amber-500",
  },
];
