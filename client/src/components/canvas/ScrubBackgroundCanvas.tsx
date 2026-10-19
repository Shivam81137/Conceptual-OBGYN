import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';

export const TOTAL_FRAMES = 118;

/**
 * Returns the exact public URL for a given 0-indexed frame.
 * e.g., index 0 -> "/frames/ezgif-frame-001.jpg"
 */
export const getFrameUrl = (index: number): string => {
  const frameNumber = String(Math.max(1, Math.min(TOTAL_FRAMES, index + 1))).padStart(3, '0');
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${base}/frames/ezgif-frame-${frameNumber}.jpg`;
};

/**
 * Finds the closest loaded and valid image in memory so that fast scrubbing
 * never results in a blank canvas or flickering frame.
 */
function getNearestLoadedImage(
  targetIndex: number,
  cache: (HTMLImageElement | null)[],
): HTMLImageElement | null {
  const exact = cache[targetIndex];
  if (exact && exact.complete && exact.naturalWidth > 0) {
    return exact;
  }

  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = targetIndex - offset;
    if (prev >= 0) {
      const img = cache[prev];
      if (img && img.complete && img.naturalWidth > 0) return img;
    }
    const next = targetIndex + offset;
    if (next < TOTAL_FRAMES) {
      const img = cache[next];
      if (img && img.complete && img.naturalWidth > 0) return img;
    }
  }

  return null;
}

/**
 * ScrubBackgroundCanvas
 * ---------------------------------------------------------------------------
 * High-performance HTML5 Canvas component that scrubs through 250 sequential
 * 3D logo video frames on scroll. Positioned fixed at `inset-0 pointer-events-none z-0`
 * with optical glass scrims and dark frosted vignettes so foreground typography
 * and frosted glass cards maintain maximum legibility and refraction.
 */
export function ScrubBackgroundCanvas(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const [initialFrameReady, setInitialFrameReady] = useState(false);

  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();

  /**
   * Draw the target image to the canvas with aspect-ratio cover math.
   */
  const drawCover = useCallback((img: HTMLImageElement): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Enable high-quality smoothing for Retina render scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    if (iw === 0 || ih === 0) return;

    // Aspect-ratio cover calculation
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) * 0.5;
    const dy = (ch - dh) * 0.5;

    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  /**
   * Render the frame matching `currentFrameRef.current`.
   */
  const renderCurrent = useCallback((): void => {
    const img = getNearestLoadedImage(targetFrameRef.current, imagesRef.current);
    if (!img) return;

    currentFrameRef.current = targetFrameRef.current;
    drawCover(img);
  }, [drawCover]);

  /**
   * Schedule canvas repaint on the next animation frame.
   */
  const scheduleRepaint = useCallback((): void => {
    if (rafIdRef.current !== null) return;
    rafIdRef.current = window.requestAnimationFrame(() => {
      rafIdRef.current = null;
      renderCurrent();
    });
  }, [renderCurrent]);

  /**
   * Resize canvas backing store to match viewport and device pixel ratio (clamped to 2.5 for crisp Retina).
   */
  const resizeCanvas = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    const targetWidth = Math.floor(displayWidth * dpr);
    const targetHeight = Math.floor(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    renderCurrent();
  }, [renderCurrent]);
  /**
   * Listen to Framer Motion scroll changes.
   */
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (reduceMotion) return;
    const clamped = Math.max(0, Math.min(1, progress));
    const nextIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(clamped * (TOTAL_FRAMES - 1)));
    if (nextIndex !== targetFrameRef.current) {
      targetFrameRef.current = nextIndex;
      scheduleRepaint();
    }
  });

  /**
   * Window resize observer.
   */
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas]);

  /**
   * Progressive frame preloader.
   * 1. Loads first frame immediately for instant first-paint.
   * 2. Progressively loads remaining frames into memory.
   */
  useEffect(() => {
    let isMounted = true;
    const cache = imagesRef.current;

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (!isMounted) return;
      cache[0] = firstImg;
      setInitialFrameReady(true);
      targetFrameRef.current = 0;
      scheduleRepaint();
    };

    // Load remaining frames
    // Prioritize keyframes (every 4th) first for ultra-responsive early scrubbing
    const priorityIndices: number[] = [];
    for (let i = 4; i < TOTAL_FRAMES; i += 4) priorityIndices.push(i);
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      if (i % 4 !== 0) priorityIndices.push(i);
    }

    let batchPointer = 0;
    const BATCH_SIZE = 8;

    const loadNextBatch = (): void => {
      if (!isMounted || batchPointer >= priorityIndices.length) return;

      const batch = priorityIndices.slice(batchPointer, batchPointer + BATCH_SIZE);
      batchPointer += BATCH_SIZE;

      let loadedInBatch = 0;
      batch.forEach((idx) => {
        const img = new Image();
        img.src = getFrameUrl(idx);
        img.onload = () => {
          if (!isMounted) return;
          cache[idx] = img;
          loadedInBatch++;
          if (idx === targetFrameRef.current) {
            scheduleRepaint();
          }
          if (loadedInBatch === batch.length) {
            loadNextBatch();
          }
        };
        img.onerror = () => {
          if (!isMounted) return;
          loadedInBatch++;
          if (loadedInBatch === batch.length) {
            loadNextBatch();
          }
        };
      });
    };

    loadNextBatch();

    return () => {
      isMounted = false;
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [scheduleRepaint]);

  /**
   * Reduced motion: keep frame at a clean hero position without scrubbing.
   */
  useEffect(() => {
    if (reduceMotion) {
      targetFrameRef.current = 0;
      scheduleRepaint();
    }
  }, [reduceMotion, scheduleRepaint]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* HTML5 Canvas for 60fps frame rendering */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          initialFrameReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Optical contrast scrim directly over the canvas (NO backdrop-blur, preserving native 3D sharpness) */}
      <div className="absolute inset-0 bg-slate-950/30" />

      {/* Soft radial vignette ensuring high foreground contrast & depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,9,14,0.55)_70%,rgba(7,9,14,0.92)_100%)]" />

      {/* Vertical edge light control gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/70 via-transparent to-[#07090E]/90" />
    </div>
  );
}

export default ScrubBackgroundCanvas;
