import hand from '../../assets/images/hand.svg'
import { MainContent } from '../../interfaces/content.interface'
import Button from '../components/Button'

type MainPageProps = {
    content: MainContent
}

const MainPage = ({content}: MainPageProps) => {
    const {contact, services, subtitle, text, title} = content

    return (
        <main id='home'>
            <div className='custom-container app-container app-full-screen'>
                <div className='d-flex flex-column justify-content-start'>
                    <div>
                        <div style={{marginBottom: '16px'}}>
                            <span style={{fontSize: '20px', fontWeight: 'bold'}}><img src={hand} alt="" style={{marginRight: '16px'}}/>Hello, World!</span>
                        </div>
                        <h2>{title}</h2>
                        <h3 className='text-gradient'>{subtitle}</h3>
                        <h4>{text}</h4>
                    </div>
                    <div className='d-flex flex-row justify-content-center' style={{paddingTop: '30px'}}>
                        <Button type='primary' label={services} onClick={() => {window.open('#services', '_self')}} style={{marginRight: '16px'}}/>
                        <Button type='secondary' label={contact} onClick={() => {window.open('mailto:martin@namart.tech', '_self')}}/>
                    </div>
                </div>
                <div className='main-bg-img custom-img custom-img-contain'/>
            </div>
        </main>
    )
}

export default MainPage