import { AboutContent, Content, FooterContent, MainContent, MenuContent, ProjectsContent, ServicesContent } from "../../interfaces/content.interface";

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
            text: 'Explora el potencial del blockchain con nuestras soluciones de desarrollo de aplicaciones descentralizadas (DApps). Desde contratos inteligentes hasta aplicaciones de cadena de bloques.'
        }
    ]
}

const projectsContent: ProjectsContent = {
    title: 'Proyectos Recientes',
    projects: [
        {
            bgColor: '#451952',
            imgClass: 'project-img-troca',
            title: 'Troca',
            description: 'Troca es una aplicación innovadora que integra inteligencia artificial para permitir a los usuarios crear, vender e intercambiar NFTs únicos. Ofreciendo un mercado integrado y una cartera digital, nuestra plataforma facilita una comunidad vibrante donde artistas y coleccionistas interactúan en un entorno seguro y accesible. Con herramientas avanzadas para la generación de arte digital, esta aplicación redefine la experiencia del arte digital, democratizando el acceso al mundo de los NFTs.',
            sections: [
                {
                    title: 'Stack',
                    text: 'React, Redux, Node JS, Solidity, HTML, Firebase',
                    isLink: false
                },
                {
                    title: 'Link',
                    text: 'https://trocaa.netlify.app/',
                    isLink: true
                },
                {
                    title: 'Gthub',
                    text: 'https://github.com/mnava1418/troca',
                    isLink: true
                }
            ],
            images: {
                count: 5,
                prefix: 'troca'
            }
        },
        {
            bgColor: '#000',
            imgClass: 'project-img-marla',
            title: 'Marla Capital',
            description: 'Diseñamos un dashboard administrativo para Marla Capital, optimizando la gestión de usuarios, generación de reportes de inversión y monitoreo del rendimiento del fondo. Esta solución ofrece herramientas eficientes para administradores, promoviendo una gestión transparente y eficaz del fondo de inversión.',
            sections: [
                {
                    title: 'Stack',
                    text: 'React, Redux, Node JS, HTML, Firebase',
                    isLink: false
                },
                {
                    title: 'Link',
                    text: 'https://marlacapital.netlify.app/',
                    isLink: true
                }
            ],
            images: {
                count: 5,
                prefix: 'marla'
            }
        }
    ]
}

const spanishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent,
    services: servicesContent,
    projects: projectsContent
}

export default spanishContent