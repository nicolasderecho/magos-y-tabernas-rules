import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import SetupGame from './SetupGame.jsx';
import FAQPage from './FaqPage.jsx';

//const EXTERNAL_RULES_LINK = "https://d26lpennugtm8s.cloudfront.net/stores/117/811/rte/Reglamento-Magos-y-tabernas.pdf"
const RULES_LINK = "/rules.pdf"

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    // Set initial page from hash
    handleHashChange();

    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  const HomePage = () => (
    <div className="page-container">
      <div className="max-w-2xl w-full">
        <div className="card-container">
          <div className="card-header">
            <h1 className="text-4xl md:text-5xl font-bold text-red-400 tracking-wide uppercase">
              Magos y Tabernas
            </h1>
            <p className="text-slate-200 mt-2 text-lg">Guía de Reglas y Preguntas Frecuentes</p>
          </div>
          
          <div className="p-8 md:p-12 space-y-6">
            <button 
              onClick={() => navigateTo('setup')}
              className="w-full bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-6 px-8 rounded-lg shadow-lg transform transition hover:scale-105 border-2 border-blue-900 text-xl uppercase tracking-wide"
            >
              🎲 Cómo Armar el Juego
            </button>

            <a 
              href={RULES_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="w-full bg-gradient-to-b from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-6 px-8 rounded-lg shadow-lg transform transition hover:scale-105 border-2 border-red-900 text-xl uppercase tracking-wide">
                📜 Reglamento
              </button>
            </a>

            <button 
              onClick={() => navigateTo('faq')}
              className="w-full bg-gradient-to-b from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-bold py-6 px-8 rounded-lg shadow-lg transform transition hover:scale-105 border-2 border-amber-900 text-xl uppercase tracking-wide"
            >
              ❓ FAQ
            </button>
          </div>

          <div className="bg-slate-900 p-4 text-center border-t-4 border-slate-600">
            <p className="text-slate-400 text-sm">
              ¡Que comience la aventura! 🍺⚔️
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'setup' && <SetupGame onClick={() => navigateTo('home')} />}
      {currentPage === 'faq' && <FAQPage onClick={() => navigateTo('home')} />}
    </>
  );
};

export default App;