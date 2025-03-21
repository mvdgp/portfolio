import React from 'react';
import { experience } from '../content/experience-content';
import Achievement from '../components/Achievement';
import Skill from '../components/Skill';

const Experience = ({ language, isActive }) => {
    const achievements = experience[0].achievements;
    const skillset = experience[0].skillset;

    return (
        <div className="h-full w-full flex flex-col p-4 md:justify-center">

            {/* Achievements */}
            <div className="md:px-16 mb-8 md:mb-24">
                <h2 className="mb-4 font-bold">{experience[0].achievementHeader[language]}</h2>
                <ul className="
                    flex flex-col md:flex-row gap-4 md:gap-12
                ">
                    {achievements.map((achievement, index) => (
                        <Achievement key={index} name={achievement.name} institution={achievement.institution} />
                    ))}
                </ul>
            </div>

            {/* Skillset */}
            <div className="md:px-16 w-full md:w-[40dvw]">
                <h2 className="mb-4 font-bold">{experience[0].skillsetHeader[language]}</h2>
                                <ul className="
                    flex flex-wrap gap-2 w-full justify-start
                ">
                    {skillset.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Experience;