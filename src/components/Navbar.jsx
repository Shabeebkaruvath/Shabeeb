import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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

  const activeItem = links.find(l =>
    l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to)
  );

  return (
    <>
      {/* ── DESKTOP PARAMETRIC CONSOLE TOP-RAIL ── */}
      <header
        className={`hidden md:block sticky top-0 z-50 w-full font-mono text-[#1C1C1A] border-b border-[#1C1C1A] transition-all duration-200 ${
          scrolled 
            ? 'bg-[#EBEBEA]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.02)]' 
            : 'bg-[#EBEBEA]'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex items-stretch h-12">

          {/* Core Hardware Brand Node */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 border-r border-[#1C1C1A] pr-5 font-mono text-decoration-none text-[#1C1C1A] shrink-0"
          >
            <span className="text-[8px] font-bold tracking-widest text-[#7E7E7A]">SYS</span>
            <span className="text-xs font-bold tracking-widest">SK-001</span>
          </NavLink>

          {/* Structural Mechanical Switches */}
          <nav className="flex items-stretch flex-1">
            {links.map(({ to, code, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `
                  flex items-center gap-2 px-5 border-r border-[#D5D5D3] text-[10px] tracking-widest font-bold transition-all duration-150 text-decoration-none
                  ${isActive 
                    ? 'bg-[#1C1C1A] text-white' 
                    : 'text-[#5A6E6A] hover:bg-[#DEEDE9] hover:text-[#1C1C1A]'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-[8px] transition-colors ${isActive ? 'text-[#FF4F00]' : 'text-[#7E7E7A]'}`}>
                      {code}
                    </span>
                    {/* Explicitly forced white color string here via ternary */}
                    <span className={isActive ? 'text-white' : 'text-inherit'}>{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Active Parameter Digital Telemetry Readout */}
          <div className="flex items-center gap-2.5 border-l border-[#1C1C1A] pl-5 shrink-0">
            <span className="text-[8px] font-bold tracking-widest text-[#7E7E7A]">VIEW</span>
            <div className="flex items-center gap-1.5 bg-[#E2E2E0] border border-[#D5D5D3] px-2.5 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00]" />
              <span className="text-[10px] font-bold tracking-wider">
                {activeItem?.label ?? 'HOME'}
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* ── MOBILE FIXED REAR TACTILE BOX BAR ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 font-mono bg-[#EBEBEA]/95 backdrop-blur-lg border-t border-[#1C1C1A] flex items-stretch h-[calc(56px+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)]">
        {links.map(({ to, code, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `
              flex-1 flex flex-col items-center justify-center gap-0.5 border-r last:border-r-0 border-[#D5D5D3] text-decoration-none transition-all duration-100
              ${isActive 
                ? 'bg-[#1C1C1A] shadow-inner' 
                : 'bg-transparent'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <span className={`text-[7px] font-bold tracking-widest ${isActive ? 'text-[#FF4F00]' : 'text-[#7E7E7A]'}`}>
                  {code}
                </span>
                {/* Forced absolute white toggle for small device viewing states */}
                <span className={`text-[9px] font-bold tracking-widest ${isActive ? 'text-white' : 'text-[#5A6E6A]'}`}>
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