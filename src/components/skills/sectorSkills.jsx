"use client"; // This is a client component 👈🏽

import "./sectorSkills.scss";

import React from "react";
import Image from "next/image";
import {contentData} from "@/assets/data/data";
import Css3 from "@/assets/svg/Css3";

function SectorSkills() {
    return (
        <section className="section-white section-skills flex justify-between relative">
            <div className="content-container flex with-media">
                {/*Content*/}
                <div className="text-content flex flex-col justify-center">
                    <h3 className="title">
                        Mes compétences et certificats
                    </h3>

                    <div className="content-card">
                        <ol className="timeline-list">
                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title-skills">
                                    Développement front-end
                                </h4>
                                <ul className="skills-list">

                                    <li className="skills-item">
<span>
    <Css3/>
  </span>
                                        <div
                                            className="icon-box icon-box-skills"
                                        >

                                            3
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ol>
                        {/*                        {contentData.skillGroups.map((group, index) => (*/}
                        {/*                            <ol className="timeline-list" key={index}>*/}

                        {/*                                <li className="timeline-item">*/}
                        {/*                                    <h4 className="h4 timeline-item-title-skills">*/}
                        {/*                                        {group.category}*/}
                        {/*                                    </h4>*/}
                        {/*                                    <ul className="skills-list">*/}
{/*                                        {group.items.map((skill, idx) => (*/}

{/*                                            <li className="skills-item" key={idx}>*/}
{/*<span>*/}
{/*    <Image src={skill.logoPath} alt={'ggd'} unoptimized width={50} height={50}/>*/}
{/*  </span>*/}
{/*                                                <div*/}
{/*                                                    className="icon-box icon-box-skills"*/}
{/*                                                >*/}

{/*                                                    {skill.level}*/}
{/*                                                </div>*/}
{/*                                            </li>*/}
{/*                                        ))}*/}
{/*                                    </ul>*/}
{/*                                </li>*/}

{/*                            </ol>*/}
{/*                        ))}*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectorSkills;