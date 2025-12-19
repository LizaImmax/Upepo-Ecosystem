'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="breathing-space">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-heading mb-8"
          >
            Join the Ecosystem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body-text mb-16"
          >
            Be among the first to experience the Upepo Ecosystem as it unfolds. Join the waitlist for exclusive access, early updates, and the opportunity to shape what comes next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <EmailCapture />
          </motion.div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="section-container bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-upepo-dark mb-12"
          >
            What You'll Receive
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📧',
                title: 'Early Updates',
                description: 'Be the first to know when new spaces open and launches happen.',
              },
              {
                icon: '🎯',
                title: 'Exclusive Access',
                description: 'Priority invitations to beta programs, workshops, and community events.',
              },
              {
                icon: '💬',
                title: 'Voice in the Build',
                description: 'Share your needs, ideas, and feedback as we shape the ecosystem.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-3xl shadow-lg"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-upepo-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-upepo-dark/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-upepo-blue to-upepo-dark text-white p-12 rounded-3xl text-center"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
              This is not about joining a platform.
            </p>
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              It is about becoming part of a movement where learning, growth, and community flow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-upepo-dark mb-6">
            Want to Learn More?
          </h2>
          <p className="body-text mb-8">
            Explore the vision, values, and spaces that make up the ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/story" className="cta-button-secondary">
              Our Story
            </Link>
            <Link href="/ecosystem" className="cta-button-secondary">
              The Ecosystem
            </Link>
            <Link href="/journey" className="cta-button-secondary">
              The Journey
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
