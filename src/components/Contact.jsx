import { useState } from 'react';
import './Contact.css';

const API_URL = 'https://portfolio-backend-6px5.onrender.com/contact';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-bg-glow" />
      <div className="container contact-inner">

        {/* Left info */}
        <div className="contact-left reveal">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">
            Have a project in mind?<br />
            <span className="contact-title-accent">Let's build it together.</span>
          </h2>
          <p className="contact-sub">
            Whether you need a mobile app, a web platform, or want to
            improve what you already have — I'd love to hear about it.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:mt834111@gmail.com">mt834111@gmail.com</a>
            </div>
            <div className="contact-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>India — Remote Worldwide</span>
            </div>
            <div className="contact-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Typically replies within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-form-wrap reveal delay-2">
          {status === 'success' ? (
            <div className="contact-success">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3>Message sent!</h3>
              <p>I'll get back to you within 24 hours. Looking forward to working together.</p>
              <button className="contact-reset" onClick={() => setStatus('idle')}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell me about your project</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="I need an Android app that does... / I want to build a web platform for..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {status === 'error' && (
                <div className="contact-error-banner">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className="btn-spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Start a Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}