import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
  { href: 'https://github.com/Shabeebkaruvath',       Icon: FaGithub,    label: 'GitHub'    },
  { href: 'https://www.linkedin.com/in/Shabeebkaruvath', Icon: FaLinkedinIn, label: 'LinkedIn'  },
  { href: 'https://www.instagram.com/shabeeb.edn',    Icon: FaInstagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer
      className="w-full pb-20 md:pb-0"
      style={{ borderTop: '1px solid #e0ddd6' }}
    >
      <div className="max-w-5xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p style={{ fontSize: '13px', color: '#6b6b6b', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
          Built with care by Shabeeb
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="link-hover"
              style={{ color: '#6b6b6b', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0a0a0a')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b6b6b')}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <p style={{ fontSize: '12px', color: '#9b9b9b' }}>
          © {new Date().getFullYear()} Shabeeb Karuvath
        </p>
      </div>
    </footer>
  );
}