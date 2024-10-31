import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import "./partnerSection.scss";
import Curve from "@/assets/images/Curve";
import PartnerCard from "./partnerCard";
import Link from "next/link";
import {contentData} from "@/assets/data/data";

export default function PartnerSection({hasButton = false}) {

    return (
        <section id={contentData.partnersText.elementId}
                 className="section-blue section-partner flex flex-col justify-center items-center relative">
            <div className="light-purple-curve bottom-right absolute">
                <Curve color="#9747FF" rotation={180}/>
            </div>
            <div className="light-purple-curve second absolute">
                <Curve color="#9747FF" rotation={0}/>
            </div>
            <h3 className="title text-white-text text-center">
                Ils travaillent avec nous
            </h3>

            <span className="text-white-text mb-6">
                {!hasButton && contentData.partnersText.text}
            </span>

            {/*Partners list*/}
            <div
                className="partners-list grid justify-center w-full items-start">
                {contentData.partners.map((partner, index) => (
                    <PartnerCard key={index} name={partner.name} logo={partner.logoPath}/>
                ))}
            </div>

            {hasButton && (
                <div className="mt-4">
                    <Link href="/qui-sommes-nous#partner-section">
                        <button className="button-blue-icon-right">
                            En savoir plus

                            <FontAwesomeIcon
                                icon={faAngleRight}
                                size="xl"
                                className="ml-3"
                            />

                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
}
