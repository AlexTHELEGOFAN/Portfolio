import React from "react";
import PartnerCard from "@/components/partners/partnerCard";
// import PartnerCard from "./PartnerCard";
// import ActionButton from "./ActionButton";
// import DecorativeImages from "./DecorativeImages";

const partners = [
    {name: "Partenaire"},
    {name: "Partenaire"},
    {name: "Partenaire"}
];

export default function projectCard() {
    return (
        <section
            className="flex flex-wrap gap-10 items-start pt-16 pl-20 mt-12 max-w-full border border-black border-solid bg-indigo-950 w-[1860px] max-md:pl-5 max-md:mt-10">
            <div className="flex flex-col items-center self-start max-md:max-w-full">
                <h2 className="text-3xl font-bold text-zinc-100">
                    Ils travaillent avec nous
                </h2>
                <div className="self-stretch mt-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        {partners.map((partner, index) => (
                            <PartnerCard key={index} name={partner.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
