import React from 'react';
import { ChevronLeft } from 'lucide-react';
import QUESTIONS from "./faq.json"

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
            {QUESTIONS.map((item, index) => (
                <div key={index} className="bg-slate-900/50 p-6 rounded-lg border-2 border-slate-600">
                    <h3 className="text-xl font-bold text-red-400 mb-3">{item.question}</h3>
                    <p className="leading-relaxed text-slate-200" dangerouslySetInnerHTML={ {__html: item.answer }} />
                </div>
            ))}
        </div>
    </div>
    </div>
</div>
);

export default FAQPage