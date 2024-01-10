import React, {useLayoutEffect, useRef} from "react";
import { NavigationBar } from "../components/navbar/Navbar";
import { Hero } from "../sections/hero/Hero";
import gsap from "gsap";

export interface LandingProps {
    enableAnimation: boolean;
}


export const Landing: React.FC<LandingProps> = ({enableAnimation}) => {

    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (!enableAnimation) return;


            let timeline = gsap.timeline();
            timeline.from("#intro-slider", {
                xPercent: "-100",
                duration: 0.5,
                delay: 0
            }).from(["#intro-1", "#intro-2", "#intro-3", "#intro-4"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.2
            }).to(["#intro-1", "#intro-2", "#intro-3", "#intro-4"], {
                opacity: 0,
                y: "-=30",
                stagger: 0.2
            }).to("#intro-slider", {
                xPercent: "-100",
                duration: 0.3,
                delay:0.2
            }).from("#hero", {
                opacity: 0,
                duration: 0.5
            })
        }, comp);

        return () => ctx.revert();
    }, [])


    return <div className="relative" ref={comp}>
        {enableAnimation && <div id="intro-slider" className="h-screen w-full bg-primary absolute top-0 left-0 z-50 text-[80px] text-black flex justify-center items-center gap-10 flex-wrap">
            <span id="intro-1">
                Steal 
            </span>
            <span id="intro-2">
                My
            </span >
            <span id="intro-3">
                Art
            </span>
            <span id="intro-4">
                Back!
            </span>
        </div>}
        <NavigationBar />
        <Hero
            metric={395}
            metricInfo="Professional artists have prevented their work from being used  in the training of models  like Dalle-2."
            heroText="Book a Free Consultation!"
            heroSubText="Are you an artist tired of your work being used without your consent? Worrying about AI models copying your style or plagiarizing your creations? Fear no more! Steal My Art Back is here to empower you."
            ctaText="Register"
            ctaSubText="Instant Access. No Credit Card Needed."
            id="hero"
        />
    </div>;
}