import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import profileImage from '../assets/image1.png';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-5xl mx-auto w-full px-8 py-20 md:py-32">

        {/* Tag line */}
        <div className="fade-up mb-6 flex items-center gap-3">
          <span style={{
            display: 'inline-block', width: 32, height: 1,
            background: '#0a0a0a'
          }} />
          <span style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#6b6b6b', fontWeight: 500 }}>
            REACT · ML · DESIGN
          </span>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h1
              className="fade-up fade-up-delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                lineHeight: 1.08,
                fontWeight: 400,
                marginBottom: '1.5rem',
              }}
            >
              Hey, I'm<br />
              <em style={{ fontStyle: 'italic' }}>Shabeeb.</em>
            </h1>

            <p
              className="fade-up fade-up-delay-2"
              style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#4a4a4a', maxWidth: '42ch', marginBottom: '2.5rem' }}
            >
              A ReactJS developer with 2+ years of experience crafting clean, 
              high-performance web apps — and a M.Sc. student bridging front-end 
              engineering with Neural Networks.
            </p>

            <div className="fade-up fade-up-delay-3 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 group"
                style={{
                  padding: '12px 24px',
                  background: '#0a0a0a',
                  color: '#fafaf8',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = 0.85)}
                onMouseLeave={e => (e.currentTarget.style.opacity = 1)}
              >
                View work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 link-hover"
                style={{
                  padding: '12px 24px',
                  border: '1px solid #e0ddd6',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#4a4a4a',
                  fontWeight: 400,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#0a0a0a')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#e0ddd6')}
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="fade-up fade-up-delay-4 flex justify-center md:justify-end">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {/* Offset frame */}
              <div style={{
                position: 'absolute',
                inset: 0,
                transform: 'translate(12px, 12px)',
                border: '1px solid #e0ddd6',
                borderRadius: '12px',
                zIndex: 0,
              }} />
              <img
                src={profileImage}
                alt="Shabeeb"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: 280,
                  height: 320,
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '1px solid #e0ddd6',
                  display: 'block',
                }}
                onError={e => {
                  e.target.style.display = 'none';
                  const fb = document.createElement('div');
                  fb.style.cssText = 'width:280px;height:320px;background:#f0ede8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:2rem;color:#6b6b6b;position:relative;z-index:1';
                  fb.textContent = 'SH';
                  e.target.parentNode.appendChild(fb);
                }}
              />
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div
          className="fade-up fade-up-delay-4 mt-20 grid grid-cols-3 gap-8"
          style={{ borderTop: '1px solid #e0ddd6', paddingTop: '2rem' }}
        >
          {[
            { num: '2+',    label: 'Years experience' },
            { num: '3',     label: 'Projects shipped'  },
            { num: 'M.Sc.', label: 'Machine Learning'  },
          ].map(({ num, label }) => (
            <div key={label}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 400,
                marginBottom: '4px',
              }}>{num}</p>
              <p style={{ fontSize: '12px', color: '#9b9b9b', letterSpacing: '0.04em' }}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}