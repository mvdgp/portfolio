import React, { useState } from 'react';
import { routes } from '../content/routes';
import UtilityBar from './UtilityBar';
import SocialBar from './SocialBar';
import MobileMenu from './MobileMenu';

const NavigationBar = ({ activeSection, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`
        pointer-events-none
        sticky top-0 z-50
        flex flex-col md:flex-row justify-between items-center
        w-full h-[3.5rem]
        md:px-4
        bg-white-primary md:bg-white-secondary
        md:shadow-md
      `}
    >
      {/* Utility bar */}
      <div className="pointer-events-auto hidden md:flex w-1/3">
        <UtilityBar setLanguage={setLanguage} currentLanguage={language} />
      </div>

      {/* Mobile menu button */}
      <div className="pointer-events-auto md:hidden flex justify-end w-full p-3 z-10">
        <MobileMenu isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Navigation menu */}
      <div
        className={`
          ${
            isMenuOpen
              ? `
                opacity-100 
                transition-all duration-300 ease-in-out 
                absolute top-0 
                backdrop-blur-3xl bg-white-primary bg-opacity-20
                w-full h-[100dvh]
              `
              : `
                transition-all md:transition-none 
                absolute md:relative 
                top-[3.5rem] md:top-0 
                h-[calc(100dvh-3.5rem)] md:h-auto 
                w-full md:w-auto 
                duration-300 ease-in-out 
                opacity-0 md:opacity-100
              `
          }
        `}
      >
        <ul
          className="
            flex flex-col md:flex-row pt-16 md:pt-0
            pointer-events-auto 
          "
        >
          {routes.map((route, index) => {
            const sectionId = route.path.replace('/', '') || 'home';
            const label = language === 'EN' ? route.EN : route.NL;
            return (
              <li
                key={index}
                className="
                  flex flex-col
                  md:w-[120px] h-[3.5rem]
                  mt-6 md:mt-0
                  md:items-center justify-center relative
                  md:text-base text-lg
                  group
                "
              >
                <a
                  href={`#${sectionId}`}
                  className={`
                    ${
                      activeSection === sectionId
                        ? 'font-bold bg-white-secondary'
                        : ''
                    }
                    h-full flex items-center p-8 md:p-0
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
                <span
                  className="
                    hidden md:block
                    absolute bottom-0
                    w-10 h-[2.5px]
                    rounded-lg
                    group-hover:bg-black-primary transition ease-in-out
                  "
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Utility & Social bar for mobile */}
        <div
          className={`
            ${isMenuOpen ? 'flex flex-col' : 'hidden'}
            md:hidden
            w-full items-start
            p-8
            absolute bottom-0
            pointer-events-auto
          `}
        >
          <UtilityBar setLanguage={setLanguage} currentLanguage={language} />
          <div
            className="
              my-6
              flex
              items-center
              w-full
              border-t border-black-primary
              rounded-lg
            "
          />
          <div className='flex justify-start w-full'>
            <SocialBar />
          </div>
        </div>
      </div>

      {/* Social bar */}
      <div
        className="
        pointer-events-auto
          hidden md:flex
          w-1/3 justify-end
        "
      >
        <SocialBar />
      </div>
    </nav>
  );
};

export default NavigationBar;