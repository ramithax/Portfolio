import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'VehicleIQ',
    description: 'A full-stack vehicle valuation platform that helps users determine the market value of their cars using AI-powered image analysis and market data.',
    image: 'Assets/project_images/vehicleIQ.png',
    tags: ['Python', 'Flask', 'Tailwind', 'HTML', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/ramithax/Vehicle-IQ.git'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool featuring drag-and-drop boards, real-time updates, and team analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['TypeScript', 'React', 'Zustand', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered writing assistant that helps marketers generate blog posts, social media copy, and ad variants.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'OpenAI API', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Financial Dashboard',
    description: 'A comprehensive financial dashboard for tracking investments, expenses, and generating custom reports.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Recharts', 'Tailwind', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            Here are some of the selected projects that showcase my passion for
            building clean, scalable, and user-friendly applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) =>
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>

              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) =>
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label={`View source code for ${project.title}`}>
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
