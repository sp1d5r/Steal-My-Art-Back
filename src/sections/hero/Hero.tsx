import React from "react";

export interface HeroProps { 

}

export const Hero : React.FC<HeroProps> = () => {
    return <div className="w-full h-[100vh] bg-green-500 flex justify-center items-center">
        <p>Hero Section Here</p>
    </div>
}