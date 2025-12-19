'use client';

import Link from 'next/link';
import SpacesVisualization from '@/components/SpacesVisualization';

export default function EcosystemPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="breathing-space">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-heading text-center mb-16"
          >
            What Is the Upepo Ecosystem?
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="body-text text-center mb-6"
            >
              Upepo Ecosystem is not a platform.
              <br />
              It's not a course.
              <br />
              It's not a community in the usual sense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="py-12"
            >
              <div className="relative w-64 h-64 mx-auto">
                {/* Abstract ecosystem visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full relative"
                  >
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-12 h-12 bg-upepo-blue/20 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-80px)`,
                        }}
                      />
                    ))}
                  </motion.div>
                  <div className="absolute w-24 h-24 bg-upepo-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl">🌬️</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-2xl md:text-3xl font-bold text-center text-upepo-dark mb-8"
            >
              It is an Ecosystem,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="body-text text-center mb-6"
            >
              Made of interconnected spaces designed for learning, storytelling, reflection, creativity, and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="h-1 w-24 bg-upepo-blue mx-auto my-12"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="body-text text-center mb-4"
            >
              Each part serves a purpose.
              <br />
              Each part supports the others.
              <br />
              Together, they move like wind.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 17 Living Spaces Visualization */}
      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-upepo-dark mb-6">
              Explore the 17 Components
            </h2>
            <p className="text-xl text-upepo-dark/70 max-w-3xl mx-auto">
              Each space within the ecosystem serves its purpose. Click to discover how they flow together.
            </p>
          </motion.div>

          <SpacesVisualization />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-upepo-dark mb-6">
            Is This Space For You?
          </h2>
          <p className="body-text mb-8">
            Discover if you belong in this ecosystem.
          </p>
          <Link href="/for-you" className="cta-button">
            See If It Is For You
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
