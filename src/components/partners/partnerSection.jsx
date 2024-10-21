import React from "react";
import PartnerCard from "./PartnerCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import "./partnerSection.scss";
import Curve from "@/assets/images/Curve";

const partners = [
    {name: "Partenaire"},
    {name: "Partenaire"},
    {name: "Partenaire"}
];

export default function PartnerSection({hasButton = false}) {
    return (
        <section className="section-blue flex flex-col w-full justify-center relative items-center relative">
            <div className="curve bottom-right absolute">
                <Curve color="#9747FF" rotation={180}/>
            </div>
            <div className="curve second absolute">
                <Curve color="#9747FF" rotation={0}/>
            </div>
            <h3 className="text-2xl text-white-text font-bold mb-4 justify-center">
                Ils travaillent avec nous
            </h3>

            <div className="self-stretch mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    {partners.map((partner, index) => (
                        <PartnerCard key={index} name={partner.name}/>
                    ))}
                </div>
            </div>

            {hasButton && (
                <div>
                    <button className="button-blue-icon-right">
                        En savoir plus

                        <FontAwesomeIcon
                            icon={faAngleRight}
                            size="xl"
                            className="ml-3"
                        />

                    </button>
                </div>
            )}
        </section>
    );
}
