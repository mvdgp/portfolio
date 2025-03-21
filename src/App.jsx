import NavigationBar from './components/NavigationBar';
import { routes } from './content/routes';
import { useEffect, useState } from 'react';

function App() {
  // Keep track of the active section
  const [activeSection, setActiveSection] = useState('home');

  // Keep track of the selected language
  const [language, setLanguage] = useState('EN');

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

  // The main component
  return (
    <main
      className='
        h-[100dvh]
        snap-y snap-mandatory overflow-y-scroll scroll-smooth
        bg-white-primary
      '
    >
      {/* Pass language and setLanguage to NavigationBar */}
      <NavigationBar
        activeSection={activeSection}
        language={language}
        setLanguage={setLanguage}
      />
      <div>
        {routes.map((route, index) => (
          <section
            key={index}
            id={route.path.replace('/', '') || 'home'}
            className='
              h-[calc(100dvh-3.5rem)]
              relative top-[3.5rem]
              snap-end
              bg-white-primary
            '
          >
            {/* Pass language to each route's component */}
            <route.component language={language} />
          </section>
        ))}
      </div>
    </main>
  );
}

export default App;