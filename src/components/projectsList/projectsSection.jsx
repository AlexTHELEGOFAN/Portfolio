import "./projectsSection.scss";

import "./projectsSection.scss";
import CarrouselSection from "@/components/carrousel/carrouselSection";
import React from "react";
import Curve from "@/assets/images/Curve";

export default function ProjectsSection() {
    return (
        <section className="flex flex-col w-full justify-start relative">
            <h3 className="text-2xl font-bold mb-4">
                Découvrez nos projets
            </h3>

            <div className="flex justify-center">
                <CarrouselSection/>
            </div>
        </section>
    )
}
