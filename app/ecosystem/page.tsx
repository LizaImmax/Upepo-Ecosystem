'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SpacesVisualization from '@/components/SpacesVisualization';

export default function EcosystemPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-upepo-dark mb-6">
            The Upepo Ecosystem
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Not a platform. Not a course. A complete ecosystem for learning and growth.
          </p>
        </div>
      </section>

      {/* Ecosystem Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 4.png"
                alt="The 17 interconnected components of the Upepo Ecosystem"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Upepo is a <strong>living ecosystem</strong> made up of 17 interconnected components, each designed to support a different stage of growth.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At its core, there are spaces where people learn with clarity, guided, structured, and free from overwhelm, alongside spaces where real journeys are shared, voices are amplified, and lived experiences shape collective wisdom.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              There are environments dedicated to deep reflection and inner alignment, where growth is not rushed and meaning is given room to breathe. Other spaces invite people to slow down through books, conversations, and shared exploration of ideas that shape how we think, lead, and live.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              The ecosystem also holds places for experimentation where ideas are tested, skills are practiced, and innovation is allowed to emerge without fear of failure. From there, paths open into collaboration, exchange, and networks that connect people across disciplines, industries, and geographies.
            </p>

            <div className="bg-upepo-blue/5 border-l-4 border-upepo-blue p-8 rounded-r-lg mb-12">
              <p className="text-xl text-upepo-dark font-medium italic">
                "Together, these spaces move like wind, independent yet connected, purposeful yet fluid, forming an ecosystem where learning feels light, community feels real, and growth unfolds with intention."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 17 Components */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-upepo-dark mb-6">
              Explore the 17 Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click any component to learn more about its purpose and how it flows with others.
            </p>
          </div>

          <SpacesVisualization />
        </div>
      </section>

      {/* Ecosystem Visualization Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 5.png"
                alt="The interconnected spaces of the ecosystem"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-upepo-dark mb-6">
              Why An Ecosystem?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🌊',
                title: 'Interconnected',
                description: 'Every component supports and enhances the others, creating pathways for continuous growth.',
              },
              {
                icon: '🎯',
                title: 'Purposeful',
                description: 'Each space serves a specific need at different stages of your learning and development journey.',
              },
              {
                icon: '🌱',
                title: 'Organic',
                description: 'Growth happens naturally as you move between components, following your curiosity and needs.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-upepo-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/for-you"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight font-semibold rounded-lg hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-300 hover:scale-105"
            >
              See If It Is For You
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
