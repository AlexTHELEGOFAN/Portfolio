import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import "./teamSection.scss";
import Curve from "@/assets/images/Curve";
import TeamCard from "@/components/team/teamCard";

const members = [
    {name: "Alex", work: "Dev", realPicture: "pic", legoPicture: "picl"},
    {name: "Alex", work: "Dev", realPicture: "pic", legoPicture: "picl"},
    {name: "Alex", work: "Dev", realPicture: "pic", legoPicture: "picl"}
];

export default function TeamSection({hasText = false}) {
    return (
        <section className="section-blue flex flex-col w-full justify-start relative">
            <div className="pink-curve absolute">
                <Curve color="#EF5E82" rotation={270}/>
            </div>
            <h3 className="text-2xl text-white-text font-bold mb-4">
                L'équipe Inno'Lab
            </h3>

            {hasText && (
                <div className="text-white-text">
            <span className="text-base mb-6">
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
                Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.

                <br/><br/>
        </span>
                </div>
            )}


            <div className="self-stretch justify-center mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    {members.map((partner, index) => (
                        <TeamCard key={index}
                                  realPicture={members.realPicture}
                                  legoPicture={members.legoPicture}
                                  name={members.name}
                                  work={members.work}/>
                    ))}
                </div>
            </div>


            {!hasText && (
                <div className="flex justify-center">
                    <button className="button-blue-icon-right">
                        Voir l’intégralité de l’équipe

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
