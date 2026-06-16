import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update the main cursor immediately for zero lag
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animateGlow = () => {
      // Smooth interpolation for the outer reticle
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;
      
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(animateGlow);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    animateGlow();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cursor-reticle" ref={glowRef}>
        <div className="cursor-reticle-inner">
          <svg width="32" height="32" viewBox="0 0 40 40">
            {/* Crosshair ticks */}
            <line x1="20" y1="2" x2="20" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="20" y1="32" x2="20" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="2" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            {/* Central dotted circle */}
            <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="cursor-dot" ref={cursorRef}>
        <div className="cursor-dot-inner"></div>
      </div>
    </>
  );
};

export default Cursor;
