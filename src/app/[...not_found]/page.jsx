"use client"; // This is a client component 👈🏽

import RootLayout from "@/components/layout/rootLayout";
import {useLottie} from "lottie-react";
import notfound from "@/assets/lottie/not-found-animation.json";

const options = {
    loop: true,
    autoplay: true,
    animationData: notfound,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function NotFoundCatchAll() {
    const {View: notfound} = useLottie(options);

    return (
        <RootLayout>
            <div className="content section-not-found flex justify-self-center">
                {notfound}
            </div>
        </RootLayout>
    );
}

export default NotFoundCatchAll;