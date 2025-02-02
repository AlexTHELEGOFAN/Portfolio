"use client"; // This is a client component 👈🏽

import "./experiencesCard.scss";

import Image from "next/image";
import React from "react";

export default function ExperiencesCard({partner}) {
    return (
        <div className="partner-card flex flex-col items-center justify-center">
            <Image className="partner-logo aspect-w-1 aspect-h-1 md:aspect-w-5 md:aspect-h-4 object-cover"
                   src={partner.logoPath}
                   alt={partner.name}
                   quality={100}/>
            <div className="p-3">
                <span className="text-white-text">{partner.name}</span>
            </div>
            <div className="">
                <span className="text-white-text"
                      dangerouslySetInnerHTML={{__html: partner.text}}>

                </span>
            </div>
        </div>
)
}
