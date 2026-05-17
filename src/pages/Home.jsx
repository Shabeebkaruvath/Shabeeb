import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/photo.png';

function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="text-[11px] font-bold text-[#5A6E6A] tracking-widest bg-[#E2E2E0] border border-[#D5D5D3] px-2.5 py-1 rounded-md">
      {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} IST
    </span>
  );
}

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="min-h-screen bg-[#F4F4F3] text-[#1C1C1A] font-mono flex flex-col selection:bg-[#FF4F00] selection:text-white pb-20 md:pb-0">
      
       

      {/* ── CENTRAL CHASSIS MODULE ── */}
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-4 md:px-8 box-border mt-6 md:mt-12">
        
        {/* HERO INTERFACE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-[#D5D5D3] items-start">
          
          {/* LEFT CHASSIS ELEMENT — Primary Data Bank */}
          <div className="md:col-span-8 space-y-6">
            <div className="text-[10px] tracking-widest text-[#7E7E7A] font-bold bg-[#E2E2E0] inline-block px-2.5 py-1 rounded border border-[#D5D5D3]">
              MDL: SK-001 // REACT_ENGINE // ML_ARCH
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-sans tracking-tighter text-[#1C1C1A] leading-[0.9]">
              SHABEEB<br />
              <span className="text-[#A1A19E]">KARUVATH</span>
            </h1>

            <div className="text-xs sm:text-sm leading-relaxed text-[#4D4D4A] max-w-xl border-l-2 border-[#1C1C1A] pl-4 space-y-1">
              <div>REACTJS_DEV // 2_YRS_HANDS_ON_EXPERIENCE</div>
              <div>M.SC_MACHINE_LEARNING_STUDENT // CORE</div>
              <div>BUILDING SCALE ROUTED WEB ECOSYSTEMS</div>
              <div>BRIDGING INTERFACE STATE + NEURAL MODEL ANALYSIS</div>
            </div>

            {/* Tactile Push-Button Interface */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/projects"
                className="text-[11px] tracking-widest font-bold px-6 py-3 bg-[#dcdcdc] text-white hover:bg-[#FF4F00] transition-colors duration-150 text-decoration-none shadow-sm rounded-lg flex items-center gap-2"
              >
                EXECUTE_WORK <span className="text-[9px]">→</span>
              </Link>
              <Link
                to="/contact"
                className="text-[11px] tracking-widest font-bold px-6 py-3 bg-transparent text-[#1C1C1A] border border-[#1C1C1A] hover:bg-[#FF4F00] hover:text-white transition-colors duration-150 text-decoration-none rounded-lg"
              >
                COMPILE_MSG
              </Link>
            </div>
          </div>

          {/* RIGHT CHASSIS ELEMENT — Viewfinder Optical Module */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end">
            <div className="text-[9px] tracking-widest text-[#7E7E7A] font-bold mb-2 w-full max-w-[200px] text-left">
              MONITOR // OPTICAL_01
            </div>
            
            {/* Machined Frame Profile */}
            <div className="border border-[#D5D5D3] bg-[#EBEBEA] rounded-xl p-2 shadow-inner w-full max-w-[216px]">
              <div className="border border-[#1C1C1A] rounded-lg aspect-[5/6] overflow-hidden bg-[#F9F9F9] relative group">
                {!imgError ? (
                  <img
                    src={profileImage}
                    alt="Muhammed Shabeeb Karuvath"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover grayscale contract-105 hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#DEEDE9] text-[#3A4E4A] text-2xl font-bold">
                    M_S_K
                  </div>
                )}
                
                {/* Physical Frame Overlay Strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#1C1C1A]/85 backdrop-blur-xs text-[8px] tracking-widest text-white px-2.5 py-1.5 font-mono flex items-center justify-between">
                  <span>SYS_READOUT</span>
                  <span className="text-[#FF4F00]">KERALA // IN</span>
                </div>
              </div>
            </div>
            
            <div className="text-[9px] text-[#A1A19E] mt-2 tracking-widest w-full max-w-[200px] text-left">
              ©2026 // ALL_RIGHTS_RESERVED
            </div>
          </div>

        </div>

        {/* ── SEGMENTED ANALOG MATRIX READOUTS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-[#D5D5D3] bg-[#EBEBEA]/40">
          {[
            { code: 'EXP', val: '2+',      sub: 'YRS_ACTIVE_DEV' },
            { code: 'REPOS', val: 'SHIPPED', sub: 'WEB_AND_CORE'  },
            { code: 'COMPUTE', val: 'M.SC', sub: 'MACH_LEARNING' },
            { code: 'TELEMETRY', val: 'OPEN', sub: 'SYSTEM_QUERY' },
          ].map(({ code, val, sub }) => (
            <div key={code} className="border-r border-b border-[#D5D5D3] p-4 sm:p-5 flex flex-col justify-between min-h-[92px]">
              <div className="text-[9px] font-bold tracking-widest text-[#7E7E7A]">
                {code}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#1C1C1A] tracking-wider leading-none my-2">
                {val}
              </div>
              <div className="text-[9px] font-bold tracking-widest text-[#5A6E6A]">
                {sub}
              </div>
            </div>
          ))}
        </div>

        {/* ── CORE TECH COMPONENT BELT (Continuous Ribbon Strip) ── */}
        <div className="w-full overflow-x-auto scrollbar-none border-b border-[#D5D5D3] py-3 mt-6 mb-12">
          <div className="flex gap-8 text-[10px] font-bold tracking-widest text-[#7E7E7A] whitespace-nowrap px-2">
            {['REACT', 'JAVASCRIPT', 'TAILWIND_CSS', 'VITE_ENGINE', 'PYTHON_3', 'NEURAL_NETWORKS', 'OPENCV', 'FUZZY_LOGIC', 'GIT_CORE', 'PWA_ARCH'].map(tech => (
              <span key={tech} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#FF4F00] rounded-full" />
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}