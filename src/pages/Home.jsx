import React from 'react';
import { about } from '../content/about';

const Home = ({ language, isActive }) => {
    const { name, title, contactButton } = about[0];

    return (
        <div className={`transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mt-[-3.5rem]">
                <div className="
                    h-full md:top-[3.5rem] md:h-[calc(100dvh-3.5rem)] w-full
                    absolute xl:bg-left xl:left-32 z-[1]
                    bg-contain bg-no-repeat bg-bottom bg-[url('/Me2.png')]
                    filter grayscale contrast-[120%]"
                />
                <div className="
                    h-full md:top-[3.5rem] md:h-[calc(100dvh-3.5rem)] w-full
                    absolute xl:bg-left xl:left-32 z-0
                    bg-contain bg-no-repeat bg-bottom bg-[url('/Me2.png')]
                    filter grayscale contrast-[120%] blur-3xl"
                />
            </div>
            <div className="
                relative z-[3]
                h-[100dvh]
                flex flex-col justify-end xl:justify-center items-center
                pb-32 md:pb-0 xl:pl-[30rem]
                text-white-secondary xl:text-black-primary
            ">
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
                <a href="#contact"
                    className={`
                        cursor-pointer
                        border border-white-secondary xl:border-black-primary
                        px-8 py-2 rounded-sm
                        active:bg-white-secondary active:text-black-secondary
                        xl:hover:scale-105 xl:active:bg-black-primary xl:active:text-white-primary
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