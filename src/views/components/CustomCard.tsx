import { CardProps } from '../../interfaces/content.interface'
import '../../styles/card.css'

const CustomCard = ({icon, text, title}: CardProps) => {
  return (
    <div className='d-flex flex-column justify-content-start align-items-center custom-card-container'>
        <div className='d-flex flex-column justify-content-center align-items-center custom-card-icon'>
            <i className={`${icon} fs-2`} style={{color: '#fff'}} />
        </div>
        <div style={{margin: '24px 0px 8px 0px'}}>
            <h3 style={{color: '#000'}}>{title}</h3>
        </div>
        <div>
            <p style={{textAlign: 'center'}}>
                {text}
            </p>
        </div>
    </div>
  )
}

export default CustomCard