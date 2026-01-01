'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Learning without overwhelm',
      description: 'Clear pathways, thoughtful pacing, and guidance that honors your capacity.',
      color: 'border-blue-500',
    },
    {
      title: 'Conversations with depth',
      description: 'Meaningful exchanges that go beyond small talk and surface-level connection.',
      color: 'border-indigo-500',
    },
    {
      title: 'Growth that feels aligned',
      description: 'Progress that matches your values, vision, and the life you are building.',
      color: 'border-purple-500',
    },
    {
      title: 'Community without noise',
      description: 'Presence over performance. Quality over quantity. Real over curated.',
      color: 'border-cyan-500',
    },
    {
      title: 'A sense of direction',
      description: 'Clarity on your next steps, supported by people who understand the journey.',
      color: 'border-teal-500',
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-upepo-text mb-6">
            What You Will Experience
          </h1>
          <p className="text-xl text-upepo-text-muted">
            This is not about features or tools. It is about how you will feel and what will shift in your journey.
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 9.png"
                alt="Calm and peaceful learning environment"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className={`relative p-8 bg-upepo-ocean/20 backdrop-blur-sm rounded-lg hover:shadow-lg hover:shadow-upepo-wind/10 transition-all duration-300 border-l-4 ${experience.color}`}
            >
              <h3 className="text-2xl font-bold text-upepo-text mb-4">
                {experience.title}
              </h3>
              <p className="text-lg text-upepo-text-muted leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 10.png"
                alt="Deep meaningful connections and conversations"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Calm Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 py-16 bg-upepo-ocean/20 backdrop-blur-sm rounded-2xl px-8 border border-upepo-wind/20">
          <h2 className="text-4xl font-bold text-upepo-text mb-6">
            A Space That Breathes
          </h2>
          <p className="text-xl text-upepo-text-muted mb-8">
            Every element is designed to create calm, not chaos. Clarity, not confusion. Movement, not rush.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-4xl mx-auto mt-8"
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 11.png"
                alt="A space that breathes - open and calm"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-upepo-dark text-white p-12 rounded-2xl text-center">
            <p className="text-2xl italic leading-relaxed mb-6">
              "This is where learning stopped feeling like a burden and started feeling like breathing."
            </p>
            <p className="text-blue-300 font-semibold">- Upepo Ecosystem</p>
          </div>
        </div>

        {/* Join Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-upepo-wind/10 to-upepo-ocean/20 p-10 rounded-2xl border border-upepo-wind/30 text-center">
            <h2 className="text-3xl font-bold text-upepo-text mb-4">
              Want to Experience This?
            </h2>
            <p className="text-lg text-upepo-text-muted mb-8 max-w-2xl mx-auto">
              Follow our journey and be part of the community as we launch new components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/upepo-ecosystem/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-upepo-wind text-upepo-midnight font-semibold rounded-full hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-300 hover:scale-105"
              >
                Follow on LinkedIn
              </a>
              <a
                href="/team"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-upepo-wind text-upepo-wind font-semibold rounded-full hover:bg-upepo-wind/10 transition-all duration-300 hover:scale-105"
              >
                Meet the Team
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-upepo-text mb-4">
            How Do We Build This?
          </h2>
          <p className="text-lg text-upepo-text-muted mb-8">
            Learn about the philosophy and values that guide everything we create.
          </p>
          <Link href="/philosophy">
            <button className="px-8 py-4 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight rounded-lg text-lg font-semibold 
                     hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-200 hover:scale-105 active:scale-95">
              Our Philosophy
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
