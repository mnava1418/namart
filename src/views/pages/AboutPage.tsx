import { useEffect } from 'react'
import '../../styles/about.css'
import Button from '../components/Button'
import { AboutContent } from '../../interfaces/content.interface'

type AboutPageProps = {
  content: AboutContent
}

const AboutPage = ({content}: AboutPageProps) => {
  const {buttonOne, buttonTwo, text, title, wordsToHighlight} = content
  
  useEffect(() => {
    const textElement: HTMLElement = document.getElementById("aboutParagraph") as HTMLElement
    let originalText = textElement.innerHTML

    wordsToHighlight.forEach(word => {
        const regex = new RegExp(`\\b(${word})\\b`, "gi");
        originalText = originalText.replace(regex, '<span class="text-gradient">$1</span>');
    });

    textElement.innerHTML = originalText;
  }, [text])
  
  return (
    <section id='about' style={{backgroundColor: '#fff'}}>
      <div className='custom-container'>
        <h3 style={{margin: '32px 0px 32px 0px'}}><span style={{color:'#0B67AA'}}>{title.split(' ')[0]}</span> {title.split(' ')[1]}</h3>
        <div className='app-container' style={{marginBottom: '32px'}}>
          <div id='aboutImg' className='d-flex flex-column justify-content-center align-items-center'>
            <div className='about-bg-img-container'>
              <div className='about-bg-img custom-img custom-img-contain'/>
            </div>
          </div>
          <div id='aboutText' className='d-flex flex-column justify-content-center align-items-center'>
            <p id='aboutParagraph' style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold'}}>{text}</p>
            <div className='d-flex flex-row justify-content-center' style={{paddingTop: '30px' }}>
                <Button type='primary' label={buttonOne} onClick={() => {window.open('https://drive.google.com/file/d/18R_czVPRyJfhMmQV4rc0jJF7BX79MIkJ/view?usp=drive_link', '_blank')}} style={{marginRight: '16px'}}/>
                <Button type='secondary' label={buttonTwo} onClick={() => {window.open('/about', '_self')}}/>
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default AboutPage