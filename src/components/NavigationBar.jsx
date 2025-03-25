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
        sticky top-0 z-50 pointer-events-none
        flex flex-row justify-between items-center
        w-full h-[3.5rem]
        md:px-4 md:bg-white-secondary md:shadow-md
      `}
    >
      {/* Utility bar */}
      <div className="pointer-events-auto flex w-1/3 p-3 md:pl-0">
        <UtilityBar setLanguage={setLanguage} currentLanguage={language} />
      </div>

      {/* Mobile menu button */}
      <div className="pointer-events-auto md:hidden flex justify-end w-full p-3 z-10">
        <MobileMenu isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Navigation menu */}
      <div
        className={`
          ${isMenuOpen ? `
            absolute top-0 w-full h-[100dvh]
            backdrop-blur-3xl bg-white-primary bg-opacity-20
            opacity-100 transition-all duration-300 ease-in-out
          ` : `
            absolute md:relative top-[3.5rem] md:top-0
            w-full md:w-auto h-[calc(100dvh-3.5rem)] md:h-auto
            pointer-events-none invisible md:visible md:pointer-events-auto
            opacity-0 md:opacity-100 transition-all md:transition-none
            duration-300 ease-in-out
          `}
        `}
      >
        <ul
          className="
            flex flex-col md:flex-row
            pt-16 md:pt-0
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
                  flex flex-col md:w-[120px] h-[3.5rem]
                  mt-6 md:mt-0
                  md:items-center justify-center relative
                  md:text-base text-lg
                  group
                "
              >
                <a
                  href={`#${sectionId}`}
                  className={`
                    h-full flex items-center p-8 md:p-0
                    ${activeSection === sectionId ? 'font-bold bg-white-secondary' : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
                <span
                  className="
                    hidden md:block
                    absolute bottom-0
                    w-10 h-[2.5px] rounded-lg
                    group-hover:bg-black-primary transition ease-in-out
                  "
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Social bar for mobile */}
        <div
          className={`
            ${isMenuOpen ? 'flex flex-col' : 'hidden'}
            md:hidden
            w-full items-start p-8
            absolute bottom-0 pointer-events-auto
          `}
        >
          <div
            className="
              my-6 flex items-center w-full
              border-t border-black-primary rounded-lg
            "
          />
          <div className="flex justify-start w-full">
            <SocialBar />
          </div>
        </div>
      </div>

      {/* Social bar */}
      <div
        className="
          pointer-events-auto hidden md:flex
          w-1/3 justify-end
        "
      >
        <SocialBar />
      </div>
    </nav>
  );
};

export default NavigationBar;
