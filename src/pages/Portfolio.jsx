import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { portfolio } from '../content/portfolio-content';

const Portfolio = ({ language, isActive }) => {
    const firstItemRef = useRef(null);
    const containerRef = useRef(null);
    const [focusedItem, setFocusedItem] = useState(0);

    useLayoutEffect(() => {
        if (firstItemRef.current && containerRef.current) {
            const firstItem = firstItemRef.current;
            const container = containerRef.current;

            const offsetLeft = firstItem.offsetLeft - container.offsetLeft;
            container.scrollLeft = offsetLeft;
        }
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const items = container.querySelectorAll('.portfolio-item');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio === 1) {
                        const index = parseInt(entry.target.dataset.index, 10);
                        setFocusedItem(index);
                    }
                });
            },
            {
                root: container,
                threshold: 1.0,
            }
        );

        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                className={`
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                    transition-all duration-1000 ease-in-out
                    overflow-x-auto snap-x snap-mandatory
                    flex items-center space-x-12
                    px-8 py-2 lg:p-8
                `}
            >
                <div className="xl:hidden flex-shrink-0 w-[52%]"></div>

                {portfolio.map((item, index) => (
                    <div
                        key={index}
                        ref={index === 0 ? firstItemRef : null}
                        data-index={index}
                        className={`
                            portfolio-item snap-center flex-shrink-0
                            w-[68%] xl:w-[52%]
                            ${focusedItem !== index
                                ? 'filter grayscale transition duration-500 ease-in-out'
                                : 'scale-[103%] xl:scale-105 transition duration-500 ease-in-out'}
                        `}
                    >
                        <img
                            src={item.image.large}
                            alt={item.name}
                            className="shadow hidden xl:block w-full h-auto"
                        />
                        <img
                            src={item.image.small}
                            alt={item.name}
                            className="shadow block xl:hidden w-full h-auto"
                        />
                    </div>
                ))}

                <div className="flex-shrink-0 w-[68%] xl:w-[52%] border border-transparent"></div>
            </div>

            <div className="flex">
                {focusedItem !== null && (
                    <div className="
                        xl:w-full py-4 px-8 xl:px-16 xl:py-0
                        text-justify
                    ">
                        <h2 className="font-bold uppercase">
                            {portfolio[focusedItem].name} ({portfolio[focusedItem].date})
                        </h2>
                        <p>{portfolio[focusedItem].description[language]}</p>
                        <div className="
                            absolute bottom-10 mt-6
                            flex gap-6 items-center
                        ">
                            <a
                                href={portfolio[focusedItem].url}
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-0'}
                                    cursor-pointer border border-black-primary
                                    px-8 py-2 rounded-sm
                                    xl:hover:scale-105 xl:hover:duration-150
                                    active:bg-black-primary active:text-white-primary
                                    transition ease-in-out
                                `}
                            >
                                {language === 'EN' ? 'View Live' : 'Bekijk Live'}
                            </a>
                            <a
                                href={portfolio[focusedItem].repo}
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-0'}
                                    cursor-pointer border border-black-primary
                                    px-8 py-2 rounded-sm
                                    xl:hover:scale-105 xl:hover:duration-150
                                    active:bg-black-primary active:text-white-primary
                                    transition ease-in-out
                                `}
                            >
                                {language === 'EN' ? 'GitHub Repo' : 'GitHub Code'}
                            </a>
                        </div>
                    </div>
                )}

                {focusedItem !== null && (
                    <>
                        <div className={`
                            ${isActive ? 'opacity-100' : 'opacity-0'}
                            transition ease-in-out hidden xl:flex
                            absolute bottom-8 right-12
                            text-black-primary font-extrabold text-6xl
                        `}>
                            {String(focusedItem + 1).padStart(2, '0')}
                        </div>

                        <div className={`
                            ${isActive ? 'opacity-100' : 'opacity-0'}
                            transition ease-in-out absolute bottom-0
                            w-full h-3 bg-gray-200 mt-4
                        `}>
                            <div
                                className="
                                    absolute bottom-0 left-0
                                    h-full bg-black-primary
                                    transition-all duration-500
                                "
                                style={{
                                    width: `${((focusedItem + 1) / portfolio.length) * 100}%`,
                                }}
                            ></div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Portfolio;