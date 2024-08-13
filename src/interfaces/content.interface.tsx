export type language = 'es' | 'en'

export type MenuContent = {
    home: string,
    services: string,
    about: string,
    projects: string,
    spanish: string,
    english: string
}

export type MainContent = {
    title: string,
    subtitle: string,
    text: string,
    services: string,
    contact: string
}

export type FooterContent = {
    titleOne: string,
    titleTwo: string,
    text: string,
    book: string
}

export type AboutContent = {
    wordsToHighlight: Array<String>,
    title: string,
    text: string,
    buttonOne: string,
    buttonTwo: string
}


export type CardProps = {
    icon: string,
    title: string,
    text: string
}

export type ServicesContent = {
    title: string
    services: Array<CardProps>
}

export type Content = {
    menu: MenuContent,
    main: MainContent,
    footer: FooterContent,
    about: AboutContent,
    services: ServicesContent
}