import RootLayout from "@/components/layout/rootLayout";
import HomeBanner from "@/components/homeBanner";
import PageIntro from "@/components/pageIntro";
import PartnerCard from "@/components/partners/partnerCard";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PartnerSection from "@/components/partners/partnerSection";
import TeamSection from "@/components/team/teamSection";
import ContactSection from "@/components/contact/contactSection";
import CarrouselSection from "@/components/carrousel/carrouselSection";
import ProjectsSection from "@/components/projectsList/projectsSection";

import "./globals.scss";
import SectorsSection from "@/components/sectorsList/sectorsSection";
import React from "react";
import Curve from "@/assets/images/Curve";

export default function HomePage() {
    const textVar = (
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

    const mediaVar = (
        <video controls className="w-full">
            <source src="movie.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        // Ou pour une image :
        // <img src="path/to/image.jpg" alt="Description" />
    );

    return (
        <RootLayout>
            {/* Image bannière */}
            <HomeBanner/>

            <div className="content">
                {/*A propos*/}
                <PageIntro title={"A propos de l'Inno'Lab"} text={textVar} hasButton={true} media={mediaVar}/>

                {/*Partenaires*/}
                <PartnerSection hasButton={true}/>

                {/*Domaines et projets*/}
                <div className="section-white flex flex-col w-full justify-start relative">
                    <SectorsSection hasCurve={false}/>
                    <ProjectsSection/>

                    <div className="flex justify-center">
                        <button className="button-blue-icon-right items-center">
                            Voir nos réalisations

                            <FontAwesomeIcon
                                icon={faAngleRight}
                                size="xl"
                                className="ml-3"
                            />
                        </button>
                    </div>
                </div>

                {/* Equipe */}
                <TeamSection hasText={false}/>

                {/* Contact */}
                <ContactSection/>
            </div>
        </RootLayout>
    );
}
