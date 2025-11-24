export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  location: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}