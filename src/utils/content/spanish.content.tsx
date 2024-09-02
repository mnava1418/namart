import { AboutContent, AboutDetailsContent, Content, FooterContent, MainContent, MenuContent, NotFoundContent, ProcessContent, ProjectsContent, ServicesContent } from "../../interfaces/content.interface";

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

const processContent: ProcessContent = {
    title: 'Proceso de Trabajo',
    action: 'Contáctame',
    steps: [
        {
            title: 'Cuéntame tu idea',
            text: 'Hablemos de tu proyecto. Quiero entender tus objetivos y definir un plan para llevarlo al éxito.',
            icon: 'bi bi-lightbulb-fill',
            subtitle: 'Paso 1'
        },
        {
            title: 'Creamos juntos',
            text: 'Damos vida a tus ideas. Desarrollamos y probamos cada detalle para que todo funcione a la perfección.',
            icon: 'bi bi-tools',
            subtitle: 'Paso 2'
        },
        {
            title: 'Listos para lanzar',
            text: 'Lanzamos tu proyecto y te acompaño con soporte continuo para seguir creciendo.',
            icon: 'bi bi-rocket-takeoff-fill',
            subtitle: 'Paso 3'
        }
    ]
}

const aboutDetailsContent: AboutDetailsContent = [
    {
        title: 'Mi Historia',
        text: 'Mi nombre es Martín Nava, un apasionado ingeniero de software y amante de la tecnología.\n\nDesde mis inicios en 2009, he forjado mi trayectoria profesional en diversas empresas destacadas como Adquira México, BBVA y Goldman Sachs, donde mi habilidad para desarrollar aplicaciones ha dejado una marca tangible, especialmente en el sector financiero.\n\nMi actual travesía me ha llevado hasta las calles de Nueva York, donde trabajo en Goldman Sachs como Vicepresidente en el área de FX Trading Technology. Aquí, lidero un equipo dedicado a la creación de aplicaciones esenciales que facilitan las operaciones diarias de los traders, conectando con clientes y sirviendo al mercado financiero latinoamericano con eficacia.\n\nMi devoción por el desarrollo de software se traduce en una constante sed de conocimiento, siempre ansioso por asimilar nuevas tecnologías que me permitan abordar una amplia gama de desafíos. Esta pasión ha alcanzado su punto culminante en mi decisión de emprender mi propio camino. En este nuevo capítulo, anhelo conectar con otros emprendedores, compartir experiencias y, sobre todo, ofrecer soluciones tecnológicas innovadoras para abordar los desafíos únicos que enfrentan.\n\nMi visión va más allá de la mera creación de software; es una búsqueda inquebrantable de conexiones significativas y soluciones impactantes. Al unirme a la comunidad emprendedora, aspiro no solo a desarrollar aplicaciones, sino también a construir puentes que conecten a aquellos que buscan respuestas con las tecnologías que pueden proporcionarlas. Estoy emocionado por este viaje y decidido a convertir cada línea de código en una contribución valiosa para el progreso tecnológico y el éxito compartido.\n\n¡Bienvenidos a mi apasionante viaje en el mundo del desarrollo de software!'
    },
    {
        title: 'Mi Misión',
        text: 'Desarrollar soluciones tecnológicas innovadoras que dejen una huella positiva en diversas industrias. Mi compromiso es crear puentes digitales, facilitando la resolución de desafíos para individuos y empresas.'
    },
    {
        title: 'Mi Visión',
        text: 'Ser líder en desarrollo de software reconocido por la creación de soluciones tecnológicas transformadoras. Busco trascender las expectativas, consolidarme como pionero en la innovación tecnológica. Aspiro a ser la fuerza motriz que impulse el cambio positivo en diversas industrias y comunidades.'
    },
]

const notFoundContent: NotFoundContent = {
    text: 'Página No Encontrada',
    btnLabel: 'Ir a Inicio'
}

const spanishContent: Content = {
    menu: menuContent,
    main: mainContent,
    footer: footerContent,
    about: aboutContent,
    services: servicesContent,
    projects: projectsContent,
    process: processContent,
    aboutDetails: aboutDetailsContent,
    notFound: notFoundContent
}

export default spanishContent