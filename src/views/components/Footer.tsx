import { FooterContent } from '../../interfaces/content.interface'
import '../../styles/footer.css'
import Button from './Button'

type FooterProps = {
  content: FooterContent
}

const Footer = ({content}: FooterProps) => {
  const {book, text, titleOne, titleTwo} = content
  return (
    <footer className='custom-footer-container'>
        <div className='custom-footer-action'>
          <div>
            <h3>{titleOne}</h3>
            <h3>{titleTwo}</h3>
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start' >
            <span>{text}</span>
            <Button label={book} type='alternative' style={{width: '200px', margin: '20px 0px 0px 0px' }} onClick={() => {window.open('https://calendar.app.google/6F5CsqBi5EPNZRaXA', '_blank')}} />
          </div>
        </div>
        <div className='custom-footer-info'>
          <div><span>{`© ${new Date().getFullYear()}`}</span></div>
          <div className='custom-footer-logo custom-img custom-img-contain'/>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='custom-footer-icon' onClick={() => {window.open('https://www.instagram.com/namartdev', '_blank')}}><i className="bi bi-instagram fs-4" /></div>
            <div className='custom-footer-icon' onClick={() => {window.open('https://github.com/mnava1418', '_blank')}}><i className="bi bi-github fs-4" /></div>
          </div>
        </div>
    </footer>
  )
}

export default Footer