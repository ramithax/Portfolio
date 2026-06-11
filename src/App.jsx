import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import TechStackSection from './components/TechStackSection';

export function App() {
  return (
    <div className="min-h-screen" style={{ background: '#f0f4f9' }}>
      <Header />
      <main>
        {/* Antigravity effect only on Hero */}
        <Hero />
        {/* All other sections: white / #f0f4f9 alternating, no particle effects */}
        <About />
        <Projects />
        <Skills />
        <TechStackSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
