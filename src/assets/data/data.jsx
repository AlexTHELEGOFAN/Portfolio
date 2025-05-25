import idComLogo2 from '@/assets/images/idcom-logo.jpg';
import xefiLogo from '@/assets/images/xefi-white.png';
import atosLogo from '@/assets/images/atos-logo.png';
import iutLogo from '@/assets/images/iut-logo.jpg';
import epsiLogo from '@/assets/images/epsi-logo.png';

export const contentData = {
  // ###
  // ACCUEIL ------------------------------------------------------------------
  // ###
  homeText: {
    id: 'homeText',
    elementId: 'a-propos',
    link: '/#a-propos',
    name: 'Profil professionnel',
    title: 'A propos de moi',
    searchable: true,
    text:
      "Actuellement alternant chez Atos en 5ème année de Master EISI (Expert en Informatique et Systèmes d'Informations) à l'EPSI, " +
      "je suis passionné par le développement web et ambitionne d'évoluer vers un poste de Lead Développeur Full Stack ou Chef de projet technique. <br> <br>" +
      'Fort de plusieurs expériences en conception et développement d’applications, ainsi qu’en gestion de projet, ' +
      'j’ai acquis une maîtrise des technologies web, du travail en équipe et de l’autonomie. <br><br>' +
      "Curieux, rigoureux et investi, je m’intègre facilement au sein d’équipes pluridisciplinaires, j'aime travailler en présentiel," +
      'et je sais également mener à bien des missions en autonomie. <br><br>' +
      'Mon objectif est de renforcer mes compétences techniques et managériales afin de contribuer activement à la réussite des projets qui me seront confiés. ' +
      'Je m’intéresse à l’intelligence artificielle, à la data, à l’UI/UX et au management, domaines dans lesquels je souhaite continuer à me former.',
  },

  experiences: [
    {
      name: 'IDCOM',
      text:
        'Avril - juin 2022<br/><br/>' +
        'Stage de fin de DUT chez IDCOM en tant que designer et développeur WordPress',
      logoPath: idComLogo2,
    },
    {
      name: 'XEFI',
      text:
        'Août 2022 - octobre 2023<br/><br/>' +
        'Alternance chez XEFI au service software en tant que développeur front-end React',
      logoPath: xefiLogo,
    },
    {
      name: 'ATOS',
      text:
        'Octobre 2023 - présent<br/><br/>' +
        "Alternance chez Atos dans le groupe Inno'Lab Lyon en tant que développeur full stack Angular",
      logoPath: atosLogo,
    },
  ],

  schools: [
    {
      name: 'IUT Lyon 1',
      text:
        'Septembre 2020 - juillet 2022<br/><br/>' +
        'Formation DUT Informatique en 2 ans avec stage de fin de 2e année en entreprise',
      logoPath: iutLogo,
    },
    {
      name: 'EPSI Lyon',
      text:
        'Août 2022 - octobre 2023<br/><br/>' +
        "Formation Bachelor CDA (Concepteur développeur d'applications) à l'EPSI en alternance chez XEFI",
      logoPath: epsiLogo,
    },
    {
      name: 'EPSI Lyon',
      text:
        'Octobre 2023 - présent<br/><br/>' +
        "Formation Master EISI (Expert en Informatique et Systèmes d'Informations) à l'EPSI en alternance chez Atos",
      logoPath: epsiLogo,
    },
  ],

  // Soft skills
  // Ouvert d'esprit :
  // Curiosité : Toujours en veille sur les nouvelles technologies et tendances du web.
  // Rigueur & assiduité : Investi dans chaque mission, avec le souci du détail et de la qualité.
  // Esprit d’équipe : À l’aise en présentiel, je m’intègre rapidement et favorise la collaboration au sein d’équipes pluridisciplinaires.
  // Autonomie : Capable de mener à bien des projets de façon indépendante.
  // Adaptabilité : Ouvert à de nouveaux domaines (IA, Data, UI/UX, management) et à l’apprentissage continu.
  // Communication : Très bonne aisance à l’oral comme à l’écrit, en français comme en anglais.
  // Sens du relationnel : Facilité à échanger et à créer du lien avec les collègues et parties prenantes.

  // Hard Skills

  // Anglais (B2 avancé, TOEIC 810), Italien (A2 intermédiaire)
  // Titulaire du Permis B

  // Certificats
  // Google UX Design Certificate

  // Centres d’intérêt
  // Passionné de LEGO
  // Sport en salle et course à pied
  // Cinema
  // Jeux vidéo
  // Lecture
  // Voyages
  // Animation et modélisation 3D

  // skillGroups: [
  //   {
  //     category: 'Développement front-end',
  //     items: [
  //       // Langages de programmation
  //       { name: 'HTML', logoPath: Css3, level: '3' },
  //       { name: 'CSS', logoPath: Css3, level: '3' },
  //       { name: 'JavaScript', logoPath: githubLogo, level: '3' },
  //       // Librairies et frameworks
  //       { name: 'Bootstrap', logoPath: Css3, level: '2' },
  //       { name: 'Tailwind CSS', logoPath: tailwindLogo, level: '3' },
  //       { name: 'React', logoPath: reactLogo, level: '2' },
  //       { name: 'Angular', logoPath: phpLogo, level: '3' },
  //       { name: 'Gatsby', logoPath: reactLogo, level: '2' },
  //       { name: 'Next.js', logoPath: reactLogo, level: '2' },
  //     ],
  //   },
  //   {
  //     category: 'Développement back-end',
  //     items: [
  //       // Langages de programmation
  //       { name: 'PHP', logoPath: phpLogo, level: '1' },
  //       { name: 'Java', logoPath: phpLogo, level: '2' },
  //       // Librairies et frameworks
  //       { name: 'Express.js', logoPath: phpLogo, level: '1' },
  //       { name: 'Laravel', logoPath: phpLogo, level: '1' },
  //     ],
  //   },
  //   {
  //     category: 'Base de données et API',
  //     items: [
  //       // Langages de programmation
  //       { name: 'SQL', logoPath: dockerLogo, level: '3' },
  //       { name: 'Oracle', logoPath: dockerLogo, level: '1' },
  //       { name: 'noSQL', logoPath: dockerLogo, level: '1' },
  //       { name: 'postGresql', logoPath: dockerLogo, level: '1' },
  //       { name: 'mongoDB', logoPath: dockerLogo, level: '1' },

  //       // Applications
  //       { name: 'phpMyAdmin', logoPath: dockerLogo, level: '3' },
  //       { name: 'Postman', logoPath: postmanLogo, level: '3' },
  //       { name: 'Swagger', logoPath: swaggerLogo, level: '3' },
  //     ],
  //   },
  //   {
  //     category: 'Autres',
  //     items: [
  //       // VCS (Version Control System)
  //       { name: 'GIT', logoPath: gitLogo, level: '3' },
  //       { name: 'Github', logoPath: githubLogo, level: '3' },
  //       { name: 'Gitlab', logoPath: githubLogo, level: '2' },
  //       // Software testing
  //       { name: 'Jest', logoPath: githubLogo, level: '3' },
  //       { name: 'Jasmine', logoPath: githubLogo, level: '2' },
  //       // Data
  //       { name: 'Talend', logoPath: githubLogo, level: '3' },
  //       // Veille
  //       { name: 'Feedly', logoPath: githubLogo, level: '2' },
  //       { name: 'Inoreader', logoPath: githubLogo, level: '2' },
  //       { name: 'TDLR', logoPath: githubLogo, level: '2' },
  //       // IDE
  //       { name: 'Visual Studio Code', logoPath: vsCodeLogo, level: '2' },
  //       { name: 'WebStorm', logoPath: vsCodeLogo, level: '3' },
  //       { name: 'Cursor', logoPath: vsCodeLogo, level: '1' },
  //     ],
  //   },
  //   {
  //     category: 'Design',
  //     items: [
  //       // VCS (Version Control System) ou versioning
  //       { name: 'Figma', logoPath: figmaLogo, level: '3' },
  //       { name: 'Photoshop', logoPath: photoshopLogo, level: '1' },
  //       { name: 'Illustrator', logoPath: illustratorLogo, level: '1' },
  //     ],
  //   },
  //   {
  //     category: 'Gestion de projet',
  //     items: [
  //       // Méthodes
  //       { name: 'Scrum', logoPath: jiraLogo, level: '2' },
  //       // Applications et outils
  //       { name: 'JIRA', logoPath: jiraLogo, level: '3' },
  //       { name: 'GanttProject', logoPath: jiraLogo, level: '3' },
  //     ],
  //   },
  // ],
};
