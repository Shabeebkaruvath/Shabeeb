const skills = [
  { category: 'Front-end', items: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Tools',     items: ['Vite', 'Git', 'GitHub', 'Figma', 'VS Code']             },
  { category: 'Learning',  items: ['Python', 'Neural Networks', 'Machine Learning', 'NumPy'] },
];

export default function About() {
  return (
    <section className="max-w-5xl mx-auto w-full px-8 py-20 md:py-28">

      {/* Header */}
      <div className="mb-16 fade-up">
        <span style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#6b6b6b', fontWeight: 500 }}>
          ABOUT
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 400,
          marginTop: '0.75rem',
          lineHeight: 1.1,
        }}>
          Developer by night,<br />
          <em style={{ fontStyle: 'italic' }}>researcher by day.</em>
        </h2>
      </div>

      {/* Bio + Skills grid */}
      <div className="grid md:grid-cols-5 gap-16">

        {/* Bio — takes 3 cols */}
        <div className="md:col-span-3 space-y-5 fade-up fade-up-delay-1">
          {[
            `Hello! I'm Shabeeb — a passionate front-end developer with a strong focus on ReactJS. At 22, I've built scalable, responsive web applications across 2+ years of real-world experience, always aiming to turn complex problems into clean, elegant solutions.`,
            `I'm proficient in ReactJS, JavaScript, HTML, and CSS, and I keep a close eye on the latest in front-end development. I've shipped everything from small UI components to full web applications, with a constant emphasis on performance and user experience.`,
            `I'm currently pursuing an M.Sc. in Machine Learning, actively bridging the gap between front-end engineering and AI. Whether working solo or collaborating on a team, I bring focus, craft, and a positive approach to every project.`,
            `I'm open to freelance work and new opportunities. If you're looking for someone who's committed, skilled, and perpetually curious — let's connect.`,
          ].map((para, i) => (
            <p key={i} style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4a4a4a' }}>
              {para}
            </p>
          ))}
        </div>

        {/* Skills — takes 2 cols */}
        <div className="md:col-span-2 space-y-8 fade-up fade-up-delay-2">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: '#9b9b9b',
                fontWeight: 500,
                marginBottom: '10px',
              }}>
                {category.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      padding: '5px 12px',
                      border: '1px solid #e0ddd6',
                      borderRadius: '3px',
                      fontSize: '13px',
                      color: '#4a4a4a',
                      backgroundColor: '#f5f4f0',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider quote */}
      <div
        className="fade-up fade-up-delay-3 mt-20"
        style={{ borderTop: '1px solid #e0ddd6', paddingTop: '2rem' }}
      >
        <blockquote style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '1.3rem',
          color: '#9b9b9b',
          lineHeight: 1.5,
          maxWidth: '55ch',
        }}>
          "Clean code, thoughtful design, and a relentless curiosity — that's the stack I work with every day."
        </blockquote>
      </div>

    </section>
  );
}