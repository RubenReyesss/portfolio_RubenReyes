import type { VercelRequest, VercelResponse } from '@vercel/node';

// Función principal que actúa como "puente" (proxy) entre nuestra web y la IA de OpenRouter.
// Al usar esto, ocultamos nuestra API_KEY para que nadie en el navegador pueda verla o usarla.
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1. Verificamos que la petición enviada por nuestro chat sea de tipo POST.
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Extraemos el historial de mensajes que el usuario escribió
    let { messages } = req.body;

    // Obtenemos la clave de seguridad del entorno del servidor de Vercel. ¡Totalmente invisible al público!
    const API_KEY = process.env.OPENROUTER_API_KEY;

    // Si detectamos que no configuraste la clave en Vercel, reportamos un error.
    if (!API_KEY) {
        console.error("ERROR: OPENROUTER_API_KEY no encontrada en variables de entorno");
        return res.status(500).json({ error: 'API Key not configured on server' });
    }

    // 1. Validación de formato
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Invalid messages format' });
    }

    // 2. Límite de seguridad: Solo enviamos los últimos 10 mensajes para evitar abusos de tokens
    if (messages.length > 10) {
        messages = [messages[0], ...messages.slice(-9)]; // Mantener system prompt + últimos 9
    }

    console.log(`[chat.ts] Petición recibida. Mensajes: ${messages.length}. API Key presente: ${!!API_KEY}`);

    // Intentamos realizar la petición a la red neuronal (OpenRouter / Llama / Gemini / etc.)
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`, // Enviamos la llave de forma 100% segura
                "Content-Type": "application/json",
                "HTTP-Referer": "https://rrp.dev", // Útil para que OpenRouter identifique el tráfico
                "X-Title": "Ruben Portfolio Proxy"
            },
            body: JSON.stringify({
                // Puedes cambiar el modelo aquí si OpenRouter cobra por él o decides mejorar la IA
                "model": "openrouter/free",
                "messages": messages
            })
        });

        console.log(`[chat.ts] Respuesta de OpenRouter: ${response.status}`);

        const data = await response.json();

        // 3. Manejo de errores de OpenRouter (429, 500, etc.)
        if (!response.ok) {
            console.error("[chat.ts] OpenRouter API Error:", JSON.stringify(data));
            return res.status(response.status).json({
                error: 'OpenRouter error',
                details: data.error?.message || 'Unknown provider error'
            });
        }

        return res.status(200).json(data);
    } catch (error: any) {
        console.error("[chat.ts] Proxy Error:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
        return res.status(500).json({
            error: 'Failed to communicate with AI provider',
            detail: error.message
        });
    }
}