import { 
    AboutContent, 
    Content, 
    FooterContent, 
    MainContent, 
    MenuContent 
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

const englishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent
}

export default englishContent