import React from 'react';
import { ChevronLeft } from 'lucide-react';

const SetupGame = ({ onClick = () => {} }) => (

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
            <div className="card-header">
                <h1 className="text-3xl md:text-4xl font-bold text-red-400 tracking-wide uppercase">
                    🎲 Cómo Armar el Juego
                </h1>
            </div>

            <div className="text-content-wrapper">
                <div className="explanation-section">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Preparación Inicial</h2>
                    <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="explanation-section">
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

                <div className="explanation-section">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Configuración del Tablero</h2>
                    <p className="leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                <div className="explanation-section">
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

export default SetupGame