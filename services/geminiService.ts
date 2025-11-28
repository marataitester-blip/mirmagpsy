import { AnalyzeResponse } from "../types";

export const analyzeRequest = async (userRequest: string): Promise<AnalyzeResponse> => {
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userRequest }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Ошибка сервера: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error("API Error:", error);
    throw new Error(error.message || "Не удалось установить связь с эгрегором. Попробуйте снова.");
  }
};