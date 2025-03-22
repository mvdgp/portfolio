import NavigationBar from './components/NavigationBar';
import { routes } from './content/routes';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState(null); // Start with null
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    // Delay setting the initial active section to trigger animations
    const timeout = setTimeout(() => {
      setActiveSection('home');
    }, 100); // Adjust the delay as needed (100ms here)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          window.history.replaceState(null, '', `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.6,
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className='
        h-[100dvh]
        snap-y snap-mandatory overflow-y-scroll scroll-smooth
        bg-white-primary
      '
    >
      <NavigationBar
        activeSection={activeSection}
        language={language}
        setLanguage={setLanguage}
      />
      <div>
        {routes.map((route, index) => {
          const sectionId = route.path.replace('/', '') || 'home';
          const isActive = activeSection === sectionId;

          return (
            <section
              key={index}
              id={sectionId}
              className={`
                h-[100dvh] pt-[3.5rem]
                relative snap-end bg-white-primary
                ${!isActive ? 'overflow-x-hidden' : ''}
              `}
            >
              <route.component language={language} isActive={isActive} />
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default App;