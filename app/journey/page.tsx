'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SpacesVisualization from '@/components/SpacesVisualization';

export default function JourneyPage() {
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
            The Wind Is Just Beginning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body-text mb-12"
          >
            Upepo Ecosystem will be revealed slowly,  one space at a time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-upepo-dark/80 italic mb-16"
          >
            Each launch will carry its own purpose, its own energy, its own story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative w-full max-w-3xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
              <Image
                src="/images/image 3.png"
                alt="The beginning of the journey"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Teaser */}
      <section className="section-container bg-gradient-to-b from-upepo-light/20 to-white/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative py-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-upepo-dark mb-6">
                The Ecosystem Is Opening
              </h2>
              <p className="body-text">
                And the first component is coming soon.
              </p>
            </div>

            {/* Abstract wind visualization */}
            <div className="relative h-96 mb-12 flex items-center justify-center">
              {[...Array(17)].map((_, i) => {
                const angle = (i * 360) / 17 + (360 / 17) * 0;
                const radius = 150;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-upepo-blue/20 rounded-full backdrop-blur-sm border border-upepo-blue/40"
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: x,
                      y: y,
                      rotate: [0, 360],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: i * 0.1 },
                      scale: { duration: 0.5, delay: i * 0.1 },
                      x: { duration: 0.5, delay: i * 0.1 },
                      y: { duration: 0.5, delay: i * 0.1 },
                      rotate: {
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.1,
                      },
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  />
                );
              })}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-8xl relative z-10"
              >
                🌬️
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 17 Living Spaces */}
      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-upepo-dark mb-6">
              The 17 Living Spaces
            </h2>
            <p className="text-xl text-upepo-dark/70 max-w-3xl mx-auto">
              Explore each component within the ecosystem. Click any space to learn more about its purpose and how it flows with others.
            </p>
          </motion.div>

          <SpacesVisualization />
        </div>
      </section>

      {/* Ecosystem Description */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-upepo-text mb-8">
              What Lives Inside the Ecosystem
            </h2>
            <p className="body-text text-upepo-text-muted mb-8">
              The ecosystem is a universe of interconnected spaces, each one designed for a different stage of growth, a different kind of learning, a different form of expression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-upepo-ocean/20 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-upepo-wind/20 shadow-xl space-y-6 text-lg leading-loose text-upepo-text-muted"
          >
            <p>
              Upepo Ecosystem is a living universe made up of many interconnected spaces, each designed to support a different stage of growth.
            </p>

            <p>
              At its core, there are spaces where people learn with clarity, guided, structured, and free from overwhelm, alongside spaces where real journeys are shared, voices are amplified, and lived experiences shape collective wisdom.
            </p>

            <p>
              There are environments dedicated to deep reflection and inner alignment, where growth is not rushed and meaning is given room to breathe. Other spaces invite people to slow down through books, conversations, and shared exploration of ideas that shape how we think, lead, and live.
            </p>

            <p>
              The ecosystem also holds places for experimentation where ideas are tested, skills are practiced, and innovation is allowed to emerge without fear of failure. From there, paths open into collaboration, exchange, and networks that connect people across disciplines, industries, and geographies.
            </p>

            <p>
              For those ready to build, the ecosystem provides creative spaces for producing, designing, and expressing work, as well as structured pathways that turn ideas into real-world initiatives, ventures, and sustainable impact.
            </p>

            <p>
              There are also components focused on insight and research, helping knowledge evolve into perspective, and perspective into direction. Beneath it all lies a foundation committed to access, inclusion, and opportunity, ensuring growth is not reserved for a few, but made possible for many.
            </p>

            <p>
              The ecosystem intentionally supports different life stages and identities, holding space for women to rise, for children to imagine freely, and for emerging leaders to be guided through mentorship, long-term learning journeys, and supported transitions into their next chapter.
            </p>

            <p>
              Some pathways open doors through financial support and sponsorship, others through fellowship, shared responsibility, and collective growth, all rooted in the belief that talent exists everywhere, but opportunity does not.
            </p>

            <p className="text-xl font-semibold text-upepo-text italic pt-6 border-t-2 border-upepo-wind/20">
              Together, these spaces move like wind, independent yet connected, purposeful yet fluid, forming an ecosystem where learning feels light, community feels real, and growth unfolds with intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="section-container bg-gradient-to-b from-upepo-light/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl mx-auto mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden border border-upepo-wind/20 backdrop-blur-sm">
                <Image
                  src="/images/image 6.png"
                  alt="Continue your journey"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-upepo-dark mb-8">
              Continue Exploring
            </h2>
            <p className="text-xl text-upepo-dark/70 mb-12 leading-relaxed">
              Discover more about how this ecosystem came to be and the philosophy guiding its growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright text-upepo-midnight rounded-full font-semibold hover:shadow-lg hover:shadow-upepo-wind/50 transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </Link>
              <Link
                href="/story"
                className="px-8 py-4 bg-transparent text-upepo-wind border-2 border-upepo-wind rounded-full font-semibold hover:bg-upepo-wind/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn Our Story
              </Link>
              <Link
                href="/philosophy"
                className="px-8 py-4 bg-transparent text-upepo-wind border-2 border-upepo-wind rounded-full font-semibold hover:bg-upepo-wind/10 transition-all duration-300 transform hover:scale-105"
              >
                Our Philosophy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-light text-upepo-dark leading-relaxed italic">
              The ecosystem is not finished.
              <br />
              It is unfolding.
              <br />
              <span className="font-semibold">And you are invited to grow with it.</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
