import { ServicesContent } from '../../interfaces/content.interface'
import CustomCard from '../components/CustomCard'

type ServicesPageProps = {
  content: ServicesContent
}

const ServicesPage = ({content}: ServicesPageProps) => {
  const {title, services} = content

  return (
    <section id='services' style={{background: 'var(--main-gradient)'}}>
      <div className='custom-container'>
        <h3 style={{margin: '32px 0px 32px 0px', color: '#fff'}}>{title}</h3>
        <div className='d-flex flex-wrap flex-row justify-content-center align-items-center' style={{marginBottom: '32px'}}>
          {services.map((card, index) => (
            <CustomCard key={index} icon={card.icon} title={card.title} text={card.text}/>
          ))}
        </div>
      </div>      
    </section>
  )
}

export default ServicesPage