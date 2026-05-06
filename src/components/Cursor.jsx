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
      // Smooth interpolation for the glow
      glowX += (mouseX - glowX) * 0.2;
      glowY += (mouseY - glowY) * 0.2;
      
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(animateGlow);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    // Initialize position slightly off-screen or center, but it will snap to mouse quickly
    animateGlow();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef}></div>
      <div className="cursor" ref={cursorRef}></div>
    </>
  );
};

export default Cursor;
