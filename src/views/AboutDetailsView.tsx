import { CustomViewProps } from '../interfaces/content.interface';
import Footer from './components/Footer';
import Menu from './components/Menu';
import AboutDetailsPage from './pages/AboutDetailsPage';

const AboutDetailsView = ({currentContent, language, setLanguage}: CustomViewProps) => {
    return (
        <>
            <Menu content={currentContent.menu} language={language} setLanguage={setLanguage} />
            <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '100%'}}>
                <AboutDetailsPage sections={currentContent.aboutDetails} />
                <Footer content={currentContent.footer} />
            </div>
        </>
    );
}

export default AboutDetailsView