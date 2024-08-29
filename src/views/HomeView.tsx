import { CustomViewProps } from "../interfaces/content.interface";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import ProcessPage from "./pages/ProcessPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";

const HomeView = ({currentContent, language, setLanguage}: CustomViewProps) => {
    return (
        <>
            <Menu content={currentContent.menu} language={language} setLanguage={setLanguage} showSectionLinks/>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '100%'}}>
            <MainPage content={currentContent.main}/>
            <AboutPage content={currentContent.about}/>
            <ServicesPage content={currentContent.services}/>
            <ProjectsPage content={currentContent.projects}/>
            <ProcessPage content={currentContent.process} />
            <Footer content={currentContent.footer} />
            </div>
        </>
    );
}

export default HomeView