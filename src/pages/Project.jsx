import { FaGithub } from 'react-icons/fa';

const mono = { fontFamily: '"SF Mono","Fira Mono","Roboto Mono",ui-monospace,monospace' };

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
    <div className="project-row" style={{
      borderBottom: '1px solid #e0ddd6',
    }}>

      {/* Left meta column */}
      <div className="project-meta" style={{
        backgroundColor: index % 2 === 0 ? 'transparent' : '#fafaf8',
      }}>
        <div>
          <div style={{ ...mono, fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '3px' }}>ID</div>
          <div style={{ ...mono, fontSize: '10px', fontWeight: 700, color: '#0a0a0a' }}>{project.id}</div>
        </div>
        <div>
          <div style={{ ...mono, fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '3px' }}>YR</div>
          <div style={{ ...mono, fontSize: '10px', fontWeight: 700, color: '#0a0a0a' }}>{project.year}</div>
        </div>
        <div>
          <div style={{ ...mono, fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '3px' }}>STS</div>
          <div style={{ ...mono, fontSize: '9px', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.05em' }}>
            ● {project.status}
          </div>
        </div>
      </div>

      {/* Right content column */}
      <div className="project-body">

        {/* Main content */}
        <div className="project-content-pad" style={{ padding: '20px 20px' }}>

          {/* Title */}
          <div style={{
            ...mono,
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#0a0a0a',
            marginBottom: '10px',
          }}>
            {project.title}
          </div>

          {/* Description */}
          <div style={{
            ...mono,
            fontSize: '11px',
            lineHeight: 1.85,
            color: '#6b6b6b',
            marginBottom: '14px',
            maxWidth: '60ch',
          }}>
            {project.desc}
          </div>

          {/* Stack tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
            {project.stack.map(tag => (
              <span key={tag} style={{
                ...mono,
                fontSize: '9px',
                letterSpacing: '0.1em',
                padding: '3px 9px',
                border: '1px solid #0a0a0a',
                color: '#0a0a0a',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...mono,
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: '#0a0a0a',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              borderBottom: '1px solid #0a0a0a',
              paddingBottom: '1px',
              fontWeight: 700,
            }}
          >
            <FaGithub size={11} />
            VIEW_SOURCE ↗
          </a>
        </div>

        {/* Image panel */}
        <div className="project-image-container">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              minHeight: '160px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              backgroundColor: '#f5f4f0',
            }}>
              <div style={{ ...mono, fontSize: '1.4rem', fontWeight: 700, color: '#d0cdc8' }}>
                {project.id.split('-')[1]}
              </div>
              <div style={{ ...mono, fontSize: '8px', letterSpacing: '0.12em', color: '#c8c5be' }}>
                NO_IMG
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      {/* ── RESPONSIVE STYLES ── */}
      <style>
        {`
          .projects-section {
            max-width: 960px;
            margin: 0 auto;
            padding: 0 32px 120px;
          }
          .list-header {
            display: grid;
            grid-template-columns: 90px 1fr;
            border-bottom: 1px solid #0a0a0a;
            background-color: #f5f4f0;
          }
          .project-row {
            display: grid;
            grid-template-columns: 90px 1fr;
          }
          .project-meta {
            border-right: 1px solid #e0ddd6;
            padding: 20px 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .project-body {
            display: grid;
            grid-template-columns: 1fr auto;
          }
          .project-image-container {
            width: 140px;
            border-left: 1px solid #e0ddd6;
            overflow: hidden;
            flex-shrink: 0;
            position: relative;
            min-height: 160px;
          }
          .summary-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-left: 1px solid #0a0a0a;
          }
          .summary-item {
            border-right: 1px solid #0a0a0a;
            border-bottom: 1px solid #0a0a0a;
            padding: 12px 16px;
          }

          /* Tablet & Mobile Layout */
          @media (max-width: 768px) {
            .projects-section {
              padding: 0 24px 80px;
            }
            .list-header {
              display: none; /* Hide tabular header on small screens */
            }
            .project-row {
              grid-template-columns: 1fr;
            }
            .project-meta {
              flex-direction: row;
              flex-wrap: wrap;
              border-right: none;
              border-bottom: 1px solid #e0ddd6;
              padding: 12px 20px;
              gap: 24px;
            }
            .project-body {
              grid-template-columns: 1fr;
            }
            .project-image-container {
              width: 100%;
              height: 240px;
              border-left: none;
              border-top: 1px solid #e0ddd6;
            }
            .summary-grid {
              grid-template-columns: 1fr;
              border-right: 1px solid #0a0a0a;
            }
            .summary-item {
              border-right: none;
            }
          }

          /* Small Mobile Adjustments */
          @media (max-width: 480px) {
            .projects-section {
              padding: 0 16px 60px;
            }
            .project-meta {
              gap: 16px;
              padding: 12px 16px;
            }
            .project-content-pad {
              padding: 20px 16px !important;
            }
            .project-image-container {
              height: 200px;
            }
          }
        `}
      </style>

      <section className="projects-section">

        {/* Top label bar */}
        <div style={{
          ...mono,
          borderBottom: '1px solid #0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 0',
          flexWrap: 'wrap',
          gap: '6px',
        }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b' }}>
            DOC·PROJECTS / REV.2
          </span>
          <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#9b9b9b' }}>
            UNITS: {projects.length} / STATUS: ALL_SHIPPED
          </span>
        </div>

        {/* Column headers */}
        <div className="list-header">
          <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b', padding: '8px 16px', borderRight: '1px solid #0a0a0a' }}>
            META
          </div>
          <div style={{ ...mono, fontSize: '9px', letterSpacing: '0.15em', color: '#9b9b9b', padding: '8px 20px' }}>
            PROJECT_DATA
          </div>
        </div>

        {/* Project rows */}
        <div style={{ borderTop: '1px solid #0a0a0a' }}>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Summary bar */}
        <div className="summary-grid" style={{
          ...mono,
          borderTop: '1px solid #0a0a0a',
        }}>
          {[
            { k: 'TOTAL_PRJ',  v: `${projects.length}` },
            { k: 'LANGUAGES',  v: 'REACT · PYTHON'     },
            { k: 'DOMAIN',     v: 'WEB · ML · API'     },
          ].map(({ k, v }) => (
            <div key={k} className="summary-item">
              <div style={{ fontSize: '8px', letterSpacing: '0.15em', color: '#9b9b9b', marginBottom: '4px' }}>{k}</div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.05em' }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Footer tape */}
        <div style={{
          ...mono,
          fontSize: '9px',
          letterSpacing: '0.15em',
          color: '#c8c5be',
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '6px',
        }}>
          <span>SHABEEB KARUVATH · PORTFOLIO_V2</span>
          <span>DOC·PROJECTS · {new Date().getFullYear()}</span>
        </div>

      </section>
    </>
  );
}