import "./contactSection.scss";

import React from "react";

import Curve from "@/assets/images/Curve";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function ContactSection({phrase = "A vos côtés pour votre projet"}) {
    return (
        <section className="section-end flex flex-col w-full justify-start relative">
            <div className="absolute top-0 left-0 w-32 h-32">
                <Curve color="#3DC7FF" rotation={180}/>
            </div>
            <div className="white-curve bottom-right absolute">
                <Curve color="#F2F2F2" rotation={180}/>
            </div>
            <div className="white-curve second absolute">
                <Curve color="#F2F2F2" rotation={0}/>
            </div>
            <h3 className="text-2xl text-white-text font-bold mb-4">
                {phrase}
            </h3>

            <p className="text-white-text mb-4">L’Inno’Lab vous accompagne dans la réalisation de votre projet,
                n’hésitez pas
                à nous contacter !</p>
            <div>
                <button className="button-white-icon-right">
                    Contactez nous

                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="xl"
                        className="ml-3"
                    />
                </button>
            </div>


        </section>
    );
}
