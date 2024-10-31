"use client"; // This is a client component 👈🏽

import "./teamCard.scss";

import React, {useState} from "react";
import Image from "next/image";

export default function TeamCard({realPicture, legoPicture, name, work}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="team-carousel-item flex flex-col items-center justify-center relative">
            <div className="image-container relative w-[105px] h-[105px]" onClick={handleFlip}>
                <div className={`image-flip ${isFlipped ? 'flipped' : ''}`}>

                    <Image
                        src={realPicture}
                        alt={name}
                        width={105}
                        height={105}
                        quality={100}
                        className="image-front rounded-full"
                    />

                    <Image
                        src={legoPicture}
                        alt={name}
                        width={105}
                        height={105}
                        quality={100}
                        className="image-back rounded-full"
                    />
                </div>
            </div>
            <div className="team-card flex flex-col justify-start items-center">
                <span className="team-card-name flex">{name}</span>
                <span className="team-card-work flex">{work}</span>
            </div>
        </div>
    )
}
