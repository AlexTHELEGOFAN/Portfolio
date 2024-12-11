import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import domainAi from "@/assets/images/domain_ia.jpg";
import domainVr from "@/assets/images/domain_vr.png";
import chuLogo from "@/assets/images/chu.png";
import simon from "@/assets/images/simon.jpg";
import lego from "@/assets/images/lego.png";
import projectGadImage from "@/assets/images/project_ai_gad.png";
import projectPiedsImage from "@/assets/images/project_ai_pieds.png";
import projectCIMImage from "@/assets/images/project_ai_cim.png";
import projectJNJN from "@/assets/images/project_jn_jn.png";
import projectVRRadioImage from "@/assets/images/project_vr_radio.png";
import projectVRInfirmiersImage from "@/assets/images/project_vr_infirmiers.png";
import projectVRVaccinImage from "@/assets/images/project_vr_vaccin.png";
import workshopHackingHealth from "@/assets/images/workshop_hacking_health.jpg"
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
                text: "La cellule innovation santé (Inno'Lab) de Lyon, membre d'un réseau de 12 InnoLabs d'Atos, est spécialisé dans la santé et mène des projets dans l'<strong>intelligence artificielle</strong> et la data, ainsi que la <strong>réalité virtuelle et augmentée</strong>, co-construits avec les patients, les professionnels de santé et les institutions.<br/><br/>" +
                    "Elle collabore avec des partenaires clés comme les CHU de Paris, Lyon ou St Etienne, les laboratoires de recherche universitaires et des acteurs comme les Agences Régionales de Santé (ARS), tout en étant référencé dans les centrales d'achat publiques.<br/><br/>" +
                    "C’est une petite équipe agile qui s’appuie sur 400 collaborateurs d’Atos qui travaillent dans le secteur de la santé et ont réalisé des projets majeurs tels que Mon espace santé, le Dossier Patient Informatisé (DPI) Easily, et des solutions d'imagerie médicale.",
            },

        // TODO
        sectorsWithProjects: [
            {
                id: "aiSectorText",
                elementId: "intelligence-artificielle",
                link: "#intelligence-artificielle",
                name: "Intelligence artificielle",
                title: "Intelligence artificielle",
                text: "Nous travaillons dans le domaine de l'intelligence artificielle appliquée à la santé, en développant des solutions innovantes pour améliorer la prise en charge des patients et optimiser les processus médicaux.<br/><br/>" +
                    "Grâce à des technologies telles que le machine learning ou l'analyse d'images, nous visons à fournir des outils précis, fiables et efficaces pour les professionnels de santé.",
                image: domainAi,
                isSearchable: true,
                projects: [
                    {
                        id: "piedsDiabetiquesProjectText",
                        elementId: "pieds-diabétiques",
                        link: "#pieds-diabétiques",
                        name: "Application d’aide au diagnostic des plaies du pied diabétique",
                        title: "Projet",
                        tags: ["IA", "HCL"],
                        image: projectPiedsImage,
                        imageFit: "center 10%",
                        isSearchable: true,
                        mediaPlacement: "left",
                        mediaType: "image",
                        media: {
                            src: projectPiedsImage,
                            title: ""
                        },
                        text: "<em>Une avancée technologique pour mieux soigner les patients diabétiques</em><br/><br/>" +
                            "Notre application d’aide au diagnostic par analyse d’image utilise l’intelligence artificielle pour répondre aux besoins des patients diabétiques, particulièrement exposés au risque d’infection et d’amputation.<br/>" +
                            "Développée en collaboration avec des diabétologues des Hospices Civils de Lyon, cette technologie analyse des photos de plaies prises par des professionnels de santé pour évaluer leur gravité et fournir des recommandations de soins adaptées.<br/><br/>" +
                            "<strong>Fonctionnalités clés :</strong><br/><br/>" +
                            "<ul><li><strong>• Analyse avancée :</strong> un algorithme robuste segmentant précisément les plaies à partir des images ;<br/><br/><li>" +
                            "<li><strong>• Classification intelligente</strong> : une évaluation précise de la gravité pour optimiser la prise en charge ;<br/><br/><li>" +
                            "<li><strong>• Résultats prometteurs</strong> : avec 75 % de précision en segmentation et jusqu’à 75 % en classification, l’algorithme surpasse les solutions existantes ;<br/><br/><li></ul>" +
                            "Ce projet illustre notre engagement à développer des outils innovants pour supporter les pratiques médicales. Préciser que c’est de l’aide au diagnostic toujours le praticien qui prend la décision. Nous continuons d’explorer les opportunités pour perfectionner cette technologie et la mettre à la disposition des professionnels de santé, avec pour ambition de transformer la prise en charge des patients diabétiques.\n"
                    },
                    {
                        id: "pmsiProjectText",
                        elementId: "pmsi-compte-rendu-medicaux",
                        link: "#pmsi-compte-rendu-medicaux",
                        name: "IA sur comptes rendus médicaux pour codification CIM",
                        title: "Projet",
                        tags: ["IA", "HCL"],
                        image: projectCIMImage,
                        imageFit: "center 70%",
                        isSearchable: true,
                        mediaPlacement: "right",
                        mediaType: "image",
                        media: {
                            src: projectCIMImage,
                            title: ""
                        },
                        text: "<em>Simplifier les tâches administratives pour les hôpitaux</em><br/><br/>" +
                            "Dans les hôpitaux, chaque acte médical doit être codifié selon des standards internationaux (CIM-10 ou ICD-10) afin de déterminer une partie des budgets hospitaliers (tarification à l’acte). Cette tâche, complexe et chronophage, est prise en charge par une équipe dirigée par des médecins des Départements d’Information Médicale (DIM), qui doivent vérifier que chaque compte rendu et chaque acte médical est correctement codé.<br/><br/>" +
                            "Pour alléger cette charge, nous avons développé une solution innovante utilisant l’intelligence artificielle. Elle analyse automatiquement les comptes rendus médicaux, identifie les termes clés et prédit les codes correspondants, accélérant ainsi le processus tout en réduisant les risques d’erreurs. Avec une fiabilité dépendant de la qualité des données d’entrées.<br/><br/>" +
                            "Cette technologie vise à simplifier les processus administratifs, permettant aux équipes médicales et administratives de se concentrer sur ce qui compte le plus : la qualité des soins aux patients."
                    },
                    // TODO #HCL #LIRIS #IA
                    {
                        id: "gadProjectText",
                        elementId: "gad",
                        link: "#gad",
                        name: "Généralisation d’aide au diagnostic",
                        title: "Projet",
                        tags: ["IA", "HCL", "Liris"],
                        image: projectGadImage,
                        imageFit: "center 10%",
                        isSearchable: true,
                        mediaPlacement: "left",
                        mediaType: "image",
                        media: {
                            src: projectGadImage,
                            title: ""
                        },
                        text: "Ce projet ambitieux a été conçu pour relever des défis cliniques majeurs et exploiter les nouvelles possibilités offertes par l’intelligence artificielle.<br/><br/>" +
                            "Son objectif principal est d’améliorer l’efficacité et la généralisation des diagnostics médicaux en exploitant pleinement les signaux faibles contenues dans les données d’imagerie médicale, souvent sous-utilisés :" +
                            "chaque médecin est très spécialisé, des informations qui ne paraitraient pas critiques dans sa spécialité additionnées à d’autres informations non critiques dans des spécialités différentes pourraient s’avérer pertinentes.<br/><br/>" +
                            "En développant une approche innovante capable de combiner différents types de supports afin de diagnostiquer différents types de pathologie. Ce projet pourrait marquer une avancée significative dans le domaine du diagnostic.<br/><br/>" +
                            "Avec ce projet, nous souhaitons poser les bases d’une nouvelle génération de diagnostics médicaux, où intelligence artificielle et expertise clinique se complètent pour offrir des solutions adaptées aux besoins des patients et des professionnels de santé."
                    },
                ]
            },
            {
                id: "jnSectorText",
                elementId: "jumeau-numerique-organisationnel",
                link: "#jumeau-numerique-organisationnel",
                name: "Jumeau numérique organisationnel",
                title: "Jumeau numérique organisationnel",
                text: "Un jumeau numérique est une réplique virtuelle d’un objet physique, d’un système ou d’un processus. Il utilise des données en temps réel et historique pour modéliser le comportement et les performances de son homologue physique.<br/><br/>" +
                    "Grâce à des technologies telles que l’Internet des Objets (IoT) et l’intelligence artificielle (IA), le jumeau numérique permet de surveiller, analyser, voire prédire des systèmes complexes. Un jumeau numérique organisationnel modélise des processus, des flux et des organisations.",
                image: projectJNJN,
                projects: [
                    {
                        id: "predictionProject",
                        elementId: "prediction-patients",
                        link: "#prediction-patients",
                        name: "Prédiction de la fréquentation des patients aux urgences",
                        title: "Projet",
                        tags: ["IA", "Jumeau numérique", "CHU"],
                        image: projectJNJN,
                        imageFit: "center 10%",
                        mediaPlacement: "left",
                        mediaType: "video",
                        media: {
                            src: "https://www.youtube.com/watch?v=nsegKaf8YSc",
                            title: "YouTube video player"
                        },
                        text: "<em>Anticiper pour mieux gérer et soigner</em><br/><br/>" +
                            "En collaboration avec le CHU de Saint-Étienne et l’École des Mines, nous avons développé un jumeau numérique des urgences, capable de simuler et de prédire les flux de patients. Cette solution utilise l’intelligence artificielle pour analyser deux types de données :" +
                            "les données internes historiques sur les flux de patients et les données externes, telles que la météo, les épidémies ou des événements spécifiques.<br/><br/>" +
                            "Grâce à cette analyse en avance de phase, l’application prédit avec précision la charge des services et aide à anticiper pour mieux gérer les ressources humaines et matérielles, un jour, une semaine ou un mois à l’avance." +
                            "Les professionnels de santé peuvent consulter ces prévisions via une interface web intuitive et sécurisée, leur permettant d’adapter rapidement leur organisation.<br/><br/>" +
                            "Cette technologie offre une réponse efficace aux défis des urgences hospitalières en optimisant la gestion des ressources et en garantissant une prise en charge fluide des patients."
                    },
                ]
            },
            {
                id: "vrSectorText",
                elementId: "realite-immersive",
                link: "#realite-immersive",
                name: "Réalité immersive",
                title: "Réalité immersive",
                text: "<em>Des expériences immersives pour accélérer et enrichir l’apprentissage</em><br/><br/>" +
                    "La réalité virtuelle révolutionne la formation médicale en améliorant la qualité des apprentissages grâce à une plus grande immersion et des mises en pratique. Elle offre également la possibilité de simuler des cas rares ou complexes, souvent absents des parcours de formation traditionnels et d’accéder à des équipements souvent utilisés 24h/24h.<br/><br/>" +
                    "Notre solution vise à réduire le temps nécessaire à la spécialisation – parfois jusqu’à un an – tout en offrant des outils modernes et performants pour répondre aux exigences croissantes des environnements de soins. Avec la réalité virtuelle, nous rendons la formation médicale plus flexible, accessible et efficace.<br/><br/>" +
                    "Avec notre plateforme de formation en VR, les infirmiers peuvent se former de manière pratique et interactive au recueil de données patients, à des actes techniques ou au réglage d’un scanner.<br/><br/>" +
                    "Nos formations ont été co-construites avec des experts métiers (infirmiers, manip radio…) \n",
                image: domainVr,
                projects: [
                    {
                        id: "vrRadioText",
                        elementId: "vrRadioText",
                        link: "#hand-tracking",
                        name: "Formations en réalité virtuelle pour manipulateurs radiologie",
                        title: "Projet",
                        tags: ["Réalité immersive"],
                        image: projectVRRadioImage,
                        imageFit: "center 10%",
                        mediaPlacement: "left",
                        mediaType: "image",
                        media: {
                            src: projectVRRadioImage,
                            title: ""
                        },
                        text: "<em>Une approche immersive pour des apprentissages pratiques.</em><br/><br/>" +
                            "Dans le domaine de la radiologie, l’accès aux équipements pour la formation, comme les scanners, peut être limité en raison de leur fort taux d’utilisation. Pour répondre à ce défi, nous avons développé une plateforme immersive en réalité virtuelle dédiée à la formation des manipulateurs en radiologie.<br/><br/>" +
                            "Cette solution innovante permet aux professionnels de s’entraîner dans des scénarios réalistes couvrant toutes les étapes clés de leur pratique : l’accueil et l’installation des patients, le réglage des paramètres d’un scanner et l’utilisation de logiciels constructeurs." +
                            "Grâce à des mises en situation immersives, les apprenants peuvent perfectionner leurs compétences sans monopoliser les équipements réels.<br/><br/>" +
                            "Notre plateforme offre une alternative moderne et pratique pour les professionnels de la radiologie, en leur permettant de se former à leur rythme tout en garantissant une expérience d’apprentissage engageante et réaliste. Une avancée qui associe technologie et savoir-faire."
                    },
                    {
                        id: "#formationInfirmiers",
                        elementId: "formation-infirmiers",
                        link: "#formation-infirmiers",
                        name: "Formations en réalité virtuelle pour infirmiers",
                        tags: ["Réalité immersive"],
                        image: projectVRInfirmiersImage,
                        imageFit: "center 0%",
                        mediaPlacement: "right",
                        mediaType: "image",
                        media: {
                            src: projectVRInfirmiersImage,
                            title: ""
                        },
                        text: "<em>Une simulation immersive pour perfectionner la prise en charge des patients</em><br/><br/>" +
                            "La formation des infirmiers est essentielle pour garantir des soins de qualité, mais elle peut être complexe en raison des nombreux scénarios différents auxquels ils sont confrontés chaque jour. " +
                            "Nous avons créé une formation en réalité virtuelle spécifiquement conçue pour simuler l’accueil et la prise en charge d’un patient dans un environnement hospitalier. " +
                            "Grâce à des expériences immersives, les infirmiers peuvent s’entraîner à gérer toutes les étapes de la prise en charge : de l’accueil du patient à l’évaluation de ses besoins..." +
                            "Cette formation permet d’acquérir des compétences pratiques en simulant des situations réalistes, renforçant ainsi leur capacité à réagir avec efficacité et professionnalisme. " +
                            "Les simulations en VR offrent une méthode d’apprentissage flexible, sans risquer de perturber le déroulement des soins réels. Les infirmiers peuvent se former dans un environnement sécurisé et interactif, où ils peuvent répéter les gestes et les protocoles autant de fois que nécessaire pour gagner en confiance et en expertise." +
                            "Nous avons ici réalisé un cours complet en mélangeant e-learning classique pour la partie théorique et exercices en Réalité Virtuelle, chaque technologie étant utilisée en fonction du besoin pédagogique et non l’inverse."
                    },
                    {
                        id: "formationsVr",
                        elementId: "formations-vr",
                        link: "#formations-vr",
                        name: "Formations en réalité virtuelle pour l’injection de vaccins",
                        tags: ["Réalité immersive"],
                        image: projectVRVaccinImage,
                        imageFit: "center 10%",
                        mediaPlacement: "left",
                        mediaType: "image",
                        media: {
                            src: projectVRVaccinImage,
                            title: ""
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
                image: workshopHackingHealth,
                text: "Sido Nous créeons des expériences immersives qui permettent la simulation et l’entraînement."
            },
            {
                id: "atelier-medecins",
                elementId: "atelier-medecins",
                link: "/que-faisons-nous#ateliers",
                name: "Ateliers avec médecins",
                title: "Atelier",
                searchable: true,
                image: workshopHackingHealth,
                text: "médic Nous créeons des expériences immersives."
            },
            {
                id: "vr-medecins",
                elementId: "vr-medecins",
                link: "/que-faisons-nous#ateliers",
                name: "Réalité immersive",
                title: "Atelier",
                searchable: true,
                image: workshopHackingHealth,
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
            {name: "Salim Salah", work: "Scrum Master", realPicture: simon, legoPicture: lego, searchable: false},
            {
                name: "Berengere Baudelocque",
                work: "Product Owner",
                realPicture: simon,
                legoPicture: lego,
                searchable: false
            },
            {name: "Axel Bessy", work: "Consultant IA", realPicture: simon, legoPicture: lego, searchable: false},
            {
                name: "Alexandre Pozzi",
                work: "Développeur full stack",
                realPicture: simon,
                legoPicture: lego,
                searchable: false
            },
            {name: "Lilian Hertel", work: "Développeur VR", realPicture: simon, legoPicture: lego, searchable: false},
            {name: "Alex", work: "Dev", realPicture: simon, legoPicture: lego, searchable: false}
        ]

    }
