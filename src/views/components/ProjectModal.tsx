import { Modal } from 'react-bootstrap'
import { ProjectItem } from '../../interfaces/content.interface'

type ProjectModalProps = {
    show: boolean,
    handleShow: () => void,
    project: ProjectItem
}

const ProjectModal = ({show, handleShow, project}: ProjectModalProps) => {
    if(show === false || project === undefined) {
        return(<></>)
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleShow}
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <div className='d-flex flex-column justify-content-start align-items-start custom-modal'>
                    <div id='image' style={{width: '100%', backgroundColor: project.bgColor}}>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '360px'}}>
                            <div className={`project-img ${project.imgClass} custom-img custom-img-contain`}/>
                        </div>
                    </div>
                    <h3 style={{marginTop: '16px'}}>{project.title}</h3>
                    <div className='project-modal-description'>
                        <div style={{marginBottom: '24px'}}>
                            <p style={{textAlign: 'left'}}>
                                {project.description}
                            </p>
                        </div>
                        <div style={{fontSize: '18px'}}>
                            <ul>
                                {project.sections.map((section, index) => (
                                    <>
                                        <li key={index} style={{listStyleType: 'none'}}>
                                            <span style={{fontWeight: 'bold'}}>{section.title}</span>
                                            <br/>
                                            {section.isLink ? <a href={section.text} target='_blank'>{section.text}</a> : <span>{section.text}</span>}
                                        </li>
                                        <br/>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ProjectModal