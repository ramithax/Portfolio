import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Happy Clients', value: '20+' }
  ];

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
                I started my journey as a developer back in 2018, tinkering with
                HTML and CSS. Since then, I've had the privilege of building
                software for start-ups, agencies, and large corporations.
              </p>
              <p>
                My main focus these days is building accessible, inclusive
                products and digital experiences for a variety of clients. I
                enjoy bridging the gap between engineering and design —
                combining my technical knowledge with my keen eye for design to
                create a beautiful product.
              </p>
              <p>
                When I'm not at the computer, I'm usually reading, hanging out
                with my dog, or exploring new coffee shops around the city.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            
            {stats.map((stat, index) =>
              <div
                key={index}
                className={`p-6 rounded-2xl ${index === 2 ? 'col-span-2 bg-brand-50' : 'bg-gray-50'}`}>
                <div
                  className={`text-4xl font-extrabold mb-2 ${index === 2 ? 'text-brand-600' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            )}

            <div className="col-span-2 rounded-2xl overflow-hidden h-48 relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Developer workspace with laptop and code"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
