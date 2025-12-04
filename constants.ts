import { Experience, Project, Skill } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/malav2364",
  linkedin: "https://www.linkedin.com/in/maalavpatel/",
  behance: "https://www.behance.net/malavpatel20",
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

export const DESIGN_PROJECTS: Project[] = [
  {
    id: 101,
    title: "Thaad Restaurant & Cafe",
    category: "Brand Identity & UI",
    image: "/Thaad_images/1.png",
    description: "A comprehensive digital transformation for a newly opened food spot. The project involved creating a brand identity from scratch and designing a conversion-focused landing page to establish their online presence.",
    problem: "Thaad had no website, menu visibility, or online ordering flow. The brand was invisible online, lacking trust-building elements like testimonials and a cohesive visual identity.",
    solution: "Designed a bright, minimal, food-forward landing page. Established a clear visual identity with high-quality imagery, seamless Swiggy/Zomato integration, and a structured user journey.",
    impact: "Created a complete digital identity that builds trust and guides users smoothly toward ordering or visiting.",
    tech: ["Figma", "UI/UX", "Brand Strategy", "Prototyping"],
    gallery: [
      "/Thaad_images/1.png",
      "/Thaad_images/2.png",
      "/Thaad_images/3.png",
      "/Thaad_images/4.png",
      "/Thaad_images/5.png",
      "/Thaad_images/6.png"
    ]
  },
  {
    id: 102,
    title: "Grills & Gravies",
    category: "Website Redesign",
    image: "/grills images/1.png",
    description: "A premium redesign for an existing restaurant with a broken digital presence. The goal was to elevate the brand perception through a rich, dark-themed aesthetic that mirrors the quality of their cuisine.",
    problem: "The existing website was outdated, broken, and cluttered. It lacked visual hierarchy, had weak CTA placement, and failed to reflect the premium quality of the food.",
    solution: "Executed a complete redesign with a premium dark theme. Prioritized bold typography, dramatic food photography, and a simplified navigation flow to enhance user engagement.",
    impact: "Transformed the brand into a modern, visually immersive experience that improves food visibility and ordering clarity.",
    tech: ["Figma", "UX Research", "Dark Mode Design", "Visual Hierarchy"],
    gallery: [
      "/grills images/1.png",
      "/grills images/2.png",
      "/grills images/3.png",
      "/grills images/4.png",
      "/grills images/5.png",
      "/grills images/6.png"
    ]
  },
  {
    id: 103,
    title: "LUMIERE",
    category: "E-commerce App",
    image: "/LUMIERE images/1.jpg",
    description: "A modern e-commerce clothing app concept design focusing on visual storytelling and seamless shopping experience.",
    problem: "Users often face cluttered interfaces and complex checkout processes in fashion apps, leading to cart abandonment.",
    solution: "Designed a minimalist, image-first interface with intuitive navigation and a streamlined checkout flow.",
    impact: "Enhanced user engagement through immersive visuals and reduced friction in the purchase journey.",
    tech: ["Figma", "UI Design", "Prototyping", "Mobile App"],
    gallery: [
      "/LUMIERE images/1.jpg",
      "/LUMIERE images/2.jpg",
      "/LUMIERE images/3.jpg",
      "/LUMIERE images/4.jpg"
    ]
  }
];