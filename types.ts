export interface AnalyzeResponse {
  card_id: number;
  card_name: string;
  interpretation: string;
  image_prompt: string;
  generated_image: string;
}

export interface CardProps {
  realCardUrl: string;
  aiCardUrl: string;
}