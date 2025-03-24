import React from 'react';
import { about } from '../content/about';

const Home = ({ language, isActive }) => {
    const { name, title, contactButton } = about[0];

    return (
        <div
            className={`
                transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}
            `}>
            <div className={`
                mt-[-3.5rem]
                transition-all duration-500 ${isActive ? 'px-0 xl:translate-x-0' : 'px-96 xl:-translate-x-full'}
                `}>
                <div className="
                    h-full md:top-[3.5rem] md:h-[calc(100dvh-3.5rem)] w-full
                    absolute xl:bg-left xl:left-32 z-[1]
                    bg-contain bg-no-repeat bg-bottom bg-[url('/Me-Grayscale.png')]"
                />
                <div className="
                    h-full md:top-[3.5rem] md:h-[calc(100dvh-3.5rem)] w-full
                    absolute xl:bg-left xl:left-32 z-0
                    bg-contain bg-no-repeat bg-bottom bg-[url('/Me-Grayscale-Blurred.png')]"
                />
            </div>
            <div className={`
                transition-all duration-500 ${isActive ? 'translate-x-0 xl:translate-x-0 xl:translate-y-0' : 'translate-x-full xl:-translate-x-0 xl:-translate-y-full'}
                relative z-[3]
                h-[100dvh]
                flex flex-col justify-end xl:justify-center items-center
                pb-32 md:pb-0 xl:pl-[30rem]
                text-white-secondary xl:text-black-primary
            `}>
                <div className="
                    text-7xl xl:text-8xl font-extrabold
                ">
                    {name}
                </div>
                <div className="
                    text-xl font-bold mt-4 mb-8
                ">
                    {title[language]}
                </div>
                <a href="#connect"
                    className={`
                        transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-0'}
                        cursor-pointer
                        border border-white-secondary xl:border-black-primary
                        px-8 py-2 rounded-sm
                        active:bg-white-secondary active:text-black-secondary
                        xl:hover:scale-105 xl:hover:duration-150 xl:active:bg-black-primary xl:active:text-white-primary
                        transition ease-in-out
                    `}>
                    {contactButton[language]}
                </a>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;