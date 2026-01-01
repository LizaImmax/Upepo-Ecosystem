'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhilosophyPage() {
  const values = [
    {
      icon: '🌬',
      title: 'Learning should feel light',
      description: 'Not heavy, not burdensome - but energizing, clarifying, and expansive.',
    },
    {
      icon: '🌱',
      title: 'Growth happens in cycles',
      description: 'Not linear. Not rushed. Honoring seasons of learning, rest, and transformation.',
    },
    {
      icon: '🤍',
      title: 'Community is presence, not numbers',
      description: 'Real connection over metrics. Quality engagement over viral reach.',
    },
    {
      icon: '✨',
      title: 'Knowledge carries responsibility',
      description: 'What we learn must be shared, applied, and used to lift others.',
    },
    {
      icon: '🌍',
      title: 'African stories deserve global space',
      description: 'Our voices, insights, and innovations belong on every stage.',
    },
  ];

  const principles = [
    {
      title: 'We build slowly',
      description: 'Every launch is intentional. Every feature is thoughtful. No rushing for the sake of speed.',
    },
    {
      title: 'We listen first',
      description: 'Community needs shape what we create. Your voice guides the direction.',
    },
    {
      title: 'We design for depth',
      description: 'Surface-level engagement does not serve growth. We create spaces that allow real transformation.',
    },
    {
      title: 'We honor rest',
      description: 'Productivity is not constant. Growth includes reflection, pause, and integration.',
    },
    {
      title: 'We celebrate progress',
      description: 'Every step forward matters - whether it is finishing a course or just showing up.',
    },
    {
      title: 'We stay accessible',
      description: 'Pricing, language, and design choices prioritize inclusion over exclusivity.',
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold text-upepo-dark mb-6">
            Our Way of Building
          </h1>
          <p className="text-xl text-upepo-gray">
            These are not just principles. They are commitments woven into every decision, every design, every interaction within the ecosystem.
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
                src="/images/image 12.png"
                alt="Intentional creation and thoughtful building"
                width={1200}
                height={800}
                className="ecosystem-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="space-y-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-6 bg-upepo-ocean/20 backdrop-blur-sm p-8 rounded-lg border border-upepo-wind/20 hover:border-upepo-wind/40 hover:shadow-lg hover:shadow-upepo-wind/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-upepo-blue rounded-full flex items-center justify-center text-3xl">
                    {value.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-upepo-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-lg text-upepo-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Cycles Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 13.png"
                alt="Growth in cycles and natural rhythms"
                width={1200}
                height={800}
                className="ecosystem-image"
              />
            </div>
          </motion.div>
        </div>

        {/* How We Work Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-upepo-dark mb-4">
              How These Values Show Up
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-6 bg-upepo-ocean/20 backdrop-blur-sm rounded-lg border border-upepo-wind/20 hover:border-upepo-wind/40 hover:shadow-lg hover:shadow-upepo-wind/10 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-upepo-text mb-3">
                  {principle.title}
                </h4>
                <p className="text-upepo-text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
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
                src="/images/image 14.png"
                alt="Community and authentic connection"
                width={1200}
                height={800}
                className="ecosystem-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-upepo-dark text-white p-12 rounded-2xl text-center">
            <p className="text-2xl font-bold mb-4 leading-relaxed">
              "We do not build for everyone. We build for the people who are ready to grow with intention."
            </p>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-upepo-ocean/30 to-upepo-wind/10 p-12 rounded-2xl border-2 border-upepo-wind/30">
            <h2 className="text-3xl font-bold text-upepo-dark mb-6 text-center">
              These Values Resonate?
            </h2>
            <p className="text-xl text-upepo-gray mb-10 text-center max-w-2xl mx-auto">
              If this philosophy aligns with how you want to grow and build, we'd love to have you with us.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://www.linkedin.com/company/upepo-ecosystem/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl text-center border-2 border-transparent hover:border-upepo-wind hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">👀</div>
                <h3 className="text-lg font-bold text-upepo-dark mb-2 group-hover:text-upepo-wind transition-colors">Follow</h3>
                <p className="text-sm text-upepo-gray">Stay updated on LinkedIn</p>
              </a>
              <a
                href="mailto:upepoecosystem@gmail.com?subject=Volunteering with Upepo"
                className="bg-white p-6 rounded-xl text-center border-2 border-transparent hover:border-upepo-wind hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">🙌</div>
                <h3 className="text-lg font-bold text-upepo-dark mb-2 group-hover:text-upepo-wind transition-colors">Volunteer</h3>
                <p className="text-sm text-upepo-gray">Contribute your skills</p>
              </a>
              <a
                href="/team"
                className="bg-white p-6 rounded-xl text-center border-2 border-transparent hover:border-upepo-wind hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-lg font-bold text-upepo-dark mb-2 group-hover:text-upepo-wind transition-colors">Meet Us</h3>
                <p className="text-sm text-upepo-gray">Learn about the team</p>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-upepo-text mb-4">
            Ready to See What Is Coming?
          </h2>
          <p className="text-lg text-upepo-text-muted mb-8">
            The ecosystem is opening. Discover what is being launched and how you can be part of the first component.
          </p>
          <Link href="/journey">
            <button className="px-8 py-4 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight rounded-lg text-lg font-semibold 
                     hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-200 hover:scale-105 active:scale-95">
              Explore the Journey
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
