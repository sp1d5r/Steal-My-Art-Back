import React from "react";
import CircluarText from "../assets/circle-text.svg";
import Lightning from "../assets/icons/Lightning.svg";
import GirlImage from "../assets/images/girl-stock.png";
import VectorPath from "../assets/images/vector-paths.svg";
import { PrimaryButton } from "../components/buttons/PrimaryButton";
import {RegisterForm} from "../components/register-form/RegisterForm";


export interface HeroProps { 
    id:string;
    metric: number; //395
    metricInfo: string; // Professional artists have prevented their work from being used  in the training of models  like Dalle-2.
    heroText: string; // Book a Free Consultation!
    heroSubText: string; // Are you an artist tired of your work being used without your consent? Worrying about AI models copying your style or plagiarizing your creations? Fear no more! Steal My Art Back is here to empower you.
    ctaText: string; // Register
    ctaSubText: string; // Instant Access. No Credit Card Needed.
}

export const Hero : React.FC<HeroProps> = ({id, metric, metricInfo, heroText, heroSubText, ctaText, ctaSubText}) => {
    return <div className="relative w-[100vw] h-[100vh] flex justify-center items-center" id={id}>

        {/* Left Screen*/}
        <div className="hidden  flex-1 h-full relative md:flex p-5 justify-end items-end">
            <img className="absolute top-0 left-0 w-full h-full -z-10 object-cover " src={GirlImage} alt=""/>
            
            {/* LHS Content */}
            <div className="flex flex-col gap-3 px-4 py-5 sm:max-w-full max-w-[800px]" >
                <div className="flex gap-2 items-center">
                    <img className="" src={Lightning} alt=""/>
                    <p className="text-white text-[3rem] font-bold"> {metric.toString()}</p>
                </div>
                <p className="text-white text-[1rem]">
                    {metricInfo}
                </p>
            </div>
        </div>

        {/* Circular Text */}
        <div className="opacity-30 sm:opacity-50 absolute top-[20%] left-[51%] -translate-x-[100%] h-40 w-40 z-10 ">
            <img className="hover:animate-spin-slow" src={CircluarText} alt={""} />
        </div>

        {/* Right Screen*/}
        <div className="relative flex-1 w-full min-h-full bg-primary flex justify-center items-center p-5 pt-[100px] sm:pt-20">
            <img className="opacity-30 absolute bottom-0 right-0 w-[80%] object-contain " src={VectorPath} alt=""/>

             {/* LHS Content */}
             <div className=" sm:max-w-[800px] max-w-full  flex flex-col items-between justify-center gap-10 z-10 p-5">
                <h1 className="text-[2rem] sm:text-[4rem] font-bold">{heroText}</h1>
                <p className="text-[1rem]">
                    {heroSubText}
                 </p>

                 <RegisterForm  registerText={"Register"}/>

                 <p className="text-[1rem]">{ctaSubText}</p>
             </div>

        </div>
        
    </div>
}