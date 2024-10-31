import RootLayout from "@/components/layout/rootLayout";
import PageIntro from "@/components/pageIntro";
import SectorSection from "@/components/sector/sectorSection";
import ContactSection from "@/components/contact/contactSection";
import React from "react";
import ProjectSection from "@/components/project/projectSection";
import {ourProjectsImage, contentData} from "@/assets/data/data";


export default function OurProjectsPage() {
    return (
        <RootLayout>
            <div className="content">
                {/* Nos projets */}
                <PageIntro
                    title={"Nos projets"}
                    text={contentData.ourProjectsText.text}
                    hasButton={false}
                    elementId={contentData.ourProjectsText.text}
                />

                {/* Secteurs et projets */}
                {contentData.sectorsWithProjects.map((sector, index) => (
                    <div key={index}>
                        <SectorSection title={sector.title} text={sector.text} elementId={sector.elementId}/>
                        {sector.projects.map((project, projectIndex) => (
                            <ProjectSection key={projectIndex} project={project.name} text={project.text}
                                            elementId={project.elementId}
                                            media={project.media}
                                            mediaPlacement={project.mediaPlacement}
                                            hasButton={false}
                                            hasCurve={false}/>
                        ))}
                    </div>
                ))}

                {/* Contact */}
                <ContactSection phrase={"Besoin d’aide pour réaliser votre projet ?"}/>
            </div>
        </RootLayout>
    );
}
