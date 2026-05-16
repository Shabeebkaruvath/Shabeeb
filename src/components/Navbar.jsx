import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, User, Layers, Mail, SquareCode } from 'lucide-react';

const links = [
  { to: '/',         label: 'Home',     Icon: HomeIcon },
  { to: '/about',    label: 'About',    Icon: User     },
  { to: '/projects', label: 'Projects', Icon: Layers   },
  { to: '/contact',  label: 'Contact',  Icon: Mail     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop top bar ── */}
      <header
        className="hidden md:flex sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #e0ddd6' : '1px solid transparent',
        }}
      >
        <div className="max-w-5xl mx-auto w-full px-8 py-5 flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
          >
            <SquareCode
              size={18}
              strokeWidth={1.5}
              style={{ transition: 'transform 0.3s' }}
              className="group-hover:rotate-12"
            />
            <span>Shabeeb</span>
          </NavLink>

          <nav className="flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className="link-hover text-sm tracking-wide"
                style={({ isActive }) => ({
                  color: isActive ? '#0a0a0a' : '#6b6b6b',
                  fontWeight: isActive ? 500 : 400,
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Mobile bottom bar ── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{
          backgroundColor: 'rgba(250,250,248,0.95)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid #e0ddd6',
        }}
      >
        <div className="flex justify-around items-center py-2">
          {links.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all"
              style={({ isActive }) => ({
                color: isActive ? '#0a0a0a' : '#9b9b9b',
              })}
            >
              <Icon size={20} strokeWidth={isActive => isActive ? 2 : 1.5} />
              <span style={{ fontSize: '10px', letterSpacing: '0.04em', fontWeight: 500 }}>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}