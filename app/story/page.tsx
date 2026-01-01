'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-upepo-dark mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Why Upepo exists and the vision driving everything we build
          </p>
        </div>
      </section>

      {/* Vision Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
            <Image
              src="/images/image 3.png"
              alt="Wind flowing across Africa representing the Upepo vision"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Upepo was born from a simple realization: <strong>learning shouldn't feel heavy</strong>.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Too often, education is fragmented - courses here, communities there, mentorship somewhere else. Knowledge sits in silos. Growth happens in isolation. Opportunity remains inaccessible to many who deserve it most.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              We wanted to create something different. A space where learning, community, creativity, and opportunity flow together naturally. Where growth feels intentional, not overwhelming. Where people don't just consume knowledge - they integrate it, share it, and build with it.
            </p>

            <div className="bg-upepo-blue/5 border-l-4 border-upepo-blue p-8 rounded-r-lg mb-12">
              <p className="text-xl text-upepo-dark font-medium italic">
                "Upepo is Swahili for 'wind' - invisible but felt, gentle but powerful, moving everything forward without force."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-upepo-dark mb-4">
              What We Believe
            </h2>
            <p className="text-xl text-gray-600">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                title: 'Community is presence',
                description: 'Real connection over metrics. Quality engagement over viral reach.',
              },
              {
                icon: '✨',
                title: 'Knowledge carries responsibility',
                description: 'What we learn must be shared, applied, and used to lift others.',
              },
              {
                icon: '🌍',
                title: 'African voices matter',
                description: 'Our stories, insights, and innovations belong on every global stage.',
              },
              {
                icon: '🚀',
                title: 'Build with intention',
                description: 'Slowly, thoughtfully, with care for the people we serve.',
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-upepo-dark mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-upepo-dark mb-8">
            The Vision
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Upepo is designed to be a living ecosystem - 17 interconnected components working together to support learning, growth, and impact across Africa and beyond.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Each component serves a purpose. Together, they create pathways for people to learn with clarity, build with confidence, connect with intention, and create lasting change.
          </p>
          <Link
            href="/team"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight font-semibold rounded-lg hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-300 hover:scale-105"
          >
            See the Team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
