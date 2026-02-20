
import React from 'react';

const experiences = [
  { role: 'Desarrollador Web (Power Apps/Automate)', place: 'KarmaStudio, Ceuta', date: 'Mar 2025 - Jun 2025' },
  { role: 'Especialización Inteligencia Artificial & Big Data', place: 'I.E.S. Rafael Alberti, Cádiz', date: '2025 - 2026' },
  { role: 'Grado Superior Desarrollo Aplicaciones (DAM)', place: 'CES Juan Pablo II, Cádiz', date: '2023 - 2025' }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="reveal">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 md:mb-20 text-center tracking-[0.2em] md:tracking-widest uppercase">Trayectoria_Temporal</h2>

          <div className="space-y-20 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent hidden md:block"></div>

            {experiences.map((exp, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-8 glass-card border-white/5 hover:border-purple-500/30 transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="font-mono text-[10px] text-purple-500 mb-2 uppercase tracking-[0.3em]">{exp.date}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="text-cyan-400 text-xs font-mono">{exp.place}</div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-[#020204] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
