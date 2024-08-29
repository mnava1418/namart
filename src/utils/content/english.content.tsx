import { 
    AboutContent, 
    AboutDetailsContent, 
    Content, 
    FooterContent, 
    MainContent, 
    MenuContent, 
    ProcessContent, 
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

const processContent: ProcessContent = {
    title: 'Working Process',
    action: 'Contact Me',
    steps: [
        {
            title: 'Tell me your idea',
            text: "Let's discuss your project. I want to understand your goals and define a plan for success.",
            icon: 'bi bi-lightbulb-fill',
            subtitle: 'Step 1'
        },
        {
            title: 'Creating together',
            text: 'We bring your ideas to life. We develop and test every detail to ensure everything works perfectly.',
            icon: 'bi bi-tools',
            subtitle: 'Step 2'
        },
        {
            title: 'Ready to Launch',
            text: 'We launch your project, and I provide ongoing support to keep growing.',
            icon: 'bi bi-rocket-takeoff-fill',
            subtitle: 'Step 3'
        }
    ]
}

const aboutDetailsContent: AboutDetailsContent = [
    {
        title: 'My Story',
        text: 'My name is Martín Nava, a passionate software engineer and technology enthusiast.\n\nSince my beginnings in 2009, I have forged my professional path in various prominent companies such as Adquira México, BBVA, and Goldman Sachs, where my ability to develop applications has left a tangible mark, especially in the financial sector.\n\nMy current journey has taken me to the streets of New York, where I work at Goldman Sachs as Vice President in the FX Trading Technology area. Here, I lead a team dedicated to creating essential applications that facilitate the daily operations of traders, connecting with clients and effectively serving the Latin American financial market.\n\nMy devotion to software development translates into a constant thirst for knowledge, always eager to assimilate new technologies that allow me to tackle a wide range of challenges. This passion has reached its peak in my decision to embark on my own path. In this new chapter, I yearn to connect with other entrepreneurs, share experiences, and, above all, offer innovative technological solutions to address the unique challenges they face.\n\nMy vision goes beyond mere software creation; it is an unwavering quest for meaningful connections and impactful solutions. By joining the entrepreneurial community, I aspire not only to develop applications but also to build bridges that connect those seeking answers with the technologies that can provide them. I am excited about this journey and determined to turn every line of code into a valuable contribution to technological progress and shared success.\n\nWelcome to my exciting journey in the world of software development!'
    },
    {
        title: 'My Mision',
        text: 'Developing innovative technological solutions that leave a positive impact on various industries. My commitment is to create digital bridges, facilitating the resolution of challenges for individuals and companies.'
    },
    {
        title: 'My Vision',
        text: 'To be a leader in software development recognized for creating transformative technological solutions. I seek to exceed expectations and establish myself as a pioneer in technological innovation. I aspire to be the driving force that propels positive change in various industries and communities.'
    },
]

const englishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent,
    services: servicesContent,
    projects: projectsContent,
    process: processContent,
    aboutDetails: aboutDetailsContent
}

export default englishContent