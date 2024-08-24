import { useState } from 'react'
import { ProjectItem } from '../interfaces/content.interface'

const useModal = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [projectModal, setProjectModal] = useState<ProjectItem>()

    return {
        showModal, setShowModal,
        projectModal, setProjectModal
    }
}

export default useModal