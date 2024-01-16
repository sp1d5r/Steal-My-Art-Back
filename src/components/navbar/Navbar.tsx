import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import Notifications from "../../assets/icons/Notifications.svg";
import Siren from "../../assets/icons/Siren.svg";
import Cards from "../../assets/icons/Cards.svg";
import { PrimaryButton } from '../buttons/PrimaryButton';
import {Logo} from '../logo/Logo';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface NavigationBarProps {
    className?: string;
}


export const NavigationBar: React.FC<NavigationBarProps> = ({ className = '' }) => {
    const [menuExpanded, setMenuExpanded] = useState(false);


    const comp = useRef(null);

    useEffect(()=>{
        const navbar = comp.current;
        gsap.fromTo(navbar, {
            borderRadius: 0,
            background: 'rgba(255,255,255,0)'
        }, {
            borderRadius: 10,
            background: 'rgba(236, 253, 236,1)',
            border: '1px black solid',
            duration: 0.5,
            scrollTrigger: {
                trigger: navbar,
                start: "+=50"
            }
        })

        
    }, [])


    return <div ref={comp} className="w-[98%] flex fixed top-0 sm:bg-grey-50 min-h-12 justify-between items-center gap-[90px] inline-flex px-5 py-2 navigation-bar m-[1%] z-40">
        {
            menuExpanded && <div className={"duration-75 absolute z-50 h-[100vh] w-[100vw] -top-[5px] -left-[1%] bg-primary flex flex-col px-5 py-10 justify-between"}>
                <div className="flex justify-start min-h-[70px]">
                    <Logo />
                </div>

                <div className="border-t border-black w-[90vw]" />

                <div className="gap-10 flex flex-col justify-start py-10 px-2">
                    <p className="text-black text-bold text-[1.2rem]"> Navigation options</p>
                    <p className='hover:underline font-bold underline text-[1.2rem]'
                       onClick={()=>{
                           const faq = document.getElementById("FAQ");
                           if (faq) {
                               faq.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                           }
                       }}
                    >FAQ</p>
                    <p className='hover:underline font-bold underline text-[1.2rem]' onClick={()=>{
                        const howItWorks = document.getElementById("HowItWorks");
                        if (howItWorks) {
                            howItWorks.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                        }
                    }}>Solution</p>
                    <p className='hover:underline font-bold underline text-[1.2rem]' onClick={()=>{
                        const informatino = document.getElementById("Information");
                        if (informatino) {
                            informatino.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                        }
                    }}>Explore</p>

                </div>

                <div className={"flex flex-1 gap-5 justify-end items-center flex-col "}>
                    <div className="border-t border-black h-[10px] w-[90vw]" />
                    
                    <PrimaryButton onClick={() => {window.location.href="https://calendly.com/steal-my-art-back/30min"}} className="bg-secondary px-20 py-5 rounded" children={
                                <p className="text-white text-[1rem] text-bold"> {"Register"}</p>
                            }/>
                    <div className={"w-full flex justify-center items-center border border-red-500 rounded-xl p-5 bg-red-400"} onClick={() => {setMenuExpanded(false)}}>
                        <p className={"text-white font-bold"}>
                            Close Menu
                        </p>
                    </div>
                </div>

            </div>
        }

        
        <div className="flex-1 flex justify-start md:flex-initial">
            <Logo />
        </div>

        <div className={"hidden lg:flex gap-20 justify-center items-center font-bold text-[1rem]"}>
            <p className='hover:underline'
               onClick={()=>{
                    const faq = document.getElementById("FAQ");
                    if (faq) {
                        faq.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                    }
                }}
            >FAQ</p>
            <p className='hover:underline' onClick={()=>{
                const howItWorks = document.getElementById("HowItWorks");
                if (howItWorks) {
                    howItWorks.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
            }}>Solution</p>
            <p className='hover:underline' onClick={()=>{
                const informatino = document.getElementById("Information");
                if (informatino) {
                    informatino.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
            }}>Explore</p>



            <PrimaryButton onClick={() => {window.location.href = "https://calendly.com/steal-my-art-back/30min"}} className="bg-secondary" children={
                                <p className="text-white text-[1rem] text-bold"> {"Register"}</p>
                            }/>
        </div>

        <div className={"flex lg:hidden gap-5 justify-center items-center "} onClick={() => { console.log('here'); setMenuExpanded(true)}}>
            <div className="border-l border-white w-[40px]" />
            <img src={Cards} alt={"menu"} className={"h-[50px] w-[50px]"} />
        </div>
    </div>

};