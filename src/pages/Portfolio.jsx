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
        <div>
            <div
                ref={containerRef} // Attach ref to the container
                className="overflow-x-auto snap-x snap-mandatory flex items-center space-x-8 p-8"
            >
                {/* Empty space on the left for lg and larger */}
                <div className="hidden lg:block flex-shrink-0 w-[55%]"></div>

                {portfolio.map((item, index) => (
                    <div
                        key={index}
                        ref={index === 0 ? firstItemRef : null} // Attach ref to the first item
                        data-index={index} // Add data-index for tracking
                        className={`portfolio-item snap-center flex-shrink-0 w-full lg:w-[55%] ${
                            focusedItem !== index ? 'filter grayscale transition duration-500 ease-in-out' : 'transition duration-500 ease-in-out'
                        }`} // Apply grayscale and smooth transition if not in focus
                    >
                        <img
                            src={item.image.large}
                            alt={item.name}
                            className="hidden lg:block w-full h-auto"
                        />
                        <img
                            src={item.image.small}
                            alt={item.name}
                            className="block lg:hidden w-full h-auto"
                        />
                    </div>
                ))}

                {/* Empty space on the right for lg and larger */}
                <div className="hidden lg:block flex-shrink-0 w-[55%]"></div>
            </div>

            {/* Display the name of the currently focused portfolio item */}
            <div className="text-center mt-4">
                {focusedItem !== null ? (
                    <h2 className="text-lg font-semibold">
                        {portfolio[focusedItem].name}
                    </h2>
                ) : (
                    <h2 className="text-lg font-semibold">No item in focus</h2>
                )}
            </div>
        </div>
    );
};

export default Portfolio;