import { useState, useEffect } from 'react';

const mono = { fontFamily: '"SF Mono","Fira Mono","Roboto Mono",ui-monospace,monospace' };

const specs = [
  { code: 'NAME',  val: 'SHABEEB KARUVATH'     },
  { code: 'AGE',   val: '22'                   },
  { code: 'BASE',  val: 'KERALA, INDIA'        },
  { code: 'ROLE',  val: 'FRONTEND_DEV'         },
  { code: 'EDU',   val: 'M.SC MACHINE LEARNING'},
  { code: 'STS',   val: 'OPEN_TO_WORK'         },
  { code: 'MAIL',  val: 'shabeebkaruvath@gmail.com' },
];

const stack = [
  {
    code: 'FE',
    label: 'FRONT-END',
    items: ['REACTJS', 'JAVASCRIPT', 'HTML5', 'CSS3', 'TAILWIND_CSS'],
  },
  {
    code: 'TL',
    label: 'TOOLCHAIN',
    items: ['VITE', 'GIT', 'GITHUB', 'FIGMA', 'VS_CODE'],
  },
  {
    code: 'ML',
    label: 'LEARNING',
    items: ['PYTHON', 'NEURAL_NETWORKS', 'MACHINE_LEARNING', 'NUMPY'],
  },
];

const timeline = [
  { year: '2022', event: 'STARTED_REACTJS · FIRST_PROJECT_SHIPPED'      },
  { year: '2023', event: 'BUILT_3_FULL_STACK_WEB_APPS · FREELANCE_WORK' },
  { year: '2024', event: 'ENROLLED_MSC_ML · FUZZY_LOGIC_RESEARCH'       },
  { year: '2025', event: 'BRIDGING_FRONTEND + AI · PORTFOLIO_V2'        },
];

