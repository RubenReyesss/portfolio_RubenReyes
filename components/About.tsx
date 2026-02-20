
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="reveal grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4 sticky top-32">
            <div className="text-white/20 font-mono text-sm mb-4">/ 01 _ PERFIL</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Arquitectura <br /> y Visión.</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>

          <div className="md:col-span-8 space-y-12">
            <div className="glass-card p-10 pt-16 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-white/10">BIO_v1.0.4</div>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                Estudiante de Especialización en IA y Big Data apasionado por la inteligencia artificial aplicada. Experto en construir <span className="text-white font-medium italic">asistentes inteligentes (RAG)</span>, procesamiento de lenguaje natural (NLP) y flujos de automatización eficaces y escalables.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 text-sm border-t border-white/5 pt-8">
                <div>
                  <h4 className="font-mono text-purple-400 uppercase tracking-widest text-[10px] mb-3">Educación</h4>
                  <p className="text-slate-400">Especialización en IA & Big Data <br /> <span className="text-white/60">I.E.S. Rafael Alberti (2026)</span></p>
                </div>
                <div>
                  <h4 className="font-mono text-cyan-400 uppercase tracking-widest text-[10px] mb-3">Core Stack</h4>
                  <p className="text-slate-400">Python · ML · NLP · RAG · SQL · Spark · DevOps</p>
                </div>
              </div>
            </div>

            <div className="flex items-center p-8 border border-white/5 bg-white/[0.01]">
              <p className="text-slate-500 text-sm italic">
                "Desarrollando soluciones que integran LLMs y MCP para la creación de agentes interoperables y automatización de procesos empresariales."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
