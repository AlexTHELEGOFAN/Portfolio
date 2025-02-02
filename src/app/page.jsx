"use client"; // This is a client component 👈🏽

import "./globals.scss";

import RootLayout from "@/components/layout/rootLayout";
import HomeBanner from "@/components/homeBanner";
import AboutMe from "@/components/aboutMe";
import ExperiencesSection from "@/components/experiences/experiencesSection";
import SectorSkills from "@/components/skills/sectorSkills";

import Github from "@/assets/svg/github-white.svg";
import Linkedin from "@/assets/svg/linkedin-white.svg";
import VantaBackground from "@/components/VantaBackground";

function HomePage() {

    return (
        <RootLayout>
            <ul className="top-buttons flex flex-wrap justify-between self-stretch fixed">
                <li>
                    <a className="social-media-button flex mr-4" href="https://github.com/AlexTHELEGOFAN" target="_blank">
                        <Github/>
                    </a>
                </li>
                <li>
                    <a className="social-media-button flex"
                       href="https://www.linkedin.com/in/alexandre-pozzi-29875a201/"
                       target="_blank"
                    >
                        <Linkedin/>
                    </a>
                </li>
                <button className="cv-button flex items-center justify-center absolute">
                    {/*Curriculum Vitae*/}
                    {/*<FontAwesomeIcon icon={faAngleRight} size="xl" className="ml-3"/>*/}
                </button>
            </ul>

            {/* Bannière d'accueil */}
            <HomeBanner/>

            <div className="content">

                <AboutMe/>

                <ExperiencesSection/>

                <SectorSkills/>

                {/*Domaines et projets*/}
                <div className="section-white flex flex-col w-full justify-start relative">
                    {/* Sections des projets */}
                </div>

            </div>
        </RootLayout>
    );
}

export default HomePage;