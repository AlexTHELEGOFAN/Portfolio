import "./sectorCard.scss";

import React from "react";
import Image from "next/image";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SectorCard({picture, name, text, link}) {
    return (
        <div className="sector-carousel-item flex flex-col items-center justify-center relative">
            <Image src={picture} alt={name} height={328} quality={100}/>
            <div className="sector-card flex flex-col justify-start absolute">
                <span className="sector-card-title flex justify-start">{name}</span>
                <span className="sector-card-text">{text}</span>
                <div className="flex justify-start">
                    <Link href={link}>
                        <button className="button-blue-icon-right items-center">
                            En savoir plus
                            <FontAwesomeIcon icon={faAngleRight} size="xl" className="ml-3"/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
