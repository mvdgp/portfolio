import React, { useState, useEffect } from 'react';
import { experience } from '../content/experience-content';
import Achievement from '../components/Achievement';
import Skill from '../components/Skill';

const Experience = ({ language, isActive }) => {
    const [expandedSection, setExpandedSection] = useState('achievements');
    const achievements = experience[0].achievements;
    const skillset = experience[0].skillset;

    const toggleSection = (section) => {
        if (expandedSection !== section) {
            setExpandedSection(null);

            setTimeout(() => {
                setExpandedSection(section);
            }, 300);
        } else {
            // Collapse the currently expanded section
            setExpandedSection(null);
        }
    };

    return (
        <div className="flex flex-col h-full w-full justify-center items-center">
            {/* Slideshow */}
            <div className="w-full flex flex-col items-center justify-center">
                <ul className={`
                    transition ease-in-out duration-500
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                    w-full my-8 lg:my-16
                    flex gap-8 justify-center lg:justify-evenly items-center
                `}>
                    <li>
                        <div className="
                            flex flex-col items-center justify-center
                            bg-white-secondary
                            w-[150px] h-[150px] lg:w-[250px]
                            rounded-sm shadow text-center
                            hover:scale-105 transition ease-in-out
                        ">
                            <h1 className="font-extrabold text-6xl">2</h1>
                            <p className="text-[1rem]">PRIVATE<br/>PROJECTS</p>
                        </div>
                    </li>
                    <li>
                    <div className="
                            flex flex-col items-center justify-center
                            bg-white-secondary
                            w-[150px] h-[150px] lg:w-[250px]
                            rounded-sm shadow text-center
                            hover:scale-105 transition ease-in-out
                        ">
                            <h1 className="font-extrabold text-6xl">2</h1>
                            <p className="text-[1rem]">SERVICENOW<br/>PROJECTS</p>
                        </div>
                    </li>
                    <li>
                    <div className="
                            flex flex-col items-center justify-center
                            bg-white-secondary
                            w-[150px] h-[150px] lg:w-[250px]
                            rounded-sm shadow text-center
                            hover:scale-105 transition ease-in-out
                        ">
                            <h1 className="font-extrabold text-6xl">4</h1>
                            <p className="text-[1rem]">YEARS OF<br/>EXPERIENCE</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="h-full w-full flex flex-col lg:flex-row px-4 justify-center pt-1">
                {/* Achievements */}
                <div className="lg:px-16 mb-1 w-full">
                    <div
                        className="flex items-center cursor-pointer lg:cursor-default"
                        onClick={() => toggleSection('achievements')}
                    >
                        <h2 className='pl-2 font-bold uppercase mb-2'>{experience[0].achievementHeader[language]}</h2>
                        <span
                            className={`mb-2 ml-2 transform transition-transform duration-300 lg:hidden ${expandedSection === 'achievements' ? 'rotate-90' : 'rotate-0'
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                    <div
                        className={`p-2 transition-all duration-500 ease-in-out overflow-hidden ${expandedSection === 'achievements' || window.innerWidth >= 1024
                            ? 'max-h-[1000px] opacity-100'
                            : 'max-h-0 opacity-0'
                            }`}
                    >
                        <ul className="flex flex-col gap-4 lg:w-[30dvw]">
                            {achievements.map((achievement, index) => (
                                <li
                                    key={index}
                                    className={`transition-transform duration-500 ease-out ${isActive
                                        ? 'translate-x-0 opacity-100'
                                        : 'lg:-translate-x-full translate-x-full opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <Achievement name={achievement.name} institution={achievement.institution} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Skillset */}
                <div className="lg:px-16 w-full mb-1">
                    <div
                        className="flex cursor-pointer lg:cursor-default"
                        onClick={() => toggleSection('skillset')}
                    >
                        <h2 className='pl-2 mb-2 font-bold uppercase'>{experience[0].skillsetHeader[language]}</h2>
                        <span
                            className={`ml-2 mb-2 transform transition-transform duration-300 lg:hidden ${expandedSection === 'skillset' ? 'rotate-90' : 'rotate-0'
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                    <div
                        className={`p-2 transition-all duration-500 ease-in-out overflow-hidden ${expandedSection === 'skillset' || window.innerWidth >= 1024
                            ? 'max-h-[1000px] opacity-100'
                            : 'max-h-0 opacity-0'
                            }`}
                    >
                        {Object.entries(skillset).map(([category, skills]) => (
                            skills.length > 0 && (
                                <div key={category} className="mb-4 lg:mb-8">
                                    <p className="font-semibold capitalize">{category}</p>
                                    <ul className="flex flex-wrap gap-2 w-full justify-start">
                                        {skills.map((skill, index) => (
                                            <Skill
                                                key={index}
                                                skill={skill}
                                                className={`transition-transform duration-500 ease-out ${isActive
                                                    ? 'scale-100 opacity-100'
                                                    : 'scale-0 opacity-0'
                                                    }`}
                                                style={{
                                                    transitionDelay: `${index * 100}ms`,
                                                }}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;