import "./pageIntro.scss";

import Curve from "@/assets/images/Curve";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleRight, faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function DPageIntro({title = "A propos de l'Inno'Lab", text, hasButton = false, media}) {
    return (
        <section className="section-white flex flex-wrap w-full justify-start relative">
            <div className="absolute top-0 left-0 w-32 h-32">
                <Curve color="#F56A00" rotation={180}/>
            </div>

            <div className="content w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="self-start text-2xl font-bold mb-4">
                    {title}
                </h3>
                {text}

                {hasButton && (
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
                )}
            </div>

            <div className="video w-full md:w-1/2 flex items-center justify-center px-4">
                {media && (
                    media
                )}
            </div>

        </section>
    )
}
