import ScrollReveal from './ui/ScrollReveal';
import { skills } from '../data/skills';

const categories = ['Frontend', 'Backend', 'Tools & DevOps', 'AI & Automation'] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-serif text-center mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-gold)' }}
          >
            Skills
          </h2>
          <p className="text-center text-stone-500 text-sm tracking-widest uppercase mb-16">
            Tools of the trade
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat} delay={ci * 0.1}>
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: 'var(--color-gold)', opacity: 0.7 }}
                >
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(s => s.category === cat)
                    .map(s => (
                      <span
                        key={s.name}
                        className="text-sm px-3 py-1 rounded-sm text-stone-300"
                        style={{
                          background: 'rgba(201,168,76,0.06)',
                          border: '1px solid rgba(201,168,76,0.18)',
                        }}
                      >
                        {s.name}
                      </span>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
