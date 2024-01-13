import React, {useRef, useEffect} from "react";
import gsap from "gsap";

export interface StepperCardProp {
    cardNumber: number,
    cardHeading: string,
    cardSubHeading: string,
}

const StepperCard :React.FC<StepperCardProp> = ({cardNumber, cardHeading, cardSubHeading}) => {
    return <div id={`stepper-card-${cardNumber.toString()}`}className="flex flex-col gap-5 items-center min-w-[200px] max-w-[400px] min-h-[150px] hover:scale-5">
        <div className="flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full border border-dark hover:bg-accent">
            <p className="text-[1rem] font-bold">{cardNumber.toString()}</p>
        </div>
        <p className="text-[1rem] font-bold">{cardHeading}</p>
        <p className="text-[1rem] text-center">{cardSubHeading}</p>
    </div>
}


export interface HowItWorksProps {

}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
    const comp = useRef(null);

    useEffect(()=>{
        const steppers = comp.current;
        gsap.fromTo(["#stepper-card-1", "#stepper-card-2", "#stepper-card-3"], {
            opacity: 0,
            y: "+=30",
            },
            {
                opacity: 1,
                y: "30",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: steppers,
                    start: "top 40%",
                    toggleActions: "play none none none",
                }
            }
        )
    }, [])


    const stepperVals: StepperCardProp[] = [
        {cardNumber: 1, cardHeading: "Create a Free Account", cardSubHeading: "Navigate to the sign in page and create an account."},
        {cardNumber: 2, cardHeading: "Request Art Takedown", cardSubHeading: "Our team will handle the art takedown on your behalf."},
        {cardNumber: 3, cardHeading: "View Progress ", cardSubHeading: "Go on the platform and see how your takedown requests are going."},
    ]

    return <section ref={comp} className="w-full bg-primary py-10">
        <div className="container flex flex-col justify-center items-center py-10 sm:py-20 !px-10">
            <h1 className="text-[3rem] font-bold">How does it work?</h1>
            <p className="text-[1rem]">Offload your art takedown requests to us and we will handle it for you.</p>

            <div className="flex w-full gap-10 items-start mt-10 flex-wrap justify-center min-h-[250px]">
                {stepperVals.map((elem) => {
                    return <StepperCard key={elem.cardNumber} cardNumber={elem.cardNumber} cardHeading={elem.cardHeading} cardSubHeading={elem.cardSubHeading} />
                })}
            </div>
        </div>
    </section>
}