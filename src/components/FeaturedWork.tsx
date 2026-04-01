'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudySection {
  label: string;
  items: string[];
}

interface Project {
  id: string;
  label: string;
  title: string;
  impact: string;
  bullets: string[];
  tech: string[];
  caseStudy: CaseStudySection[];
}

const projects: Project[] = [
  {
    id: 'cloudcore',
    label: 'Case Study 01',
    title: 'CloudCore Telemetry Dashboard',
    impact: 'Real-time device monitoring for 5,000+ devices — load time cut by ~35%, UI regressions down significantly.',
    bullets: [
      'Led frontend architecture for a cloud-native telemetry platform serving ops teams at scale',
      'Optimized rendering pipeline to handle high-frequency data updates without UI lag',
      'Standardized component patterns across the dashboard, reducing regressions and build time',
    ],
    tech: ['Vue.js', 'TypeScript', 'OpenSearch', 'AWS'],
    caseStudy: [
      {
        label: 'Problem',
        items: ['Handling real-time telemetry data at scale without degrading UI performance.'],
      },
      {
        label: 'Approach',
        items: [
          'Optimized rendering for high-frequency updates',
          'Introduced efficient state handling patterns',
          'Reduced unnecessary re-renders',
        ],
      },
      {
        label: 'Tradeoffs',
        items: [
          'Balanced real-time accuracy vs UI responsiveness',
          'Avoided over-engineering data pipelines',
        ],
      },
      {
        label: 'Result',
        items: [
          'Smooth UI performance under sustained load',
          'Better reliability for monitoring workflows',
          'Improved developer velocity with reusable patterns',
        ],
      },
    ],
  },
  {
    id: 'primevue',
    label: 'Case Study 02',
    title: 'UI Modernization — PrimeVue Migration',
    impact: '20+ components migrated to a modern UI framework with zero release delays and no production disruption.',
    bullets: [
      'Drove phased migration from legacy PrimeVue to current standards across the component library',
      'Removed deprecated APIs and introduced consistent design patterns throughout',
      'Delivered the full migration without missing a single release milestone',
    ],
    tech: ['Vue.js', 'PrimeVue', 'TypeScript'],
    caseStudy: [
      {
        label: 'Problem',
        items: ['Legacy components slowing development and increasing maintenance cost.'],
      },
      {
        label: 'Approach',
        items: [
          'Incremental migration instead of a full rewrite',
          'Standardized reusable components as we went',
          'Introduced consistent design patterns across the library',
        ],
      },
      {
        label: 'Tradeoffs',
        items: [
          'Accepted temporary duplication during transition',
          'Required coordination across multiple teams',
        ],
      },
      {
        label: 'Result',
        items: [
          'Faster development cycles post-migration',
          'Cleaner, maintainable codebase',
          'No disruption to production releases',
        ],
      },
    ],
  },
];

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md overflow-hidden"
    >
      <div className="p-8 md:p-10">

        {/* Case study label */}
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-semibold mb-4">
          {project.label}
        </p>

        {/* Title + tags row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <h4 className="text-xl md:text-2xl font-semibold text-white leading-snug">
            {project.title}
          </h4>
          <div className="flex flex-wrap gap-2 sm:justify-end shrink-0 pt-1">
            {project.tech.map(t => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Impact — most prominent line after title */}
        <p className="text-base text-emerald-400 font-medium leading-relaxed mb-7">
          {project.impact}
        </p>

        {/* Bullet summary */}
        <ul className="space-y-2.5 mb-8">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-neutral-400 leading-relaxed">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {/* Toggle */}
        <div className="pt-5 border-t border-neutral-800">
          <button
            onClick={() => setOpen(prev => !prev)}
            aria-expanded={open}
            className="flex items-center gap-2.5 text-sm font-medium text-neutral-400 hover:text-emerald-400 transition-colors duration-200 group cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors duration-200 shrink-0">
              <motion.svg
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                width="10" height="10" viewBox="0 0 10 10"
                fill="none"
                className="text-neutral-500 group-hover:text-emerald-400 transition-colors duration-200"
              >
                <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </motion.svg>
            </span>
            {open ? 'Close' : 'View Case Study'}
            {!open && (
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-neutral-700 group-hover:text-emerald-500 transition-colors duration-200">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Expandable case study */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="case-study"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-10 pt-8 border-t border-neutral-800/60 bg-black/20">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-semibold mb-8">
                Deep Dive
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.caseStudy.map(section => (
                  <div key={section.label}>
                    <p className="text-xs uppercase tracking-widest text-emerald-500/80 font-semibold mb-4">
                      {section.label}
                    </p>
                    <ul className="space-y-2.5">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-sm text-neutral-400 leading-relaxed flex gap-2.5">
                          <span className="text-neutral-700 mt-[3px] shrink-0">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="relative z-20 w-full bg-[#0a0a0a] border-t border-neutral-900 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-white">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl font-bold uppercase tracking-widest text-neutral-400">
            Featured Work
          </h3>
        </motion.div>

        <div className="flex flex-col gap-7">
          {projects.map((project, i) => (
            <ProjectBlock key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
