import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'Product Aggregator',
    description: 'A platform that aggregates products from multiple sources, letting users compare prices and features before purchase decisions.',
    tags: ['React', 'API Integration', 'UI/UX'],
    github: 'https://github.com/Shabeebkaruvath/fproject',
    image: 'https://github.com/user-attachments/assets/b5f83cd2-1666-4ba9-aa95-d54f165cd7c0',
    placeholder: null,
  },
  {
    num: '02',
    title: 'CashFlow — Finance Tracker',
    description: 'A personal finance app to track expenses, manage budgets, and visualise spending patterns with interactive charts.',
    tags: ['React', 'Charts', 'State Management'],
    github: 'https://github.com/Shabeebkaruvath/CashFlow',
    image: 'https://github.com/user-attachments/assets/d9dd56a9-bfbc-4904-ad35-fe90a49bede8',
    placeholder: null,
  },
  
  {
    num: '03',
    title: 'Fuzzy Logic Spam Detector',
    description: 'A rule-based spam classification system using fuzzy logic. Extracts 5 signal features — keyword score, uppercase ratio, exclamation density, digit ratio, URL score — then runs a skfuzzy inference engine to classify emails as SPAM or HAM with confidence scoring.',
    tags: ['Python', 'Fuzzy Logic', 'ML', 'NLP'],
    github: 'https://github.com/Shabeebkaruvath/spam-mail-detection',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkkTi_sxiEB0_tN_kHz2JAYNp_2jV_fk8hx7AGXmR&s',
    placeholder: 'fuzzy logic · python',
  },
  {
    num: '04',
    title: 'Weather App',
    description: 'A responsive weather application delivering real-time forecasts and hourly updates via meteorological APIs.',
    tags: ['React', 'REST API', 'Responsive'],
    github: 'https://github.com/Shabeebkaruvath/Reactjs-Weather-app-',
    image: "null",
    placeholder: 'weather · react',
  },
];

function ProjectCard({ project }) {
  return (
    <article
      style={{
        border: '1px solid #e0ddd6',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        transition: 'border-color 0.25s, transform 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#0a0a0a';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#e0ddd6';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image / Placeholder */}
      <div style={{ height: '180px', backgroundColor: '#f5f4f0', overflow: 'hidden' }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '8px',
            backgroundColor: '#f0ede8',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: '#d0cdc8',
              lineHeight: 1,
            }}>
              {project.num}
            </span>
            {project.placeholder && (
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: '#b0aba3',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}>
                {project.placeholder}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#9b9b9b', fontWeight: 500 }}>
          {project.num}
        </span>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.3rem',
          fontWeight: 400,
          margin: '6px 0 10px',
        }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#6b6b6b', marginBottom: '16px' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                padding: '3px 10px',
                border: '1px solid #e0ddd6',
                borderRadius: '2px',
                fontSize: '11px',
                color: '#6b6b6b',
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 link-hover"
          style={{ fontSize: '13px', color: '#0a0a0a', fontWeight: 500 }}
        >
          <FaGithub size={14} />
          View on GitHub
          <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto w-full px-8 py-20 md:py-28">

      <div className="mb-16 fade-up">
        <span style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#6b6b6b', fontWeight: 500 }}>
          PROJECTS
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 400,
          marginTop: '0.75rem',
          lineHeight: 1.1,
        }}>
          Things I've<br />
          <em style={{ fontStyle: 'italic' }}>shipped.</em>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 fade-up fade-up-delay-1">
        {projects.map(project => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>

    </section>
  );
}