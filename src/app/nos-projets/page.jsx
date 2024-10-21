import RootLayout from "@/components/layout/rootLayout";
import PageIntro from "@/components/pageIntro";
import SectorSection from "@/components/sector/sectorSection";
import SectorsSection from "@/components/sectorsList/sectorsSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import ContactSection from "@/components/contact/contactSection";
import React from "react";
import ProjectSection from "@/components/project/projectSection";


export default function OurProjectsPage() {
    const OurProjectsText = (
        <span className="text-base mb-6">
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            “Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.”
            <br/><br/>
            Contactez-nous dès maintenant : innolab@atos.net
        </span>
    );

    const OurProjectsImage = (
        <video controls className="w-full">
            <source src="movie.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        // Ou pour une image :
        // <img src="path/to/image.jpg" alt="Description" />
    );

    const AiText = (
        <span className="text-base text-white-text mb-6">
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            “Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.”
            <br/><br/>
            Contactez-nous dès maintenant : innolab@atos.net
        </span>
    );

    const sectors = [
        {
            title: "Intelligence artificielle",
            text: AiText,
            projects: [
                "Prédiction pieds diabétiques",
                "PMSI Compte rendu médicaux (HCL)",
            ]
        },
        {
            title: "Jumeau numérique organisationnel",
            text: AiText, // Vous pouvez remplacer par un autre texte spécifique à ce secteur
            projects: [
                "Prédiction des flux de patients"
            ]
        },
        {
            title: "Réalité immersivel",
            text: AiText, // Vous pouvez remplacer par un autre texte spécifique à ce secteur
            projects: [
                "Hand-tracking",
                "Formation infirmiers"
            ]
        }
    ];

    return (
        <RootLayout>
            <div className="content">
                {/* Nos projets */}
                <PageIntro title={"Nos projets"} text={OurProjectsText} hasButton={false} media={OurProjectsImage}/>

                {/* Secteurs et projets */}
                {sectors.map((sector, index) => (
                    <div key={index}>
                        <SectorSection title={sector.title} text={sector.text}/>
                        {sector.projects.map((project, projectIndex) => (
                            <ProjectSection key={projectIndex} project={project}/>
                        ))}
                    </div>
                ))}

                {/* Contact */}
                <ContactSection phrase={"Besoin d’aide pour réaliser votre projet ?"}/>
            </div>
        </RootLayout>
    );
}
