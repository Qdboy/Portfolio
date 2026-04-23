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
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
        {/* Name */}
        <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight leading-none">
          <BlurText
            text={site.name}
            className="text-stone-100"
            duration={0.7}
          />
        </h1>

        {/* Role — gold sweep */}
        <p className="text-xl sm:text-2xl font-light tracking-widest uppercase">
          <GradientText text={site.role} delay={0.5} />
        </p>

        {/* Tagline */}
        <p
          className="text-stone-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ animationDelay: '0.9s' }}
        >
          <BlurText text={site.tagline} delay={0.9} duration={0.5} />
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-medium transition-all duration-300"
            style={{
              background: 'var(--color-gold)',
              color: '#0d0b08',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = 'var(--color-gold-light)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = 'var(--color-gold)')}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-medium border transition-all duration-300 hover:border-[--color-gold] hover:text-[--color-gold]"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#a8967a' }}
          >
            Hire Me
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
