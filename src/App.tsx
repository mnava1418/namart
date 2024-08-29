import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutDetailsView from './views/AboutDetailsView';
import { useState, useEffect } from 'react';
import { Content, Language } from './interfaces/content.interface';
import englishContent from './utils/content/english.content';
import spanishContent from './utils/content/spanish.content';

function App() {
  const [currentContent, setCurrentContent] = useState<Content>(spanishContent)
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
      if(language === 'es') {
          setCurrentContent(spanishContent)
      } else {
          setCurrentContent(englishContent)
      }
  }, [language])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView currentContent={currentContent} language={language} setLanguage={setLanguage} />} />
        <Route path="/about" element={<AboutDetailsView currentContent={currentContent} language={language} setLanguage={setLanguage} />} />
      </Routes>
    </Router>
  );
}

export default App;
