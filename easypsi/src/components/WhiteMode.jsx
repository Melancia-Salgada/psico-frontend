import React, { useState, createContext, useContext, useEffect } from 'react';

// Criação do contexto
export const TemaContexto = createContext();

// Criando o Provider
export const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState(() => {
        const storedTema = localStorage.getItem('whiteMode');
        return storedTema === 'true'; 
    });

    return (
        <TemaContexto.Provider value={{ tema, setTema }}>
            {children}
        </TemaContexto.Provider>
    );
};

function WhiteMode() {
    const { tema, setTema } = useContext(TemaContexto);
    const [whiteMode, setWhiteMode] = useState(tema);

    useEffect(() => {
        const isWhiteMode = localStorage.getItem('whiteMode') === 'true';
        setWhiteMode(isWhiteMode);
        const html = document.documentElement;
        html.classList.toggle('whitemode', isWhiteMode);
        html.classList.add('no-transition'); // Adiciona a classe de no-transition
        setTimeout(() => {
            html.classList.remove('no-transition'); // Remove após 50ms
        }, 50);
    }, []);

    const toggleWhiteMode = () => {
        const newWhiteMode = !whiteMode;
        setWhiteMode(newWhiteMode);
        localStorage.setItem('whiteMode', newWhiteMode);
        setTema(newWhiteMode);
        const html = document.documentElement;
        html.classList.toggle('whitemode', newWhiteMode);
    };

    return (
        <div className="flex">
            <button
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg fixed bottom-5 right-5 ${
                    whiteMode ? 'bg-azul hover:bg-blue-400  transition-all' : 'bg-preto-whitemode hover:bg-zinc-500  transition-all'
                }`}
                onClick={toggleWhiteMode}
            >
                {whiteMode ? (
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-moon" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-sun" viewBox="0 0 16 16">
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                    </svg>
                )}
            </button>
        </div>
    );
}

export default WhiteMode;
