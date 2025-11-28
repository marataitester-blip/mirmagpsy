import React, { useState } from 'react';
import { AnalyzeResponse } from './types';
import { getCardUrl } from './utils/tarotUtils';
import { Loader } from './components/Loader';
import { CardDisplay } from './components/CardDisplay';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Прямой запрос к вашему Vercel API (без Google SDK на клиенте)
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userRequest: input }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Ошибка сервера: ${response.status}`);
      }

      const data: AnalyzeResponse = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Произошла ошибка при обращении к духам.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 max-w-4xl mx-auto">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl text-[#c7a87b] font-bold mb-2 tracking-wider drop-shadow-lg">
          ЗЕРКАЛО ДУШИ
        </h1>
        <p className="text-[#eae6df] opacity-70 text-lg md:text-xl">
          Психологический портрет твоего состояния
        </p>
      </header>

      <div className="w-full max-w-2xl mb-8 relative">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c7a87b] to-[#a68b5b] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Опиши, что тебя тревожит, или задай вопрос..."
            className="relative w-full h-32 bg-[#16161d] border border-[#c7a87b]/30 rounded-xl p-4 text-lg text-[#eae6df] focus:outline-none focus:border-[#c7a87b] focus:ring-1 focus:ring-[#c7a87b] placeholder-gray-500 resize-none transition-all duration-300"
            disabled={loading}
          />
        </div>
        
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleAnalyze}
            disabled={loading || !input.trim()}
            className={`
              relative group overflow-hidden px-8 py-3 rounded-full 
              font-cinzel font-bold text-lg tracking-widest transition-all duration-300
              ${loading || !input.trim() 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-br from-[#c7a87b] to-[#8c7348] text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(199,168,123,0.4)]'
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              {loading ? 'СВЯЗЬ С ПОЛЕМ...' : (
                <>
                  СОЗДАТЬ ПОРТРЕТ <Sparkles className="w-5 h-5" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      {loading && <Loader />}

      {error && (
        <div className="w-full max-w-2xl bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg text-center mb-8 font-cinzel">
          {error}
        </div>
      )}

      {result && (
        <div className="w-full animate-fade-in-up">
          <CardDisplay 
            realCardUrl={getCardUrl(result.card_id)}
            aiCardUrl={result.generated_image}
          />
          
          <div className="mt-8 bg-[#16161d] border-l-4 border-[#c7a87b] p-6 rounded-r-lg shadow-2xl">
            <h2 className="text-3xl text-[#c7a87b] mb-4 font-cinzel border-b border-[#c7a87b]/20 pb-2">
              {result.card_name}
            </h2>
            <p className="text-lg leading-relaxed text-[#eae6df] whitespace-pre-wrap">
              {result.interpretation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}