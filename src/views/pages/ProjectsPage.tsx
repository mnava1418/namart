import '../../styles/projects.css'

import { ProjectItem, ProjectsContent } from '../../interfaces/content.interface'
import ProjectModal from '../components/ProjectModal'
import useModal from '../../hooks/useModal'

type ProjectsPageProps = {
    content: ProjectsContent
}

const ProjectsPage = ({content}: ProjectsPageProps) => {
    const {showModal, setShowModal, projectModal, setProjectModal} = useModal()
    const {title, projects} = content

    const selectProject = (selectedProject: ProjectItem) => {
        setProjectModal(selectedProject)
        setShowModal(true)
    }

    return (
        <>
            <section id='projects' style={{backgroundColor: '#fff'}}>
            <div className='custom-container'>
            <h3 style={{margin: '32px 0px 32px 0px'}}><span style={{color:'#0B67AA'}}>{title.split(' ')[0]}</span> {title.split(' ')[1]}</h3>
            <div className='d-flex flex-wrap flex-row justify-content-center align-items-center'>
                {projects.map((item, index) => (
                    <div 
                        key={index} 
                        className='d-flex flex-row justify-content-center align-items-center project-container' 
                        style={{backgroundColor: item.bgColor}}
                        onClick={() => {selectProject(item)}}
                    >
                        <div className={`project-img ${item.imgClass} custom-img custom-img-contain`}/>
                    </div>
                ))}
            </div>
            </div>      
            </section>
            <ProjectModal show={showModal} handleShow={() => {setShowModal(false)}} project={projectModal as ProjectItem} />
        </>
    )
}

export default ProjectsPage