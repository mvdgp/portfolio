import React from 'react';

const Skill = ({ skill, className, style }) => {
    return (
        <div
            className={`
                flex-grow flex-shrink basis-0 
                hover:scale-[102%] hover:duration-150 
                ${className}
            `}
            style={style}
        >
            <div
                className="
                    border border-black-secondary rounded-sm 
                    py-2 px-6 
                    whitespace-nowrap justify-center
                "
            >
                <p className="text-center">{skill}</p>
            </div>
        </div>
    );
};

export default Skill;