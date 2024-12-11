import "./sectorCard.scss";

import React from "react";
import Image from "next/image";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SectorCard({picture, name, text, link}) {
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    }

    return (
        <div className="sector-carousel-item flex flex-col items-center justify-center relative">
            <div className="sector-image">
                <Image src={picture} alt={name} quality={100}/>
            </div>
            <div className="sector-card flex flex-col justify-between absolute">
                <span className="sector-card-title flex">{name}</span>

                <span className="sector-card-text block"
                      dangerouslySetInnerHTML={{__html: truncateText(text, 175)}}>
                    </span>


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
