"use client"; // This is a client component 👈🏽

import "./contactSection.scss";

import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ContactSection({phrase = "A vos côtés pour votre projet"}) {
    return (
        <section className="section-end flex w-full relative">
            <div className="title-content">
                <h3 className="text-2xl text-white-text font-bold mb-4">
                    {phrase}
                </h3>
            </div>
            <div className="text-content">
                <p className="text-white-text mb-4">
                    Vous recherchez un lead développeur ?
                </p>
                <div>
                    <Link href={"mailto:alexandre.pozzi69@gmail.com?subject=Contact&body=Bonjour,"}>
                        <button className="button-white-icon-right">
                            Me contacter

                            <FontAwesomeIcon
                                icon={faEnvelope}
                                size="xl"
                                className="ml-3"
                            />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="title-content">
                Linkedin
                Github
            </div>


        </section>
    );
}
