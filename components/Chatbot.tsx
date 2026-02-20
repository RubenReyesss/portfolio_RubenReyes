import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Bot, X } from 'lucide-react';
import { RUBEN_CONTEXT } from './context';

const Chatbot: React.FC = () => {
  // Estado para saber si la ventana del chat está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);

  // Guardamos todo el historial de la conversación. Empezamos con el mensaje de bienvenida.
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hola, soy el asistente virtual de Rubén Reyes. Puedo informarte sobre su experiencia, proyectos y formación. ¿En qué puedo ayudarte?' }
  ]);

  // Lo que el usuario escribe en la cajita de texto en este momento
  const [input, setInput] = useState('');

  // Para mostrar el mensaje de "Pensando..."
  const [isTyping, setIsTyping] = useState(false);

  // Referencia para lograr que el chat haga scroll automáticamente hasta abajo al escribir
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  // Función central: Se ejecuta cada vez que el usuario le da al botón SEND o presiona ENTER.
  const handleSend = async () => {
    // Si la caja de texto está vacía o el bot está procesando algo, no hacemos nada.
    if (!input.trim() || isTyping) return;

    // 1. Guardar mensaje del usuario
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    // Limpiamos la cajita y ponemos al bot como "escribiendo"
    setInput('');
    setIsTyping(true);

    try {
      // 2. Preparamos el historial para enviarlo al servidor proxy
      const bodyData = {
        messages: [
          // Le inyectamos el "Contexto" desde context.ts de forma oculta para que sepa cómo actuar
          { role: 'system', content: RUBEN_CONTEXT },
          ...messages.slice(1).map(m => ({
            role: m.role === 'bot' ? 'assistant' : 'user',
            content: m.text
          })),
          { role: 'user', content: userMsg }
        ]
      };

      // 3. Enviamos el mensaje a nuestra propia ruta /api/chat. DE ESTA FORMA OCULTAMOS EL API KEY.
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || `Error ${response.status}`);
      }

      // 4. Si salió bien, leemos la respuesta y la mostramos en pantalla
      const data = await response.json();
      const botResponse = data.choices?.[0]?.message?.content || 'No he recibido una respuesta válida.';
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);

    } catch (error: any) {
      console.error('Chatbot Error:', error);
      // Mensaje en caso de cualquier saturación o fallo en OpenRouter
      setMessages(prev => [...prev, {
        role: 'bot',
        text: 'En este momento el asistente no está disponible. Puedes contactar con Rubén directamente en rubenparra300@gmail.com'
      }]);
    } finally {
      // Pase lo que pase, el bot deja de marcarse como escribiendo
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* ---------- BOTÓN FLOTANTE QUE ABRE EL CHAT ---------- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-10 right-10 z-[60] flex items-center justify-center transition-all duration-300 ease-in-out shadow-2xl ${isOpen
          ? 'w-14 h-14 bg-white text-black hover:bg-gray-200 rounded-full hover:scale-105 active:scale-95'
          : 'w-16 h-16 bg-[#050508] border border-white/20 text-white rounded-2xl hover:rounded-xl hover:scale-110 active:scale-95 group'
          }`}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir asistente de IA'}
      >
        {isOpen ? (
          <X size={24} className="transition-transform group-hover:rotate-90" />
        ) : (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Background glowing rings */}
            <div className="absolute inset-0 rounded-2xl group-hover:rounded-xl bg-purple-500/20 blur-xl transition-all duration-500 group-hover:bg-purple-500/40"></div>

            <div className="relative">
              <Bot size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-transform duration-300 group-hover:-translate-y-1" />

              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 border border-[#050508]"></span>
              </div>
            </div>
          </div>
        )}
      </button>

      <div className={`fixed bottom-28 right-10 z-[60] w-96 max-w-[calc(100vw-40px)] h-[550px] bg-[#050508] border border-white/10 rounded-sm flex flex-col transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none shadow-2xl shadow-purple-500/10'}`}>
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full ${isTyping ? 'bg-purple-500 animate-ping' : 'bg-green-500'}`}></div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-white/80 uppercase">RRP_AGENT_v.1</h4>
          </div>
          <div className="text-[10px] font-mono text-white/20">
            {isTyping ? 'PROCESSING...' : 'READY_FOR_QUERY'}
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] p-4 text-xs leading-relaxed font-mono ${m.role === 'user' ? 'bg-white/5 text-white border-l-2 border-purple-500' : 'text-slate-400 bg-white/[0.01]'}`}>
                <span className="text-[10px] opacity-30 mb-2 block">{m.role === 'user' ? '> USER' : '> SYSTEM'}</span>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[90%] p-4 text-xs font-mono text-slate-500 animate-pulse">
                <span className="text-[10px] opacity-30 mb-2 block">{'> SYSTEM'}</span>
                ANALIZANDO_DATOS...
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-white/5 bg-white/[0.01]">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isTyping ? 'Esperando respuesta...' : 'Ej: ¿Qué proyectos de IA tiene?'}
              disabled={isTyping}
              className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-colors font-mono disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="px-4 bg-white text-black text-[10px] font-bold uppercase tracking-tighter hover:bg-purple-500 hover:text-white transition-colors disabled:opacity-50"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;