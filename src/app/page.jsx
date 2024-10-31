// Import des styles globaux
import "./globals.scss";

// Import des bibliothèques et composants
import React from "react";
import RootLayout from "@/components/layout/rootLayout";
import HomeBanner from "@/components/homeBanner";
import PageIntro from "@/components/pageIntro";
import PartnerSection from "@/components/partners/partnerSection";
import TeamSection from "@/components/team/teamSection";
import ContactSection from "@/components/contact/contactSection";
import ProjectsSection from "@/components/projectsList/projectsSection";
import SectorsSection from "@/components/sectorsList/sectorsSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Curve from "@/assets/images/Curve";
import {contentData, homeVideo} from "@/assets/data/data";

export default function HomePage() {

    return (
        <RootLayout>
            {/* Bannière d'accueil */}
            <HomeBanner/>

            <div className="content">
                {/* Introduction */}
                <PageIntro
                    title={"A propos de l'Inno'Lab"}
                    text={contentData.homeText.text}
                    hasButton
                    media={homeVideo}
                    elementId={contentData.homeText.id}
                    // media={pdf}
                    // mediaType="pdf"
                />

                {/* Partenaires */}
                <PartnerSection hasButton/>

                {/*Domaines et projets*/}
                <div className="section-white flex flex-col w-full justify-start relative">
                    {/* Décoration courbe */}
                    <div className="absolute bottom-0 left-0">
                        <Curve color="#663894" rotation={90}/>
                    </div>

                    {/* Sections des secteurs et des projets */}
                    <SectorsSection
                        link={"/"}
                    />
                    <ProjectsSection/>

                    {/* Bouton pour voir les réalisations */}
                    <div className="flex justify-center mt-8">
                        <Link href="/nos-projets">
                            <button className="button-blue-icon-right flex items-center">
                                Voir nos réalisations
                                <FontAwesomeIcon icon={faAngleRight} size="xl" className="ml-3"/>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Equipe */}
                <TeamSection hasButton/>

                {/*/!* Contact *!/*/}
                <ContactSection phrase={"A vos côtés pour votre projet"}/>
            </div>
        </RootLayout>
    );
}
