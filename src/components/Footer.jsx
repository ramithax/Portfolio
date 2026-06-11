import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/ramithax', label: 'GitHub', color: '#1f1f1f' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/ramitha-manilka-a91324396/', label: 'LinkedIn', color: '#0a66c2' },
];

// Google color strip
const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#A142F4'];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#f0f4f9', borderTop: '1px solid #e8eaed' }}>
      {/* Google color bar at very top */}
      <div className="flex h-1">
        {GOOGLE_COLORS.map(c => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="text-xl font-bold tracking-tight" style={{ color: '#1f1f1f' }}>
            Ramitha<span style={{ color: '#4285F4' }}>.X</span>
          </a>
          <p className="text-sm" style={{ color: '#9aa0a6' }}>
            © {year} Ramitha.X · All rights reserved.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6 text-sm font-medium" style={{ color: '#5f6368' }}>
          {['About', 'Projects', 'Skills', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors"
              style={{ color: '#5f6368' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4285F4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5f6368')}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-all hover:scale-110"
              style={{ borderColor: '#e8eaed', background: '#ffffff', color: '#5f6368' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.color = color;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e8eaed';
                e.currentTarget.style.color = '#5f6368';
              }}
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
