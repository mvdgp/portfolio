import React from 'react';
import { portfolio } from '../content/portfolio-content';

const Portfolio = () => {
    // Duplicate the portfolio array to create the infinite scroll effect
    const infinitePortfolio = [...portfolio, ...portfolio];

    return (
        <div className="overflow-x-auto snap-x snap-mandatory flex items-center space-x-8 p-8">
            {infinitePortfolio.map((item, index) => (
                <div
                    key={index}
                    className="snap-center flex-shrink-0 w-full lg:w-2/3"
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
        </div>
    );
};

export default Portfolio;