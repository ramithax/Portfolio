import React from 'react';
import { motion } from 'framer-motion';

const CATEGORY_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#A142F4'];

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'Java'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Express', 'Flask', 'Spring Boot', 'Vue.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'ML / Data Science',
    skills: ['Pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'NumPy', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git / GitHub', 'Vercel', 'Netlify', 'Render', 'Postman'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#4285F4' }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Expertise
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#1f1f1f' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-base max-w-xl mx-auto"
            style={{ color: '#5f6368' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A snapshot of the tools and technologies I use to build intelligent,
            modern, and scalable applications.
          </motion.p>
        </div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const accent = CATEGORY_COLORS[index % CATEGORY_COLORS.length];
            return (
              <motion.div
                key={index}
                className="bg-[#f8f9fa] rounded-2xl p-6 border"
                style={{ borderColor: '#e8eaed' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                {/* Category label with colored dot */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
                  <h3 className="text-base font-semibold" style={{ color: '#1f1f1f' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="px-3 py-1.5 bg-white border rounded-full text-sm font-medium transition-all cursor-default hover:border-current"
                      style={{
                        borderColor: '#e8eaed',
                        color: '#5f6368',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = accent;
                        e.currentTarget.style.color = accent;
                        e.currentTarget.style.background = accent + '10';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '#e8eaed';
                        e.currentTarget.style.color = '#5f6368';
                        e.currentTarget.style.background = '#ffffff';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
