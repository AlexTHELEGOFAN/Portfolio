"use client"; // This is a client component 👈🏽

import "./aboutMe.scss";

import React from "react";
import {contentData} from "@/assets/data/data";

function AboutMe() {
    return (
        <section className="section-intro flex justify-between relative">
            {/*' : ' without-media'}*/}
            <div className={`content-container flex with-media`}>
                <div className="text-content flex flex-col justify-center">
                    <h3 className="title">
                        A propos de moi
                    </h3>

                    <span className="description text-justify" dangerouslySetInnerHTML={{__html: contentData.homeText.text}}>
                    </span>
                </div>


                {/*{media &&*/}

                {/*    <div className="media-container flex justify-center items-center">*/}
                {/*        {media.mediaType === "video" &&*/}
                {/*            <iframe*/}
                {/*                width="560"*/}
                {/*                height="315"*/}
                {/*                src={media.src}*/}
                {/*                title={media.title}*/}
                {/*                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*                allowFullScreen*/}
                {/*            ></iframe>*/}
                {/*        }*/}
                {/*        {media.mediaType === "pdf" &&*/}
                {/*            <iframe*/}
                {/*                width="100%"*/}
                {/*                height="460px"*/}
                {/*                src={media.src}*/}
                {/*                title={media.title}*/}
                {/*                style={{border: "none"}}*/}
                {/*            ></iframe>*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*}*/}
            </div>
        </section>
    );
}

export default AboutMe;