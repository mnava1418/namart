import { Content, MainContent, MenuContent } from "../../interfaces/content.interface";

const menuContent: MenuContent = {
    about: 'Sobre mí',
    english: 'Inglés',
    home: 'Inicio',
    projects: 'Proyectos',
    services: 'Servicios',
    spanish: 'Español'
}

const mainContent: MainContent = {
    contact: 'Contáctame',
    services: 'Mis Servicios',
    subtitle: 'Desarrollador de Software',
    text: '+10 años de experiencia',
    title: 'Hola, soy Martin'
}

const spanishContent: Content = {
    menu: menuContent,
    main: mainContent
}

export default spanishContent