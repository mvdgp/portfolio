import React from 'react';
import { socials } from '../content/socials';

const SocialBar = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                    aria-label={social.label}
                >
                    {social.svg}
                </a>
            ))}
        </div>
    );
};

export default SocialBar;