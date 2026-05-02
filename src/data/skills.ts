export type Skill = {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools & DevOps' | 'AI & Automation';
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'Frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' },
  { name: 'Astro', icon: 'astro', category: 'Frontend' },
  { name: 'Framer Motion', icon: 'framer', category: 'Frontend' },
  { name: 'Vite', icon: 'vite', category: 'Frontend' },
  { name: 'HTML5', icon: 'html5', category: 'Frontend' },
  { name: 'CSS3', icon: 'css3', category: 'Frontend' },

  // Backend
  { name: 'Python', icon: 'python', category: 'Backend' },
  { name: 'FastAPI', icon: 'fastapi', category: 'Backend' },
  { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'Express', icon: 'express', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'Backend' },
  { name: 'Prisma', icon: 'prisma', category: 'Backend' },

  // Tools & DevOps
  { name: 'Git', icon: 'git', category: 'Tools & DevOps' },
  { name: 'GitHub', icon: 'github', category: 'Tools & DevOps' },
  { name: 'Docker', icon: 'docker', category: 'Tools & DevOps' },
  { name: 'Cloudflare', icon: 'cloudflare', category: 'Tools & DevOps' },
  { name: 'Railway', icon: 'railway', category: 'Tools & DevOps' },
  { name: 'Chrome Extensions', icon: 'googlechrome', category: 'Tools & DevOps' },

  // Languages (additional)
  { name: 'C++', icon: 'cplusplus', category: 'Backend' },
  { name: 'SQL', icon: 'postgresql', category: 'Backend' },

  // AI & Automation
  { name: 'Claude AI', icon: 'anthropic', category: 'AI & Automation' },
  { name: 'Lovable', icon: 'lovable', category: 'AI & Automation' },
  { name: 'Qiskit', icon: 'ibm', category: 'AI & Automation' },
];
