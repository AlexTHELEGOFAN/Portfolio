"use client"; // This is a client component 👈🏽

import "./pageIntro.scss";

import React, {useEffect, useRef} from "react";
import Curve from "@/assets/images/Curve";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PageIntro({title, text, hasButton = false, media, elementId}) {
    return (
        <section id={elementId} className="section-white section-intro flex justify-between relative">
            {/*flex-row*/}
            {/*flex-col items-center text-center*/}
            <div className={`content-container flex ${media ? ' with-media' : ' without-media'}`}>
                <div className="curve-container absolute">
                    <Curve color="#F56A00" rotation={180}/>
                </div>

                {/*Content*/}
                <div className="text-content flex flex-col justify-center">
                    <h3 className="title">
                        {title}
                    </h3>

                    <span className="description text-justify">
                        {text}
                    </span>

                    {hasButton && (
                        <div className="button-container flex justify-start desktop-button">
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
                </div>

                {/*Media Display*/}
                {media &&

                    <div className="media-container flex justify-center items-center">
                        {media.mediaType === "video" &&
                            <iframe
                                width="560"
                                height="315"
                                src={media.src}
                                title={media.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        }
                        {media.mediaType === "pdf" &&
                            <iframe
                                width="100%"
                                height="460px"
                                src={media.src}
                                title={media.title}
                                style={{border: "none"}}
                            ></iframe>
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
