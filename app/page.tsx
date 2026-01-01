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
              { number: '3', label: 'Live Now' },
              { number: '14', label: 'Launching Soon' },
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

      {/* What's Live Now Section */}
      <section className="relative py-20 px-6 bg-upepo-midnight-light/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full mb-4 border border-green-500/20">
                <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">Launching in Phases</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-upepo-text mb-6">
                What's Live Now
              </h2>
              <p className="text-xl text-upepo-text-muted max-w-2xl mx-auto">
                The ecosystem is unfolding intentionally. Here's what's currently active and what's coming next.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Live Now */}
              <div className="bg-upepo-midnight/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-green-400">Live Now</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Voices', description: 'Share your story and amplify lived experiences', link: 'https://www.linkedin.com/showcase/upepo-voices/' },
                    { name: 'Ecosystem', description: 'Explore the interconnected components', link: '/ecosystem' },
                    { name: 'Soul', description: 'Reflection, alignment, and inner growth', link: 'https://www.linkedin.com/showcase/upepo-soul/' },
                  ].map((item, i) => (
                    <a 
                      key={i} 
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 p-4 bg-green-500/5 rounded-lg border border-green-500/10 hover:bg-green-500/10 hover:border-green-500/20 transition-all duration-300 group cursor-pointer"
                    >
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-upepo-text mb-1 group-hover:text-green-400 transition-colors">{item.name}</h4>
                        <p className="text-sm text-upepo-text-muted">{item.description}</p>
                      </div>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Coming Soon */}
              <div className="bg-upepo-midnight/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-upepo-wind/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-upepo-wind rounded-full"></div>
                  <h3 className="text-2xl font-bold text-upepo-wind">Coming Soon</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-upepo-text-muted mb-4">14 more components launching throughout 2026:</p>
                  {[
                    'Learn - Structured learning pathways',
                    'Build - Venture creation & innovation',
                    'Connect - Community networks',
                    'Create - Content & creative expression',
                    'And 10 more components...',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-upepo-wind/5 rounded-lg border border-upepo-wind/10">
                      <svg className="w-5 h-5 text-upepo-wind flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-upepo-text-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-upepo-text-muted mb-6">
                Follow us on LinkedIn to stay updated on new launches and opportunities
              </p>
              <a
                href="https://www.linkedin.com/company/upepo-ecosystem/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-upepo-wind text-upepo-wind font-semibold rounded-full hover:bg-upepo-wind/10 transition-all duration-300 hover:scale-105"
              >
                Stay Updated
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
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

      {/* Start Here Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-upepo-midnight to-upepo-midnight-light">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-upepo-wind/10 rounded-full mb-6 border border-upepo-wind/20">
              <span className="text-sm font-semibold text-upepo-wind uppercase tracking-wide">New Here?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-upepo-text mb-6">
              Start Here
            </h2>
            
            <p className="text-xl text-upepo-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              The ecosystem is launching in phases. Follow us on LinkedIn to stay updated on new components, launches, and opportunities to join.
            </p>

            <a
              href="https://www.linkedin.com/company/upepo-ecosystem/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight font-semibold rounded-full hover:shadow-xl hover:shadow-upepo-wind/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow on LinkedIn
            </a>

            <p className="text-sm text-upepo-text-muted mt-6">
              Join the conversation • See what's launching • Be part of the journey
            </p>
          </motion.div>
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
