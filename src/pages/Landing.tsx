import React from "react";
import { NavigationBar } from "../components/navbar/Navbar";
import { Hero } from "../sections/hero/Hero";

export interface LandingProps {

}


export const Landing: React.FC<LandingProps> = () => {
    return <div>
        <NavigationBar />
        <Hero
            metric={395}
            metricInfo="Professional artists have prevented their work from being used  in the training of models  like Dalle-2."
            heroText="Book a Free Consultation!"
            heroSubText="Are you an artist tired of your work being used without your consent? Worrying about AI models copying your style or plagiarizing your creations? Fear no more! Steal My Art Back is here to empower you."
            ctaText="Register"
            ctaSubText="Instant Access. No Credit Card Needed."
        />
    </div>;
}