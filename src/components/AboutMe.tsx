'use client';

import { motion, type Variants } from 'framer-motion';

const highlights = [
  {
    icon: '⚙️',
    heading: 'Enterprise-grade systems',
    body: 'Component architectures, design tokens, migration paths. The kind of structural work that lets teams move fast without breaking production.',
  },
  {
    icon: '🎯',
    heading: 'Complexity made usable',
    body: "A good interface shouldn't need a manual. I take dense workflows and data-heavy screens and find the path that feels obvious to the person actually using it.",
  },
  {
    icon: '📐',
    heading: 'Craft in the details',
    body: 'Performance, maintainability, accessibility. These aren\'t checkboxes for me. The code I ship should hold up the same way the design does.',
  },
  {
    icon: '🤝',
    heading: 'Cross-functional by default',
    body: "Some of my best work happened because I could talk to a designer and an engineer in the same conversation. I try to be useful across that whole space.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
};

export default function AboutMe() {
  return (
    <section className="relative z-20 w-full bg-[#0f0f0f] border-t border-neutral-900 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-white">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl font-bold uppercase tracking-widest text-neutral-400 mb-3">
            About Me
          </h3>
          <p className="text-sm text-neutral-500 tracking-[0.2em] uppercase font-medium">
            Senior Frontend Engineer&nbsp;&middot;&nbsp;9+ years&nbsp;&middot;&nbsp;Enterprise UI Systems
          </p>
        </motion.div>

        {/* Two-column layout — intro left, highlights right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: personal intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <p className="text-2xl md:text-3xl font-semibold leading-snug text-white mb-6">
              I build interfaces people{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                actually want to use — at scale.
              </span>
            </p>

            <div className="space-y-7 text-neutral-400 text-lg leading-[1.85] max-w-prose">
              <p>
                Nine years in frontend, most of it inside large, complex systems. Financial platforms, cloud dashboards serving thousands of users, internal tooling that people actually depend on. The thing these all have in common: getting the UI wrong has real consequences.
              </p>
              <p>
                I spend a lot of time on the gap between &ldquo;technically correct&rdquo; and &ldquo;genuinely good.&rdquo; Clean code is the baseline. The harder part is figuring out why the interaction feels wrong, why users drop off at that one step, or why a design that looked great in Figma falls apart with real data.
              </p>
              <p>
                Outside of work, I&rsquo;m drawn to motion and interaction design, which is probably obvious from this page. Animation done right should feel like it belongs. You shouldn&rsquo;t notice it.
              </p>
            </div>
          </motion.div>

          {/* Right: four highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.heading}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900/70 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 backdrop-blur-md group"
              >
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <h4 className="text-base font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {item.heading}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
