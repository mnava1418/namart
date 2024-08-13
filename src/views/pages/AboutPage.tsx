import { useEffect } from 'react'
import '../../styles/about.css'
import Button from '../components/Button'

const AboutPage = () => {
  
  useEffect(() => {
    const wordsToHighlight = ["desarrollador de software", "tecnología", "soluciones innovadoras", "desarrollo de aplicaciones" ]
    const textElement: HTMLElement = document.getElementById("aboutParagraph") as HTMLElement
    let originalText = textElement.innerHTML

    wordsToHighlight.forEach(word => {
        const regex = new RegExp(`\\b(${word})\\b`, "gi");
        originalText = originalText.replace(regex, '<span class="text-gradient">$1</span>');
    });

    textElement.innerHTML = originalText;
  }, [])
  
  return (
    <section id='about' style={{backgroundColor: '#fff'}}>
      <div className='custom-container'>
        <h3 style={{marginBottom: '32px'}}><span style={{color:'#0B67AA'}}>Sobre</span> mí</h3>
        <div className='app-container' style={{marginBottom: '32px'}}>
          <div id='aboutImg' className='d-flex flex-column justify-content-center align-items-center'>
            <div className='about-bg-img-container'>
              <div className='about-bg-img custom-img custom-img-contain'/>
            </div>
          </div>
          <div id='aboutText' className='d-flex flex-column justify-content-center align-items-center'>
            <p id='aboutParagraph' style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold'}}>Soy Martín Nava, desarrollador de software con más de 10 años de experiencia en el desarrollo de aplicaciones. Apasionado por la tecnología, me enfoco en crear soluciones innovadoras que transformen ideas en realidad.</p>
            <div className='d-flex flex-row justify-content-center' style={{paddingTop: '30px' }}>
                <Button type='primary' label={'Descarga mi CV'} onClick={() => {window.open('https://drive.google.com/file/d/18R_czVPRyJfhMmQV4rc0jJF7BX79MIkJ/view?usp=drive_link', '_blank')}} style={{marginRight: '16px'}}/>
                <Button type='secondary' label={'Conóceme más'} onClick={() => {alert('Conóceme más')}}/>
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default AboutPage