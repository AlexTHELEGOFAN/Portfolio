import "./sectorSection.scss";

import React from "react";
import CarrouselSection from "@/components/carrousel/carrouselSection";
import Curve from "@/assets/images/Curve";


const sectors = [
    {name: "Partenaire"},
    {name: "Partenaire"},
    {name: "Partenaire"}
];

export default function SectorSection({title = "", text}) {
    return (
        <section className="section-blue flex flex-col w-full justify-start relative">
            <div className="curve bottom-right absolute">
                <Curve color="#3DC7FF" rotation={0}/>
            </div>
            <h3 className="text-2xl text-white-text font-bold mb-4">
                {title}
            </h3>
            {text}

            <div className="flex justify-center">
                <CarrouselSection/>
            </div>

        </section>
    );
}
