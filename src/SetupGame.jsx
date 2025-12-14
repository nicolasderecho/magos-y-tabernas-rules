import React from 'react';
import { ChevronLeft } from 'lucide-react';
import flashCard from './assets/images/flash.jpg';
import EnergyCard from './assets/images/energia.jpg';
import FireCard from './assets/images/fuego.jpg';
import IceBaseCard from './assets/images/hielo.jpg';
import IceCard from './assets/images/ice.png';

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
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Como preparar el Juego base</h2>
                    <p className="leading-relaxed">
                        Para jugar al juego base de Magos y Tabernas (sin la expansion "Lord of Destruction") solo tenes que usar las cartas que estan en español 🇦🇷. Todas las cartas que esten en Inglés 🇺🇸 y los anillos se descartan ya que forman parte de la expansion.
                    </p>
                </div>

                <div className="explanation-section">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Como preparar la expansión</h2>
                    <p className="leading-relaxed mb-4">
                        Para jugar a la expansión se toman todas las cartas del juego y se hace lo siguiente:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></span>
                            <span>Se saca 1 Flash</span>
                            <img src={flashCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                        </li>
                         <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></span>
                            <span>Se saca 1 Energia</span>
                            <img src={EnergyCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></span>
                            <span>Se saca 1 Fuego</span>
                            <img src={FireCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></span>
                            <span>Se intercambia la Carta Hielo por la carta Ice.</span>
                            <img src={IceBaseCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                            <img src={IceCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                        </li>
                        <li>Se separan los anillos aparte del resto de las cartas</li>
                    </ul>
                    <br/>
                    <p className="leading-relaxed mb-4">
                        Y listo! ya con eso queda listo el mazo para jugar la expansión
                    </p>
                </div>

                <div className="explanation-section">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Como jugar la expansion</h2>
                    <p className="leading-relaxed">
                        En la expansion del juego, primero se comienza repartiendo al azar 2 anillos a cada jugador. Estos quedan a la vista de todos boca arriba. Cada anillo da un poder pasivo que se desribe en la carta. Adicionalmente algunos anillos tienen un poder extra que solo puede usarse una vez en todo el juego cuando el jugador quiera aplicarlo.
                    </p>
                    <br/>
                    <p>El resto del reglamento es identico al del juego base.</p>
                </div>

            </div>
        </div>
        </div>
    </div>
    );

export default SetupGame