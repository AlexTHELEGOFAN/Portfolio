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

export default function NotFoundCatchAll() {


    const {View: notfound} = useLottie(options);

    return (
        <RootLayout>
            <div className="content flex content-center self-center items-center w-[600px] h-[600px]">
                {notfound}
            </div>
        </RootLayout>
    );
}
