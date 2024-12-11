"use client"; // This is a client component 👈🏽

import "./projectsSection.scss";
import React from "react";
import Carousel from "better-react-carousel";
import ProjectCard from "@/components/projectsList/projectCard";
import {contentData} from "@/assets/data/data";

export default function ProjectsSection() {
    return (
        <section className="projects-section flex flex-col justify-start relative">
            <h3 className="text-2xl font-bold mb-4">
                Découvrez nos projets
            </h3>

            <div className="flex justify-center max-md:max-w-full">
                <Carousel
                    cols={4}
                    rows={1}
                    gap={20}
                    scrollSnap={true}
                    showDots={false}
                    mobileBreakpoint={640}
                    responsiveLayout={[
                        {
                            breakpoint: 640,
                            cols: 2,
                            gap: 10,
                        },
                        {
                            breakpoint: 1024,
                            cols: 2,
                            gap: 15,
                        },
                    ]}
                >
                    {contentData.sectorsWithProjects.map((sector, sectorIndex) => (
                        sector.projects.map((project, projectIndex) => (
                            <Carousel.Item key={`${sectorIndex}-${projectIndex}`}>
                                <ProjectCard
                                    key={`${sectorIndex}-${projectIndex}`}
                                    image={project.image}
                                    imageFit={project.imageFit}
                                    tags={project.tags}
                                    name={project.name}
                                    text={project.text}
                                    link={project.link}
                                />
                            </Carousel.Item>
                        ))
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
