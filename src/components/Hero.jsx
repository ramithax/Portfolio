import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Antigravity from './AntigravityInner';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#f0f4f9' }}>

      {/* Antigravity full-bleed background */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={400}
          magnetRadius={18}
          ringRadius={14}
          waveSpeed={0.1}
          waveAmplitude={0.8}
          particleSize={0.85}
          lerpSpeed={0.03}
          color={null}
          autoAnimate={true}
          particleVariance={0.8}
          rotationSpeed={0.04}
          depthFactor={0.8}
          pulseSpeed={1.5}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Content — centered like the real Antigravity site */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pointer-events-none">

        {/* Small label */}
        <motion.p
          className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Ramitha · AI/ML Engineer
        </motion.p>

        {/* Big centered heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "'Google Sans', 'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Build. Learn.{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853)' }}
          >
            Improve. Repeat.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          An aspiring AI/ML engineer and software developer passionate about building
          intelligent systems that solve real-world problems. I turn data into insights
          and ideas into working solutions.
        </motion.p>

        {/* CTA buttons — pill shaped like the real site */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-white transition-all hover:gap-3"
            style={{ background: '#1f1f1f', minWidth: '180px', justifyContent: 'center' }}
          >
            View My Work
            <ArrowRight size={17} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-white/70 transition-all"
            style={{ background: 'rgba(255,255,255,0.5)', minWidth: '180px', justifyContent: 'center' }}
          >
            <Download size={17} />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}