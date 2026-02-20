
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: {x:number, y:number, vx:number, vy:number, pulse:number}[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        pulse: Math.random() * 100
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.05;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw node
        const s = Math.sin(p.pulse) * 1 + 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${0.3 + s/4})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 280) {
            ctx.beginPath();
            const opacity = 0.08 * (1 - dist / 280);
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Animated Data Pulse on the line
            if (Math.sin(p.pulse + i) > 0.98) {
              const dashPos = (p.pulse * 50) % dist;
              const angle = Math.atan2(p2.y - p.y, p2.x - p.x);
              const dx = p.x + Math.cos(angle) * dashPos;
              const dy = p.y + Math.sin(angle) * dashPos;
              
              ctx.beginPath();
              ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = '#06b6d4';
              ctx.fill();
            }
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <canvas ref={canvasRef} className="w-full h-full opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#020204] via-transparent to-purple-900/10"></div>
    </div>
  );
};

export default ParticleBackground;
