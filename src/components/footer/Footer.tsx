import React from "react";
import {Logo} from "../logo/Logo";
import ElijahSignature from "../../assets/signatures/elijah.png";
import NamanSignature from "../../assets/signatures/naman.png";

export interface FooterProps {

}

export const Footer :React.FC<FooterProps> = ({}) => {
    return <div className={"flex flex-col pt-10 pb-5"}>
        <div className={"container flex flex-col min-h-[200px] justify-evenly gap-5"}>

            <div className={"flex flex-col sm:flex-row justify-between items-center"}>
                <div className={"flex flex-1 flex-col gap-5 justify-start items-start"}>
                    <Logo />
                    <p className={"font-light"}>We will takedown your art on your behalf. Protect your IP. Prevent Dalle-2 from stealing your personal style.</p>

                </div>
                <div className={"flex flex-1 flex-col gap-5"}>
                    {""}
                </div>
                <div className={"flex flex-1 flex-col gap-2 justify-end items-end pt-5"}>
                    <p>Designed and Built by:</p>
                    <img className={"h-[70px]"} src={ElijahSignature} alt={""}/>
                    <img className={"h-[70px]"} src={NamanSignature} alt={""}/>
                </div>
            </div>

            <div className={"w-full border-t-2 border-stone-500 pt-5"}>
                <p className={"font-light text-dark"}>Copyright 2023, All Rights Reserved by Steal My Art Back</p>
            </div>
        </div>
    </div>
}