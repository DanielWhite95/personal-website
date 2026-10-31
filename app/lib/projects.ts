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
    title: "Habit Tracker",
    description:
      "A small app for building daily habits, with streaks, reminders and a yearly heatmap. Built to learn more about offline-first data syncing.",
    href: "https://github.com/your-username/habit-tracker",
    tags: ["Next.js", "TypeScript", "Postgres"],
    year: "2025",
    emoji: "🌱",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Weather Dashboard",
    description:
      "A clean weather dashboard that compares forecasts from multiple providers and tells you which one to trust for the next few hours.",
    href: "https://github.com/your-username/weather-dashboard",
    tags: ["React", "APIs", "Charts"],
    year: "2024",
    emoji: "🌤️",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    title: "Recipe Box",
    description:
      "A personal cookbook where I can save recipes from the web, scale ingredients and generate a shopping list for the week.",
    href: "https://github.com/your-username/recipe-box",
    tags: ["Node.js", "SQLite", "PWA"],
    year: "2024",
    emoji: "🍳",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    title: "Home Lab",
    description:
      "My self-hosted corner of the internet: a small server running containers for backups, media, dashboards and a lot of experiments.",
    href: "https://github.com/your-username/home-lab",
    tags: ["Docker", "Linux", "Self-hosting"],
    year: "2023",
    emoji: "🛠️",
    gradient: "from-violet-500 to-fuchsia-600",
  },
];
