'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const spaces = [
  {
    number: 1,
    name: 'Voices',
    icon: '🎤',
    description: 'A space where real human journeys are shared, amplifying lived experiences, stories, and voices shaping the future of tech and innovation.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    number: 2,
    name: 'Learn',
    icon: '📚',
    description: 'A learning space built for clarity, offering structured, gentle pathways for people growing skills without overwhelm.',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    number: 3,
    name: 'Soul',
    icon: '✨',
    description: 'A reflective space for inner alignment, where growth is supported emotionally, mentally, and spiritually.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    number: 5,
    name: 'Cloud',
    icon: '☁️',
    description: 'A cloud-focused learning and exploration space, helping people understand, build, and grow confidently in modern digital infrastructure.',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    number: 5,
    name: 'Women',
    icon: '👑',
    description: 'A space centered on women\'s growth and leadership, creating room for learning, visibility, support, and collective rise.',
    color: 'from-pink-400 to-pink-600',
  },
  {
    number: 6,
    name: 'Bookclub',
    icon: '📖',
    description: 'A shared reading and reflection space, where books become conversations and ideas deepen through community.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    number: 7,
    name: 'Labs',
    icon: '🔬',
    description: 'An experimentation space, designed for hands-on practice, testing ideas, and learning through doing.',
    color: 'from-teal-400 to-teal-600',
  },
  {
    number: 8,
    name: 'Network',
    icon: '🤝',
    description: 'A connection space, bringing people together across disciplines, interests, and geographies to grow through relationships.',
    color: 'from-green-400 to-green-600',
  },
  {
    number: 9,
    name: 'Insights',
    icon: '💡',
    description: 'A space for insight and perspective, where research, analysis, and reflection shape thoughtful understanding.',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    number: 10,
    name: 'Foundation',
    icon: '🌱',
    description: 'A foundation space focused on access and impact, supporting inclusion, opportunity, and long-term community growth.',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    number: 11,
    name: 'Studio',
    icon: '🎨',
    description: 'A creative production space, where stories, ideas, visuals, and learning content are brought to life.',
    color: 'from-rose-400 to-rose-600',
  },
  {
    number: 12,
    name: 'Exchange',
    icon: '🔄',
    description: 'A space for exchange, enabling collaboration, knowledge-sharing, and value flow between people and ideas.',
    color: 'from-violet-400 to-violet-600',
  },
  {
    number: 13,
    name: 'Ventures',
    icon: '🚀',
    description: 'A venture-building space, supporting ideas as they evolve into sustainable initiatives, products, and impact-driven work.',
    color: 'from-fuchsia-400 to-fuchsia-600',
  },
  {
    number: 14,
    name: 'Academy',
    icon: '🎓',
    description: 'A structured education space, offering guided programs, curricula, and long-term learning journeys.',
    color: 'from-sky-400 to-sky-600',
  },
  {
    number: 15,
    name: 'Kids',
    icon: '🌈',
    description: 'A playful learning space for children, nurturing curiosity, imagination, and early exposure to learning through joy.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    number: 16,
    name: 'Fellowship',
    icon: '🤲',
    description: 'A guided growth pathway, offering mentorship, community, and structured support over an extended period.',
    color: 'from-lime-400 to-lime-600',
  },
  {
    number: 17,
    name: 'Scholarship',
    icon: '🎯',
    description: 'A support space for access to opportunity, providing financial or resource-based support to unlock potential.',
    color: 'from-red-400 to-red-600',
  },
];

export default function SpacesVisualization() {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
        {spaces.map((space, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5, rotate: 3 }}
            onClick={() => setSelectedSpace(selectedSpace === index ? null : index)}
            className="cursor-pointer"
          >
            <div
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${space.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center`}
            >
              <div className="text-4xl mb-2">{space.icon}</div>
              <div className="text-xs opacity-75">Tap to explore</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal/Details View */}
      <AnimatePresence>
        {selectedSpace !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpace(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
            >
              <div className="flex items-start gap-6 mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${spaces[selectedSpace].color} flex items-center justify-center text-5xl flex-shrink-0`}
                >
                  {spaces[selectedSpace].icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-upepo-dark mb-2">
                    A Living Space
                  </h2>
                  <p className="text-sm text-upepo-blue font-semibold">
                    Component {selectedSpace + 1} of 17
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSpace(null)}
                  className="text-upepo-dark/50 hover:text-upepo-dark transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-lg text-upepo-dark/80 leading-relaxed">
                {spaces[selectedSpace].description}
              </p>

              <div className="mt-8 pt-6 border-t border-upepo-blue/20">
                <p className="text-sm text-upepo-dark/60 italic text-center">
                  This is not a department. It is a component — strongest when flowing together with others.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12 p-8 bg-upepo-light/50 rounded-3xl"
      >
        <p className="text-xl md:text-2xl font-light text-upepo-dark leading-relaxed mb-4">
          These are not departments.
          <br />
          <span className="font-semibold">They are components.</span>
        </p>
        <p className="text-lg text-upepo-dark/70">
          Each can exist alone — but they are strongest together.
        </p>
      </motion.div>
    </div>
  );
}
