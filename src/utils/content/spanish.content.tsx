import { AboutContent, Content, FooterContent, MainContent, MenuContent, ServicesContent } from "../../interfaces/content.interface";

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

const servicesContent: ServicesContent = {
    title: 'Mis Servicios',
    services: [
        {
            icon: 'bi bi-laptop',
            title: 'Web',
            text: 'Aplicaciones web para mejorar tu presencia en línea y aumentar la eficiencia de tus operaciones. Nuestro enfoque no se limita únicamente al diseño de páginas web, sino que abarca una amplia gama de soluciones.'
        },
        {
            icon: 'bi bi-phone',
            title: 'Móviles',
            text: 'Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android. Desde aplicaciones empresariales hasta aplicaciones de consumo garantizando una experiencia móvil atractiva y funcional para tus usuarios.'
        },
        {
            icon: 'bi bi-currency-bitcoin',
            title: 'Blockchain',
            text: 'Explore the potential of blockchain with our decentralized application (DApp) development solutions. From smart contracts to blockchain applications.'
        }
    ]
}

const spanishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent,
    services: servicesContent
}

export default spanishContent