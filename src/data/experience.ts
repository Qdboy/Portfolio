export type Experience = {
  title: string;
  org: string;
  type: 'education' | 'competition' | 'freelance' | 'work';
  date: string;
  description: string;
};

export const experience: Experience[] = [
  {
    title: 'CS/IT Degree',
    org: 'University',
    type: 'education',
    date: '2022 – 2026',
    description: 'Bachelor\'s degree in Computer Science / Information Technology.',
  },
  {
    title: 'Battle of the Builds 2026',
    org: 'BOTB Competition',
    type: 'competition',
    date: '2026',
    description: 'Competed in the 2026 Battle of the Builds — built a full-stack application under competition constraints.',
  },
  {
    title: 'InternXL Hackathon',
    org: 'InternXL',
    type: 'competition',
    date: '2026',
    description: 'Built an AI-powered tool during the InternXL hackathon.',
  },
  {
    title: 'Freelance Developer',
    org: 'Independent',
    type: 'freelance',
    date: '2026 – Present',
    description: 'Building web apps and AI-powered tools for clients. Available for new projects.',
  },
];
