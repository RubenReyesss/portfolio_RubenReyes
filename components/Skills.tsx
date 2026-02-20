
import React from 'react';

const skills = [
  { name: 'LLM & RAG', cat: 'AI' },
  { name: 'PYTHON / NLP', cat: 'LANG' },
  { name: 'SCIKIT-LEARN', cat: 'AI' },
  { name: 'APACHE SPARK', cat: 'DATA' },
  { name: 'DOCKER / AWS', cat: 'INFRA' },
  { name: 'SQL / SQLITE', cat: 'DATA' },
  { name: 'JAVA / KOTLIN', cat: 'LANG' },
  { name: 'REST APIs', cat: 'SOFT' }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.01]">
      <div className="container mx-auto max-w-6xl">
        <div className="reveal">
          <div className="flex justify-between items-end mb-20">
            <div>
              <div className="text-cyan-500 font-mono text-[10px] mb-2 tracking-[0.5em]">CORE_SYSTEM_RESOURCES</div>
              <h2 className="text-5xl font-bold text-white">Capacidades_</h2>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-white/20">MODULE_ID: 0x2A_SKILLS</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {skills.map((s, i) => (
              <div key={i} className="bg-[#020204] p-10 group hover:bg-purple-500/10 transition-all cursor-crosshair overflow-hidden relative">
                <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/5 group-hover:text-purple-500/50">{s.cat}</div>
                <h4 className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors tracking-tighter mb-4">{s.name}</h4>
                <div className="flex gap-1 h-1 w-full">
                  {[1, 2, 3, 4, 5].map(dot => (
                    <div
                      key={dot}
                      className={`h-full flex-1 bg-white/5 group-hover:bg-purple-500/60 transition-all duration-500`}
                      style={{
                        transitionDelay: `${dot * 75}ms`,
                        opacity: 0.2 + (dot * 0.15)
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
