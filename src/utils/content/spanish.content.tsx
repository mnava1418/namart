import { Content, FooterContent, MainContent, MenuContent } from "../../interfaces/content.interface";

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

const footerContent: FooterContent = {
    book: 'Agendar Llamada',
    text: 'Me encantaría ayudarte con el proyecto que tienes en mente. Agenda una llamada y cuéntame cómo puedo colaborar contigo.',
    titleOne: '¿Tienes algún proyecto?',
    titleTwo: 'Platiquemos'
}

const spanishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent
}

export default spanishContent