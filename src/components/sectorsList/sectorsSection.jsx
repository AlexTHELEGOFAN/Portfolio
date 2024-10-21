import "./sectorsSection.scss";

import React from "react";
import CarrouselSection from "@/components/carrousel/carrouselSection";
import Curve from "@/assets/images/Curve";


const sectors = [
    {name: "Partenaire"},
    {name: "Partenaire"},
    {name: "Partenaire"}
];

export default function SectorsSection({title = false}) {
    return (
        <section className="flex flex-col w-full justify-start relative">
            <div className="purple-curve bottom-left absolute">
                <Curve color="#663894" rotation={90}/>
            </div>


            <h3 className="text-2xl font-bold mb-4">
                Nous innovons dans ces domaines
            </h3>

            <div className="flex justify-center">
                <CarrouselSection/>
            </div>

        </section>
    );
}
