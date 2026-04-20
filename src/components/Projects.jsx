import './Projects.css';

const projects = [
  {
    tag: 'SaaS / Web',
    title: 'URL Shortener SaaS',
    description:
      'A full-stack SaaS platform for link management — custom slugs, click analytics, user authentication, and a clean dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Firebase Auth', 'Chart.js'],
    color: '#00e5a0',
    gradient: 'linear-gradient(135deg, #001a12 0%, #003d28 100%)',
    demo: 'https://url-shortener-frontend-q0p5.onrender.com',
    source: '#',
    pattern: 'lines',
  },
  {
    tag: 'Android',
    title: 'Creator Circle App',
    description:
      'A social media application where users can connect with their favorite influencers and celebrities.',
    tech: ['Kotlin', 'JetPack Compose', 'MongoDB', 'Fast API', 'Coroutines'],
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #0f0820 0%, #2a1a40 100%)',
    demo: 'https://play.google.com/store/apps/details?id=com.cc.creatorcircle',
    source: '#',
    pattern: 'dots',
  },
  {
    tag: 'Encodingo',
    title: 'EdTech Website',
    description:
      'A responsive EdTech platform to showcase courses and learning programs with smooth navigation and an engaging user experience.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    color: '#60a5fa',
    gradient: 'linear-gradient(135deg, #020d1a 0%, #0a2540 100%)',
    demo: 'https://www.encodingo.com/',
    source: 'https://www.encodingo.com/',
    pattern: 'grid',
  },
];

function PatternBg({ type, color }) {
  if (type === 'lines') {
    return (
      <svg className="project-pattern" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
        {[...Array(12)].map((_, i) => (
          <line key={i} x1={i * 28} y1="0" x2={i * 28 - 80} y2="180"
            stroke={color} strokeWidth="0.5" strokeOpacity="0.2" />
        ))}
      </svg>
    );
  }
  if (type === 'dots') {
    return (
      <svg className="project-pattern" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
        {[...Array(8)].map((_, row) =>
          [...Array(12)].map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 28 + 14} cy={row * 24 + 12}
              r="1.5" fill={color} fillOpacity="0.25" />
          ))
        )}
      </svg>
    );
  }
  return (
    <svg className="project-pattern" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
      {[...Array(8)].map((_, row) =>
        [...Array(12)].map((_, col) => (
          <rect key={`${row}-${col}`} x={col * 28} y={row * 24} width="22" height="18"
            fill="none" stroke={color} strokeWidth="0.4" strokeOpacity="0.15" />
        ))
      )}
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Selected work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">Real products built for real use — not just portfolio demos.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card reveal delay-${i + 1}`}>
              <div className="project-thumbnail" style={{ background: p.gradient }}>
                <PatternBg type={p.pattern} color={p.color} />
                <div className="project-thumb-center">
                  <span className="project-thumb-title" style={{ color: p.color }}>{p.title}</span>
                </div>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span className="project-tag" style={{ color: p.color, background: `${p.color}14`, borderColor: `${p.color}28` }}>
                    {p.tag}
                  </span>
                </div>

                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={p.demo} className="project-btn-primary" style={{ background: p.color }} target="_blank">
                    Live Demo
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  {/* <a href={p.source} className="project-btn-ghost">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}