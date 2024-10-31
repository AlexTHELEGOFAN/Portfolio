"use client"; // This is a client component 👈🏽

import "./projectSection.scss";
import React from "react";
import Curve from "@/assets/images/Curve";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

export default function ProjectSection({project, text, elementId, link, hasCurve, hasButton, media, mediaPlacement}) {
    return (
        <section id={elementId} className="section-white project-section flex justify-between relative">
            <div className={`content-container flex ${mediaPlacement === "right" ? "cc-right" : "cc-left"}`}>
                {hasCurve &&
                    <div className="curve-container absolute">
                        <Curve color="#F56A00" rotation={180}/>
                    </div>
                }

                {/*Content*/}
                <div className="text-content flex flex-col justify-center">
                    <h3 className="title self-start">
                        {project}
                    </h3>


                    <span className="description text-justify mb-6">
                        {text}
                    </span>

                    {hasButton && (
                        <div className="button-container flex justify-start desktop-button">
                            <Link href={link}>
                                <button className="button-blue-icon-right button-see-more items-center">
                                    En savoir plus
                                    <FontAwesomeIcon icon={faAngleRight} size="xl" className="ml-3"/>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="media-container flex justify-center items-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Z4bW5hBhzoY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {hasButton && (
                <div className="button-container flex justify-start mobile-button">
                    <Link href="/qui-sommes-nous">
                        <button className="button-blue-icon-right">
                            Découvrez qui nous sommes
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
