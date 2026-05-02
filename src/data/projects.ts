export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  url?: string;
  github?: string;
  highlight?: string;
  category: 'competition' | 'personal' | 'freelance';
  year: string;
};

export const projects: Project[] = [
  {
    title: 'Shop.py + ShopSmart',
    subtitle: 'Battle of the Brains — 1st Place',
    description:
      'Full-stack GEO analytics platform and Chrome extension built for the 2026 HBCU Battle of the Brains competition. Tracked and visualized AI-influenced shopping behavior across geographic regions. Led an 8-person team to first place — the first top finish in Tuskegee University\'s competition history.',
    stack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Docker', 'Chrome MV3'],
    highlight: '1st Place — HBCU Battle of the Brains 2026',
    category: 'competition',
    year: '2026',
  },
  {
    title: 'PolitiU',
    subtitle: 'InternXL Hackathon',
    description:
      'Political education platform built to combat voter apathy, misinformation, and low municipal election turnout. Surfaces local policy changes, candidate profiles, and civic resources to help users engage with the political issues that directly affect them. Built in response to the InternXL hackathon prompt: solve a real community problem.',
    stack: ['Lovable', 'React', 'TypeScript', 'Supabase'],
    url: 'https://internxlpolitiu.lovable.app/',
    highlight: 'InternXL Hackathon 2026',
    category: 'competition',
    year: '2026',
  },
  {
    title: 'ObsidianETFS',
    subtitle: 'Automated Dividend Swing Trading Bot',
    description:
      'Python trading bot with live Webull broker integration, real-time Slack alerts, and a PostgreSQL-backed strategy engine. Scans 30+ ETFs and catalyst stocks daily, executes a dividend capture strategy, and monitors positions autonomously on Railway. Paper trading mode with full pipeline validation.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'APScheduler', 'Railway', 'Webull API', 'Polygon.io'],
    github: 'https://github.com/Qdboy/ObsidianETFS',
    category: 'personal',
    year: '2026',
  },
];
