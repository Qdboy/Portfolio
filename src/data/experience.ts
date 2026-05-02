export type Experience = {
  title: string;
  org: string;
  type: 'education' | 'competition' | 'freelance' | 'work';
  date: string;
  description: string;
};

export const experience: Experience[] = [
  {
    title: 'B.S. Computer Science & Information Technology',
    org: 'Tuskegee University',
    type: 'education',
    date: '2022 – May 2026',
    description: 'Four-year CS/IT program at a historically Black research university in Tuskegee, Alabama. Graduated May 9, 2026. Coursework spanning software engineering, data structures, networks, and systems. Actively recruited from Murfreesboro, TN and now travels between TN, AL, and GA for professional development.',
  },
  {
    title: 'Battle of the Brains — 1st Place',
    org: 'HBCU Competition (Team Lead)',
    type: 'competition',
    date: 'Spring 2026',
    description: 'Led an 8-person team to first place in the Battle of the Brains HBCU tech competition — the first time Tuskegee University had ever placed in the top ranks of the competition. Personally selected every team member. Built Shop.py + ShopSmart: a full-stack GEO analytics platform and Chrome extension tracking AI-influenced shopping behavior. Returned as Team Lead after competing the prior year as a regular member and experiencing a crushing loss; assembled the strongest team possible to finish the job.',
  },
  {
    title: 'InternXL Hackathon — PolitiU',
    org: 'InternXL',
    type: 'competition',
    date: '2026',
    description: 'Built PolitiU — a political education platform designed to combat voter apathy, misinformation, and low municipal election turnout. The prompt: build software that addresses a real community problem. The team chose to tackle political disengagement, believing an informed electorate is the foundation of a functioning democracy. Live at internxlpolitiu.lovable.app.',
  },
  {
    title: 'Freelance Developer',
    org: 'Independent',
    type: 'freelance',
    date: '2026 – Present',
    description: 'Building web applications and AI-powered tools for clients. Specializing in full-stack development with React, TypeScript, Python, and PostgreSQL. Available for new projects.',
  },
];
