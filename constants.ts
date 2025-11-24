import { Experience, Project, Skill } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/malav2364",
  linkedin: "https://www.linkedin.com/in/maalavpatel/",
  email: "malavp024@gmail.com",
  phone: "9662905973"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Opportunity Lens",
    category: "Full Stack",
    image: "https://picsum.photos/800/600?random=1",
    description: "A modern, AI-driven web application for personalized knowledge assessment. Features dynamic quizzes, detailed analytics, and secure authentication.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind", "Framer Motion"]
  },
  {
    id: 2,
    title: "Calorie Tracker",
    category: "Health Tech",
    image: "https://picsum.photos/800/600?random=2",
    description: "Daily tracking application allowing users to log meals and monitor caloric intake with Auth.js integration.",
    tech: ["React", "Auth.js", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    title: "PDF Summarizer",
    category: "AI Tool",
    image: "https://picsum.photos/800/600?random=3",
    description: "An intelligent tool that analyzes PDF documents and generates concise summaries for quick consumption.",
    tech: ["Python", "AI/ML", "React", "FastAPI"]
  },
  {
    id: 4,
    title: "Xcite Edu Design",
    category: "UI/UX",
    image: "https://picsum.photos/800/600?random=4",
    description: "User research and interface design for an educational platform, focusing on accessibility and student engagement.",
    tech: ["Figma", "User Research", "Prototyping"]
  }
];

export const EXPERIENCE_GROUPS = [
  {
    id: 1,
    title: "Zidio Development",
    items: [{
      id: 'exp-1',
      title: "Full Stack Web Developer Intern",
      date: "May 2025 - July 2025",
      location: "Remote",
      description: "Developed full-stack web applications and designed UI/UX interfaces. Managed backend logic alongside frontend implementation.",
      isLatest: true
    }]
  },
  {
    id: 2,
    title: "Xcite Education",
    items: [{
      id: 'exp-2',
      title: "UI/UX Designer",
      date: "Nov 2022 - Feb 2023",
      location: "Remote",
      description: "Collaborated with diverse teams to create digital experiences. Conducted deep user research and usability testing."
    }]
  }
];

export const EDUCATION_GROUPS = [
  {
    id: 1,
    title: "Parul Institute of Engineering",
    items: [{
      id: 'edu-1',
      title: "B.Tech CSE",
      date: "2023 - 2026",
      location: "Vadodara, India",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering, focusing on advanced algorithms and software architecture.",
      isLatest: true
    }]
  },
  {
    id: 2,
    title: "Parul Polytechnic Institute",
    items: [{
      id: 'edu-2',
      title: "Diploma Computer Eng.",
      date: "2020 - 2023",
      location: "Vadodara, India",
      description: "Completed Diploma in Computer Engineering with distinction. Built strong foundation in programming and system analysis."
    }]
  }
];

export const SKILLS: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "AWS", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
];