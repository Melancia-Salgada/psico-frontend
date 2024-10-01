import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Certifique-se de ajustar o caminho conforme necessário

function WhiteMode() {
    const [whiteMode, setWhiteMode] = useState(false);

    useEffect(() => {
        const isWhiteMode = localStorage.getItem('whiteMode') === 'true';
        setWhiteMode(isWhiteMode);
        const html = document.documentElement;
        html.classList.toggle('whitemode', isWhiteMode);
        html.classList.add('no-transition');
        setTimeout(() => {
            html.classList.remove('no-transition');
        }, 100);
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            const isWhiteMode = localStorage.getItem('whiteMode') === 'true';
            setWhiteMode(isWhiteMode);
            const html = document.documentElement;
            html.classList.toggle('whitemode', isWhiteMode);
        };

        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    const toggleWhiteMode = () => {
        const newWhiteMode = !whiteMode;
        setWhiteMode(newWhiteMode);
        localStorage.setItem('whiteMode', newWhiteMode);
        const html = document.documentElement;
        html.classList.toggle('whitemode', newWhiteMode);
    };

    return (
        <div className="flex">
            {/* Passando whiteMode como prop para a Sidebar */}
            <Sidebar whiteMode={whiteMode} />
            
            <button
                className="w-14 h-14 bg-azul rounded-full flex items-center justify-center shadow-lg fixed bottom-5 right-5"
                onClick={toggleWhiteMode}
            >
                {whiteMode ? (
                    <i className="bi bi-brightness-high-fill"></i>
                ) : (
                    <i className="bi bi-moon-fill"></i>
                )}
            </button>
        </div>
    );
}

export default WhiteMode;
