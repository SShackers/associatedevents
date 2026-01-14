import React, { useRef, useEffect } from 'react';

export default function SplashCursor({
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  COLOR_UPDATE_SPEED = 10,
} = {}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = [];

    // ✅ INLINE: resize handler
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);

    // ✅ INLINE: random color generator
    const randomColor = () =>
      `hsla(${Math.floor(Math.random() * 360)}, 90%, 60%, 1)`;

    // ✅ INLINE: add splat
    const addSplat = (x, y, force, color) => {
      const count = Math.min(120, Math.floor(Math.abs(force) / 100));
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 0.8 + 0.2) * (force / 3000);

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: (SPLAT_RADIUS || 0.2) * (4 + Math.random() * 12),
          life: 40 + Math.random() * 80,
          color,
        });
      }
    };

    // ✅ INLINE: render loop
    const render = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.vy += 0.02;
        p.life -= 1;

        const alpha = Math.max(0, Math.min(1, p.life / 100));
        ctx.beginPath();
        ctx.fillStyle = p.color.replace(/,\s*1\)$/, `, ${alpha})`);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      }

      raf = requestAnimationFrame(render);
    };

    let raf = requestAnimationFrame(render);

    // ✅ INLINE: mouse / touch handler
    const handleMove = e => {
      const rect = canvas.getBoundingClientRect();
      const x =
        (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
      const y =
        (e.clientY ?? e.touches?.[0]?.clientY) - rect.top;

      addSplat(x, y, SPLAT_FORCE, randomColor());
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [SPLAT_RADIUS, SPLAT_FORCE, COLOR_UPDATE_SPEED]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
