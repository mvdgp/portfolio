import React from 'react';
import { utilities } from '../content/utilities';

const UtilityBar = ({ setLanguage, currentLanguage }) => {
    const nextLanguage = currentLanguage === 'EN' ? 'NL' : 'EN';

    return (
        <div className="flex items-center justify-center gap-4">
            {utilities.map((utility, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (utility.label === 'Translate') {
                            utility.onClick(setLanguage);
                        }
                    }}
                    className="utility flex items-center gap-4 md:gap-1"
                    aria-label={utility.label}
                >
                    {utility.svg}
                    <span className="ml-2">{nextLanguage}</span>
                </button>
            ))}
        </div>
    );
};

export default UtilityBar;