import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// Google-brand tag colors cycling
const TAG_COLORS = [
  { bg: '#e8f0fe', text: '#1967d2' },
  { bg: '#fce8e6', text: '#c5221f' },
  { bg: '#fef7e0', text: '#b05e00' },
  { bg: '#e6f4ea', text: '#137333' },
  { bg: '#f3e8fd', text: '#7b2ea6' },
];

const projects = [
  {
    title: 'Job Tracker',
    subtitle: 'Job Application Tracker',
    description:
      'Job Tracker: A Next.js application that helps you track your job applications, automate follow-ups, and manage your job search pipeline.',
    image: '/Portfolio/project_images/jobtracker.png',
    tags: ['Next.js', 'Typescript', 'MongoDB', 'Node.js', 'Better-auth', 'Shadcn UI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ramithax/job-application-tracker.git',
    accent: '#4285F4',
  },
  {
    title: 'Dr.Computer',
    subtitle: 'Currently working on it',
    description:
      'A full-stack e-commerce web application built using the MERN stack, focused on computer-related items with a fully functional admin panel.',
    image: '/Portfolio/project_images/dr.computer.png',
    tags: ['React', 'MongoDB', 'Node.js', 'ExpressJs', 'JWT', 'Firebase'],
    githubUrl: 'https://github.com/ramithax/Dr.Computer-Frontend.git',
    accent: '#4285F4',
  },
  {
    title: 'VehicleIQ',
    subtitle: 'ML-powered vehicle insights',
    description:
      'Intelligent web application using Flask and a Gradient Boosting ML model for accurate vehicle price predictions and insights.',
    image: '/Portfolio/project_images/vehicleIQ.png',
    tags: ['Python', 'Flask', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/ramithax/Vehicle-IQ.git',
    accent: '#34A853',
  },
  {
    title: 'Flask Blog',
    subtitle: 'Full-featured blogging platform',
    description:
      'A simple and fully functional blogging platform with Flask backend and Bootstrap frontend, supporting post creation and management.',
    image: '/Portfolio/project_images/flask_blog.png',
    tags: ['Flask', 'Bootstrap', 'Jinja2', 'SQLite'],
    githubUrl: 'https://github.com/ramithax/Flask-Blog.git',
    accent: '#FBBC05',
  },
  {
    title: 'OpenAI Chatbot',
    subtitle: 'RAG-powered conversational AI',
    description:
      'Conversational AI using OpenAI API, LangChain, and RAG architecture to provide accurate, contextual, domain-specific responses.',
    image: '/Portfolio/project_images/openai.png',
    tags: ['OpenAI API', 'LangChain', 'Python', 'GenAI', 'RAG'],
    githubUrl: 'https://github.com/ramithax/python-OpenAI_chatbot.git',
    accent: '#A142F4',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: '#f0f4f9' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#4285F4' }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#1f1f1f' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-base max-w-xl mx-auto"
            style={{ color: '#5f6368' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Selected projects that showcase my passion for building clean,
            scalable, and user-friendly applications.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl"
              style={{ borderColor: '#e8eaed' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-[#f8f9fa]">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Accent top border */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: project.accent }}
                />
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="mb-3">
                  <h3
                    className="text-xl font-bold mb-0.5 transition-colors"
                    style={{ color: '#1f1f1f' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium" style={{ color: project.accent }}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: '#5f6368' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, ti) => {
                    const c = TAG_COLORS[ti % TAG_COLORS.length];
                    return (
                      <span
                        key={ti}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: c.bg, color: c.text }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t flex items-center gap-4" style={{ borderColor: '#e8eaed' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                    style={{ background: '#1f1f1f' }}
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
