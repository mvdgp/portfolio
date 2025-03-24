import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { portfolio } from '../content/portfolio-content';

const Portfolio = ({ language, isActive }) => {
    const firstItemRef = useRef(null);
    const containerRef = useRef(null);
    const [focusedItem, setFocusedItem] = useState(null);

    useLayoutEffect(() => {
        // Set the default scroll position to the first portfolio item
        if (firstItemRef.current && containerRef.current) {
            const firstItem = firstItemRef.current;
            const container = containerRef.current;

            const offsetLeft = firstItem.offsetLeft - container.offsetLeft;
            container.scrollLeft = offsetLeft;
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    useEffect(() => {
        const container = containerRef.current;
        const items = container.querySelectorAll('.portfolio-item');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio === 1) {
                        const index = parseInt(entry.target.dataset.index, 10);
                        setFocusedItem(index);
                        console.log(`Focused item: ${portfolio[index].name}`);
                    }
                });
            },
            {
                root: container,
                threshold: 1.0, // Fully in focus
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
                ref={containerRef} // Attach ref to the container
                className={`
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                    transition-all duration-1000 ease-in-out
                    overflow-x-auto snap-x snap-mandatory flex items-center space-x-8 px-8 py-2 lg:p-8
                `}
            >
                {/* Empty space on the left for lg and larger */}
                <div className="xl:hidden flex-shrink-0 w-[52%]"></div>

                {portfolio.map((item, index) => (
                    <div
                        key={index}
                        ref={index === 0 ? firstItemRef : null} // Attach ref to the first item
                        data-index={index} // Add data-index for tracking
                        className={`shadow portfolio-item snap-center flex-shrink-0 w-[68%] xl:w-[52%] ${focusedItem !== index ? 'filter grayscale transition duration-500 ease-in-out' : 'transition duration-500 ease-in-out'
                            }`} // Apply grayscale and smooth transition if not in focus
                    >
                        <img
                            src={item.image.large}
                            alt={item.name}
                            className="hidden xl:block w-full h-auto"
                        />
                        <img
                            src={item.image.small}
                            alt={item.name}
                            className="block xl:hidden w-full h-auto"
                        />
                    </div>
                ))}

                {/* Empty space on the right */}
                <div className="flex-shrink-0 w-[68%] xl:w-[52%] border border-transparent"></div>
            </div>

            {/* Display the name of the focused item */}
            <div className="
            ">
                {focusedItem !== null && (
                    <div className="
                        py-4 px-8 xl:px-16 xl:py-0 text-justify
                    ">
                        <h2 className="font-bold uppercase">
                            {portfolio[focusedItem].name}
                        </h2>
                        <p className="">
                            {portfolio[focusedItem].description[language]}
                        </p>
                        <div className="absolute bottom-10 xl:bottom-14 flex gap-6 items-center ">
                            <a
                                href={portfolio[focusedItem].url}
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-0'}
                                    cursor-pointer
                                    border border-black-primary
                                    px-8 py-2 rounded-sm
                                    xl:hover:scale-105 xl:hover:duration-150 
                                    active:bg-black-primary active:text-white-primary
                                    transition ease-in-out
                                `}>
                                {language === 'EN' ? 'View Live' : 'Bekijk Live'}
                            </a>
                            <a
                                href={portfolio[focusedItem].repo}
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-0'}
                                    cursor-pointer
                                    border border-black-primary
                                    px-8 py-2 rounded-sm
                                    xl:hover:scale-105 xl:hover:duration-150
                                    active:bg-black-primary active:text-white-primary
                                    transition ease-in-out
                                `}>
                                {language === 'EN' ? 'GitHub Repo' : 'GitHub Code'}
                            </a>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
};

export default Portfolio;