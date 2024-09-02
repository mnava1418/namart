import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { CustomViewProps } from '../../interfaces/content.interface'
import Button from '../components/Button'

const NotFound = ({currentContent, language, setLanguage}: CustomViewProps) => {
    return (
        <>
            <Menu content={currentContent.menu} language={language} setLanguage={setLanguage} />
            <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '100%'}}>
                <section id='notfound' className='custom-container app-full-screen'>
                    <h1 style={{color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '80px'}}>404</h1>
                    <h1>{currentContent.notFound.text}</h1>
                    <Button label={currentContent.notFound.btnLabel} type='primary' onClick={() => {window.open('/', '_self')}} style={{marginTop: '40px'}}/>
                </section>
                <Footer content={currentContent.footer} />
            </div>
        </>
    )
}

export default NotFound