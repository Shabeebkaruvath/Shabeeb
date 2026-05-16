import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import profileImage from '../assets/image1.png';

const mono = { fontFamily: '"SF Mono","Fira Mono","Roboto Mono",ui-monospace,monospace' };

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{ ...mono, fontSize: '11px', color: '#9b9b9b', letterSpacing: '0.1em' }}>
      {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      {' '}IST
    </span>
  );
}

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {/* ── RESPONSIVE STYLES ── */}
      <style>
        {`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 48px;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-left: 1px solid #0a0a0a;
            border-top: 1px solid #0a0a0a;
          }
          .stats-item {
            border-right: 1px solid #0a0a0a;
            border-bottom: 1px solid #0a0a0a;
            padding: 16px 20px;
          }
          .cta-container {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .hide-scrollbar {
            overflow-x: auto;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE/Edge */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome/Safari/Opera */
          }

          /* Tablet & Mobile Layout */
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .photo-panel-wrapper {
              align-items: flex-start;
            }
          }

          /* Small Mobile Tweaks */
          @media (max-width: 480px) {
            .cta-container {
              flex-direction: column;
            }
            .cta-container > a {
              justify-content: center;
              width: 100%;
            }
          }
        `}
      </style>

      <section style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>

        {/* ── TOP STATUS BAR ── */}
        <div style={{
          borderBottom: '1px solid #0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 32px',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              ['SYS',  'PORTFOLIO_V2'],
              ['MODE', 'AVAILABLE'],
              ['LOC',  'KERALA·IN'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ ...mono, fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b' }}>{k}</span>
                <span style={{ ...mono, fontSize: '9px', letterSpacing: '0.1em', color: '#0a0a0a', fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
          <Clock />
        </div>

        {/* ── MAIN BODY ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '960px',
          margin: '0 auto',
          width: '100%',
          padding: '0 32px',
          boxSizing: 'border-box'
        }}>

          {/* HERO ROW */}
          <div className="hero-grid" style={{
            alignItems: 'start',
            padding: '48px 0 40px',
            borderBottom: '1px solid #0a0a0a',
          }}>

            {/* LEFT — identity block */}
            <div>
              {/* Model tag */}
              <div style={{
                ...mono,
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: '#9b9b9b',
                marginBottom: '20px',
              }}>
                MDL·SK-001 / REACT·DEV / ML·STUDENT
              </div>

              {/* Name — large display */}
              <div style={{
                ...mono,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#0a0a0a',
                marginBottom: '28px',
              }}>
                SHABEEB<br />
                <span style={{ color: '#c8c5be' }}>KARUVATH</span>
              </div>

              {/* Bio — tight monospace */}
              <div style={{
                ...mono,
                fontSize: '12px',
                lineHeight: 1.9,
                color: '#6b6b6b',
                maxWidth: '52ch',
                marginBottom: '36px',
                borderLeft: '2px solid #0a0a0a',
                paddingLeft: '16px',
              }}>
                REACTJS_DEV · 2YRS_EXP<br />
                M.SC_MACHINE_LEARNING · ONGOING<br />
                CRAFTING HIGH-PERF WEB INTERFACES<br />
                BRIDGING FRONTEND + NEURAL_NETWORKS
              </div>

              {/* CTA row */}
              <div className="cta-container">
                <Link
                  to="/projects"
                  style={{
                    ...mono,
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    fontWeight: 700,
                    padding: '12px 28px',
                    background: '#0a0a0a',
                    color: '#fafaf8',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'opacity 0.15s',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 0.8}
                  onMouseLeave={e => e.currentTarget.style.opacity = 1}
                >
                  VIEW_WORK →
                </Link>
                <Link
                  to="/contact"
                  style={{
                    ...mono,
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    fontWeight: 400,
                    padding: '12px 28px',
                    background: 'transparent',
                    color: '#0a0a0a',
                    border: '1px solid #0a0a0a',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background 0.15s, color 0.15s',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fafaf8'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a'; }}
                >
                  MSG_ME
                </Link>
              </div>
            </div>

            {/* RIGHT — photo panel */}
            <div className="photo-panel-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                ...mono,
                fontSize: '9px',
                letterSpacing: '0.15em',
                color: '#9b9b9b',
                marginBottom: '8px',
              }}>
                IMG_01 / SUBJECT
              </div>
              <div style={{
                border: '1px solid #0a0a0a',
                width: '200px',
                height: '240px',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'relative',
              }}>
                {!imgError ? (
                  <img
                    src={profileImage}
                    alt="Shabeeb"
                    onError={() => setImgError(true)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: '#f0ede8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    ...mono, fontSize: '1.5rem', color: '#c8c5be', fontWeight: 700,
                  }}>
                    SK
                  </div>
                )}
                {/* corner label */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'rgba(10,10,10,0.65)',
                  ...mono, fontSize: '8px', letterSpacing: '0.15em',
                  color: '#fafaf8', padding: '5px 8px',
                }}>
                  SHABEEB · KERALA·IN
                </div>
              </div>
              <div style={{ ...mono, fontSize: '9px', color: '#c8c5be', marginTop: '6px', letterSpacing: '0.1em' }}>
                ©2024 ALL RIGHTS RESERVED
              </div>
            </div>
          </div>

          {/* ── SPEC GRID ── */}
          <div className="stats-grid">
            {[
              { code: 'EXP', val: '2+',      sub: 'YRS_ACTIVE'     },
              { code: 'PRJ', val: '04',      sub: 'SHIPPED'        },
              { code: 'EDU', val: 'M.SC',    sub: 'MACH_LEARNING'  },
              { code: 'STS', val: 'OPEN',    sub: 'FOR_HIRE'       },
            ].map(({ code, val, sub }) => (
              <div key={code} className="stats-item">
                <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '8px' }}>
                  {code}
                </div>
                <div style={{ ...mono, fontSize: '1.6rem', fontWeight: 700, color: '#0a0a0a', lineHeight: 1, marginBottom: '4px' }}>
                  {val}
                </div>
                <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.1em', color: '#c8c5be' }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>

          {/* ── STACK TAPE ── */}
          <div className="hide-scrollbar" style={{
            borderBottom: '1px solid #0a0a0a',
            padding: '10px 0',
            marginTop: '0',
          }}>
            <div style={{
              display: 'flex',
              gap: '32px',
              ...mono,
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: '#9b9b9b',
              whiteSpace: 'nowrap',
            }}>
              {['REACT', 'JAVASCRIPT', 'TAILWIND', 'VITE', 'PYTHON', 'NEURAL_NETWORKS', 'GIT', 'FIGMA', 'HTML5', 'CSS3', 'REST_API', 'PWA'].map(s => (
                <span key={s}>· {s}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}