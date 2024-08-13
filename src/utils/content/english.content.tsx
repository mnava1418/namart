import { 
    AboutContent, 
    Content, 
    FooterContent, 
    MainContent, 
    MenuContent, 
    ServicesContent
} from "../../interfaces/content.interface";

const menuContent: MenuContent = {
    about: 'About me',
    english: 'English',
    home: 'Home',
    projects: 'Projects',
    services: 'Services',
    spanish: 'Spanish'
}

const mainContent: MainContent = {
    contact: 'Say Hello',
    services: 'My Services',
    subtitle: 'Software Developer',
    text: '+10 yrs experience',
    title: "Hi, I'm Martin"
}

const footerContent: FooterContent = {
    book: 'Book A Call',
    text: 'I would love to help you with the project you have in mind. Schedule a call and let me know how I can collaborate with you.',
    titleOne: 'Got a project?',
    titleTwo: "Let's talk"
}

const aboutContent: AboutContent = {
    buttonOne: 'Download Resume',
    buttonTwo: 'Know me more',
    text: 'I am Martín Nava, a software developer with over 10 years of experience in application development. Passionate about technology, I focus on creating innovative solutions that turn ideas into reality.',
    title: 'About Me',
    wordsToHighlight: ["software developer", "technology", "innovative solutions", "application development" ]
}

const servicesContent: ServicesContent = {
    title: 'My Services',
    services: [
        {
            icon: 'bi bi-laptop',
            title: 'Web',
            text: 'Web applications to enhance your online presence and increase the efficiency of your operations. Our approach is not limited to web design alone but encompasses a wide range of solutions.'
        },
        {
            icon: 'bi bi-phone',
            title: 'Mobiles',
            text: 'Native and hybrid mobile app development for iOS and Android. From enterprise applications to consumer apps, ensuring an engaging and functional mobile experience for your users.'
        },
        {
            icon: 'bi bi-currency-bitcoin',
            title: 'Blockchain',
            text: 'Explora el potencial del blockchain con nuestras soluciones de desarrollo de aplicaciones descentralizadas (DApps). Desde contratos inteligentes hasta aplicaciones de cadena de bloques.'
        }
    ]
}

const englishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent,
    services: servicesContent
}

export default englishContent