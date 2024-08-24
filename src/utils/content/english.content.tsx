import { 
    AboutContent, 
    Content, 
    FooterContent, 
    MainContent, 
    MenuContent, 
    ProjectsContent, 
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
            text: 'Explore the potential of blockchain with our decentralized application (DApp) development solutions. From smart contracts to blockchain applications.'
        }
    ]
}

const projectsContent: ProjectsContent = {
    title: 'Recent Projects',
    projects: [
        {
            bgColor: '#451952',
            imgClass: 'project-img-troca',
            title: 'Troca',
            description: 'Troca is an innovative application that integrates artificial intelligence to allow users to create, sell, and trade unique NFTs. Offering an integrated marketplace and a digital wallet, our platform fosters a vibrant community where artists and collectors interact in a secure and accessible environment. With advanced tools for digital art creation, this application redefines the digital art experience, democratizing access to the world of NFTs.',
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
            description: 'We designed an administrative dashboard for Marla Capital, optimizing user management, investment report generation, and fund performance monitoring. This solution provides efficient tools for administrators, promoting transparent and effective management of the investment fund.',
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

const englishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent,
    services: servicesContent,
    projects: projectsContent
}

export default englishContent