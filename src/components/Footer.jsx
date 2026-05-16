import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const mono = { fontFamily: '"SF Mono","Fira Mono","Roboto Mono",ui-monospace,monospace' };

const socials = [
  { href: 'https://github.com/Shabeebkaruvath',      code: 'GH',  label: 'GITHUB'    },
  { href: 'https://www.linkedin.com/in/Shabeebkaruvath', code: 'LI',  label: 'LINKEDIN'  },
  { href: 'https://www.instagram.com/just.shabeeb',       code: 'IG',  label: 'INSTAGRAM' },
];

const SocialIcon = ({ code }) => {
  if (code === 'GH') return <FaGithub size={12} />;
  if (code === 'LI') return <FaLinkedinIn size={12} />;
  if (code === 'IG') return <FaInstagram size={12} />;
  return null;
};

export default function Footer() {
  return (
    <>
      {/* ── RESPONSIVE STYLES ── */}
      <style>
        {`
          .footer-wrapper {
            width: 100%;
            padding-bottom: 0;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            border-bottom: 1px solid #e0ddd6;
            align-items: stretch;
            min-height: 48px;
          }
          .panel-left {
            display: flex;
            align-items: center;
            gap: 16px;
            border-right: 1px solid #e0ddd6;
            padding: 12px 0;
          }
          .panel-right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 16px;
            border-left: 1px solid #e0ddd6;
            padding: 12px 0;
          }
          .panel-socials {
            display: flex;
            align-items: stretch;
          }
          .bottom-tape {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;
            flex-wrap: wrap;
            gap: 6px;
          }

          /* Tablet & Mobile Layout */
          @media (max-width: 768px) {
            .footer-wrapper {
              /* Pushes content above the fixed mobile bottom nav */
              padding-bottom: calc(64px + env(safe-area-inset-bottom));
            }
            .footer-grid {
              grid-template-columns: 1fr;
            }
            .panel-left {
              border-right: none;
              border-bottom: 1px solid #e0ddd6;
              justify-content: center;
            }
            .panel-right {
              border-left: none;
              border-top: 1px solid #e0ddd6;
              justify-content: center;
            }
            .panel-socials {
              justify-content: center;
            }
            .social-link {
              padding: 16px 24px !important;
            }
            .social-link-GH {
              border-left: none !important;
            }
          }

          /* Small Mobile Adjustments */
          @media (max-width: 480px) {
            .bottom-tape {
              justify-content: center;
              text-align: center;
            }
          }
        `}
      </style>

      <footer
        className="footer-wrapper"
        style={{ ...mono, borderTop: '1px solid #0a0a0a' }}
      >
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 32px',
        }}>

          {/* Main footer row */}
          <div className="footer-grid">

            {/* Left — build info */}
            <div className="panel-left">
              <div>
                <div style={{ fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '3px' }}>BUILD</div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: '#0a0a0a' }}>PORTFOLIO_V2</div>
              </div>
              <div style={{ width: '1px', height: '28px', backgroundColor: '#e0ddd6' }} />
              <div>
                <div style={{ fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '3px' }}>STACK</div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: '#0a0a0a' }}>REACT·VITE</div>
              </div>
            </div>

            {/* Centre — socials */}
            <div className="panel-socials">
              {socials.map(({ href, code, label }) => (
                <a
                  key={code}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`social-link social-link-${code}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3px',
                    padding: '0 20px',
                    borderRight: code !== 'IG' ? '1px solid #e0ddd6' : 'none',
                    borderLeft: code === 'GH' ? '1px solid #e0ddd6' : 'none',
                    textDecoration: 'none',
                    color: '#9b9b9b',
                    transition: 'background 0.15s, color 0.15s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#0a0a0a';
                    e.currentTarget.style.color = '#fafaf8';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#9b9b9b';
                  }}
                >
                  <SocialIcon code={code} />
                  <span style={{ fontSize: '7px', letterSpacing: '0.12em' }}>{label}</span>
                </a>
              ))}
            </div>

            {/* Right — copyright */}
            <div className="panel-right">
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '3px' }}>AUTHOR</div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: '#0a0a0a' }}>SK-001</div>
              </div>
              <div style={{ width: '1px', height: '28px', backgroundColor: '#e0ddd6' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '3px' }}>YEAR</div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: '#0a0a0a' }}>
                  {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tape */}
          <div className="bottom-tape">
            <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#c8c5be' }}>
              © {new Date().getFullYear()} SHABEEB KARUVATH · ALL RIGHTS RESERVED
            </span>
            <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#c8c5be' }}>
              KERALA, INDIA · OPEN_TO_WORK
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}