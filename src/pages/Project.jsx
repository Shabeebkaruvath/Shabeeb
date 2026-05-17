import React from 'react';

const projects = [
  {
    id:     'PRJ-001',
    status: 'SHIPPED',
    title:  'PRODUCT_AGGREGATOR',
    stack:  ['REACT', 'API_INTEGRATION', 'UI/UX'],
    desc:   'Platform aggregating products from multiple sources. Users compare prices and features before purchase. Multi-source data pipeline with real-time sync.',
    github: 'https://github.com/Shabeebkaruvath/fproject',
    image:  'https://github.com/user-attachments/assets/b5f83cd2-1666-4ba9-aa95-d54f165cd7c0',
    year:   '2024',
  },
  {
    id:     'PRJ-002',
    status: 'SHIPPED',
    title:  'CASHFLOW',
    stack:  ['REACT', 'CHARTS', 'STATE_MGMT'],
    desc:   'Personal finance tracker. Expense logging, budget management, and interactive spending visualisations. Full CRUD with persistent local state.',
    github: 'https://github.com/Shabeebkaruvath/CashFlow',
    image:  'https://github.com/user-attachments/assets/d9dd56a9-bfbc-4904-ad35-fe90a49bede8',
    year:   '2024',
  },
  {
    id:     'PRJ-003',
    status: 'SHIPPED',
    title:  'FUZZY_SPAM_DETECTOR',
    stack:  ['PYTHON', 'FUZZY_LOGIC', 'ML', 'NLP'],
    desc:   'Rule-based spam classifier using skfuzzy inference engine. Extracts 5 signal features: keyword score, uppercase ratio, exclamation density, digit ratio, URL score. Outputs SPAM/HAM with confidence.',
    github: 'https://github.com/Shabeebkaruvath/spam-mail-detection',
    image:  null,
    year:   '2025',
  },
  {
    id:     'PRJ-004',
    status: 'SHIPPED',
    title:  'WEATHER_APP',
    stack:  ['REACT', 'REST_API', 'RESPONSIVE'],
    desc:   'Real-time weather application with live forecasts and hourly updates. Consumes meteorological APIs. Fully responsive across all viewport sizes.',
    github: 'https://github.com/Shabeebkaruvath/Reactjs-Weather-app-',
    image:  null,
    year:   '2022',
  },
];

function ProjectRow({ project, index }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#D5D5D3] last:border-[#1C1C1A] items-stretch">

      {/* LEFT METADATA SIDEBAR PANEL */}
      <div className={`md:col-span-2 p-4 flex md:flex-col justify-between md:justify-start gap-4 border-b md:border-b-0 md:border-r border-[#D5D5D3] text-[10px] ${
        index % 2 === 0 ? 'bg-transparent' : 'bg-[#EBEBEA]/40'
      }`}>
        <div>
          <span className="block text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-0.5">ID_CODE</span>
          <span className="font-bold text-[#1C1C1A]">{project.id}</span>
        </div>
        <div>
          <span className="block text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-0.5">SYS_YR</span>
          <span className="font-bold text-[#1C1C1A]">{project.year}</span>
        </div>
        <div>
          <span className="block text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-0.5">STATUS</span>
          <span className="font-bold text-[#1C1C1A] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {project.status}
          </span>
        </div>
      </div>

      {/* RIGHT CHASSIS BODY PANEL */}
      <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-12 items-stretch bg-[#F9F9F9]">
        
        {/* Central Data Block */}
        <div className="sm:col-span-8 p-5 md:p-6 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#1C1C1A] tracking-wider font-mono mb-2">
              {project.title}
            </h3>
            <p className="text-xs text-[#4D4D4A] leading-relaxed font-sans font-light max-w-2xl">
              {project.desc}
            </p>
          </div>

          {/* Micro Tactical Button Grid */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map(tag => (
                <span key={tag} className="text-[9px] font-bold tracking-wide px-2 py-0.5 bg-white border border-[#D5D5D3] text-[#5A6E6A] rounded">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest text-[#1C1C1A] hover:text-[#FF4F00] text-decoration-none inline-flex items-center gap-1.5 font-bold group border-b border-[#1C1C1A] pb-0.5 w-fit"
            >
              <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              VIEW_SOURCE // EXT ↗
            </a>
          </div>
        </div>

        {/* Modular Hardware Viewfinder */}
        <div className="sm:col-span-4 border-t sm:border-t-0 sm:border-l border-[#D5D5D3] bg-[#EBEBEA]/30 overflow-hidden relative min-h-[140px] flex items-stretch">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <div className="w-full p-4 flex flex-col items-center justify-center gap-1 text-center m-auto">
              <span className="text-xl font-bold text-[#A1A19E] tracking-widest font-mono">
                {project.id.split('-')[1]}
              </span>
              <span className="text-[8px] font-bold tracking-widest text-[#C2D6D1] bg-[#5A6E6A]/10 px-1.5 py-0.5 rounded">
                NULL_IMAGE_FEED
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 pb-24 font-mono text-[#1C1C1A] bg-[#F4F4F3] selection:bg-[#FF4F00] selection:text-white">

      {/* ── TOP HEADER RUNTIME STRIP ── */}
      <div className="border-b border-[#1C1C1A] flex items-center justify-between py-2.5 text-[10px] font-bold text-[#7E7E7A] tracking-widest">
        <span>DOC: PROJECT_REGISTRY // REV.02</span>
        <span>UNITS: 0{projects.length} // STATUS: SHIPPED_STABLE</span>
      </div>

      {/* ── LEDGER MATRIX COMPONENT GRID ── */}
      <div className="border-t border-[#1C1C1A] mt-4">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* ── LOWER TELEMETRY DATA MATRIX ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-l border-[#1C1C1A] bg-[#EBEBEA]/20">
        {[
          { k: 'TOTAL_PRJ',  v: `0${projects.length} // STABLE_BUILDS` },
          { k: 'LANGUAGES',  v: 'REACT_JS // PYTHON_3' },
          { k: 'DOMAINS',     v: 'WEB_APPS // INFERENCE_ML' },
        ].map(({ k, v }) => (
          <div key={k} className="border-r border-b border-[#1C1C1A] p-4 flex flex-col justify-between min-h-[64px]">
            <span className="text-[8px] font-bold tracking-widest text-[#7E7E7A]">{k}_LOG</span>
            <span className="text-[11px] font-bold tracking-wider text-[#1C1C1A]">{v}</span>
          </div>
        ))}
      </div>

      {/* ── RUNTIME REAR TAPE FOOTER ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 text-[9px] font-bold tracking-widest text-[#7E7E7A] gap-2">
        <span>M.S.K // SYSTEM_CONSOLE_DRIVE</span>
        <span>INDEX_PROJECTS // BUILD_2026</span>
      </div>

    </section>
  );
}