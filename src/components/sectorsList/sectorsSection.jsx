"use client"; // This is a client component 👈🏽

import React from "react";
import Carousel from 'better-react-carousel'
import SectorCard from "@/components/sectorsList/sectorCard";

import "./sectorsSection.scss";
import {contentData} from "@/assets/data/data";

export default function SectorsSection({link}) {

    return (
        <section className="sectors-section flex flex-col relative">
            <h3 className="title">
                Nous innovons dans ces domaines
            </h3>

            <div className="flex justify-center w-full">
                <Carousel
                    cols={3}
                    rows={1}
                    gap={20}
                    scrollSnap={true}
                    showDots={false}
                    mobileBreakpoint={640}
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
                    {contentData.sectorsWithProjects.map((sector, index) => (
                        <Carousel.Item key={index}>
                            <SectorCard key={index}
                                        picture={sector.image}
                                        name={sector.name}
                                        text={sector.text}
                                        link={link + sector.link}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

        </section>
    );
}
