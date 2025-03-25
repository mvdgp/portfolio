import NavigationBar from './components/NavigationBar';
import { routes } from './content/routes';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSection('home');

      const firstSection = document.querySelector('section');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 100);

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
        h-[100dvh] overflow-y-scroll scroll-smooth
        snap-y snap-mandatory
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
                h-[100dvh] pt-[3.5rem] relative
                snap-end bg-white-primary
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
