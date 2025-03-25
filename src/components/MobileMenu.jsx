import React from 'react';

const MobileMenu = ({ isOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
                flex flex-col justify-center items-center 
                w-8 h-8 space-y-1
            "
            aria-label="Toggle menu"
        >
            <div
                className={`
                    rounded-lg w-6 h-0.5 bg-black 
                    transition-transform duration-300 
                    ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}
                `}
            ></div>
            <div
                className={`
                    rounded-lg w-6 h-0.5 bg-black 
                    transition-opacity duration-300 
                    ${isOpen ? 'opacity-0' : 'opacity-100'}
                `}
            ></div>
            <div
                className={`
                    rounded-lg w-6 h-0.5 bg-black 
                    transition-transform duration-300 
                    ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}
                `}
            ></div>
        </button>
    );
};

export default MobileMenu;
