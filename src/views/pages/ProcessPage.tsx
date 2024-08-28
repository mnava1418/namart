import { ProcessContent } from "../../interfaces/content.interface"
import ProcessCard from "../components/ProcessCard"
import Button from "../components/Button"

type ProcessPageProps = {
    content: ProcessContent
}

const ProcessPage = ({content}: ProcessPageProps) => {
    const {title, steps, action} = content

    let titleArr = title.split(' ')
    const titlePrefix = titleArr.shift()
    const titleSufix = titleArr.toString()

    return (
        <section id='process' style={{backgroundColor: 'whitesmoke'}}>
            <div className='custom-container'>
                <h3 style={{margin: '32px 0px 32px 0px'}}><span style={{color:'#0B67AA'}}>{titlePrefix}</span> {titleSufix.replaceAll(',', ' ')}</h3>
                <div className='d-flex flex-wrap flex-row justify-content-center align-items-start' style={{marginBottom: '32px'}}>
                    {steps.map((card, index) => (
                    <ProcessCard key={index} icon={card.icon} text={card.text} title={card.title} subtitle={card.subtitle}/>
                    ))}
                </div>
                <div className='d-flex flex-row justify-content-center align-items-center' style={{marginBottom: '32px'}}>
                    <Button label={action} type='primary' style={{width: '200px' }} onClick={() => {window.open('mailto:martin@namart.tech', '_self')}} />
                </div>
            </div>      
        </section>
    )
}

export default ProcessPage