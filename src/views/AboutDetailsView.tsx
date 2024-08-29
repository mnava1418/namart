import { CustomViewProps } from '../interfaces/content.interface';
import Footer from './components/Footer';
import Menu from './components/Menu';

const AboutDetailsView = ({currentContent, language, setLanguage}: CustomViewProps) => {
    return (
        <>
            <Menu content={currentContent.menu} language={language} setLanguage={setLanguage} />
            <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '100%'}}>
                {/* <Footer content={currentContent.footer} /> */}
            </div>
        </>
    );
}

export default AboutDetailsView