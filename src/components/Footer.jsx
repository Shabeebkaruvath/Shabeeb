import React from 'react';

const socials = [
  { 
    href: 'https://github.com/Shabeebkaruvath', 
    label: 'GITHUB', 
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  },
  { 
    href: 'https://www.linkedin.com/in/Shabeebkaruvath', 
    label: 'LINKEDIN', 
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  { 
    href: 'https://www.instagram.com/just.shabeeb', 
    label: 'INSTAGRAM', 
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#EBEBEA] border-t border-[#D5D5D3] font-mono text-[#1C1C1A] selection:bg-[#FF4F00] selection:text-white pb-4 md:pb-0">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* INTERACTION CHASSIS MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#D5D5D3] min-h-[56px] items-stretch text-[11px]">
          
          {/* PANEL A: SYSTEM HARDWARE SPECS (Jony Ive Grid Alignment) */}
          <div className="flex items-center justify-center md:justify-start gap-5 py-4 md:py-0 md:pr-4 border-b md:border-b-0 md:border-r border-[#D5D5D3]">
            <div>
              <div className="text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-0.5">BUILD</div>
              <div className="font-bold tracking-wider text-[#1C1C1A]">PORTFOLIO_V2</div>
            </div>
            <div className="w-[1px] h-6 bg-[#D5D5D3]" />
            <div>
              <div className="text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-0.5">STACK</div>
              <div className="font-bold tracking-wider text-[#1C1C1A]">REACT // VITE</div>
            </div>
          </div>

          {/* PANEL B: TACTILE PARAMETER I/O (Teenage Engineering Module Row) */}
          <div className="flex items-stretch justify-center bg-[#E2E2E0]/50">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex flex-col items-center justify-center gap-1.5 px-6 py-4 md:py-0 border-r last:border-r-0 border-[#D5D5D3] text-[#5A6E6A] hover:bg-[#1C1C1A] hover:text-[#FF4F00] transition-all duration-150 group"
              >
                <div className="transition-transform duration-100 group-hover:scale-105">
                  {icon}
                </div>
                <span className="text-[8px] font-bold tracking-widest group-hover:text-white">{label}</span>
              </a>
            ))}
          </div>

          {/* PANEL C: REGISTERED CREDENTIALS */}
          <div className="flex items-center justify-center md:justify-end gap-5 py-4 md:py-0 md:pl-4 border-t md:border-t-0 md:border-l border-[#D5D5D3]">
            <div className="text-center md:text-right">
              <div className="text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-0.5">AUTHOR</div>
              <div className="font-bold tracking-wider text-[#1C1C1A]">SK-001</div>
            </div>
            <div className="w-[1px] h-6 bg-[#D5D5D3]" />
            <div className="text-center md:text-right">
              <div className="text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-0.5">SYS_YEAR</div>
              <div className="font-bold tracking-wider text-[#1C1C1A]">{currentYear}</div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS TAPE */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 text-[9px] font-medium tracking-widest text-[#7E7E7A] gap-2 text-center sm:text-left">
          <span>
            © {currentYear} SHABEEB KARUVATH // DIGITAL CONSOLE MATRIX
          </span>
          <span className="flex items-center gap-1.5 text-[#5A6E6A]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            TRIVANDRUM, IN // STATUS: OPEN_TO_WORK
          </span>
        </div>

      </div>
    </footer>
  );
}