import React from 'react';
import { socials } from '../content/socials';

const SocialBar = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-center gap-6">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social flex items-center justify-center gap-6"
                    aria-label={social.label}
                >
                    {social.svg}
                    <span className='md:hidden'>{social.label}</span>
                </a>
            ))}
        </div>
    );
};

export default SocialBar;