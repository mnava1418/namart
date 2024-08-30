import { Carousel, Modal } from 'react-bootstrap'
import { ProjectItem } from '../../interfaces/content.interface'

type ProjectModalProps = {
    show: boolean,
    handleShow: () => void,
    project: ProjectItem
}

const ProjectModal = ({show, handleShow, project}: ProjectModalProps) => {
    const getImages = () => {
        const projectImages = []

        for (let index = 0; index < project.images.count; index++) {
            projectImages.push(
                <Carousel.Item key={index} style={{backgroundColor: project.bgColor, height: '350px'}}>
                    <div className='d-flex flex-colum justify-content-center align-items-center' style={{height: '100%'}}>                        
                        <div className='custom-img custom-img custom-img-contain' style={{width: '100%', height: '100%', backgroundImage: `url(${window.location.protocol}//${window.location.hostname}:${window.location.port}/${project.images.prefix}/${index + 1}.png)`}} />
                    </div>
                </Carousel.Item>
            )
        }
        return projectImages
    }

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
                                            {section.isLink ? <a href={section.text} target='_blank' rel='noreferrer'>{section.text}</a> : <span>{section.text}</span>}
                                        </li>
                                        <br/>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Carousel style={{width: '100%'}}>
                        {getImages()}
                    </Carousel>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ProjectModal