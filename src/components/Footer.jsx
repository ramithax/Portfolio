import React from 'react';
import { Github, Twitter, Linkedin, Dribbble } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Dribbble size={20} />, href: '#', label: 'Dribbble' }
  ];

  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-gray-900">
            Alex<span className="text-brand-600">.dev</span>
          </a>
          <p className="text-sm text-gray-500">
            © {currentYear} Alex Developer. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) =>
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 transition-all">
              {link.icon}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
