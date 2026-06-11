import React from 'react';
import { motion } from 'framer-motion';

export function About() {

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Passionate about creating{' '}
              <span className="text-brand-600">meaningful</span> digital
              products.
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I started my journey as a developer in 2023, Since then,
                I’ve been continuously building my skills through academic projects and hands-on
                experience, including web applications and AI/ML-based systems.
              </p>
              <p>
                My current focus is on AI/ML and software development,
                where I enjoy building intelligent, real-world solutions and full-stack applications.
                I’m passionate about combining machine learning with modern web technologies
                to create practical and impactful digital products.
              </p>
              <p>
                Outside of coding, I spend my time learning new technologies,
                working on personal projects, and exploring ideas that push me closer to
                becoming a skilled AI engineer and software developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-md">

              {/* VS Code style top bar */}
              <div className="bg-gray-800 px-4 py-2 rounded-t-2xl flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Code card */}
              <motion.div
                className="bg-gray-900 text-sm md:text-base p-6 rounded-b-2xl shadow-2xl border border-gray-800 overflow-hidden"
              >
                <pre className="font-mono leading-relaxed whitespace-pre-wrap break-words">
                  <code>
                    <span className="text-purple-400">{'{'}</span>

                    <div className="flex">
                      <span className="text-blue-400 w-40">"about"</span>
                      <span className="text-white">: </span>
                      <span className="text-white">"A 3rd year undergraduate student"</span>,
                    </div>

                    <div className="flex">
                      <span className="text-blue-400 w-40">"studying_at"</span>
                      <span className="text-white">: </span>
                      <span className="text-white">"SLIIT Kandy"</span>,
                    </div>

                    <div className="flex">
                      <span className="text-blue-400 w-40">"specialization"</span>
                      <span className="text-white">: </span>
                      <span className="text-white">"Artificial Intelligence"</span>,
                    </div>

                    <div className="flex">
                      <span className="text-blue-400 w-40">"frameworks"</span>
                      <span className="text-white">: </span>
                      <span className="text-white">["MERN", "Flask", "Spring Boot"]</span>,
                    </div>

                    <div className="flex">
                      <span className="text-blue-400 w-40">"libraries"</span>
                      <span className="text-white">: </span>
                      <span className="text-white">["React", "TensorFlow", "Keras"]</span>,
                    </div>

                    <div className="flex">
                      <span className="text-blue-400 w-40">"interests"</span>
                      <span className="text-white">: </span>
                      <span className="text-white">["AI Systems", "Full Stack Development"]</span>
                    </div>

                    <span className="text-purple-400">{'}'}</span>
                  </code>
                </pre>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
