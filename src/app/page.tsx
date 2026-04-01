'use client';

import { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import AboutMe from '@/components/AboutMe';
import FeaturedWork from '@/components/FeaturedWork';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Connect from '@/components/Connect';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll exactly over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-[#121212] min-h-screen">
      <div ref={containerRef} className="relative h-[500vh] w-full">
        {/* Pass the fully smoothed progress down to both so they sync perfectly */}
        <ScrollyCanvas scrollProgress={smoothProgress} />
        <Overlay scrollProgress={smoothProgress} />
      </div>

      <AboutMe />
      <FeaturedWork />
      <Experience />
      <Skills />
      <Connect />
    </main>
  );
}
