import React from "react"
import { AboutDetailsContent } from "../../interfaces/content.interface"

type AboutDetailsProps = {
    sections: AboutDetailsContent
}

const AboutDetailsPage = ({sections}: AboutDetailsProps) => {
    return (
        <section id='process' style={{backgroundColor: 'whitesmoke'}}>
            <div className='custom-container'>
                {sections.map((element, index) => {
                    return(
                        <div key={index}>
                            <h3 style={{margin: '32px 0px 32px 0px'}}><span style={{color:'#0B67AA'}}>{element.title.split(' ')[0]}</span> {element.title.split(' ')[1]}</h3>
                            <p>
                                {element.text.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                    {line}
                                    <br />
                                    </React.Fragment>
                                ))}
                            </p>
                            <br />
                        </div>
                    )
                })}
            </div>      
        </section>
    )
}

export default AboutDetailsPage