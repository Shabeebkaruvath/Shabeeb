import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [focused, setFocused] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mzzaqrvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 md:px-8 pt-12 pb-24 font-mono text-[#1C1C1A] bg-[#F4F4F3] selection:bg-[#FF4F00] selection:text-white">
      
      {/* ── TOP MODULE TELEMETRY BOX ── */}
      <div className="mb-10">
        <div className="text-[10px] font-bold tracking-widest text-[#7E7E7A] mb-4">
          MSG_COMPOSE // UPLINK_INTERFACE
        </div>

        {/* Diagnostic Metadata Matrix Grid */}
        <div className="grid grid-cols-2 border-t border-l border-[#1C1C1A] bg-[#EBEBEA]/40">
          {[
            ['STATUS',   'OPEN_FOR_WORK'],
            ['LOCATION', 'TRIVANDRUM // IN'],
            ['RESPONSE', '< 24_HOURS // SLA'],
            ['CHANNEL',  'MAIL // SECURE_FORM'],
          ].map(([key, val]) => (
            <div key={key} className="border-r border-b border-[#1C1C1A] p-3 flex flex-col justify-between min-h-[52px]">
              <span className="text-[8px] font-bold tracking-widest text-[#7E7E7A]">{key}</span>
              <span className="text-[11px] font-bold tracking-wider text-[#1C1C1A]">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── TRANSMISSION STATUS ROUTER ── */}
      {status === 'success' ? (
        <div className="border border-[#1C1C1A] bg-white rounded-xl p-8 text-center shadow-sm max-w-xl mx-auto animate-fade-in">
          <span className="text-[9px] font-bold tracking-widest text-[#FF4F00] bg-[#FF4F00]/10 px-2 py-0.5 rounded">
            TX_STATUS // OK
          </span>
          <div className="text-3xl font-normal font-sans text-[#1C1C1A] tracking-tighter mt-4 mb-2">
            ✓ DISPATCHED_SUCCESSFULLY
          </div>
          <p className="text-xs text-[#5A6E6A] tracking-wide mb-6 font-mono">
            MESSAGE PIPELINE COMMITTED. REPLY ROUTED WITHIN 24H WINDOW.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-[10px] font-bold tracking-widest px-5 py-2.5 bg-[#EBEBEA] border border-[#D5D5D3] text-[#1C1C1A] rounded-lg hover:border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-all duration-100"
          >
            INIT_NEW_UPLINK
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto bg-[#F9F9F9] p-6 md:p-8 border border-[#D5D5D3] rounded-xl shadow-xs relative">
          
          {/* Ambient Mesh Pattern Decoration */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#EBEBEA_1px,transparent_1px),linear-gradient(to_bottom,#EBEBEA_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none rounded-xl" />

          {/* PARAMETER FIELD: NAME */}
          <div className="relative z-10 flex flex-col">
            <label htmlFor="name" className="text-[9px] font-bold tracking-widest text-[#7E7E7A] uppercase mb-1">
              01 // INPUT_NAME
            </label>
            <input
              type="text" name="name" id="name" required
              value={form.name} onChange={handleChange}
              placeholder="ENTER SPECIFIED NAME"
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              className={`w-full py-2 bg-transparent border-t-0 border-x-0 border-b outline-none text-xs text-[#1C1C1A] transition-colors duration-150 rounded-none placeholder:text-[#C2D6D1] ${
                focused === 'name' ? 'border-[#FF4F00]' : 'border-[#D5D5D3]'
              }`}
            />
          </div>

          {/* PARAMETER FIELD: EMAIL */}
          <div className="relative z-10 flex flex-col">
            <label htmlFor="email" className="text-[9px] font-bold tracking-widest text-[#7E7E7A] uppercase mb-1">
              02 // ADDR_EMAIL
            </label>
            <input
              type="email" name="email" id="email" required
              value={form.email} onChange={handleChange}
              placeholder="ENTER DESTINATION EMAIL"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              className={`w-full py-2 bg-transparent border-t-0 border-x-0 border-b outline-none text-xs text-[#1C1C1A] transition-colors duration-150 rounded-none placeholder:text-[#C2D6D1] ${
                focused === 'email' ? 'border-[#FF4F00]' : 'border-[#D5D5D3]'
              }`}
            />
          </div>

          {/* PARAMETER FIELD: MESSAGE */}
          <div className="relative z-10 flex flex-col">
            <label htmlFor="message" className="text-[9px] font-bold tracking-widest text-[#7E7E7A] uppercase mb-1">
              03 // PAYLOAD_MSG
            </label>
            <textarea
              name="message" id="message" required rows={5}
              value={form.message} onChange={handleChange}
              placeholder="WRITE INBOUND MESSAGE DATA BLOCK..."
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              className={`w-full py-2 bg-transparent border-t-0 border-x-0 border-b outline-none text-xs text-[#1C1C1A] transition-colors duration-150 rounded-none resize-none leading-relaxed placeholder:text-[#C2D6D1] ${
                focused === 'message' ? 'border-[#FF4F00]' : 'border-[#D5D5D3]'
              }`}
            />
            <div className="text-[8px] font-bold text-[#A1A19E] text-right mt-1.5 tracking-wider">
              {form.message.length} BYTES_CHAR
            </div>
          </div>

          {/* ERROR READOUT PANEL */}
          {status === 'error' && (
            <div className="text-[10px] font-bold text-red-500 bg-red-50 border border-red-200 px-3 py-2 rounded-md tracking-wide relative z-10">
              CRITICAL_ERR: TX_FAILURE // RUNTIME TERMINATED. PLEASE ATTEMPT RE-TRANSMISSION OR ROUTE DIRECTLY via MAIL_LINK.
            </div>
          )}

          {/* HARDWARE TRIGGERS ROW */}
          <div className="relative z-10 flex items-center justify-between pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`text-[11px] tracking-widest font-bold px-6 py-3 text-white transition-all duration-150 rounded-lg flex items-center gap-2 shadow-sm ${
                status === 'sending' 
                  ? 'bg-[#A1A19E] cursor-not-allowed' 
                  : 'bg-[#1C1C1A] hover:bg-[#FF4F00]'
              }`}
            >
              {status === 'sending' ? 'TX_ENQUEUING...' : 'COMMIT_DISPATCH →'}
            </button>

            <a
              href="mailto:shabeebkaruvath@gmail.com"
              className="text-[10px] tracking-widest font-bold text-[#5A6E6A] hover:text-[#1C1C1A] text-decoration-none border-b border-[#C2D6D1] hover:border-[#1C1C1A] pb-0.5 transition-colors duration-100"
            >
              DIRECT_MAIL // OVERRIDE ↗
            </a>
          </div>

          {/* FOOTER RUNTIME LEDGER SEGMENT */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-bold tracking-widest text-[#7E7E7A] border-t border-[#D5D5D3] pt-4 mt-4">
            <span>SHABEEB KARUVATH</span>
            <span>FORM_HASH: MZZAQRVP</span>
          </div>

        </form>
      )}
    </section>
  );
}