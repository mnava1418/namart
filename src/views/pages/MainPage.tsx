import hand from '../../assets/images/hand.svg'
import { MainContent } from '../../interfaces/content.interface'
import Button from '../components/Button'

type MainPageProps = {
    content: MainContent
}

const MainPage = ({content}: MainPageProps) => {
    const {contact, services, subtitle, text, title} = content

    return (
        <main id='home' className='app-container app-full-screen'>
            <div className='d-flex flex-column'>
                <div>
                    <div style={{marginBottom: '16px'}}>
                        <span style={{fontSize: '20px', fontWeight: 'bold'}}><img src={hand} alt="" style={{marginRight: '16px'}}/>Hello, World!</span>
                    </div>
                    <h2>{title}</h2>
                    <h3 className='text-gradient'>{subtitle}</h3>
                    <h4>{text}</h4>
                </div>
                <div className='d-flex flex-row justify-content-start' style={{paddingTop: '30px'}}>
                    <Button type='primary' label={services} onClick={() => {alert('Servicios')}} style={{marginRight: '16px'}}/>
                    <Button type='secondary' label={contact} onClick={() => {alert('Contáctame')}}/>
                </div>
            </div>
            <div className='main-bg-img custom-img custom-img-contain'/>
        </main>
    )
}

export default MainPage