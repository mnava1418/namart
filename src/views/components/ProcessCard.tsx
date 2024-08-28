import { CardProps } from '../../interfaces/content.interface'
import '../../styles/card.css'

const ProcessCard = ({icon, text, title, subtitle}: CardProps) => {
    return (
        <div className='d-flex flex-column justify-content-start align-items-start process-card-container'>
            <div>
                <span style={{fontSize: '16px', fontWeight: 'bold'}}>{subtitle}</span>
            </div>
            <div style={{marginTop: '8px'}}>
                <i className={`${icon} fs-2`} style={{color: 'var(--primary-color)'}} />
            </div>
            <div style={{margin: '24px 0px 8px 0px'}}>
                <h4 style={{color: '#000'}}>{title}</h4>
            </div>
            <div>
                <p style={{textAlign: 'left'}}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default ProcessCard