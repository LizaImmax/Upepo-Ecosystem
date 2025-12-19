'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="breathing-space">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-heading text-center mb-16"
          >
            Why Upepo Exists
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Founder Story */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-upepo-blue to-upepo-accent rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-white text-5xl">👤</span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="body-text text-center mb-6"
            >
              I started Upepo because learning didn't feel the way it should.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="body-text text-center mb-6"
            >
              It felt heavy. Fragmented. Isolating.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="h-1 w-24 bg-upepo-blue mx-auto my-12"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="body-text text-center mb-6"
            >
              I wanted a space where learning felt light, community felt real, and growth felt human.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="body-text text-center mb-6"
            >
              A place where knowledge, creativity, reflection, and opportunity could exist together, not separately.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="h-1 w-24 bg-upepo-blue mx-auto my-12"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-2xl md:text-3xl font-bold text-center text-upepo-dark mb-6"
            >
              Upepo is that space.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="body-text text-center italic"
            >
              Built slowly. Intentionally. With soul.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-container bg-white/50 backdrop-blur-sm py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-upepo-dark mb-16"
          >
            What We Believe In
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Clarity',
                description: 'Learning should illuminate, not overwhelm.',
              },
              {
                icon: '🤝',
                title: 'Community',
                description: 'Connection through presence, not just numbers.',
              },
              {
                icon: '🌱',
                title: 'Growth',
                description: 'Progress that honors your pace and purpose.',
              },
              {
                icon: '✨',
                title: 'Soul',
                description: 'Every space built with intention and care.',
              },
              {
                icon: '🌍',
                title: 'Global Impact',
                description: 'African stories deserve global platforms.',
              },
              {
                icon: '🎯',
                title: 'Direction',
                description: 'Guidance that helps you find your path.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-upepo-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-upepo-dark/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-upepo-dark mb-6">
            Ready to Explore?
          </h2>
          <p className="body-text mb-8">
            Discover what makes the Upepo Ecosystem different.
          </p>
          <Link href="/ecosystem" className="cta-button">
            Explore the Ecosystem
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
