import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg shadow-2xl border-4 border-slate-600 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 text-center border-b-4 border-slate-600">
            <h1 className="text-4xl md:text-5xl font-bold text-red-400 tracking-wide uppercase">
              Magos y Tabernas
            </h1>
            <p className="text-slate-200 mt-2 text-lg">Guía de Reglas y Preguntas Frecuentes</p>
          </div>
          
          <div className="p-8 md:p-12 space-y-6">
            <a 
              href="https://d26lpennugtm8s.cloudfront.net/stores/117/811/rte/Reglamento-Magos-y-tabernas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="w-full bg-gradient-to-b from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-6 px-8 rounded-lg shadow-lg transform transition hover:scale-105 border-2 border-red-900 text-xl uppercase tracking-wide">
                📜 Reglamento
              </button>
            </a>

            <button 
              onClick={() => setCurrentPage('setup')}
              className="w-full bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-6 px-8 rounded-lg shadow-lg transform transition hover:scale-105 border-2 border-blue-900 text-xl uppercase tracking-wide"
            >
              🎲 Cómo Armar el Juego
            </button>

            <button 
              onClick={() => setCurrentPage('faq')}
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

  const SetupPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="mb-6 flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
        >
          <ChevronLeft size={20} />
          Volver al Inicio
        </button>

        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg shadow-2xl border-4 border-slate-600 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 text-center border-b-4 border-slate-600">
            <h1 className="text-3xl md:text-4xl font-bold text-red-400 tracking-wide uppercase">
              🎲 Cómo Armar el Juego
            </h1>
          </div>

          <div className="p-6 md:p-10 text-slate-100 space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Preparación Inicial</h2>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Distribución de Cartas</h2>
              <p className="leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt ut labore</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                <li>Duis aute irure dolor in reprehenderit</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Configuración del Tablero</h2>
              <p className="leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Inicio del Juego</h2>
              <p className="leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FAQPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="mb-6 flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
        >
          <ChevronLeft size={20} />
          Volver al Inicio
        </button>

        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg shadow-2xl border-4 border-slate-600 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-700 to-amber-900 p-6 text-center border-b-4 border-slate-600">
            <h1 className="text-3xl md:text-4xl font-bold text-red-300 tracking-wide uppercase">
              ❓ Preguntas Frecuentes
            </h1>
          </div>

          <div className="p-6 md:p-10 text-slate-100 space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-3">¿Cuántos jugadores pueden participar?</h3>
              <p className="leading-relaxed text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. El juego está diseñado para 2-4 jugadores.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-3">¿Cuánto dura una partida?</h3>
              <p className="leading-relaxed text-slate-200">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Una partida típica dura entre 30-45 minutos.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-3">¿Qué pasa si se acaban las cartas del mazo?</h3>
              <p className="leading-relaxed text-slate-200">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Se mezclan las cartas descartadas y se forma un nuevo mazo.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-3">¿Se pueden usar cartas de instantáneo en cualquier momento?</h3>
              <p className="leading-relaxed text-slate-200">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sí, las cartas de instantáneo pueden jugarse incluso durante el turno de otro jugador.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-3">¿Cómo se gana el juego?</h3>
              <p className="leading-relaxed text-slate-200">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. El primer jugador en conseguir 3 cervezas gana la partida.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-3">¿Qué hacer si dos jugadores obtienen su tercera cerveza al mismo tiempo?</h3>
              <p className="leading-relaxed text-slate-200">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. En caso de empate, ambos jugadores comparten la victoria y celebran juntos en la taberna.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-3">¿Las cartas de objeto permanecen en juego?</h3>
              <p className="leading-relaxed text-slate-200">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. Las cartas de objeto permanecen en la mesa hasta que sean destruidas o removidas por otra carta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'setup' && <SetupPage />}
      {currentPage === 'faq' && <FAQPage />}
    </>
  );
};

export default App;