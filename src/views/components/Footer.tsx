import '../../styles/footer.css'
import Button from './Button'

const Footer = () => {
  return (
    <footer className='custom-footer-container'>
        <div className='custom-footer-action'>
          <div>
            <h3>¿Tienes algún proyecto?</h3>
            <h3>Platiquemos</h3>
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start' >
            <span>Me encantaría ayudarte con el proyecto que tienes en mente. Agenda una llamada y cuéntame cómo puedo colaborar contigo.</span>
            <Button label='Agendar' type='alternative' style={{width: '150px', margin: '20px 0px 0px 0px' }} onClick={() => {window.open('https://calendar.app.google/6F5CsqBi5EPNZRaXA', '_blank')}} />
          </div>
        </div>
        <div className='custom-footer-info'>
          <div><span>{`© ${new Date().getFullYear()}`}</span></div>
          <div className='custom-footer-logo custom-img custom-img-contain'/>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='custom-footer-icon' onClick={() => {window.open('https://www.instagram.com/namartdev', '_blank')}}><i className="bi bi-instagram fs-3" /></div>
            <div className='custom-footer-icon' onClick={() => {window.open('https://github.com/mnava1418', '_blank')}}><i className="bi bi-github fs-3" /></div>
          </div>
        </div>
    </footer>
  )
}

export default Footer