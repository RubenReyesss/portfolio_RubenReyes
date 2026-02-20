
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="reveal glass p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/10 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06b6d4]/10 blur-[100px]"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Hablamos?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Estoy buscando nuevas oportunidades y proyectos desafiantes donde pueda aplicar mis conocimientos en IA y Data.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:rubenparra300@gmail.com" className="flex items-center px-6 py-4 glass hover:bg-white/5 rounded-2xl transition-all group" aria-label="Enviar correo a rubenparra300@gmail.com">
              <span className="text-slate-300 group-hover:text-white font-medium">rubenparra300@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/rubenreyesparra" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-4 glass hover:bg-white/5 rounded-2xl transition-all group" aria-label="Visitar perfil de LinkedIn">
              <span className="text-slate-300 group-hover:text-white font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/RubenReyesss" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-4 glass hover:bg-white/5 rounded-2xl transition-all group" aria-label="Visitar perfil de GitHub">
              <span className="text-slate-300 group-hover:text-white font-medium">GitHub</span>
            </a>
          </div>

          <div className="inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <span className="text-sm text-slate-400">📍 Cádiz, España · <b>Disponibilidad inmediata</b></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
