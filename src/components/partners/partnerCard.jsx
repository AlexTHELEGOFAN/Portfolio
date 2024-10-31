import "./partnerCard.scss";
import Image from "next/image";
import React from "react";

export default function PartnerCard({name, logo}) {
    return (
        <div className="partner-card flex flex-col items-center justify-center">
            <Image className="partner-logo  aspect-w-1 aspect-h-1 md:aspect-w-5 md:aspect-h-4" src={logo} alt={name}
                   aspect objectFit="cover"
                   quality={100}/>
            <div className="pt-3">
                <span className="text-white-text">{name}</span>
            </div>
        </div>
    )
}
