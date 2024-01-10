import React from "react";
import CircluarText from "../../assets/circle-text.svg";
import Lightning from "../../assets/icons/Lightning.svg";
import GirlImage from "../../assets/images/girl-stock.png";
import VectorPath from "../../assets/images/vector-paths.svg";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";


export interface HeroProps { 

}

export const Hero : React.FC<HeroProps> = () => {
    return <div className="relative w-full h-[90vh] flex justify-center items-center">

        {/* Left Screen*/}
        <div className="hidden  flex-1 h-full relative md:flex p-5 justify-end items-end">
            <img className="absolute top-0 left-0 w-full h-full -z-10 object-cover " src={GirlImage} alt=""/>
            
            {/* LHS Content */}
            <div className="flex flex-col gap-3 px-4 py-5 max-w-[800px]" >
                <div className="flex gap-2 items-center">
                    <img className="" src={Lightning} alt=""/>
                    <p className="text-white text-[80px] font-bold"> 395</p>
                </div>
                <p className="text-white text-[25px]">
                    Professional artists have prevented their work from being used  in the training of models  like Dalle-2.
                </p>
            </div>
        </div>

        {/* Circular Text */}
        <div className="absolute top-10 left-[51%] -translate-x-[50%] h-40 w-40 z-10 ">
            <img className="hover:animate-spin-slow" src={CircluarText} alt={""} />
        </div>

        {/* Right Screen*/}
        <div className="relative flex-1 h-full bg-primary flex justify-center items-center">
            <img className="absolute bottom-0 right-0 w-[80%] object-contain " src={VectorPath} alt=""/>

             {/* LHS Content */}
             <div className="max-w-[800px] flex flex-col items-between justify-center gap-10 z-10">
                <h1 className="text-[80px] font-bold">Book a Free Consultation!</h1>
                <p className="text-[25px]">Are you an artist tired of your work being used without your consent? Worrying about AI
                 models copying your style or plagiarizing your creations? Fear no more! Steal My Art Back is here to empower you.</p>

                 <div className=" w-full min-h-[50px] rounded-full bg-white">
                    <label className="flex justify-between p-2 pl-5">
                        <input className="flex-1 text-[18px]" name="email" placeholder="Your email address"/> 
                        <PrimaryButton onClick={() => {}} className="bg-secondary" children={
                            <p className="text-white text-[25px] text-bold"> Register</p>
                        }/>
                    </label>
                 </div>

                 <p className="text-[25px]"> Instant Access. No Credit Card Needed.</p>
             </div>

        </div>
        
    </div>
}