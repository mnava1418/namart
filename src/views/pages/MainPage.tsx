import hand from '../../assets/images/hand.svg'
import Button from '../components/Button'

const MainPage = () => {
  return (
    <main id='home' className='app-container app-full-screen'>
        <div className='d-flex flex-column'>
            <div>
                <div style={{marginBottom: '16px'}}>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}><img src={hand} alt="" style={{marginRight: '16px'}}/>Hello, World!</span>
                </div>
                <h2>Hola, soy Martin.</h2>
                <h3 className='text-gradient'>Desarrollador de Software</h3>
                <h4>+10 años de experiencia</h4>
            </div>
            <div className='d-flex flex-row justify-content-start' style={{paddingTop: '30px'}}>
                <Button type='primary' label='Mis Servicios' onClick={() => {alert('Servicios')}} style={{marginRight: '16px'}}/>
                <Button type='secondary' label='Contáctame' onClick={() => {alert('Contáctame')}}/>
            </div>
        </div>
        <div className='main-bg-img custom-img custom-img-contain'/>
    </main>
  )
}

export default MainPage