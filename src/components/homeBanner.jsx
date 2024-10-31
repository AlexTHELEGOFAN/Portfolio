"use client"; // This is a client component 👈🏽

import "./homeBanner.scss";
import {useLottie} from "lottie-react";
import scrollAnimation from "@/assets/lottie/scroll-animation.json";
import Curve from "@/assets/images/Curve";
import bannerImage from "@/assets/images/banner_image.jpg";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export default function HomeBanner() {
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
        <div className="banner flex flex-col w-full bg-blue relative">
            <div className="background-image absolute inset-0 z-0">
                <Image src={bannerImage} alt="" layout="fill" objectFit="cover" quality={100}/>
            </div>

            <div className="overlay absolute inset-0 bg-black opacity-60 z-10"></div>

            <div className="relative z-20 flex flex-col justify-between h-full">
                <div>
                    <h1 className="banner-title">
                        Inno’Lab Lyon : la Co-innovation pour le futur
                    </h1>

                    <span className="banner-subtitle">
                    Construisons ensemble les fondations de votre future réussite
                </span>
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

            <div className="curve bottom-right absolute z-20">
                <Curve color="#4AA82D" rotation={0}/>
            </div>
            <div className="curve second absolute z-20">
                <Curve color="#4AA82D" rotation={180}/>
            </div>
        </div>
    )
}
