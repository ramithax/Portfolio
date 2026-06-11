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
    <div className="min-h-screen bg-white selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
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
