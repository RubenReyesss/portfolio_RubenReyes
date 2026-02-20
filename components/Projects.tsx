
import React from 'react';

const projects = [
  {
    title: 'DiabetesHelp PRO',
    tag: 'AI_AGENT / RAG',
    desc: 'Asistente IA médico que utiliza RAG para proporcionar respuestas precisas basadas en guías oficiales sobre diabetes. Basado en Mistral-7B.',
    stack: ['Python', 'RAG', 'Mistral-7B', 'Gradio'],
    link: 'https://github.com/RubenReyesss/DiabetesHelp-PRO',
    color: 'from-purple-500/20'
  },
  {
    title: 'Sentiment Evolution',
    tag: 'MCP / NLP',
    desc: 'Servidor MCP para Claude Desktop diseñado para analizar la evolución del sentimiento en cadenas de texto. Mención en Hackathon MCP.',
    stack: ['Python', 'MCP', 'NLP', 'SQLite'],
    link: 'https://huggingface.co/spaces/RubenReyess/Sentiment-Evolution-Tracker',
    color: 'from-cyan-500/20'
  },
  {
    title: 'NarrativaVisualAI',
    tag: 'MULTIMODAL / TTS',
    desc: 'Pipeline generativo que crea narrativas visuales y auditivas a partir de texto (LLM + NLP + TTS). Integrado en HF Spaces.',
    stack: ['Python', 'ML', 'NLP', 'TTS'],
    link: 'https://huggingface.co/spaces/RubenReyess/NarrativaVisualAI',
    color: 'from-white/10'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="reveal">
          <div className="flex items-center gap-8 mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Proyectos_</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="animated-border-box p-[1px] group reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="relative z-10 h-full bg-[#020204] p-10 flex flex-col group-hover:bg-white/[0.02] transition-colors">
                  <div className="font-mono text-[10px] text-cyan-400 mb-6 tracking-widest">{p.tag}</div>
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform">{p.title}</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-10 flex-1">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.stack.map(s => (
                      <span key={s} className="text-[9px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-white/40">{s}</span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-white hover:text-cyan-400 transition-colors"
                    aria-label={`Ver código fuente de ${p.title}`}
                  >
                    VIEW_SOURCE_CODE <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
