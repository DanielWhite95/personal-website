interface Skill {
  name: string,
  level: number, // range from 0 (incompetent) to 5 (expert)
  description: string
}

const programmingLanguagesSkills: Skill[] = [
  {
    "name": "Python",
    "level": 5,
    "description": "Used to build Backend for AI applications"
  },

  {
    "name": "Typescript",
    "level": 4,
    "description": "Used to build Web Application frontend"
  },
  {
    "name": "Go",
    "level": 3,
    "description": "Used for personal projects and tools"
  },
]
