"use client"; // This is a client component 👈🏽

import "./sectorSection.scss";

import React from "react";
import Curve from "@/assets/images/Curve";
import Carousel from "better-react-carousel";
import Image from "next/image";
import {contentData} from "@/assets/data/data";

export default function sectorSection({title, text, elementId}) {
    return (
        <section id={elementId} className="workshops-section section-blue flex flex-col w-full justify-start relative">

            <div className="white-curve bottom-0 right-0 absolute">
                <Curve color="#3DC7FF" rotation={0}/>
            </div>
            <h3 className="text-2xl text-white-text font-bold mb-4">
                {title}
            </h3>
            <span className="text-white-text mb-6"
                  dangerouslySetInnerHTML={{__html: text}}>

            </span>
            <div className="flex justify-center max-md:max-w-full">
                <Carousel
                    cols={3}
                    rows={1}
                    gap={40}
                    scrollSnap={false}
                    showDots={false}
                    mobileBreakpoint={768}
                    responsiveLayout={[
                        {
                            breakpoint: 640,
                            cols: 1,
                            gap: 10,
                        },
                        {
                            breakpoint: 1024,
                            cols: 2,
                            gap: 15,
                        },
                    ]}
                >
                    {contentData.workshops.map((workshop, index) => (
                        <Carousel.Item key={index}>
                            <div className="workshops-carousel-item flex flex-col items-start justify-start w-full">
                                <Image src={workshop.image} alt={workshop.name} width={480} height={300} quality={100}/>
                                <div className="workshop-card flex flex-col justify-start">
                                    <span className="workshop-card-title flex">{workshop.name}</span>
                                    <span className="workshop-card-text flex"
                                          dangerouslySetInnerHTML={{__html: workshop.text}}>
                                    </span>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

        </section>
    );
}
