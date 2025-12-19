'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-upepo-blue/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-upepo-blue uppercase tracking-wide">Learning Ecosystem</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-upepo-dark mb-6 leading-tight">
                Transforming how Africa learns, builds, and grows
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A comprehensive ecosystem connecting learners, innovators, and storytellers through structured pathways, community, and real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/journey"
                  className="inline-flex items-center justify-center px-8 py-4 bg-upepo-blue text-white font-semibold rounded-lg hover:bg-upepo-accent transition-colors"
                >
                  Explore Ecosystem
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/story"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-upepo-dark font-semibold rounded-lg hover:border-upepo-blue hover:text-upepo-blue transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-upepo-blue/5 to-upepo-accent/5 rounded-2xl p-12 border border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-upepo-blue/10" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gray-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '17', label: 'Integrated Components' },
              { number: '10+', label: 'Learning Pathways' },
              { number: '∞', label: 'Growth Opportunities' },
              { number: '1', label: 'Unified Ecosystem' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-upepo-blue mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-upepo-dark mb-6">
              Everything you need to grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From structured learning to community connection, creative expression to venture building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Structured Learning',
                description: 'Clear pathways designed for different stages of growth, from beginner to advanced.',
                icon: '📚',
              },
              {
                title: 'Real Community',
                description: 'Meaningful connections with people who share your values and ambitions.',
                icon: '🤝',
              },
              {
                title: 'Practical Impact',
                description: 'Tools and support to turn knowledge into real-world projects and ventures.',
                icon: '🚀',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-upepo-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-upepo-dark mb-4">
              Explore the Ecosystem
            </h2>
            <p className="text-xl text-gray-600">
              Discover every dimension of Upepo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Our Story', href: '/story', icon: '🌱' },
              { title: 'The Ecosystem', href: '/ecosystem', icon: '🌬️' },
              { title: 'For You', href: '/for-you', icon: '✨' },
              { title: 'Experience', href: '/experience', icon: '🤍' },
              { title: 'Philosophy', href: '/philosophy', icon: '🌍' },
              { title: 'The Journey', href: '/journey', icon: '🚀' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-upepo-blue hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-upepo-dark group-hover:text-upepo-blue transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