export default function About() {
  return (
    <>
      {/* ── RESPONSIVE STYLES ── */}
      <style>
        {`
          .about-section {
            max-width: 960px;
            margin: 0 auto;
            padding: 0 32px 120px;
          }
          
          .main-grid {
            display: grid;
            grid-template-columns: 220px 1fr;
            border-bottom: 1px solid #0a0a0a;
          }
          
          .spec-sheet {
            border-right: 1px solid #0a0a0a;
          }
          
          .bio-block {
            padding: 32px;
          }
          
          .stack-row {
            display: grid;
            grid-template-columns: 80px 120px 1fr;
            align-items: start;
            padding: 14px 0;
          }
          
          .timeline-row {
            display: grid;
            grid-template-columns: 80px 1fr;
            align-items: start;
            padding: 12px 0;
          }

          /* Tablet Layout */
          @media (max-width: 768px) {
            .about-section {
              padding: 0 24px 80px;
            }
            .main-grid {
              grid-template-columns: 1fr;
            }
            .spec-sheet {
              border-right: none;
              border-bottom: 1px solid #0a0a0a;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
            .spec-item {
              border-bottom: 1px solid #e0ddd6 !important;
              border-right: 1px solid #e0ddd6;
            }
            .spec-item:nth-child(even) {
              border-right: none;
            }
            .bio-block {
              padding: 32px 0;
            }
            .stack-row {
              grid-template-columns: 1fr;
              gap: 12px;
              padding: 20px 0;
            }
            .stack-code-wrapper {
              display: flex;
              gap: 16px;
              align-items: center;
            }
          }

          /* Small Mobile Layout */
          @media (max-width: 480px) {
            .about-section {
              padding: 0 16px 60px;
            }
            .spec-sheet {
              grid-template-columns: 1fr;
            }
            .spec-item {
              border-right: none !important;
            }
            .spec-item:last-child {
              border-bottom: none !important;
            }
            .timeline-row {
              grid-template-columns: 1fr;
              gap: 4px;
              padding: 16px 0;
            }
          }
        `}
      </style>

      <section className="about-section">

        {/* ── TOP LABEL BAR ── */}
        <div style={{
          ...mono,
          borderBottom: '1px solid #0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 0',
          marginBottom: '0',
          flexWrap: 'wrap',
          gap: '6px',
        }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b' }}>
            DOC·ABOUT / REV.2
          </span>
          <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b' }}>
            SUBJECT: SK-001
          </span>
        </div>

        {/* ── MAIN GRID: spec sheet left + bio right ── */}
        <div className="main-grid">

          {/* SPEC SHEET */}
          <div className="spec-sheet">
            {specs.map(({ code, val }, i) => (
              <div key={code} className="spec-item" style={{
                borderBottom: i < specs.length - 1 ? '1px solid #e0ddd6' : 'none',
                padding: '12px 16px',
              }}>
                <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '4px' }}>
                  {code}
                </div>
                <div style={{
                  ...mono,
                  fontSize: code === 'MAIL' ? '10px' : '12px',
                  fontWeight: 600,
                  color: '#0a0a0a',
                  wordBreak: 'break-all',
                }}>
                  {val}
                </div>
              </div>
            ))}
          </div>

          {/* BIO BLOCK */}
          <div className="bio-block">
            <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b', marginBottom: '20px' }}>
              BIO_TEXT / ENG
            </div>

            {[
              `Hello. I'm Shabeeb — a front-end developer with a strong focus on ReactJS. At 22, I've shipped scalable, responsive web applications across 2+ years of real-world experience, always turning complex problems into clean, precise solutions.`,
              `Proficient in ReactJS, JavaScript, HTML, and CSS. I keep a close eye on the edge of front-end development — from micro-interactions to build-time performance. Every interface I ship balances craft with speed.`,
              `Currently pursuing an M.Sc. in Machine Learning, actively bridging the gap between front-end engineering and AI. Working solo or on a team, I bring focus, discipline, and a perpetually curious approach to every project.`,
              `Open to freelance and full-time roles. If you're looking for someone committed, skilled, and precise — let's connect.`,
            ].map((para, i) => (
              <p key={i} style={{
                ...mono,
                fontSize: '12px',
                lineHeight: 1.9,
                color: '#4a4a4a',
                marginBottom: '18px',
              }}>
                {para}
              </p>
            ))}

            {/* Output quote */}
            <div style={{
              ...mono,
              borderTop: '1px solid #0a0a0a',
              borderLeft: '2px solid #0a0a0a',
              marginTop: '24px',
              padding: '14px 16px',
              fontSize: '11px',
              lineHeight: 1.8,
              color: '#6b6b6b',
              letterSpacing: '0.04em',
            }}>
              "CLEAN_CODE · THOUGHTFUL_DESIGN · RELENTLESS_CURIOSITY<br />
              THAT'S THE STACK I WORK WITH EVERY DAY."
            </div>
          </div>
        </div>

        {/* ── STACK TABLE ── */}
        <div>
          <div style={{
            ...mono,
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: '#9b9b9b',
            padding: '10px 0',
            borderBottom: '1px solid #0a0a0a',
          }}>
            TECH_STACK / INVENTORY
          </div>

          {stack.map(({ code, label, items }, i) => (
            <div key={code} className="stack-row" style={{
              borderBottom: i < stack.length - 1 ? '1px solid #e0ddd6' : '1px solid #0a0a0a',
            }}>
              <div className="stack-code-wrapper">
                <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b', minWidth: '80px' }}>
                  {code}
                </div>
                <div style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#0a0a0a' }}>
                  {label}
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {items.map(item => (
                  <span key={item} style={{
                    ...mono,
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    padding: '3px 10px',
                    border: '1px solid #0a0a0a',
                    color: '#0a0a0a',
                    backgroundColor: 'transparent',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── TIMELINE ── */}
        <div>
          <div style={{
            ...mono,
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: '#9b9b9b',
            padding: '10px 0',
            borderBottom: '1px solid #0a0a0a',
            marginTop: '32px'
          }}>
            CHANGELOG / CAREER
          </div>

          {timeline.map(({ year, event }, i) => (
            <div key={year} className="timeline-row" style={{
              borderBottom: i < timeline.length - 1 ? '1px solid #e0ddd6' : '1px solid #0a0a0a',
            }}>
              <div style={{ ...mono, fontSize: '11px', fontWeight: 700, color: '#0a0a0a' }}>
                {year}
              </div>
              <div style={{ ...mono, fontSize: '11px', color: '#4a4a4a', letterSpacing: '0.06em', lineHeight: 1.6 }}>
                {event}
              </div>
            </div>
          ))}
        </div>

        {/* ── FOOTER TAPE ── */}
        <div style={{
          ...mono,
          fontSize: '9px',
          letterSpacing: '0.15em',
          color: '#c8c5be',
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '6px',
        }}>
          <span>SHABEEB KARUVATH · PORTFOLIO_V2</span>
          <span>DOC·ABOUT · {new Date().getFullYear()}</span>
        </div>

      </section>
    </>
  );
}