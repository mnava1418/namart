export type Language = 'es' | 'en'

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
    text: string,
    subtitle?: string
}

export type ServicesContent = {
    title: string
    services: Array<CardProps>
}

type ProjectSection = {
    title: string,
    text: string,
    isLink: boolean    
}

export type ProjectItem = {
    bgColor: string,
    imgClass: string,
    title: string,
    description: string,
    sections: Array<ProjectSection>,
    images: {
        prefix: string
        count:number
    }
}

export type ProjectsContent = {
    title: string
    projects: Array<ProjectItem>
}

export type ProcessContent = {
    title: string,
    steps: Array<CardProps>,
    action: string
}

type AboutDetailsSection = {
    title: string,
    text: string,
}

export type AboutDetailsContent = Array<AboutDetailsSection>

export type Content = {
    menu: MenuContent,
    main: MainContent,
    footer: FooterContent,
    about: AboutContent,
    services: ServicesContent,
    projects: ProjectsContent,
    process: ProcessContent
    aboutDetails: AboutDetailsContent
}

export type CustomViewProps = {
    currentContent: Content,
    language: Language,
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
}