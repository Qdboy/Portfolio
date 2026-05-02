import ScrollReveal from './ui/ScrollReveal';

const links = [
  { label: 'Email', value: 'quianbowden@gmail.com', href: 'mailto:quianbowden@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/quian-bowden', href: 'https://linkedin.com/in/quian-bowden' },
  { label: 'GitHub', value: 'github.com/Qdboy', href: 'https://github.com/Qdboy' },
  { label: 'Resume', value: 'Download PDF', href: '/resume.pdf' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h2
            className="font-serif mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-gold)' }}
          >
            Work With Me
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Open to freelance projects, PM roles, and interesting conversations.
            Reach out and let's build something.
          </p>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          {links.map((link, i) => (
            <ScrollReveal key={link.label} delay={i * 0.1}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 px-6 py-4 rounded-sm transition-all"
                style={{
                  background: 'rgba(26,21,16,0.8)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  minWidth: '180px',
                }}
              >
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-gold)', opacity: 0.7 }}
                >
                  {link.label}
                </span>
                <span className="text-stone-300 text-sm group-hover:text-stone-100 transition-colors">
                  {link.value}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-stone-600 text-xs mt-16 tracking-widest uppercase">
            Available for freelance · Open to PM opportunities
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
