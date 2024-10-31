import RootLayout from "@/components/layout/rootLayout";
import PageIntro from "@/components/pageIntro";
import ContactSection from "@/components/contact/contactSection";
import React from "react";
import SectorsSection from "@/components/sectorsList/sectorsSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import SectorSection from "@/components/sector/sectorSection";
import Curve from "@/assets/images/Curve";
import Link from "next/link";
import {ourWorkImage, contentData} from "@/assets/data/data";

export default function OurWorkPage() {
    return (
        <RootLayout>
            <div className="content">
                {/*A propos*/}
                <PageIntro
                    title={"Que faisons-nous ?"}
                    text={contentData.ourWorkText.text}
                    hasButton={false}
                    elementId={contentData.ourWorkText.text}
                />

                {/* Ateliers */}
                <SectorSection title={"Nous effectuons des ateliers"} text={
                    contentData.ourWorkshopsText.text
                }
                               elementId={"ateliers"}
                />

                {/*Domaines*/}
                <div className="section-white flex flex-col w-full justify-start relative">
                    <div className="bottom-0 left-0 absolute">
                        <Curve color="#663894" rotation={90}/>
                    </div>

                    <SectorsSection
                        link={"/nos-projets"}
                    />

                    <div className="flex justify-center">
                        <Link href="/nos-projets">
                            <button className="button-blue-icon-right items-center">
                                Voir nos réalisations

                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    size="xl"
                                    className="ml-3"
                                />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Contact */}
                <ContactSection phrase={"Transformons vos idées en réalité ensemble"}/>
            </div>
        </RootLayout>
    );
}
