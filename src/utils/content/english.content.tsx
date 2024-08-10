import { Content, MainContent, MenuContent } from "../../interfaces/content.interface";

const menuContent: MenuContent = {
    about: 'About',
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

const englishContent: Content = {
    menu: menuContent,
    main: mainContent
}

export default englishContent