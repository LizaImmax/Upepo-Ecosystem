'use client';

import { motion } from 'framer-motion';

export default function TeamPage() {
  const coreTeam = [
    {
      name: 'Elizabeth Muthoni',
      role: 'Founder and Ecosystem Architect',
      linkedin: 'https://www.linkedin.com/in/elizabeth-muthoni-44a378129/',
      github: 'https://github.com/LizaImmax',
    },
    {
      name: 'Robley Otieno',
      role: 'Founding Engineer',
      linkedin: 'https://www.linkedin.com/in/robley-otieno-75900426b/',
      github: 'https://github.com/roochieng',
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-upepo-dark mb-6">
              The Team
            </h1>
            <p className="text-xl text-upepo-gray leading-relaxed">
              Meet the people building Upepo Ecosystem with intention, care, and commitment to meaningful growth.
            </p>
          </motion.div>
        </div>

        {/* Core Team */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-upepo-dark mb-8 text-center">
              Core Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {coreTeam.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-upepo-ocean/20 backdrop-blur-sm rounded-2xl p-8 border border-upepo-wind/20 hover:border-upepo-wind/40 transition-all duration-300 hover:shadow-lg hover:shadow-upepo-wind/10"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-upepo-wind to-upepo-wind-bright rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-upepo-midnight">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-upepo-text mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-upepo-text-muted font-medium">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-upepo-wind/10 hover:bg-upepo-wind/20 rounded-lg transition-all duration-300 text-upepo-wind hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-upepo-wind/10 hover:bg-upepo-wind/20 rounded-lg transition-all duration-300 text-upepo-wind hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Volunteers Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-upepo-dark mb-6">
              Volunteers
            </h2>
            <div className="bg-upepo-ocean/20 backdrop-blur-sm rounded-2xl p-12 border border-upepo-wind/20">
              <p className="text-xl text-upepo-text-muted mb-6">
                Our volunteer community is growing. This space will soon feature the incredible people contributing their time, skills, and passion to the ecosystem.
              </p>
              <p className="text-lg text-upepo-wind font-medium">
                More coming soon...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
