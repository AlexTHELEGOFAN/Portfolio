import RootLayout from "@/components/layout/rootLayout";
import PageIntro from "@/components/pageIntro";
import ContactSection from "@/components/contact/contactSection";
import React from "react";
import SectorsSection from "@/components/sectorsList/sectorsSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import SectorSection from "@/components/sector/sectorSection";

export default function OurWorkPage() {

    const OurWorkText = (
        <span className="text-base mb-6">
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            “Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.”
            <br/><br/>
            Contactez-nous dès maintenant : innolab@atos.net
        </span>
    );

    const OurWorkImage = (
        <video controls className="w-full">
            <source src="movie.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        // Ou pour une image :
        // <img src="path/to/image.jpg" alt="Description" />
    );

    const OurWorkshopsText = (
        <span className="text-base text-white-text mb-6">
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
            <br/><br/>
            “Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.”
            <br/><br/>
            Contactez-nous dès maintenant : innolab@atos.net
        </span>
    );


    return (
        <RootLayout>
            <div className="content">
                {/*A propos*/}
                <PageIntro title={"Que faisons-nous ?"} text={OurWorkText} hasButton={false} media={OurWorkImage}/>

                {/* Ateliers */}
                <SectorSection title={"Nous effectuons des ateliers"} text={OurWorkshopsText}/>

                {/*Domaines*/}
                <div className="section-white flex flex-col w-full justify-start relative">
                    <SectorsSection hasCurve={false}/>

                    <div className="flex justify-center">
                        <button className="button-blue-icon-right items-center">
                            Voir nos réalisations

                            <FontAwesomeIcon
                                icon={faAngleRight}
                                size="xl"
                                className="ml-3"
                            />
                        </button>
                    </div>
                </div>

                {/* Contact */}
                <ContactSection phrase={"Transformons vos idées en réalité ensemble"}/>
            </div>
        </RootLayout>
    );
}
