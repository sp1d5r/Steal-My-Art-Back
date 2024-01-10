import React from "react";
import { NavigationBar } from "../components/navbar/Navbar";
import { Hero } from "../sections/hero/Hero";

export interface LandingProps {

}

export const Landing: React.FC<LandingProps> = () => {
    return <div>
        <NavigationBar />
        <Hero />
    </div>;
}