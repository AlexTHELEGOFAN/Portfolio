"use client"; // This is a client component 👈🏽

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import "./teamSection.scss";
import Curve from "@/assets/images/Curve";
import TeamCard from "@/components/team/teamCard";
import Carousel from "better-react-carousel";
import Link from "next/link";
import {contentData} from "@/assets/data/data";

export default function TeamSection({hasButton}) {
    return (
        <section id={contentData.teamText.elementId}
                 className="section-blue flex flex-col w-full justify-start relative">
            <div className="pink-curve absolute">
                <Curve color="#EF5E82" rotation={270}/>
            </div>
            <h3 className={`text-2xl text-white-text font-bold ${!hasButton ? 'mb-8' : 'mb-4'}`}>
                L&apos;équipe Inno&apos;Lab
            </h3>

            {/*Team description*/}
            {!hasButton && (
                <div className="text-white-text mb-6">
                    {contentData.teamText.text}
                </div>
            )}

            {/*Team members*/}
            <div className="flex justify-center max-md:max-w-full mb-4">
                <Carousel
                    cols={6}
                    rows={hasButton ? 1 : 2}
                    gap={40}
                    scrollSnap={true}
                    showDots={false}
                    mobileBreakpoint={200}
                    responsiveLayout={[
                        {
                            breakpoint: 1200,
                            cols: 4,
                            gap: 40,
                        },
                        {
                            breakpoint: 1024,
                            cols: 3,
                            gap: 20,
                        },
                        {
                            breakpoint: 768,
                            cols: 2,
                            gap: 20,
                        },
                    ]}
                >
                    {contentData.team.map((member, index) => (

                        <Carousel.Item key={index}>
                            <TeamCard key={index}
                                      realPicture={member.realPicture}
                                      legoPicture={member.legoPicture}
                                      name={member.name}
                                      work={member.work}/>
                        </Carousel.Item>
                    ))}
                </Carousel>

            </div>

            {hasButton && (
                <div className="flex justify-center">
                    <Link href="/qui-sommes-nous#team-section">
                        <button className="button-blue-icon-right">
                            Voir l’intégralité de l’équipe

                            <FontAwesomeIcon
                                icon={faAngleRight}
                                size="xl"
                                className="ml-3"
                            />
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
}
