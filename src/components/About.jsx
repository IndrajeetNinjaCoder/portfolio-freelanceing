import './About.css';

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Production-Ready',
    desc: 'Every project is built to ship — tested, documented, and deployable.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Turnaround',
    desc: 'I move quickly without cutting corners — MVPs in days, not months.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Strong Communication',
    desc: 'Clear updates, honest timelines, and proactive problem-solving.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Always Learning',
    desc: 'I stay current with the ecosystem — new tools get adopted when they genuinely help.',
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-left reveal">
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="38" r="22" fill="rgba(0,229,160,0.15)" stroke="rgba(0,229,160,0.3)" strokeWidth="1"/>
                <circle cx="50" cy="38" r="14" fill="rgba(0,229,160,0.25)"/>
                <ellipse cx="50" cy="82" rx="28" ry="16" fill="rgba(0,229,160,0.1)" stroke="rgba(0,229,160,0.2)" strokeWidth="1"/>
              </svg>
              <span className="avatar-initials">Dev</span>
            </div>
            <div className="about-avatar-glow" />
          </div>

          <div className="about-stack">
            <span className="about-stack-label">Daily stack</span>
            {['Kotlin', 'React', 'Node.js', 'Firebase', 'Git'].map((s) => (
              <span key={s} className="about-stack-item">{s}</span>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="reveal">
            <span className="section-label">Who I am</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <p className="about-text reveal delay-1">
            I'm a developer who loves building <em>real products</em>, not just tutorials.
            Over the last few years I've shipped Android apps on the Play Store, built SaaS
            platforms from scratch, and helped businesses replace their clunky old software
            with fast, modern interfaces.
          </p>
          <p className="about-text reveal delay-2">
            I work across the full stack — from Kotlin on Android to React and Node.js on the
            web — with a strong bias toward performance, clean code, and UI that people
            actually enjoy using. Based in India, available worldwide.
          </p>

          <div className="about-highlights reveal delay-3">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-item">
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <strong>{h.title}</strong>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}