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
          Website &amp;
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

          {/* WhatsApp Button */}
          <a
            className="btn-whatsapp"
            href="https://wa.me/919149074149"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* WhatsApp SVG icon */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 21.94a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.69.93.99-3.59-.24-.38A9.9 9.9 0 0 1 2.06 12C2.06 6.51 6.51 2.06 12 2.06S21.94 6.51 21.94 12 17.49 21.94 12 21.94zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.21 3.05c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"/>
            </svg>
            WhatsApp Me
          </a>
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









// import { useEffect, useRef } from 'react';
// import './Hero.css';

// const floatingIcons = [
//   { label: 'Kt', color: '#7F52FF', top: '15%', left: '8%', delay: '0s', size: 42 },
//   { label: 'JS', color: '#F7DF1E', top: '22%', right: '10%', delay: '0.6s', size: 38 },
//   { label: 'Re', color: '#61DAFB', top: '60%', left: '5%', delay: '1.2s', size: 36 },
//   { label: 'Nd', color: '#339933', top: '70%', right: '8%', delay: '0.3s', size: 40 },
//   { label: 'Fb', color: '#FF6B00', top: '40%', left: '3%', delay: '0.9s', size: 34 },
//   { label: 'Ap', color: '#A2AAAD', top: '30%', right: '5%', delay: '1.5s', size: 36 },
//   { label: 'Ts', color: '#3178C6', top: '80%', left: '15%', delay: '0.4s', size: 32 },
//   { label: 'Gi', color: '#F1502F', top: '10%', right: '22%', delay: '1.1s', size: 34 },
// ];

// export default function Hero() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const hero = heroRef.current;
//     if (!hero) return;
//     const onMove = (e) => {
//       const { clientX, clientY } = e;
//       const { width, height, left, top } = hero.getBoundingClientRect();
//       const x = ((clientX - left) / width - 0.5) * 20;
//       const y = ((clientY - top) / height - 0.5) * 20;
//       hero.style.setProperty('--mx', `${x}px`);
//       hero.style.setProperty('--my', `${y}px`);
//     };
//     hero.addEventListener('mousemove', onMove);
//     return () => hero.removeEventListener('mousemove', onMove);
//   }, []);

//   return (
//     <section id="home" className="hero" ref={heroRef}>
//       <div className="hero-bg-grid" />
//       <div className="hero-glow hero-glow-1" />
//       <div className="hero-glow hero-glow-2" />

//       {floatingIcons.map((icon, i) => (
//         <div
//           key={i}
//           className="hero-float-icon"
//           style={{
//             top: icon.top,
//             left: icon.left,
//             right: icon.right,
//             animationDelay: icon.delay,
//             width: icon.size,
//             height: icon.size,
//           }}
//         >
//           <div
//             className="float-icon-inner"
//             style={{ borderColor: `${icon.color}30`, background: `${icon.color}12` }}
//           >
//             <span style={{ color: icon.color, fontSize: 11, fontWeight: 700, letterSpacing: '-0.02em' }}>
//               {icon.label}
//             </span>
//           </div>
//         </div>
//       ))}

//       <div className="container hero-content">
//         <div className="hero-badge reveal visible">
//           <span className="badge-dot" />
//           Available for freelance projects
//         </div>

//         <h1 className="hero-title reveal visible delay-1">
//           Website &amp;
//           <br />
//           <span className="hero-title-accent">Mobile App</span>
//           <br />
//           Developer
//         </h1>

//         <p className="hero-sub reveal visible delay-2">
//           I build high-performance apps and websites that help
//           <br className="hide-mobile" />
//           businesses grow — from idea to production.
//         </p>

//         <div className="hero-actions reveal visible delay-3">
//           <button
//             className="btn-primary"
//             onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
//             View My Work
//           </button>
//           <button
//             className="btn-ghost"
//             onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
//           >
//             Let's Talk
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//           </button>
//         </div>

//         <div className="hero-stats reveal visible delay-4">
//           <div className="stat-item">
//             <span className="stat-num">20+</span>
//             <span className="stat-label">Projects</span>
//           </div>
//           <div className="stat-divider" />
//           <div className="stat-item">
//             <span className="stat-num">3+</span>
//             <span className="stat-label">Years Exp.</span>
//           </div>
//           <div className="stat-divider" />
//           <div className="stat-item">
//             <span className="stat-num">100%</span>
//             <span className="stat-label">Client Focus</span>
//           </div>
//         </div>
//       </div>

//       <div className="hero-scroll-hint">
//         <div className="scroll-line" />
//         <span>scroll</span>
//       </div>
//     </section>
//   );
// }