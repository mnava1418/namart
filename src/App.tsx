import './styles/main.css'

import Menu from "./views/components/Menu";
import MainPage from "./views/pages/MainPage";
import Footer from "./views/components/Footer";
import {englishContent, spanishContent} from './utils/content/content'
import { useEffect, useState } from "react";
import { Content, language } from "./interfaces/content.interface";
import AboutPage from './views/pages/AboutPage';
import ServicesPage from './views/pages/ServicesPage';

function App() {
  const [currentContent, setCurrentContent] = useState<Content>(spanishContent)
  const [language, setLanguage] = useState<language>('es')

  useEffect(() => {
    if(language === 'es') {
      setCurrentContent(spanishContent)
    } else {
      setCurrentContent(englishContent)
    }
    
  }, [language])

  return (
    <>
      <Menu content={currentContent.menu} language={language} setLanguage={setLanguage} />
      <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '100%'}}>
        <MainPage content={currentContent.main}/>
        <AboutPage content={currentContent.about}/>
        <ServicesPage content={currentContent.services}/>
        <Footer content={currentContent.footer} />
      </div>
    </>
  );
}

export default App;
