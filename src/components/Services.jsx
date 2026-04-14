import './Services.css';

const services = [
  {
    number: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile App Development',
    description:
      'Native Android apps built with Kotlin & Java — Firebase integration, REST APIs, Play Store deployment, and clean architecture for long-term maintainability.',
    tags: ['Kotlin', 'Java', 'Firebase', 'REST APIs', 'Play Store'],
  },
  {
    number: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Full-Stack Web Development',
    description:
      'End-to-end web applications with React frontends and Node.js backends — from marketing sites to production SaaS platforms and internal dashboards.',
    tags: ['React', 'Node.js', 'Firebase', 'REST / GraphQL', 'SaaS'],
  },
  {
    number: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Performance & UI Optimization',
    description:
      'Audit, redesign, and rebuild slow or outdated interfaces. I focus on load speed, accessibility, Core Web Vitals, and modern UI that keeps users engaged.',
    tags: ['UI Redesign', 'Web Vitals', 'Speed', 'Accessibility', 'UX'],
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I do</span>
          <h2 className="section-title">Services</h2>
          <p className="section-sub">Focused expertise across mobile and web — built for production, not just prototypes.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card reveal delay-${i + 1}`}>
              <div className="service-card-top">
                <span className="service-number">{s.number}</span>
                <span className="service-icon">{s.icon}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
              <div className="service-card-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}