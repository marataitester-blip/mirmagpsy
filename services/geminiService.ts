import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AnalyzeResponse } from "../types";

// Note: In a production React environment, API keys should be proxied through a backend
// to avoid exposure. For this specific request, we are implementing the logic client-side
// assuming the environment is set up securely or for demo purposes.

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    card_id: { 
      type: Type.INTEGER, 
      description: "A number between 0 and 79 representing the Tarot card." 
    },
    card_name: { 
      type: Type.STRING, 
      description: "The name of the card in Russian." 
    },
    interpretation: { 
      type: Type.STRING, 
      description: "Psychological interpretation in Russian (3-4 sentences)." 
    },
    image_prompt: { 
      type: Type.STRING, 
      description: "A detailed visual description for an image generator, in English." 
    }
  },
  required: ["card_id", "card_name", "interpretation", "image_prompt"]
};

export const analyzeRequest = async (userRequest: string): Promise<AnalyzeResponse> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing. Please set REACT_APP_API_KEY or VITE_API_KEY.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    Ты — глубинный психолог и эксперт по Таро.
    Твоя задача: Проанализируй запрос клиента: "${userRequest}".
    
    1. Выбери ОДНУ карту из 80, которая лучше всего описывает его состояние (Архетип).
       - ID 0-21: Старшие Арканы.
       - ID 22: Карта Герой.
       - ID 23: Белая Карта.
       - ID 24-79: Младшие Арканы.
    2. Дай психологическую интерпретацию (Инсайт). Не гадай, а объясни суть.
    3. Придумай описание для сюрреалистичной картины (Visual Prompt) на английском.
       - Стиль: Dark gold, cinematic lighting, 8k, surrealism, abstract art.
       - Содержание: Силуэты, символы карты, атмосфера.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("Empty response from Spirit.");

    const data = JSON.parse(jsonText);

    // Generate Pollinations URL (Free Tier Logic)
    const encodedPrompt = encodeURIComponent(data.image_prompt);
    // Adding seed ensures variety, nologo removes watermark if supported
    const seed = Math.floor(Math.random() * 10000);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&model=flux&nologo=true&seed=${seed}`;

    return {
      ...data,
      generated_image: imageUrl
    };

  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Не удалось установить связь с эгрегором. Попробуйте снова.");
  }
};