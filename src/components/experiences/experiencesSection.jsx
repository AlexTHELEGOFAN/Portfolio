"use client"; // This is a client component 👈🏽

import "./experiencesSection.scss";

import React from "react";
import ExperiencesCard from "./experiencesCard";
import {contentData} from "@/assets/data/data";
import Image from "next/image";
import redDigitalImage from "@/assets/images/red-digital.jpg"

export default function ExperiencesSection() {

    return (
        <section className="section-blue section-partner flex flex-col justify-center items-center relative">

            {/* Image */}
            <div className="background-image absolute">
                <Image src={redDigitalImage} alt="" fill="true" objectPosition="0% 30%" objectFit="cover"
                       quality={100}/>
            </div>

            <div className="overlay absolute inset-0 bg-black opacity-60 z-10"></div>

            {/* Content */}
            <div className="z-20 flex flex-col justify-between h-full">
                <h3 className="title text-white-text text-center">
                    Mes expériences
                </h3>

                {/*Partners list*/}
                <div
                    className="partners-list grid justify-center w-full items-start">
                    {contentData.experiences.map((partner, index) => (
                        <ExperiencesCard key={index} partner={partner}/>
                    ))}
                </div>
            </div>
        </section>
);
}
