"use client"; // This is a client component 👈🏽

import "./projectCard.scss";
import React from "react";
import Image from "next/image";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProjectCard({image, imageFit, tags, name, text, link}) {
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    }

    return (
        <div className="projects-carousel-item flex flex-col items-center justify-center w-full">
            <div className="relative w-full h-0 pb-[70%]"> {/* Aspect ratio container */}
                <div className="project-image absolute">
                    <Image src={image} alt={name} fill="true" objectPosition={imageFit} objectFit="cover"
                           quality={100}/>
                </div>
            </div>
            <div className="project-card flex flex-col justify-start w-full min-h-[300px]">
                <span className="project-card-title flex">{name}</span>
                <div className="flex flex-row flex-wrap">
                    {tags.map((tag, index) => (
                        <div key={index} className="project-card-tag rounded-md w-max mb-2">
                            <span>{tag}</span>
                        </div>
                    ))}
                </div>
                <span className="project-card-text block"
                      dangerouslySetInnerHTML={{__html: truncateText(text, 175)}}>

                </span>
                <div className="flex justify-start mt-auto">
                    <Link href={link}>
                        <button className="button-blue-icon-right button-see-more items-center">
                            Voir plus
                            <FontAwesomeIcon icon={faAngleRight} size="xl" className="ml-3"/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
