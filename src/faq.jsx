import React from 'react';
import { ChevronLeft } from 'lucide-react';

const FAQPage = ({ onClick = () => {} }) => (
<div className="page-container py-8">
    <div className="max-w-4xl mx-auto">
    <button 
        onClick={onClick}
        className="mb-6 flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
    >
        <ChevronLeft size={20} />
        Volver al Inicio
    </button>

    <div className="card-container">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 p-6 text-center border-b-4 border-slate-600">
            <h1 className="text-3xl md:text-4xl font-bold text-red-300 tracking-wide uppercase">
                ❓ Preguntas Frecuentes
            </h1>
        </div>

        <div className="text-content-wrapper">
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

export default FAQPage