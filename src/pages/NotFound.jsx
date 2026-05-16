import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-160px)] flex items-center justify-center px-8">
      <div className="text-center">
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 400,
          color: '#e0ddd6',
          lineHeight: 1,
          marginBottom: '1.5rem',
          userSelect: 'none',
        }}>
          404
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 400,
          marginBottom: '1rem',
        }}>
          Page not found
        </h1>
        <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '2rem' }}>
          Looks like this page doesn't exist yet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 link-hover"
          style={{ fontSize: '14px', fontWeight: 500 }}
        >
          <ArrowLeft size={14} />
          Back home
        </Link>
      </div>
    </section>
  );
}
