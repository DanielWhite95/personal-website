export type CareerEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  description: string;
  highlights: string[];
};

// Replace these sample entries with your own roles and dates.
export const career: CareerEntry[] = [
  {
    role: "Software Engineer Manager",
    company: "Docebo",
    location: "Biassono, Italy",
    start: "2025",
    end: "2026",
    current: false,
    description:
      "Building thoughtful, reliable web experiences and helping turn ideas into products.",
    highlights: ["Team Coordination", "Roadmap definition", "Project design"],
  },
  {
    role: "Software Engineer",
    company: "Docebo",
    location: "Biassono, Italy",
    start: "2021",
    end: "2025",
    current: false,
    description:
      "Building thoughtful, reliable web experiences and helping turn ideas into products.",
    highlights: ["Backend Development", "AI Applications", "Cross-functional collaboration"],
  },
  {
    role: "UNIX System Adminstrator",
    company: "IBM",
    location: "Milan, Italy",
    start: "2019",
    end: "2021",
    description:
      "Worked across the frontend lifecycle, from shaping interfaces to shipping features used by customers.",
    highlights: ["React & TypeScript", "Design systems", "Performance improvements"],
  },
];
