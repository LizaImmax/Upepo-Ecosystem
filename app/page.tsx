'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-upepo-midnight relative overflow-hidden">
      {/* Cosmic Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-upepo-gold rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-upepo-wind/10 rounded-full mb-6 border border-upepo-wind/20">
                <span className="text-sm font-semibold text-upepo-wind uppercase tracking-wide">Growth Ecosystem</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-upepo-text mb-6 leading-tight">
                Where learning, creativity, community, and impact converge
              </h1>

              <p className="text-xl text-upepo-text-muted mb-8 leading-relaxed">
                A living ecosystem connecting learners, builders, storytellers, creators, and innovators through structured pathways, meaningful community, creative expression, and real-world ventures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/journey"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight font-semibold rounded-full hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Ecosystem
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/story"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-upepo-wind text-upepo-wind font-semibold rounded-full hover:bg-upepo-wind/10 transition-all duration-300 hover:scale-105"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
                <Image
                  src="/images/image 1.png"
                  alt="Cosmic wind spiral representing the Upepo Ecosystem"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Stats */}
      <section className="relative py-16 border-y border-upepo-wind/20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '17', label: 'Integrated Components' },
              { number: '10+', label: 'Learning Pathways' },
              { number: '∞', label: 'Growth Opportunities' },
              { number: '1', label: 'Unified Ecosystem' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-upepo-wind to-upepo-wind-bright bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-upepo-text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-upepo-text mb-6">
              Everything you need to grow
            </h2>
            <p className="text-xl text-upepo-text-muted max-w-3xl mx-auto">
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
              <motion.div
                key={i}
                className="bg-upepo-midnight-light/50 backdrop-blur-sm rounded-3xl p-8 border border-upepo-wind/20 hover:border-upepo-wind/40 transition-all hover:shadow-lg hover:shadow-upepo-wind/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-upepo-text mb-3">{item.title}</h3>
                <p className="text-upepo-text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Visualization Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-upepo-text mb-6">
              17 Connected Components
            </h2>
            <p className="text-xl text-upepo-text-muted mb-12">
              A living network designed for holistic growth
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
            <Image
              src="/images/image 2.png"
              alt="17 interconnected components of the Upepo Ecosystem"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-upepo-text mb-4">
              Explore the Ecosystem
            </h2>
            <p className="text-xl text-upepo-text-muted">
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
                className="group p-8 bg-upepo-midnight-light/50 backdrop-blur-sm border-2 border-upepo-wind/20 rounded-3xl hover:border-upepo-wind hover:shadow-lg hover:shadow-upepo-wind/20 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-upepo-text group-hover:text-upepo-wind transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
