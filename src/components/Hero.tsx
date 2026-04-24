import BlurText from './ui/BlurText';
import GradientText from './ui/GradientText';
import Particles from './ui/Particles';
import { site } from '../data/site.config';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Stone background texture via CSS */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #2a1f0a 0%, #1a1510 40%, #0d0b08 100%)',
        }}
      />

      {/* Warm amber vignette — torch glow from above */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Gold dust particles */}
      <Particles count={55} color="#c9a84c" className="opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl" style={{ gap: '1.75rem' }}>
        {/* Welcome — primary eye catcher */}
        <h1
          className="font-serif font-bold tracking-tight text-center leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--color-gold)' }}
        >
          <BlurText text={site.welcome} delay={0} duration={0.7} />
        </h1>

        {/* Divider rule */}
        <div
          className="w-24 h-px"
          style={{ background: 'linear-gradient(to right, transparent, var(--color-gold), transparent)', marginTop: '-0.25rem' }}
        />

        {/* Name — secondary, subtle */}
        <p className="font-serif text-2xl sm:text-3xl font-light tracking-widest text-stone-300">
          <BlurText text={site.name} delay={0.4} duration={0.6} />
        </p>

        {/* Role — gold sweep */}
        <p className="text-sm sm:text-base font-light tracking-[0.25em] uppercase text-stone-400">
          <GradientText text={site.role} delay={0.7} />
        </p>

        {/* Tagline */}
        <p className="text-stone-500 text-sm sm:text-base max-w-xl leading-relaxed text-center">
          <BlurText text={site.tagline} delay={1.1} duration={0.5} />
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          <a
            href="#about"
            className="px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-medium transition-all duration-300"
            style={{ background: 'var(--color-gold)', color: '#0d0b08' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = 'var(--color-gold-light)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = 'var(--color-gold)')}
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-medium border transition-all duration-300 hover:border-[--color-gold] hover:text-[--color-gold]"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#a8967a' }}
          >
            Work With Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs uppercase tracking-widest text-stone-500">Scroll</span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }}
        />
      </div>
    </section>
  );
}
