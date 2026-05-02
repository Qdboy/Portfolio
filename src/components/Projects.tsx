import { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { projects } from '../data/projects';
import { experience } from '../data/experience';

type TimelineItem = {
  year: string;
  side: 'left' | 'right';
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  url?: string;
  github?: string;
};

// Left = personal milestones, Right = technical projects
const timelineItems: TimelineItem[] = [
  {
    year: '2022',
    side: 'left',
    title: 'Tuskegee University',
    subtitle: 'B.S. Computer Science & IT',
    description: 'Enrolled at Tuskegee University in Tuskegee, Alabama — a historically Black research university. Chose CS/IT driven by a childhood love of video games and a desire to understand how the worlds inside them were built.',
  },
  {
    year: 'Summer 2023',
    side: 'right',
    title: 'Fermi National Accelerator Laboratory',
    subtitle: 'QCIPU Intern — Quantum Computing',
    description: 'Interned at Fermi National Lab in Batavia, Illinois under theoretical physicists. Developed quantum circuits to run on real quantum computers using Qiskit, and built Python tools for gathering and visualizing data from quantum simulations.',
    tags: ['Python', 'Qiskit', 'Quantum Computing'],
  },
  {
    year: '2024',
    side: 'left',
    title: 'BoyzIIGentlemen',
    subtitle: 'Co-Founder & President',
    description: 'Co-founded BoyzIIGentlemen — a mentorship organization dedicated to helping young men acquire the skills they\'ll need to succeed throughout college and beyond. Served as President (2024–2025) and Vice President (2025–present).',
  },
  {
    year: 'Summer 2024',
    side: 'left',
    title: 'ITEST Program Organizer',
    subtitle: 'Tuskegee University',
    description: 'Instructed 30+ high school students through building apps with the MIT App Inventor. Led professional development sessions on portfolios, resumes, college prep, and career paths — collaborating with field professionals to expose students to STEM careers.',
  },
  {
    year: '2025',
    side: 'left',
    title: 'Battle of the Brains',
    subtitle: 'First competition — team member',
    description: 'First experience competing in the HBCU Battle of the Brains. Competing as a team member, the experience ended in a tough loss — but planted the seed to come back stronger.',
  },
  {
    year: 'Summer 2025',
    side: 'left',
    title: 'SIMS Lifecycle Services',
    subtitle: 'Data Technician',
    description: 'Harvested DIMMs, BMC, and data from META servers before dismantling and recycling hardware to conserve global resources. Grasped the role quickly and began training others within the first month — maintaining a flawless quality record throughout.',
  },
  {
    year: '2026',
    side: 'right',
    title: 'ObsidianETFS',
    subtitle: 'Automated Trading Bot',
    description: projects.find(p => p.title === 'ObsidianETFS')?.description ?? '',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Railway'],
    github: 'https://github.com/Qdboy/ObsidianETFS',
  },
  {
    year: '2026',
    side: 'left',
    title: 'Battle of the Brains — 1st Place',
    subtitle: 'Team Lead, 8-person team',
    description: projects.find(p => p.title === 'Shop.py + ShopSmart')?.description ?? '',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Docker', 'Chrome MV3'],
  },
  {
    year: '2026',
    side: 'right',
    title: 'PolitiU',
    subtitle: 'InternXL Hackathon',
    description: projects.find(p => p.title === 'PolitiU')?.description ?? '',
    tags: ['React', 'TypeScript', 'Supabase', 'Lovable'],
    url: 'https://internxlpolitiu.lovable.app/',
  },
  {
    year: '2026',
    side: 'left',
    title: 'Hobart Jarrett Debate — 1st Place',
    subtitle: 'Debate Team Lead',
    description: 'Led Tuskegee University\'s team to a first-place finish at the Hobart Jarrett Debate Competition — the third national first-place victory of the year, alongside BOTB and InternXL. Three wins in one year, each requiring team coordination, strategic thinking, and execution under pressure.',
  },
  {
    year: 'May 2026',
    side: 'left',
    title: 'Graduation',
    subtitle: 'Tuskegee University',
    description: 'Received Bachelor of Science in Computer Science & Information Technology on May 9, 2026. Four years of building, competing, leading, and learning — culminating in a degree and a body of work that reflects the full journey.',
  },
];

function TimelineCard({ item }: { item: TimelineItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: '1000px', width: '100%', maxWidth: '400px' }}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '180px',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'rgba(26, 21, 16, 0.8)',
            border: '1px solid rgba(201, 168, 76, 0.2)',
            borderRadius: '4px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-gold)', opacity: 0.7 }}>
            {item.year}
          </span>
          <h3 className="font-serif text-lg font-medium text-stone-200">{item.title}</h3>
          <p className="text-sm text-stone-500">{item.subtitle}</p>
          <p className="text-xs text-stone-600 mt-auto">Tap to read more ↩</p>
        </div>

        {/* Back */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'rgba(26, 21, 16, 0.95)',
            border: '1px solid rgba(201, 168, 76, 0.35)',
            borderRadius: '4px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <p className="text-sm text-stone-300 leading-relaxed">{item.description}</p>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-sm"
                  style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--color-gold)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {(item.url || item.github) && (
            <div className="flex gap-3 text-xs">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ color: 'var(--color-gold)' }}
                  className="hover:underline"
                >
                  Live site ↗
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ color: 'var(--color-gold)' }}
                  className="hover:underline"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-serif text-center mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-gold)' }}
          >
            The Journey
          </h2>
          <p className="text-center text-stone-500 text-sm tracking-widest uppercase mb-16">
            Personal milestones on the left · Technical work on the right
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)' }}
          />

          <div className="flex flex-col gap-12">
            {timelineItems.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className={`flex items-start gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}>
                  {/* Card side */}
                  <div className={`flex-1 flex ${item.side === 'right' ? 'md:justify-start' : 'md:justify-end'}`}>
                    <TimelineCard item={item} />
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: '2rem' }}>
                    <div
                      className="w-3 h-3 rounded-full mt-6"
                      style={{ background: 'var(--color-gold)', boxShadow: '0 0 12px rgba(201,168,76,0.5)' }}
                    />
                  </div>

                  {/* Empty opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
