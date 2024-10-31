"use client"; // This is a client component 👈🏽

import "./projectCard.scss";
import React from "react";
import Image from "next/image";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProjectCard({picture, tag, name, text, link}) {
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    }

    return (
        <div className="projects-carousel-item flex flex-col items-center justify-center w-full">
            <div className="relative w-full h-0 pb-[58%]"> {/* Aspect ratio container */}
                <Image src={picture} alt={name} layout="fill" objectFit="cover" quality={100}
                       className="project-image"/>
            </div>
            <div className="project-card flex flex-col justify-start w-full min-h-[300px]">
                <div className="project-card-tag rounded-md w-max">
                    <span>{tag}</span>
                </div>
                <span className="project-card-title flex">{name}</span>
                <span className="project-card-text flex">{truncateText(text, 100)}</span>
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
