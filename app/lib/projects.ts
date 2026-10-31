import { withBasePath } from "./base-path";

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
  /** Optional image to use as a preview **/
  previewImg?: {
    src: string,
    width: number,
    height: number
  };
};

export const projects: Project[] = [
  {
    title: "Learn To Fly",
    description:
      "An experiment to learn Rust by implementing a genetic algorithm that evolves agents to fly through a course.",
    href: "https://danielwhite95.github.io/learn-to-fly-rs",
    tags: ["Rust", "Genetic Algorithms", "Simulation"],
    previewImg: {
      src: withBasePath("/learn-to-fly.png"),
      width: 1830,
      height: 613
    },
    year: "2024",
    emoji: "🦀",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    title: "SuperMauroBros",
    description:
      "A computer graphics project to learn WebGL, with custom shaders and a hand-rolled rendering pipeline.",
    href: "https://danielwhite95.github.io/SuperMauroBros/",
    previewImg: {
      src: withBasePath("/super-mauro-bros.png"),
      width: 1830,
      height: 613
    },
    tags: ["WebGL", "GLSL", "JavaScript"],
    year: "2019",
    emoji: "🎮",
    gradient: "from-rose-500 to-orange-600",
  },
];
