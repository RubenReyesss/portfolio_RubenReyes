# 🚀 Rubén Reyes Parra - Portfolio & AI Assistant

¡Bienvenido al código fuente de mi portfolio profesional! 
Soy **Rubén Reyes Parra**, Junior Data & AI Developer.

## 🌟 Características del Proyecto

Este proyecto no es solo un portfolio tradicional estático, sino que incluye un **Asistente Virtual (Chatbot)** alimentado por Inteligencia Artificial y conectado al contexto de mi experiencia profesional.

*   **⚡ Framework:** React + Vite (Despliegue ultrarrápido).
*   **🎨 Estilos:** Tailwind CSS v4 para diseño fluido, animaciones modernas y *Glassmorphism*.
*   **🤖 Integración de IA:** Chatbot interactivo usando la API de **OpenRouter** para responder preguntas sobre mi experiencia en tiempo real, con sistema de streaming y animaciones nativas.
*   **🛡️ Seguridad (Proxy API):** Integración Segura a través de Vercel Serverless Functions (`/api/chat.ts`) que esconde la API Key pública para evitar abusos o extracción de credenciales, y limita el tamaño del historial.
*   **📱 Diseño Responsivo:** Funciona perfectamente tanto en ordenador como en dispositivos móviles.

## 🛠️ Tecnologías Principales

*   React 19
*   TypeScript
*   Vite
*   Tailwind CSS (PostCSS)
*   Lucide React (Iconografía)
*   Vercel SDK (API proxy)

## 🚀 Despliegue en Vercel (Recomendado)

Si estás clonando este repositorio y quieres desplegarlo en tu cuenta de Vercel de forma segura:

1. Crea un nuevo proyecto en Vercel apuntando a este repositorio de GitHub.
2. Ve a los **Settings > Environment Variables** de tu proyecto en Vercel.
3. Añade la variable `OPENROUTER_API_KEY` y pega allí tu clave secreta de OpenRouter. **Nunca incluyas esta clave directamente en el código de GitHub ni en un archivo `.env` que se suba.** El archivo `.gitignore` ya está configurado para proteger tus secretos locales.
4. Vercel detectará que es una app de Vite + Funciones Serverless y lo desplegará correctamente de forma automática.

## 📁 Estructura Principal

*   `/components`: Componentes visuales de React como el `Chatbot.tsx`.
*   `/api`: Serverless Functions de Vercel donde ocurre la magia segura de la IA (`chat.ts`).
*   `/public`: Recursos estáticos (imágenes, currículum, etc.).

---
