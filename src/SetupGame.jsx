import React from 'react';
import { ChevronLeft, ArrowLeftRight } from 'lucide-react';
import flashCard from './assets/images/flash.jpg';
import EnergyCard from './assets/images/energia.jpg';
import FireCard from './assets/images/fuego.jpg';
import IceBaseCard from './assets/images/hielo.jpg';
import IceCard from './assets/images/ice.png';
import RingOfResilience from './assets/images/rings/ring-of-resilience.PNG';

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
                            <span>Se saca 1 Flash &nbsp; &nbsp;&nbsp;</span>
                            <img src={flashCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                        </li>
                         <li className="flex items-center gap-2">
                            <span>Se saca 1 Energia</span>
                            <img src={EnergyCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                        </li>
                        <li className="flex items-center gap-2">
                            <span>Se saca 1 Fuego&nbsp;&nbsp;&nbsp;</span>
                            <img src={FireCard} alt="Flash card" className="h-32 w-auto inline-block ml-2 rounded-lg shadow-lg" />
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 overflow-x-auto">
                                <span className="text-sm sm:text-base">Se cambia la Carta "Hielo" por "Ice".</span>
                                <div className="flex items-center gap-2">
                                    <img src={IceBaseCard} alt="Ice base card" className="h-24 sm:h-32 w-auto rounded-lg shadow-lg" />
                                    <ArrowLeftRight className="text-amber-400 flex-shrink-0" size={24} />
                                    <img src={IceCard} alt="Ice card" className="h-24 sm:h-32 w-auto rounded-lg shadow-lg" />
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li className="flex items-center gap-2">
                            <span>Se separan los anillos aparte del resto de las cartas</span>
                        </li>
                    </ul>
                    <br/>
                    <p className="leading-relaxed mb-4">
                        Y listo! ya con eso queda listo el mazo para jugar la expansión
                    </p>
                </div>

                <div className="explanation-section">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Como jugar la expansion</h2>
                    <p className="leading-relaxed">
                        En la expansion del juego, primero se comienza repartiendo al azar 2 anillos a cada jugador. Estos quedan a la vista de todos boca arriba. Cada anillo da un poder pasivo que se desribe en la carta. Adicionalmente algunos anillos tambien tienen un Ring power extra que solo puede usarse una vez en todo el juego cuando el jugador quiera aplicarlo.
                    </p>
                    <div className="flex justify-center my-6">
                        <img 
                            src={RingOfResilience} 
                            alt="Ring of Resilience" 
                            className="h-80 w-auto rounded-lg shadow-2xl"
                        />
                    </div>
                    <p className="leading-relaxed mb-4">
                        Por ejemplo en este anillo el efecto pasivo que tiene le permite al jugador recibir un orbe cada vez que le destruyan una gema. Y ademas de ese poder, una unica vez puede activar el Ring power que le permitiria obtener un orbe por cada gema que haya en juego.
                    </p>
                    
                    <p className="leading-relaxed">
                        El resto del reglamento es identico al del juego base.
                    </p>
                </div>

                <div className="explanation-section">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Como jugar en parejas</h2>
                    <p className="leading-relaxed">
                        Cuando hay 4 jugadores, si no quieren jugar todos contra todos es posible jugar en parejas. En ese caso cada pareja se ubica enfrentada en la mesa y juegan 2 vs 2. Las reglas son las mismas de siempre, con el unico agregado que si un jugador llegar a obtener la cerveza, su compañero tambien gana.
                    </p>
                </div>

            </div>
        </div>
        </div>
    </div>
    );

export default SetupGame