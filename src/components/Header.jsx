import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-3 inset-x-0 z-50">

      {/* OUTER BORDER — thin, no fill */}
      <div className="mx-auto w-[95%] max-w-6xl rounded-2xl border border-blue-400/40">

        {/* INNER CONTAINER — fully transparent */}
        <div
          className={`flex items-center justify-between px-6 rounded-2xl transition-all duration-300
    ${isScrolled
              ? 'py-2 bg-white/20 backdrop-blur-md'
              : 'py-3 bg-white/10 backdrop-blur-md'
            }`}
        >

          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-black hover:text-blue-600 transition-colors"
          >
            Ramitha<span className="text-blue-600">.X</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-900 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-auto w-[95%] max-w-6xl mt-2 border border-blue-400/40 rounded-2xl py-3 px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-300 hover:text-white py-1"
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