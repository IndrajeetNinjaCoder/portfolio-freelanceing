import { useEffect, useRef } from 'react';
import './Hero.css';

const floatingIcons = [
  { label: 'Kt', color: '#7F52FF', top: '15%', left: '8%', delay: '0s', size: 42 },
  { label: 'JS', color: '#F7DF1E', top: '22%', right: '10%', delay: '0.6s', size: 38 },
  { label: 'Re', color: '#61DAFB', top: '60%', left: '5%', delay: '1.2s', size: 36 },
  { label: 'Nd', color: '#339933', top: '70%', right: '8%', delay: '0.3s', size: 40 },
  { label: 'Fb', color: '#FF6B00', top: '40%', left: '3%', delay: '0.9s', size: 34 },
  { label: 'Ap', color: '#A2AAAD', top: '30%', right: '5%', delay: '1.5s', size: 36 },
  { label: 'Ts', color: '#3178C6', top: '80%', left: '15%', delay: '0.4s', size: 32 },
  { label: 'Gi', color: '#F1502F', top: '10%', right: '22%', delay: '1.1s', size: 34 },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 20;
      const y = ((clientY - top) / height - 0.5) * 20;
      hero.style.setProperty('--mx', `${x}px`);
      hero.style.setProperty('--my', `${y}px`);
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className="hero-float-icon"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            animationDelay: icon.delay,
            width: icon.size,
            height: icon.size,
          }}
        >
          <div
            className="float-icon-inner"
            style={{ borderColor: `${icon.color}30`, background: `${icon.color}12` }}
          >
            <span style={{ color: icon.color, fontSize: 11, fontWeight: 700, letterSpacing: '-0.02em' }}>
              {icon.label}
            </span>
          </div>
        </div>
      ))}

      <div className="container hero-content">
        <div className="hero-badge reveal visible">
          <span className="badge-dot" />
          Available for freelance projects
        </div>

        <h1 className="hero-title reveal visible delay-1">
          Full‑Stack &amp;
          <br />
          <span className="hero-title-accent">Mobile App</span>
          <br />
          Developer
        </h1>

        <p className="hero-sub reveal visible delay-2">
          I build high-performance apps and websites that help
          <br className="hide-mobile" />
          businesses grow — from idea to production.
        </p>

        <div className="hero-actions reveal visible delay-3">
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
            View My Work
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

        <div className="hero-stats reveal visible delay-4">
          <div className="stat-item">
            <span className="stat-num">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Client Focus</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}