import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Build. Learn. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                Improve. Repeat.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm Ramitha. An aspiring AI/ML engineer and software developer
              passionate about building intelligent systems that solve real-world problems.
              I turn data into insights and ideas into working solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:gap-3"
              >
                View My Work
                <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border border-gray-200 font-medium rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - ROBOT VIDEO */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
          >
            <div className="relative group">

              <video
                src="Assets\animation\robot.webm"
                autoPlay
                loop
                muted
                playsInline
                className="
                    w-[480px] md:w-[680px]
                    object-contain
                    drop-shadow-2xl
                  "
              />

            </div>

            {/* Bottom shadow fade */}
            <div className="
                pointer-events-none
                absolute bottom-0 left-0 w-[440px] md:w-[640px]
                bg-gradient-to-t from-white via-white/70 to-transparent
              "></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}