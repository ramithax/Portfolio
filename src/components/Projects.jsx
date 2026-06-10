import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Dr.Computer (currently working on it)',
    description: 'Dr.Computer is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It is designed as a product-selling platform focused on computer-related items such as laptops, accessories, and hardware components with a fully functional admin pannel',
    image: '/Portfolio/project_images/dr.computer.png',
    tags: ['React', 'MongoDB', 'Tailwind', 'Node.js', 'ExpressJs', 'JWT', 'Firebase', 'Bcrypt'],
    githubUrl: 'https://github.com/ramithax/Dr.Computer-Frontend.git'
  },
  {
    title: 'VehicleIQ',
    description: 'Vehicle IQ is an intelligent web application built using Flask for the backend and Tailwind CSS for the frontend, designed specifically for selected Toyota vehicles. The system integrates a machine learning model based on Gradient Boosting (Gradient Boosting Regressor) to deliver accurate predictions and insights.',
    image: '/Portfolio/project_images/vehicleIQ.png',
    tags: ['Python', 'Flask', 'Tailwind', 'HTML', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/ramithax/Vehicle-IQ.git'
  },
  {
    title: 'Flask Blog',
    description: 'Flask Blog is a simple and fully functional web application built using Flask for the backend and Bootstrap for the frontend. It is designed as a blogging platform where users can create and manage posts easily.Clean and responsive Bootstrap interface, the app provides a smooth user experience while demonstrating core web development concepts like routing, templates, and data handling in Flask.',
    image: '/Portfolio/project_images/flask_blog.png',
    tags: ['Flask', 'Bootstrap', 'HTML', 'CSS', 'Jinja2', 'sqlite'],
    githubUrl: 'https://github.com/ramithax/Flask-Blog.git'
  },
  {
    title: 'OpenAI chatbot',
    description: 'OpenAI Chatbot is an intelligent conversational AI application built using the OpenAI API, LangChain, and a Retrieval-Augmented Generation (RAG) architecture. The system enhances standard LLM responses by integrating a retrieval layer that fetches relevant information from external knowledge sources before generating answers. This allows the chatbot to provide more accurate, contextual, and domain-specific responses.',
    image: '/Portfolio/project_images/openai.png',
    tags: ['openai api', 'langchain', 'python', 'GenAI', 'Chatbot', 'RAG', 'LLM'],
    githubUrl: 'https://github.com/ramithax/python-OpenAI_chatbot.git'
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
