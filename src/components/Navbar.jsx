import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const mono = { fontFamily: '"SF Mono","Fira Mono","Roboto Mono",ui-monospace,monospace' };

const links = [
  { to: '/',         code: '01', label: 'HOME'     },
  { to: '/about',    code: '02', label: 'ABOUT'    },
  { to: '/projects', code: '03', label: 'PROJECTS' },
  { to: '/contact',  code: '04', label: 'CONTACT'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // derive active label for status display
  const active = links.find(l =>
    l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to)
  );

  return (
    <>
      {/* ── RESPONSIVE STYLES ── */}
      <style>
        {`
          .desktop-nav {
            display: block;
          }
          .mobile-nav {
            display: none;
          }

          /* Tablet & Mobile Layout */
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-nav {
              display: flex !important;
            }
          }
        `}
      </style>

      {/* ── DESKTOP ── */}
      <header
        className="desktop-nav"
        style={{
          ...mono,
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          backgroundColor: scrolled ? 'rgba(250,250,248,0.96)' : '#fafaf8',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid #0a0a0a',
          transition: 'background 0.2s',
        }}
      >
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'stretch',
          height: '44px',
        }}>

          {/* Logo cell */}
          <NavLink
            to="/"
            style={{
              ...mono,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderRight: '1px solid #0a0a0a',
              paddingRight: '20px',
              marginRight: '0',
              textDecoration: 'none',
              color: '#0a0a0a',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b' }}>SYS</span>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em' }}>SK-001</span>
          </NavLink>

          {/* Nav links */}
          <nav style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}>
            {links.map(({ to, code, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  ...mono,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '0 18px',
                  borderRight: '1px solid #e0ddd6',
                  textDecoration: 'none',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? '#fafaf8' : '#6b6b6b',
                  backgroundColor: isActive ? '#0a0a0a' : 'transparent',
                  transition: 'background 0.15s, color 0.15s',
                })}
                onMouseEnter={e => {
                  if (!e.currentTarget.style.backgroundColor.includes('10,10,10')) {
                    e.currentTarget.style.color = '#0a0a0a';
                  }
                }}
                onMouseLeave={e => {
                  if (!e.currentTarget.style.backgroundColor.includes('10,10,10')) {
                    e.currentTarget.style.color = '#6b6b6b';
                  }
                }}
              >
                <span style={{ fontSize: '8px', color: 'inherit', opacity: 0.5 }}>{code}</span>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Status cell */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderLeft: '1px solid #0a0a0a',
            paddingLeft: '16px',
            flexShrink: 0,
          }}>
            <span style={{ ...mono, fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b' }}>VIEW</span>
            <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#0a0a0a' }}>
              {active?.label ?? 'HOME'}
            </span>
          </div>
        </div>
      </header>

      {/* ── MOBILE BOTTOM BAR ── */}
      <nav
        className="mobile-nav"
        style={{
          ...mono,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'rgba(250,250,248,0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid #0a0a0a',
          height: 'calc(52px + env(safe-area-inset-bottom))',
          paddingBottom: 'env(safe-area-inset-bottom)', /* Prevents iOS home bar overlap */
        }}
      >
        {links.map(({ to, code, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            style={({ isActive }) => ({
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              textDecoration: 'none',
              borderRight: to === '/contact' ? 'none' : '1px solid #e0ddd6',
              backgroundColor: isActive ? '#0a0a0a' : 'transparent',
              transition: 'background 0.15s',
            })}
          >
            {({ isActive }) => (
              <>
                <span style={{ ...mono, fontSize: '7px', letterSpacing: '0.12em', color: isActive ? 'rgba(250,250,248,0.5)' : '#c8c5be' }}>
                  {code}
                </span>
                <span style={{ ...mono, fontSize: '9px', fontWeight: isActive ? 700 : 400, letterSpacing: '0.12em', color: isActive ? '#fafaf8' : '#6b6b6b' }}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}