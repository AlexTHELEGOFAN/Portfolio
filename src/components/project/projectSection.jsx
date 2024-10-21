import React from "react";
import PartnerCard from "@/components/partners/partnerCard";
import Curve from "@/assets/images/Curve";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
// import PartnerCard from "./PartnerCard";
// import ActionButton from "./ActionButton";
// import DecorativeImages from "./DecorativeImages";

const partners = [
    {name: "Partenaire"},
    {name: "Partenaire"},
    {name: "Partenaire"}
];

export default function ProjectSection({project = "Prédiction pieds diabétiques"}) {
    return (
        <section className="section-white flex flex-wrap w-full justify-start relative">
            <div className="absolute top-0 left-0 w-32 h-32">
                <Curve color="#F56A00" rotation={180}/>
            </div>

            <div className="video w-full md:w-1/2 flex items-center justify-center px-4">
                <video controls className="w-full">
                    <source src="url_de_votre_video" type="video/mp4"/>
                    Votre navigateur ne supporte pas la vidéo.
                </video>
            </div>

            <div className="content w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="self-start text-2xl font-bold mb-4">
                    {project}
                </h3>
                <span className="text-base mb-6">
                      Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
                      <br/><br/>
                      Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing sagittis amet volutpat cursus sem nisi. Quam a dictum vitae tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.
                      <br/><br/>
                      “Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing tellus placerat dictumst venenatis vitae velit. Sit cras laoreet diam nisi purus pulvinar. Nec at purus cursus id viverra commodo tortor sollicitudin.”
                      <br/><br/>
                      Contactez-nous dès maintenant : innolab@atos.net
                  </span>

                <div>
                    <button className="button-blue-icon-right">
                        Découvrez qui nous sommes

                        <FontAwesomeIcon
                            icon={faAngleRight}
                            size="xl"
                            className="ml-3"
                        />

                    </button>
                </div>

            </div>


        </section>
    );
}
