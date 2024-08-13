import { AboutContent, Content, FooterContent, MainContent, MenuContent } from "../../interfaces/content.interface";

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

const aboutContent: AboutContent = {
    buttonOne: 'Descarga mi CV',
    buttonTwo: 'Conóceme más',
    text: 'Soy Martín Nava, desarrollador de software con más de 10 años de experiencia en el desarrollo de aplicaciones. Apasionado por la tecnología, me enfoco en crear soluciones innovadoras que transformen ideas en realidad.',
    title: 'Sobre Mí',
    wordsToHighlight: ["desarrollador de software", "tecnología", "soluciones innovadoras", "desarrollo de aplicaciones" ]
}

const spanishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent
}

export default spanishContent