export const config = {
  runtime: 'edge', // Самый быстрый режим
};

export default async function handler(req) {
  // Настройка заголовков (чтобы сайт видел ответ)
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { userRequest } = await req.json();
    const API_KEY = process.env.OPENROUTER_API_KEY;

    if (!API_KEY) throw new Error("Нет ключа OpenRouter в настройках Vercel");

    // Запрос к OpenRouter (Прокладка, которая работает в РБ)
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://mirmag.app", // Требование OpenRouter
      },
      body: JSON.stringify({
        // Используем БЕСПЛАТНЫЙ Gemini через их шлюз
        model: "google/gemini-2.0-flash-exp:free", 
        messages: [
          {
            role: "system",
            content: "Ты — глубинный психолог и эксперт по Таро. Верни ответ СТРОГО в JSON (без markdown): { \"card_id\": 0, \"card_name\": \"Название (RU)\", \"interpretation\": \"Текст инсайта (RU)\", \"image_prompt\": \"Описание для генерации (EN, surrealism)\" }."
          },
          {
            role: "user",
            content: userRequest
          }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Ошибка ИИ: ${err}`);
    }

    const data = await response.json();
    let content = data.choices[0].message.content;

    // Чистим мусор (если ИИ прислал ```json)
    content = content.replace(/```json|```/g, '').trim();
    const result = JSON.parse(content);

    // Генерируем картинку
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(result.image_prompt)}?width=1024&height=1024&model=flux&nologo=true`;

    return new Response(JSON.stringify({ ...result, generated_image: imageUrl }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}