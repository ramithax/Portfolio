import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">

      {/* FIXED CONTAINER (less side space) */}
      <div className="max-w-6xl mx-auto px-4">

        {/* FIXED GRID GAP */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#4285F4]">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#1f1f1f]">
              Passionate about creating{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                meaningful
              </span>{' '}
              digital products.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#5f6368]">
              <p>
                I started my journey as a developer in 2023. Since then, I've been continuously
                building my skills through academic projects and hands-on experience, including
                web applications and AI/ML-based systems.
              </p>
              <p>
                My current focus is on AI/ML and software development, where I enjoy building
                intelligent, real-world solutions and full-stack applications.
              </p>
              <p>
                Outside of coding, I explore new technologies and build personal projects that
                push me toward becoming an AI engineer and software developer.
              </p>
            </div>

            {/* STAT PILLS */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: '3rd Year Undergrad', color: '#1f4fff' },
                { label: 'AI Specialization', color: '#34A853' },
                { label: 'SLIIT Kandy', color: '#FBBC05' },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border"
                  style={{
                    color,
                    borderColor: color,
                    background: color + '12',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — CODE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-md mx-auto">

              {/* VS CODE TOP BAR */}
              <div className="bg-[#2d2d2d] px-4 py-2.5 rounded-t-2xl flex items-center gap-2">

                {/* circles */}
                <div className="w-3 h-3 bg-[#ff5f56] rounded-full" />
                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full" />
                <div className="w-3 h-3 bg-[#27c93f] rounded-full" />

                {/* filename */}
                <span className="ml-3 text-xs text-white/50 font-mono">
                  about.json
                </span>
              </div>

              {/* CODE BLOCK */}
              <div className="bg-[#1e1e1e] text-sm md:text-base p-6 rounded-b-2xl shadow-2xl border border-white/5 overflow-hidden font-mono leading-7">

                {/* OPEN BRACE */}
                <div className="text-[#A142F4]">{'{'}</div>

                <div className="pl-4 space-y-1">

                  {[
                    { key: '"about"', val: '"3rd year undergraduate student"' },
                    { key: '"studying_at"', val: '"SLIIT Kandy"' },
                    { key: '"specialization"', val: '"Artificial Intelligence"' },
                    { key: '"frameworks"', val: '["MERN", "Flask", "Spring Boot"]' },
                    { key: '"libraries"', val: '["React", "TensorFlow", "Keras"]' },
                    { key: '"interests"', val: '["AI Systems", "Full Stack"]' },
                  ].map(({ key, val }, i, arr) => (
                    <div key={key} className="flex flex-wrap">

                      <span className="text-[#60A5FA] w-40">{key}</span>

                      <span className="text-white/60 mr-2">:</span>

                      <span className="text-white">{val}</span>

                      {i < arr.length - 1 && (
                        <span className="text-white/40 ml-1">,</span>
                      )}

                    </div>
                  ))}

                </div>

                {/* CLOSE BRACE */}
                <div className="text-[#A142F4]">{'}'}</div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}