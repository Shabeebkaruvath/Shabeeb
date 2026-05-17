import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-120px)] bg-[#F4F4F3] text-[#1C1C1A] font-mono flex items-center justify-center p-4 selection:bg-[#FF4F00] selection:text-white">
      
      {/* ── OUTBOARD FAULT MODULE CHASSIS ── */}
      <div className="w-full max-w-xl bg-[#EBEBEA] rounded-2xl border border-[#D5D5D3] p-6 md:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden text-center">
        
        {/* Ambient Grid Accent Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#EBEBEA_1px,transparent_1px),linear-gradient(to_bottom,#EBEBEA_1px,transparent_1px)] bg-[size:20px_20px] opacity-25 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          
          {/* CRITICAL ALARM SIGNAL INDICATOR */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest text-[#7E7E7A]">
            <span className="w-2 h-2 rounded-full bg-[#FF4F00] animate-ping" />
            <span>CRITICAL_FAULT // ROUTE_NOT_RESOLVED</span>
          </div>

          {/* MASSIVE SEGMENT MATRIX DISPLAY */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-normal tracking-tighter text-[#1C1C1A] leading-none select-none font-sans mt-2">
            404<span className="text-[#FF4F00]">_</span>
          </h1>

          <div className="space-y-2 max-w-md mx-auto">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#1C1C1A]">
              PAGE_ENDPOINT_NOT_FOUND
            </h2>
            <p className="text-xs text-[#5A6E6A] font-sans font-light leading-relaxed">
              The targeted uniform resource locator has failed to resolve within the active client system directory. The runtime address node does not exist or has been shifted.
            </p>
          </div>

          {/* HARDWARE FAULT DIAGNOSTIC READOUT */}
          <div className="grid grid-cols-2 border-t border-l border-[#D5D5D3] bg-[#F9F9F9]/60 rounded-lg overflow-hidden text-left text-[10px] max-w-sm mx-auto">
            {[
              ['ERR_CODE', '0x404_NULL'],
              ['SUBSYSTEM', 'CORE_ROUTER'],
              ['TELEMETRY', 'DISCONNECTED'],
              ['ACTION', 'ABORT_SESSION'],
            ].map(([key, val]) => (
              <div key={key} className="border-r border-b border-[#D5D5D3] p-2.5 flex flex-col justify-between">
                <span className="font-bold text-[#7E7E7A] text-[8px] tracking-widest">{key}</span>
                <span className="font-bold text-[#1C1C1A] tracking-wide">{val}</span>
              </div>
            ))}
          </div>

          {/* TACTILE HARDWARE RETURN TRIGGER */}
          <div className="pt-4 border-t border-[#D5D5D3] flex items-center justify-between text-[10px] font-bold text-[#7E7E7A]">
            <span>M.S.K // FAILSAFE_MODE</span>
            <Link
              to="/"
              className="text-[11px] tracking-widest font-bold px-5 py-2.5 bg-[#1C1C1A] text-white hover:bg-[#FF4F00] transition-colors duration-150 text-decoration-none shadow-sm rounded-lg flex items-center gap-2 group"
            >
              <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              RESET_TO_HOME
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}