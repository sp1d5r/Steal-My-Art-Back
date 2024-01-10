import React, { useState } from 'react';
import Notifications from "../../assets/icons/Notifications.svg";
import Siren from "../../assets/icons/Siren.svg";
import Cards from "../../assets/icons/Cards.svg";
import ChevronDown from "../../assets/icons/ChevronDown.svg";

export interface NavigationBarProps {
    className?: string;
}



export const NavigationBar: React.FC<NavigationBarProps> = ({ className = '' }) => {
    const [menuExpanded, setMenuExpanded] = useState(false);

    return <div className="w-full flex sticky top-0 bg-background min-h-12 shadow justify-start items-center gap-[90px] inline-flex px-10 py-5 navigation-bar z-10">
        {
            menuExpanded && <div className={"absolute z-20 h-[100vh] w-[100vw] top-0 left-0 bg-background flex flex-col px-10 py-5 justify-between"}>
                <div className="flex justify-start min-h-[50px]">
                    <p>logo</p>
                </div>

                <div className="border-t border-white w-[80vw]" />

                <div className="gap-5 flex flex-col justify-start py-5">
                    <p className="text-white"> Navigation options</p>
                </div>

                <div className={"flex flex-1 gap-5 justify-end items-center flex-col "}>
                    <div className="border-t border-white h-[10px] w-[80vw]" />
                    <div className="flex gap-2 w-full px-10">
                        <img src={Notifications} alt={"Notifications"} />
                        <p className="text-white">
                            Notifications
                        </p>
                    </div>
                    <div className="flex gap-2 w-full px-10">
                        <img src={Siren} alt={"Siren"} />
                        <p className="text-white">
                            Announcements
                        </p>
                    </div>
                    
                    <a href={"/sign-up"}>
                        <p className={"m-0 text-center text-stone-50 text-base font-normal font-['Inter']"}>
                            Sign Up
                        </p>
                    </a>
                    <div className={"w-full flex justify-center items-center border border-red-500 rounded-xl p-5 bg-red-400"} onClick={() => {setMenuExpanded(false)}}>
                        <p className={"text-white font-bold"}>
                            Close Menu
                        </p>
                    </div>
                </div>

            </div>
        }

        
        <div className="flex-1 flex justify-start md:flex-initial">
        <p>logo</p>
        </div>
        <div className="border-l border-white h-12 w-[10px] hidden md:flex" />
        <div className="flex-1 gap-10 hidden md:flex">
            <p className={"text-center text-grey-500 text-base font-normal font-['Inter']"}>Demo</p>
        </div>

        <div className={"hidden md:flex gap-5 justify-center items-center "}>
            <div className="border-l border-white h-12 w-[10px]" />
            <img src={Notifications} alt={"Notifications"} />
            <img src={Siren} alt={"Siren"} />
            <a href={"/sign-up"}>
                <p className={"m-0 text-center text-grey-500 text-base font-normal font-['Inter']"}>
                    Sign Up
                </p>
            </a>
        </div>

        <div className={"flex md:hidden gap-5 justify-center items-center "} onClick={() => {setMenuExpanded(true)}}>
            <div className="border-l border-white h-12 w-[10px]" />
            <img src={Cards} alt={"menu"} className={"h-full"} />
        </div>
    </div>

};