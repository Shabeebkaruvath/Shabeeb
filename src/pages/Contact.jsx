import { useState } from 'react';

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
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

  const mono = { fontFamily: '"SF Mono", "Fira Mono", "Roboto Mono", monospace' };

  const fieldStyle = (name) => ({
    ...mono,
    width: '100%',
    padding: '10px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? '#0a0a0a' : '#c8c5be'}`,
    outline: 'none',
    fontSize: '14px',
    color: '#0a0a0a',
    transition: 'border-color 0.15s',
    borderRadius: 0,
  });

  return (
    <section style={{ maxWidth: '560px', margin: '0 auto', padding: '80px 32px 120px' }}>

      {/* Header block */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{
          ...mono,
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: '#9b9b9b',
          marginBottom: '20px',
        }}>
          MSG_COMPOSE / REV.1
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          borderTop: '1px solid #0a0a0a',
          borderLeft: '1px solid #0a0a0a',
        }}>
          {[
            ['STATUS',   'OPEN FOR WORK'],
            ['LOCATION', 'KERALA, IN'],
            ['RESPONSE', '< 24 H'],
            ['CHANNEL',  'MAIL / FORM'],
          ].map(([key, val]) => (
            <div key={key} style={{
              borderRight: '1px solid #0a0a0a',
              borderBottom: '1px solid #0a0a0a',
              padding: '10px 14px',
            }}>
              <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '4px' }}>
                {key}
              </div>
              <div style={{ ...mono, fontSize: '12px', color: '#0a0a0a', fontWeight: 600 }}>
                {val}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form or success */}
      {status === 'success' ? (
        <div style={{
          border: '1px solid #0a0a0a',
          padding: '40px 32px',
          textAlign: 'center',
        }}>
          <div style={{ ...mono, fontSize: '10px', letterSpacing: '0.2em', color: '#9b9b9b', marginBottom: '16px' }}>
            TX_OK
          </div>
          <div style={{ ...mono, fontSize: '22px', color: '#0a0a0a', marginBottom: '8px' }}>
            ✓ SENT
          </div>
          <div style={{ ...mono, fontSize: '11px', color: '#9b9b9b', marginBottom: '28px' }}>
            MESSAGE QUEUED. REPLY WITHIN 24H.
          </div>
          <button
            onClick={() => setStatus('idle')}
            style={{
              ...mono,
              fontSize: '10px',
              letterSpacing: '0.15em',
              background: 'none',
              border: '1px solid #c8c5be',
              padding: '8px 20px',
              cursor: 'pointer',
              color: '#6b6b6b',
            }}
          >
            NEW MESSAGE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          {/* Field: NAME */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ ...mono, fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b', display: 'block', marginBottom: '6px' }}>
              01 / NAME
            </label>
            <input
              type="text" name="name" id="name" required
              value={form.name} onChange={handleChange}
              placeholder="——"
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              style={fieldStyle('name')}
            />
          </div>

          {/* Field: EMAIL */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ ...mono, fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b', display: 'block', marginBottom: '6px' }}>
              02 / EMAIL
            </label>
            <input
              type="email" name="email" id="email" required
              value={form.email} onChange={handleChange}
              placeholder="——"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              style={fieldStyle('email')}
            />
          </div>

          {/* Field: MESSAGE */}
          <div style={{ marginBottom: '48px' }}>
            <label style={{ ...mono, fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b', display: 'block', marginBottom: '6px' }}>
              03 / MSG
            </label>
            <textarea
              name="message" id="message" required rows={6}
              value={form.message} onChange={handleChange}
              placeholder="——"
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              style={{ ...fieldStyle('message'), resize: 'none', lineHeight: 1.7 }}
            />
            <div style={{ ...mono, fontSize: '9px', color: '#c8c5be', textAlign: 'right', marginTop: '6px' }}>
              {form.message.length} CHAR
            </div>
          </div>

          {/* Error */}
          {status === 'error' && (
            <div style={{ ...mono, fontSize: '10px', color: '#c0392b', letterSpacing: '0.1em', marginBottom: '16px' }}>
              TX_ERR — RETRY OR MAIL DIRECTLY
            </div>
          )}

          {/* Submit */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                ...mono,
                fontSize: '11px',
                letterSpacing: '0.2em',
                fontWeight: 700,
                padding: '14px 32px',
                background: status === 'sending' ? '#f0ede8' : '#0a0a0a',
                color: status === 'sending' ? '#9b9b9b' : '#fafaf8',
                border: 'none',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'background 0.15s',
                borderRadius: 0,
              }}
            >
              {status === 'sending' ? 'TX…' : 'SEND →'}
            </button>

            <a
              href="mailto:shabeebkaruvath@gmail.com"
              style={{
                ...mono,
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: '#9b9b9b',
                textDecoration: 'none',
                borderBottom: '1px solid #c8c5be',
                paddingBottom: '2px',
              }}
            >
              OR MAIL DIRECT ↗
            </a>
          </div>

          {/* Footer tape */}
          <div style={{
            ...mono,
            fontSize: '9px',
            letterSpacing: '0.15em',
            color: '#c8c5be',
            marginTop: '40px',
            borderTop: '1px solid #e0ddd6',
            paddingTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span>SHABEEB KARUVATH</span>
            <span>FORM_ID: MZZAQRVP</span>
          </div>

        </form>
      )}
    </section>
  );
}