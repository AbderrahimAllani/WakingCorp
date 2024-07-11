import { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { About } from './components/about';
import { Services } from './components/services';
import { Footer } from './components/footer';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css'; // Assuming your styles are in App.css

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const theme = !isDarkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Footer />
      <button id="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default App;
