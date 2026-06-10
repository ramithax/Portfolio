import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'Java']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Express', 'Flask', 'Springboot', 'Vue.js', 'Tailwind CSS', 'Node.js']
  },
  {
    title: 'Libraries',
    skills: ['Pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'numpy', 'Tensorflow', 'keras']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git/GitHub', 'Vercel', 'Netlify', 'Render', 'Postman']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.div
              className="sticky top-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I've worked with a variety of technologies in the web
                development world. Here's a snapshot of the tools I use on a
                daily basis.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8 space-y-12">
            {skillCategories.map((category, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>

                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) =>
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-800 font-medium rounded-lg hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-colors cursor-default">
                      {skill}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
