import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'ramithamanilka2003@gmail.com',
    href: 'mailto:ramithamanilka2003@gmail.com',
    color: '#4285F4',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '0716668925',
    href: 'tel:+94716668925',
    color: '#34A853',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Kandy, Sri Lanka',
    href: null,
    color: '#EA4335',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const inputClass = hasErr =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ` +
    (hasErr
      ? 'border-[#EA4335] focus:ring-2 focus:ring-[#EA4335]/30'
      : 'border-[#e8eaed] focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20');

  return (
    <section id="contact" className="py-24" style={{ background: '#ffffff' }}>
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
            Get In Touch
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#1f1f1f' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's work together.
          </motion.h2>
          <motion.p
            className="text-base max-w-xl mx-auto"
            style={{ color: '#5f6368' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm available for freelance work or full-time opportunities.
            Have a project in mind? I'd love to hear about it.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon, label, value, href, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl border transition-all hover:shadow-sm"
                style={{ background: '#f8f9fa', borderColor: '#e8eaed' }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: color + '15', color }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: '#9aa0a6' }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-semibold transition-colors hover:underline"
                      style={{ color: '#1f1f1f' }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: '#1f1f1f' }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Decorative colored strip */}
            <div className="flex gap-2 pt-4">
              {['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#A142F4'].map(c => (
                <div key={c} className="h-1.5 flex-1 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl p-8 border"
            style={{ background: '#f8f9fa', borderColor: '#e8eaed' }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1f1f1f' }}>
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: '#5f6368' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass(!!errors.name)}
                  placeholder="John Doe"
                  style={{ background: '#fff' }}
                />
                {errors.name && <p className="mt-1 text-xs" style={{ color: '#EA4335' }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: '#5f6368' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass(!!errors.email)}
                  placeholder="john@example.com"
                  style={{ background: '#fff' }}
                />
                {errors.email && <p className="mt-1 text-xs" style={{ color: '#EA4335' }}>{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: '#5f6368' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass(!!errors.message)}
                  placeholder="Tell me about your project..."
                  style={{ background: '#fff', resize: 'none' }}
                />
                {errors.message && <p className="mt-1 text-xs" style={{ color: '#EA4335' }}>{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-medium text-white transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: '#1f1f1f' }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>

              {submitStatus === 'success' && (
                <div
                  className="p-3 rounded-xl text-sm font-medium text-center"
                  style={{ background: '#e6f4ea', color: '#137333' }}
                >
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
