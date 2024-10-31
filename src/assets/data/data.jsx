import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import bannerImage from "@/assets/images/banner_image.jpg";
import chuLogo from "@/assets/images/chu.png";
import simon from "@/assets/images/simon.jpg";
import lego from "@/assets/images/lego.png";
import party from "@/assets/images/party_true.jpg";
import pdf from "./pres-EMSE.pdf"

// ###
// HEADER ------------------------------------------------------------------
// ###

export const navItems = [
    {label: "Qui sommes-nous ?", href: "/qui-sommes-nous"},
    {label: "Que faisons-nous ?", href: "/que-faisons-nous"},
    {
        label: "Nos projets",
        icon: faAngleDown,
        size: "lg",
        href: "/nos-projets",
        subMenu: [
            {label: 'Intelligence Artificielle', href: '/nos-projets#intelligence-artificielle'},
            {label: 'Jumeau Numérique organisationnel', href: '/nos-projets#jumeau-numerique-organisationnel'},
            {label: 'Réalité Immersive', href: '/nos-projets#realite-immersive'}
        ]
    },
    {label: "Contactez nous", href: "mailto:contact@innolab.com?subject=Contact&body=Bonjour,"}
];


// ###
// ACCUEIL ------------------------------------------------------------------
// ###
//
export const homeVideo =
    {
        src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
        title: "YouTube video player",
        mediaType: "video"
    }

// ###
// QUI SOMMES NOUS ------------------------------------------------------------------
// ###

export const aboutUsImage = [
    {
        src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
        title: "YouTube video player",
        mediaType: "video"
    }
]

// ###
// QUE FAISONS NOUS ------------------------------------------------------------------
// ###

export const ourWorkImage =
    {
        src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
        title: "YouTube video player",
        mediaType: "video"
    }

// ###
// NOS PROJETS ------------------------------------------------------------------
// ###

export const ourProjectsImage =
    {
        src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
        title: "YouTube video player",
        mediaType: "video"
    }
// Ou pour une image :
// <img src="path/to/image.jpg" alt="Description" />


// ###
// DONNEES QUI PEUVENT ETRE RECHERCHEES ------------------------------------------------------------------
// ###

