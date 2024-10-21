import React from "react";

import "./teamCard.scss";

export default function TeamCard({realPicture, legoPicture, name, work}) {
    return (
        <div>
            <span className="text-white-text h-4 w-8">{realPicture} realPicture</span>
            <span className="text-white-text">{legoPicture}</span>
            <span className="text-white-text">{name}</span>
            <div className="text-white-text">{work}</div>
        </div>
    )
}
