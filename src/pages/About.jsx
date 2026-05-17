import React from 'react';

const specs = [
  { code: 'NAME',  val: 'SHABEEB KARUVATH'     },
  { code: 'AGE',   val: '22'                   },
  { code: 'BASE',  val: 'KERALA, INDIA'        },
  { code: 'ROLE',  val: 'FRONTEND_DEV // CORE' },
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
    label: 'COMPUTE',
    items: ['PYTHON', 'NEURAL_NETWORKS', 'MACHINE_LEARNING', 'OPENCV'],
  },
];

const timeline = [
  { year: '2022', event: 'INIT_REACTJS // ENGINE DEPLES // FIRST_PROJECT_SHIPPED' },
  { year: '2023', event: 'DEPLOYED_3_FULL_STACK_WEB_ENVIRONMENTS // FREELANCE_CORE' },
  { year: '2024', event: 'ENROLLED_MSC_ML // FUZZY_LOGIC_SYSTEMS_RESEARCH' },
  { year: '2025', event: 'BRIDGING_FRONTEND_STATE + AI // ARCH_PORTFOLIO_V2' },
  { year: '2026', event: 'MLOPS_PIPELINES // REALTIME_PWA_SCHEDULE_SYSTEMS' },
];

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 pb-24 font-mono text-[#1C1C1A] bg-[#F4F4F3] selection:bg-[#FF4F00] selection:text-white">
      
      {/* ── TOP INTERFACE META BAR ── */}
      <div className="border-b border-[#1C1C1A] flex items-center justify-between py-2.5 text-[10px] font-bold text-[#7E7E7A] tracking-widest">
        <span>DOC: ABOUT_CORE // REV.02</span>
        <span>SUBJECT: SK-001</span>
      </div>

      {/* ── MAIN LEDGER GRID: Specs Left + Text Bio Right ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#1C1C1A]">
        
        {/* SPEC SHEET PANEL - Machined Data Blocks */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#1C1C1A] bg-[#EBEBEA]/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
          {specs.map(({ code, val }) => (
            <div 
              key={code} 
              className="border-b last:border-b-0 border-[#D5D5D3] sm:border-r md:border-r-0 last:sm:border-r-0 p-4 flex flex-col justify-between group hover:bg-[#DEEDE9]/40 transition-colors duration-100"
            >
              <span className="text-[8px] font-bold tracking-widest text-[#7E7E7A] mb-1">{code}_LOG</span>
              <span className="text-[11px] font-bold tracking-wider text-[#1C1C1A] break-all">
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* BIO SYSTEM TEXT PANEL */}
        <div className="md:col-span-8 p-6 md:p-8 space-y-6 bg-[#F9F9F9]">
          <div className="text-[9px] tracking-widest text-[#FF4F00] font-bold">
            DATA_STREAM: BIO_MATRIX // TYPE_ENG
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#4D4D4A] leading-relaxed font-sans font-light">
            <p>
              Hello. I'm Shabeeb — a front-end engineer focused on building clean web interfaces with ReactJS. Over the past 2+ years, I've designed and shipped responsive, structured web applications, turning layout logic and application state states into fast, crisp systems.
            </p>
            <p>
              Proficient in React, custom JavaScript architecture, and utility frameworks like Tailwind CSS. I monitor performance footprints closely — optimizing everything from small micro-interactions to overall application compilation overhead.
            </p>
            <p>
              Currently pursuing an M.Sc. in Machine Learning, actively bridging the gap between interface components and raw data compute arrays. Whether working inside standalone environments or collaborating across a team network, I bring focused execution and deep curiosity.
            </p>
            <p>
              Open to engineering challenges and integration spaces. If you need clean execution paired with an eye for detailed product metrics, let's open a route.
            </p>
          </div>

          {/* Core Code Philosophy Callout Box */}
          <div className="border border-[#D5D5D3] bg-white rounded-xl p-4 shadow-sm border-l-4 border-l-[#FF4F00]">
            <div className="text-[9px] font-bold tracking-widest text-[#7E7E7A] mb-1.5">CONSOLE_MANIFESTO</div>
            <div className="text-[11px] font-bold leading-normal text-[#1C1C1A] tracking-wider">
              "CLEAN_CODE // THOUGHTFUL_INTERACTION // AI_CORE_CURIOSITY. THAT'S THE RUNTIME SYSTEM STRIP I DEPLOY EVERY SINGLE DAY."
            </div>
          </div>
        </div>
      </div>

      {/* ── TECHNICAL INVENTORY SEPARATOR ── */}
      <div className="mt-8">
        <div className="text-[10px] font-bold tracking-widest text-[#7E7E7A] pb-2 border-b border-[#1C1C1A]">
          HARDWARE_INVENTORY // TECH_STACK
        </div>

        {stack.map(({ code, label, items }) => (
          <div 
            key={code} 
            className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 py-4 border-b border-[#D5D5D3] last:border-[#1C1C1A] items-center"
          >
            <div className="sm:col-span-3 flex items-center gap-3">
              <span className="text-[8px] font-bold text-[#FF4F00] bg-[#E2E2E0] border border-[#D5D5D3] px-1.5 py-0.5 rounded">
                {code}
              </span>
              <span className="text-[11px] font-bold tracking-wider text-[#1C1C1A]">{label}</span>
            </div>
            <div className="sm:col-span-9 flex flex-wrap gap-1.5">
              {items.map(item => (
                <span 
                  key={item} 
                  className="text-[10px] font-bold tracking-wide px-2.5 py-1 bg-white border border-[#D5D5D3] text-[#1C1C1A] rounded-md shadow-xs hover:border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-all duration-100 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── TIMELINE CHANGELOG MATRIX ── */}
      <div className="mt-10">
        <div className="text-[10px] font-bold tracking-widest text-[#7E7E7A] pb-2 border-b border-[#1C1C1A]">
          SYSTEM_CHANGELOG // LOG_REGISTRY
        </div>

        <div className="divide-y divide-[#D5D5D3] border-b border-[#1C1C1A]">
          {timeline.map(({ year, event }) => (
            <div key={year} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-3.5 items-start text-xs">
              <span className="sm:col-span-2 font-bold text-[#FF4F00] tracking-widest">
                [{year}]
              </span>
              <span className="sm:col-span-10 text-[#4D4D4A] tracking-wide leading-relaxed font-mono">
                {event}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── LOWER RUNTIME TELEMETRY TAPE ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 text-[9px] font-bold tracking-widest text-[#7E7E7A] gap-2">
        <span>M.S.K // CONSOLE_LEAFLET_V2</span>
        <span>INDEX_ABOUT // SYS_TIME_2026</span>
      </div>

    </section>
  );
}