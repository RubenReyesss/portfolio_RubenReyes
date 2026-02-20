
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [glitchText, setGlitchText] = useState('REYES PARRA');

  // Subtle text flicker effect
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const original = 'REYES PARRA';
    let iterations = 0;

    const interval = setInterval(() => {
      setGlitchText(
        original.split('').map((char, index) => {
          if (index < iterations) return original[index];
          return chars[Math.floor(Math.random() * 26)];
        }).join('')
      );

      if (iterations >= original.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="reveal active">
          <div className="flex items-center gap-4 mb-12 parallax-slow">
            <div className="w-12 h-[1px] bg-cyan-500"></div>
            <span className="font-mono text-[11px] text-cyan-400 tracking-[0.5em] uppercase animate-pulse">Initializing_Portfolio_v3.0</span>
          </div>

          <h1 className="text-[clamp(2rem,10vw,8rem)] md:text-[clamp(3.5rem,12vw,10rem)] font-bold tracking-tighter text-white leading-[0.9] mb-8 md:mb-12">
            <span className="block opacity-90 hover:opacity-100 transition-opacity">RUBÉN</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-cyan-500 font-mono italic">
              {glitchText}.
            </span>
          </h1>

          <div className="max-w-3xl mb-16 reveal delay-1">
            <p className="text-xl md:text-3xl text-slate-400 font-light leading-tight">
              Junior Data & <span className="text-white">AI Developer</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-10 reveal delay-2">
            <a
              href="#projects"
              className="group relative px-8 py-4 md:px-12 md:py-6 overflow-hidden border border-white/10 rounded-full"
              aria-label="Ver proyectos destacados"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 md:block hidden"></div>
              <span className="relative z-10 font-bold tracking-[0.2em] group-hover:text-black transition-colors text-xs md:text-base">ACCESS_PROJECTS</span>
            </a>

            <div className="flex gap-8 items-center border-l border-white/10 pl-10">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Network_Status</span>
                <span className="text-xs font-bold text-green-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                  LIVE_AND_AVAILABLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 border border-white/5 rounded-full float opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 border border-cyan-500/10 rounded-full float opacity-10" style={{ animationDelay: '-3s' }} aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
