import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[#e8eaed] shadow-sm'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight text-[#1f1f1f] hover:text-[#4285F4] transition-colors">
            Ramitha<span style={{ color: '#4285F4' }}>.X</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#5f6368] hover:text-[#1f1f1f] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA — pill button matching Hero */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: '#1f1f1f' }}
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#5f6368] hover:text-[#1f1f1f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#e8eaed] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[#5f6368] hover:text-[#4285F4] py-1 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}