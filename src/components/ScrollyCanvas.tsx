'use client';

import { useEffect, useRef, useState } from 'react';
import { useTransform, useSpring, MotionValue } from 'framer-motion';

const FRAME_COUNT = 66; // 0 to 65

export default function ScrollyCanvas({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Store images in a mutable ref to bypass expensive React state renders
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = loadedImages;

    // Load Frame 0 first to ensure the screen isn't black
    const loadFrame = (i: number) => {
      const img = new Image();
      const paddedIndex = i.toString().padStart(2, '0');
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
      
      const onImageReady = () => {
        if (Math.floor(frameIndex.get()) === i || (i === 0 && Math.floor(frameIndex.get()) === 0)) {
          drawFrame(loadedImages, i);
        }
        // Once frame 0 is loaded and drawn, unleash the rest of the queue
        if (i === 0) {
          for (let j = 1; j < FRAME_COUNT; j++) {
            loadFrame(j);
          }
        }
      };

      img.onload = onImageReady;
      img.onerror = onImageReady;
      loadedImages[i] = img;
    };

    loadFrame(0);
  }, []);

  const drawFrame = (imgs: HTMLImageElement[], index: number) => {
    if (!imgs.length || !canvasRef.current || !imgs[Math.floor(index)]) return;

    const img = imgs[Math.floor(index)];

    // CRITICAL MOBILE FIX: Prevent DOMException crashes if the image isn't downloaded yet
    if (!img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    // Set logical size
    const logicalWidth = window.innerWidth;
    const logicalHeight = window.innerHeight;
    
    // Set actual size
    canvas.width = logicalWidth * dpr;
    canvas.height = logicalHeight * dpr;
    
    // Normalize coordinate system to use css pixels
    ctx.scale(dpr, dpr);

    // object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = logicalWidth / logicalHeight;
    
    let drawCols = logicalWidth;
    let drawRows = logicalHeight;
    let offsetX = 0;
    let offsetY = 0;
    
    if (imgRatio > canvasRatio) {
      // Image is wider than canvas proportionately
      drawCols = logicalHeight * imgRatio;
      offsetX = (logicalWidth - drawCols) / 2;
    } else {
      // Canvas is wider than image proportionately
      drawRows = logicalWidth / imgRatio;
      offsetY = (logicalHeight - drawRows) / 2;
    }
    
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, logicalWidth, logicalHeight);
    
    // Use high quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    ctx.drawImage(img, offsetX, offsetY, drawCols, drawRows);
  };

  useEffect(() => {
    // Use the mutable ref instead of state so we never trigger expensive React re-renders on the scroll loop
    const unsubscribe = frameIndex.on('change', (latest) => {
      if (imagesRef.current.length > 0) {
        drawFrame(imagesRef.current, latest);
      }
    });

    const handleResize = () => {
      if (imagesRef.current.length > 0) {
        drawFrame(imagesRef.current, frameIndex.get());
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [frameIndex]);

  return (
    <div className="sticky top-0 h-screen w-full bg-[#121212] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