export const contentData =
    {
        // ###
        // ACCUEIL ------------------------------------------------------------------
        // ###
        homeText:
            {
                id: "homeText",
                elementId: "a-propos",
                link: "/#a-propos",
                name: "A propos de l'Inno'Lab",
                title: "A propos de l'Inno'Lab",
                searchable: true,
                text: "A propos de l'Inno'Lab, l’innovation occupe une place centrale chez Atos." +
                    "Depuis notre création, l’innovation est au cœur de notre stratégie." +
                    "Nous investissons dans la recherche et le développement pour identifier et appréhender les nouvelles tendances et développer des solutions innovantes," +
                    "à la fois pour et avec nos clients. En collaborant avec un solide écosystème de partenaires académiques, industriels et technologiques, nous favorisons l’innovation et accompagnons l’émergence de nouvelles idées.",
            },

        // TODO
        sectorsWithProjects: [
            {
                id: "aiSectorText",
                elementId: "intelligence-artificielle",
                link: "#intelligence-artificielle",
                name: "Intelligence artificielle",
                title: "Intelligence artificielle",
                text: "Intelligence Nous créeons des expériences immersives qui permettent la simulation et l’entraînement.",
                image: bannerImage,
                isSearchable: true,
                projects: [
                    {
                        id: "piedsDiabetiquesProjectText",
                        elementId: "prediction-pieds-diabétiques",
                        link: "#prediction-pieds-diabétiques",
                        name: "Prédiction pieds diabétiques",
                        title: "Projet",
                        tag: "Intelligence Artificielle",
                        image: bannerImage,
                        isSearchable: true,
                        mediaPlacement: "left",
                        media: {
                            src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
                            title: "YouTube video player"
                        },
                        text: "Lorem kylo ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                            "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
                    },
                    {
                        id: "pmsiProjectText",
                        elementId: "pmsi-compte-rendu-medicaux",
                        link: "#pmsi-compte-rendu-medicaux",
                        name: "PMSI Compte rendu médicaux (HCL)",
                        title: "Projet",
                        tag: "Intelligence Artificielle",
                        image: bannerImage,
                        isSearchable: true,
                        mediaPlacement: "right",
                        media: {
                            src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
                            title: "YouTube video player"
                        },
                        text: "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                            "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
                    },
                ]
            },
            {
                id: "jnSectorText",
                elementId: "jumeau-numerique-organisationnel",
                link: "#jumeau-numerique-organisationnel",
                name: "Jumeau numérique organisationnel",
                title: "Jumeau numérique organisationnel",
                text: "Nous créeons des expériences immersives qui permettent la simulation et l’entraînement.",
                image: bannerImage,
                projects: [
                    {
                        id: "predictionProject",
                        elementId: "prediction-patients",
                        link: "#prediction-patients",
                        name: "Prédiction des flux de patients",
                        title: "Projet",
                        tag: "Jumeau numérique organisationnel",
                        image: bannerImage,
                        mediaPlacement: "left",
                        media: {
                            src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
                            title: "YouTube video player"
                        },
                        text: "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                            "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
                    },
                ]
            },
            {
                id: "vrSectorText",
                elementId: "realite-immersive",
                link: "#realite-immersive",
                name: "Réalité immersive",
                title: "Réalité immersive",
                text: "Nous créeons des expériences immersives qui permettent la simulation et l’entraînement.",
                image: bannerImage,
                projects: [
                    {
                        id: "vrSectorText",
                        elementId: "hand-tracking",
                        link: "#hand-tracking",
                        name: "Hand-tracking",
                        title: "Projet",
                        tag: "Réalité immersive",
                        image: bannerImage,
                        mediaPlacement: "left",
                        media: {
                            src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
                            title: "YouTube video player"
                        },
                        text: "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                            "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
                    },
                    {
                        id: "#formationInfirmiers",
                        elementId: "formation-infirmiers",
                        link: "#formation-infirmiers",
                        name: "Formation infirmiers",
                        tag: "Réalité immersive",
                        image: bannerImage,
                        mediaPlacement: "right",
                        media: {
                            src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
                            title: "YouTube video player"
                        },
                        text: "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                            "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
                    },
                    {
                        id: "formationsVr",
                        elementId: "formations-vr",
                        link: "#formations-vr",
                        name: "Formations VR",
                        tag: "Réalité immersive",
                        image: bannerImage,
                        mediaPlacement: "left",
                        media: {
                            src: "https://www.youtube.com/embed/Z4bW5hBhzoY",
                            title: "YouTube video player"
                        },
                        text: "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                            "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
                    },
                ]
            }
        ],
        // ###
        // QUI SOMMES NOUS ------------------------------------------------------------------
        // ###
        aboutUsText:
            {
                id: "aboutUsText",
                elementId: "intro",
                link: "/qui-sommes-nous#intro",
                title: "Qui sommes nous ?",
                searchable: true,
                text: "Qui sommes nous Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                    "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
            },

        ourWorkText:
            {
                id: "ourWorkText",
                elementId: "intro",
                link: "/que-faisons-nous#intro",
                title: "Que faisons nous ?",
                searchable: true,
                text: "Que faisons nous Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                    "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."

            },
        ourWorkshopsText:
            {
                id: "ourWorkshopsText",
                elementId: "ateliers",
                link: "/que-faisons-nous#ateliers",
                title: "Nous effectuons des ateliers",
                searchable: true,
                text: "Nous effectuons des ateliers Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                    "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
            },
        workshops: [
            {
                id: "atelier-sido",
                elementId: "atelier-sido",
                link: "/que-faisons-nous#ateliers",
                name: "Atelier veille Sido 2024",
                title: "Atelier",
                searchable: true,
                image: party,
                text: "Sido Nous créeons des expériences immersives qui permettent la simulation et l’entraînement."
            },
            {
                id: "atelier-medecins",
                elementId: "atelier-medecins",
                link: "/que-faisons-nous#ateliers",
                name: "Ateliers avec médecins",
                title: "Atelier",
                searchable: true,
                image: party,
                text: "médic Nous créeons des expériences immersives."
            },
            {
                id: "vr-medecins",
                elementId: "vr-medecins",
                link: "/que-faisons-nous#ateliers",
                name: "Réalité immersive",
                title: "Atelier",
                searchable: true,
                image: party,
                text: "santé Nous créeons des expériences immersives qui permettent la simulation et l’entraînement. Nous créeons des expériences immersives qui permettent la simulation et l’entraînement."
            }
        ],
        ourProjectsText:
            {
                id: "ourProjectsText",
                elementId: "nos-projets-intro",
                link: "/nos-projets",
                name: "Nos projets",
                title: "Nos projets",
                searchable: true,
                text: "Notre projets gamme de domaines d’innovation comprend l’intelligence artificielle, l’analyse de données, le cloud computing, la cybersécurité, l’Internet des objets (IoT) et la transformation digitale." +
                    "Nous nous engageons à développer des technologies avancées susceptibles de transformer les entreprises et la société dans son ensemble." +
                    "Notre stratégie d’innovation allie proximité, flexibilité et services de co-innovation personnalisés et dédiés que nous proposons à nos clients au sein de notre réseau mondial de 14 Inno’Labs"
            },
        partnersText:
            {
                id: "partnersText",
                elementId: "nos-partenaires",
                link: "/qui-sommes-nous#nos-partenaires",
                name: "Ils travaillent avec nous",
                title: "Ils travaillent avec nous",
                searchable: true,
                text: "Ils travaillent avec nous Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                    "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
            },
        partners: [
            {
                id: "partner1",
                elementId: "partner1",
                link: "/qui-sommes-nous#nos-partenaires",
                title: "Partenaire",
                searchable: true,
                text: "Ecole des Mines de Saint-Etienne",
                name: "Ecole des Mines de Saint-Etienne",
                logoPath: chuLogo
            },
            {
                id: "partner2",
                elementId: "partner2",
                link: "/qui-sommes-nous#nos-partenaires",
                title: "Partenaire",
                searchable: true,
                text: "CHU de Saint-Etienne",
                name: "CHU de Saint-Etienne",
                logoPath: chuLogo
            },
            {
                id: "partner3",
                elementId: "partner3",
                link: "/qui-sommes-nous#nos-partenaires",
                title: "Partenaire",
                searchable: true,
                text: "Centre de Saint-Etienne",
                name: "Centre de Saint-Etienne",
                logoPath: chuLogo
            },
            {
                id: "partner4",
                elementId: "partner4",
                link: "/qui-sommes-nous#nos-partenaires",
                title: "Partenaire",
                searchable: true,
                text: "Centre Ingénierie & Santé",
                name: "Centre Ingénierie & Santé",
                logoPath: chuLogo
            }
        ],
        teamText:
            {
                id: "teamText",
                elementId: "equipe",
                link: "#equipe",
                name: "L'équipe Inno'Lab",
                title: "L'équipe Inno'Lab",
                searchable: true,
                text: "equipe Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi." +
                    "Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi."
            },
        team: [
            {name: "Simon Achard", work: "Product Owner", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false}
        ]

    }
