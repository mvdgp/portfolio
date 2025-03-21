import React from 'react';

const Skill = ({ skill }) => {
    return (
        <div className="
            flex-grow flex-shrink basis-0
        ">
            <div className='border border-black-secondary rounded-sm py-2 px-6 whitespace-nowrap justify-center'>
                <p className="text-center">{skill}</p>
            </div>
        </div>
    );
};

export default Skill;