import ScrollReveal from './ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-serif text-center mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-gold)' }}
          >
            About
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[260px_1fr] gap-12 items-start">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-52 h-52 rounded-sm overflow-hidden"
                style={{ border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <img
                  src="/headshot.jpg"
                  alt="Quian Bowden"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-serif text-stone-200 text-lg">Quian Bowden</p>
                <p className="text-stone-500 text-sm mt-1">CS/IT · Tuskegee '26</p>
                <p className="text-stone-500 text-sm">3.7 GPA · Murfreesboro, TN</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 text-stone-300 leading-relaxed text-sm sm:text-base">
              <p>
                It started with video games. Growing up in Murfreesboro, Tennessee, I wasn't just playing them —
                I was wondering how they were built. That curiosity led me to Python and LUA in high school,
                building games on Roblox with small dev teams while staying active in track, football, and band.
              </p>
              <p>
                What those early projects taught me wasn't just how to code. It was that building anything great
                requires coordinating people — artists, engineers, sound designers, writers all working toward a
                shared vision. That realization sparked a passion for not just creating software, but organizing
                and leading the teams behind it.
              </p>
              <p>
                At Tuskegee, I leaned into both sides. I interned at Fermi National Accelerator Laboratory on
                quantum computing research, co-founded BoyzIIGentlemen — a mentorship organization for young men
                navigating college — and served as VP of ACM and a member of Upsilon Pi Epsilon CS Honor Society.
                I also worked as a tutor, teaching assistant, and career center ambassador, and joined the Gamma Phi
                chapter of Alpha Phi Alpha Fraternity.
              </p>
              <p>
                And I competed. I led teams to three first-place finishes: HBCU Battle of the Brains, the InternXL
                AI Innovation Challenge, and the Hobart Jarrett Debate Competition. Each win required product
                thinking, team management, and execution under pressure — not just a good codebase.
              </p>
              <p>
                Now, graduating with a 3.7 GPA, I'm building toward product management — the place where
                technology, people, and strategy meet. I build because I love it. I lead because I'm built for it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
