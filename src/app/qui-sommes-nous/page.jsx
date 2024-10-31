// "use client"; // This is a client component 👈🏽

import React from "react";

import RootLayout from "@/components/layout/rootLayout";
import PageIntro from "@/components/pageIntro";
import TeamSection from "@/components/team/teamSection";
import ContactSection from "@/components/contact/contactSection";
import ProjectSection from "@/components/project/projectSection";
import PartnerSection from "@/components/partners/partnerSection";
import {aboutUsImage, contentData, homeVideo, ourProjectsImage} from "@/assets/data/data";

export default function AboutUsPage() {
    // Extraire tous les projets
    const allProjects = contentData.sectorsWithProjects.flatMap(sector => sector.projects);

    // Sélectionner un projet aléatoire
    const randomProject = allProjects[Math.floor(Math.random() * allProjects.length)];

    return (
        <RootLayout>
            <div className="content">
                {/*A propos*/}
                <PageIntro
                    title={"Qui sommes-nous ?"}
                    text={contentData.aboutUsText.text}
                    hasButton={false}
                    elementId={contentData.aboutUsText.text}
                />

                {/* Equipe */}
                <div id="team-section">
                    <TeamSection hasText={true}/>
                </div>

                {/*Projet aléatoire*/}
                <ProjectSection
                    project={randomProject.name}
                    text={randomProject.text}
                    media={randomProject.media}
                    mediaPlacement={"left"}
                    hasButton={true}
                    hasCurve={true}
                    link={randomProject.link}
                />

                {/*Partenaires*/}
                <div id="partner-section">
                    <PartnerSection hasButton={false}/>
                </div>
                {/* Contact */}
                <ContactSection phrase={"Partenaires de votre réussite, dès aujourd'hui"}/>
            </div>
        </RootLayout>
    );
}
