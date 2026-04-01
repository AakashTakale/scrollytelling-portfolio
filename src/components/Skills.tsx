'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const badgeStyle = "px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium whitespace-nowrap cursor-default";

  return (
    <section className="relative z-20 w-full bg-[#0a0a0a] py-32 border-t border-neutral-900 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold uppercase tracking-widest text-neutral-400 mb-20 text-center">
          Core Competencies
        </h3>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Frontend Mastery - Spans 2 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative p-10 md:p-12 rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 backdrop-blur-md overflow-hidden group flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="text-3xl md:text-3xl font-semibold text-white mb-4">Frontend Architecture</h4>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mb-8">
                Specialized in building scalable, component-driven UIs and steering large-scale migration efforts for enterprise applications.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto">
                {['Vue.js (v3/v4)', 'React', 'TypeScript', 'JavaScript (ES6+)'].map(tech => (
                  <span key={tech} className={badgeStyle}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Workflows - Spans 1 column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 relative p-10 md:p-12 rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 backdrop-blur-md overflow-hidden group flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">AI Integration</h4>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Accelerating workflows using advanced LLMs and AI context tools.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto">
                {['Claude 4.5', 'LLM Refactoring', 'Code Gen'].map(tech => (
                  <span key={tech} className={badgeStyle}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cloud & Backend - Spans 1 column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 relative p-10 md:p-12 rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 backdrop-blur-md overflow-hidden group flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">Backend & Cloud</h4>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Integrating frontends seamlessly with robust microservices.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto">
                {['AWS Cloud', 'Java (Kotlin)', 'DynamoDB'].map(tech => (
                  <span key={tech} className={badgeStyle}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tooling & UI/UX - Spans 2 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 relative p-10 md:p-12 rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 backdrop-blur-md overflow-hidden group flex flex-col"
          >
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="text-3xl md:text-3xl font-semibold text-white mb-4">Design Systems & Delivery</h4>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mb-8">
                Leveraging modern tooling and agile methodologies to build high-performance components and assure reliable pipelines.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto">
                {['Tailwind CSS', 'Framer Motion', 'Material UI', 'Agile/Scrum', 'CI/CD Pipelines'].map(tech => (
                  <span key={tech} className={badgeStyle}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
