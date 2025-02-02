"use client"; // This is a client component 👈🏽

import "./homeBanner.scss";

import React from "react";
import {useLottie} from "lottie-react";
import scrollAnimation from "@/assets/lottie/scroll-animation.json";
import bannerImage from "@/assets/images/banner_image.jpg";
import profile from "@/assets/images/profile.jpg";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function HomeBanner() {
    const options = {
        loop: true,
        autoplay: true,
        animationData: scrollAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const {View: ScrollAnimation} = useLottie(options);

    const handleScroll = () => {
        window.scrollBy({top: 520, behavior: 'smooth'});
    };

    return (
        <div className="banner flex flex-col w-full relative">
            <div className="background-image absolute">
                <Image src={bannerImage} alt="" fill="true" objectPosition="0% 0%" objectFit="cover"
                       quality={100}/>
            </div>

            <div className="overlay absolute inset-0 bg-black opacity-60 z-10"></div>

            <div className="z-20 flex flex-col justify-between h-full">
                <div className="flex justify-around">
                    <div>
                    <h1 className="banner-title">
                        Alexandre Pozzi
                    </h1>

                    <span className="banner-subtitle">
                        Développeur full stack bac +5
                    </span>
                    </div>
                    <div className="image-container">
                        <Image
                            src={profile}
                            alt=""
                            quality={100}
                            className="profile-image"
                            objectFit={"cover"}
                            objectPosition={"bottom right"}
                        />
                    </div>
                </div>

                <div className="scroll-animation flex justify-center mx-auto" onClick={handleScroll}>
                    <div className="scroll-animation-desktop">
                        {ScrollAnimation}
                    </div>
                    <div className="scroll-animation-mobile">
                        <FontAwesomeIcon icon={faAngleDown} size="2xl" className="bounce"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;