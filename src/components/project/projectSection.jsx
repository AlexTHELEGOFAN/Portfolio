"use client"; // This is a client component 👈🏽

import "./projectSection.scss";

import React from "react";
import Curve from "@/assets/images/Curve";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ProjectSection({
                                           project,
                                           text,
                                           elementId,
                                           link,
                                           hasCurve,
                                           hasButton,
                                           media,
                                           mediaType,
                                           mediaPlacement
                                       }) {
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


                    <span className="description text-justify mb-6" dangerouslySetInnerHTML={{__html: text}}>
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
                {media &&
                    <div className="media-container flex justify-center items-center">
                        {mediaType === "video" &&
                            <iframe
                                width="560"
                                height="315"
                                src={media.src}
                                title={media.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        }
                        {mediaType === "image" &&
                            <Image src={media.src} alt={media.title} quality={100}/>
                        }
                    </div>
                }
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
