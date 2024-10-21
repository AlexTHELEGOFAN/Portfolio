import RootLayout from "@/components/layout/rootLayout";
import PageIntro from "@/components/pageIntro";
import TeamSection from "@/components/team/teamSection";
import ContactSection from "@/components/contact/contactSection";
import ProjectSection from "@/components/project/projectSection";
import React from "react";

export default function AboutUsPage() {
    const AboutUsText = (
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

    const AboutUsImage = (
        <video controls className="w-full">
            <source src="movie.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        // Ou pour une image :
        // <img src="path/to/image.jpg" alt="Description" />
    );

    return (
        <RootLayout>
            <div className="content">
                {/*A propos*/}
                <PageIntro title={"Qui sommes-nous ?"} text={AboutUsText} hasButton={false} media={AboutUsImage}/>

                {/* Equipe */}
                <TeamSection hasText={true}/>

                {/*Projet aléatoire*/}
                <ProjectSection project={"Prédiction pieds diabétiques"}/>

                {/* Contact */}
                <ContactSection phrase={"A vos côtés pour votre projet"}/>
            </div>
        </RootLayout>
    );
}
