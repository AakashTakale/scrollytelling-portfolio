'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Section 1: 0% to 15% fades out
  const opacity1 = useTransform(scrollProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.15], [0, -50]);

  // Section 2: fades in at 25%, drops out at 40%
  const opacity2 = useTransform(scrollProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.2, 0.4], [50, -50]);

  // Section 3: fades in at 50%, stays until 70%
  const opacity3 = useTransform(scrollProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.5, 0.75], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 text-white">
      {/* Container holding sections in place over the sticky canvas */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div 
          className="absolute inset-x-0 mx-auto text-center px-6"
          style={{ opacity: opacity1, y: y1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            Aakash Takale.<br/>
            <span className="text-neutral-400">Senior Frontend Engineer.</span>
          </h1>
        </motion.div>

        <motion.div 
          className="absolute left-6 md:left-24 max-w-xl"
          style={{ opacity: opacity2, y: y2 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white drop-shadow-md">
            Building scalable<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              enterprise apps.
            </span>
          </h2>
        </motion.div>

        <motion.div 
          className="absolute right-6 md:right-24 max-w-xl text-right"
          style={{ opacity: opacity3, y: y3 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white drop-shadow-md">
            Expertise in React, Vue &<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-400">
              TypeScript.
            </span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
