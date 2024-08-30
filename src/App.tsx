import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutDetailsView from './views/AboutDetailsView';
import { useState, useEffect, useRef } from 'react';
import { Content } from './interfaces/content.interface';
import englishContent from './utils/content/english.content';
import spanishContent from './utils/content/spanish.content';
import useLanguage from './hooks/useLanguage';

function App() {
  const navigatorLanguage = useRef(navigator.language || 'en')
  const [currentContent, setCurrentContent] = useState<Content>(spanishContent)
  const {language, setLanguage} = useLanguage(navigatorLanguage.current)

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
        <Route  path='*' element={<>Not Found</>}/>
      </Routes>
    </Router>
  );
}

export default App;
