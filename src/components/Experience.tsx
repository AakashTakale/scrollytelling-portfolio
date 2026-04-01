'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    { 
      id: 'vantiva',
      title: 'Senior Software Engineer', 
      company: 'Vantiva', 
      year: 'Nov 2022 - Present',
      story: "Owned frontend architecture across a cloud-native device management platform at Vantiva. Led a seven-person team through multiple production releases with zero major incidents, driving alignment between product, design, and QA on delivery timelines, component standards, and release quality.",
      tags: ['Vue.js', 'TypeScript', 'AWS', 'System Design']
    },
    { 
      id: 'usaa',
      title: 'Senior Web Developer', 
      company: 'USAA', 
      year: 'Oct 2018 - Nov 2022',
      story: "Built and maintained critical UI surfaces for a large-scale financial services platform. Refactored legacy code to cut page load times by 20% and developed shared React component libraries that reduced duplicated frontend logic across multiple product teams.",
      tags: ['React', 'JavaScript (ES6+)', 'Component Architecture', 'Performance']
    },
    { 
      id: 'qubedrop',
      title: 'Web Developer', 
      company: 'QubeDrop Corp.', 
      year: 'Oct 2016 - Sep 2018',
      story: "Early-career role where I moved the team from ad-hoc HTML/CSS to a structured component model. Helped establish the frontend conventions the team still used after I left — responsive layouts, reusable UI patterns, and a clearer separation between presentation and logic.",
      tags: ['JavaScript', 'HTML/CSS', 'Component Design', 'Responsive UI']
    }
  ];

  return (
    <section className="relative z-20 w-full bg-[#0a0a0a] border-t border-neutral-900 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-white">
        <h3 className="text-3xl font-bold uppercase tracking-widest text-neutral-400 mb-20 text-center">
          Experience
        </h3>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent -translate-x-1/2" />

          <div className="space-y-24">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-[30px] md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] -translate-x-1/2 md:-translate-y-0 z-10" />

                  {/* Content Box */}
                  <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800 hover:border-neutral-600 transition-colors duration-500 group shadow-xl">
                      <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wider uppercase">
                        {exp.year}
                      </span>
                      <h4 className="text-3xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors duration-300">{exp.title}</h4>
                      <h5 className="text-xl text-neutral-400 mb-6 font-medium">{exp.company}</h5>
                      <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                        {exp.story}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
