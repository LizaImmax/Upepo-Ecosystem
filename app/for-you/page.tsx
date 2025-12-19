'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ForYouPage() {
  const identities = [
    {
      icon: '📚',
      title: 'Learning something new and need clarity',
      description: 'You want to grow but feel overwhelmed by where to start or how to stay consistent.',
    },
    {
      icon: '🔨',
      title: 'Building quietly and seeking direction',
      description: 'You are creating something meaningful and need guidance without the noise.',
    },
    {
      icon: '✨',
      title: 'Seeking inner alignment and emotional growth',
      description: 'You know growth is not just about skills - it is about becoming whole, aligned, and grounded.',
    },
    {
      icon: '💭',
      title: 'Exploring ideas through books and reflection',
      description: 'You love to read, think deeply, and want to connect with others who do the same.',
    },
    {
      icon: '✍️',
      title: 'Telling stories that deserve to be heard',
      description: 'Your experiences, insights, and voice matter - and you are ready to share them.',
    },
    {
      icon: '🔬',
      title: 'Testing ideas and learning through doing',
      description: 'You want a safe space to experiment, practice, and iterate without fear of failure.',
    },
    {
      icon: '🎨',
      title: 'Creating content, visuals, or stories',
      description: 'You have ideas to express and need a space that supports your creative process.',
    },
    {
      icon: '🚀',
      title: 'Turning ideas into ventures and impact',
      description: 'You are ready to build something sustainable and need support to make it real.',
    },
    {
      icon: '💡',
      title: 'Seeking insight, research, and perspective',
      description: 'You want to think critically, analyze deeply, and shape understanding with intention.',
    },
    {
      icon: '🎓',
      title: 'Committing to long-term structured learning',
      description: 'You are ready for guided programs, curricula, and extended learning journeys.',
    },
    {
      icon: '🌱',
      title: 'Looking for access, support, or opportunity',
      description: 'You have the talent but need resources, mentorship, or sponsorship to unlock your potential.',
    },
    {
      icon: '🤝',
      title: 'Looking for a community that feels intentional',
      description: 'You want connection that is real, not performative. Depth, not just presence.',
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-upepo-dark mb-6">
            This Space Is for You
          </h1>
          <p className="text-xl text-upepo-gray">
            You do not have to fit every description. If even one resonates, you belong here.
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
                src="/images/image 7.png"
                alt="This space is for you - welcoming diverse individuals"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Identity Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {identities.map((identity) => (
            <div
              key={identity.title}
              className="p-6 bg-upepo-ocean/20 backdrop-blur-sm rounded-lg hover:shadow-lg hover:shadow-upepo-wind/10 transition-all duration-300 border-2 border-upepo-wind/20 hover:border-upepo-wind"
            >
              <div className="text-4xl mb-4">{identity.icon}</div>
              <h3 className="text-lg font-semibold text-upepo-dark mb-2">
                {identity.title}
              </h3>
              <p className="text-upepo-gray text-sm leading-relaxed">
                {identity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Community Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 8.png"
                alt="Community connection and belonging"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 py-16 bg-upepo-ocean/20 backdrop-blur-sm rounded-2xl px-8 border border-upepo-wind/20">
          <h2 className="text-4xl font-bold text-upepo-dark mb-6">
            All Are Welcome
          </h2>
          <p className="text-xl text-upepo-gray max-w-2xl mx-auto">
            Regardless of where you are from, what stage you are at, or what path you are on - 
            if you are here with intention, you belong.
          </p>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-upepo-text mb-4">
            What Will You Experience?
          </h2>
          <p className="text-lg text-upepo-text-muted mb-8">
            Discover what it feels like to be part of this ecosystem.
          </p>
          <Link href="/experience">
            <button className="px-8 py-4 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight rounded-lg text-lg font-semibold 
                     hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-200 hover:scale-105 active:scale-95">
              Explore the Experience
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
