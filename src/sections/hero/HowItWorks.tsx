import React, {useRef, useEffect} from "react";
import gsap from "gsap";

export interface StepperCardProp {
    cardNumber: number,
    cardHeading: string,
    cardSubHeading: string,
}

const StepperCard :React.FC<StepperCardProp> = ({cardNumber, cardHeading, cardSubHeading}) => {
    return <div id={`stepper-card-${cardNumber.toString()}`}className="flex flex-col gap-5 items-center min-w-[200px] max-w-[400px]">
        <div className="flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full border border-dark">
            <p className="text-[18px] font-bold">{cardNumber.toString()}</p>
        </div>
        <p className="text-[25px] font-bold">{cardHeading}</p>
        <p className="text-[25px] text-center">{cardSubHeading}</p>
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
                    toggleActions: "restart none none restart",
                }
            }
        )
    }, [])


    const stepperVals: StepperCardProp[] = [
        {cardNumber: 1, cardHeading: "Create a Free Account", cardSubHeading: "Navigate to the sign in page and create an account."},
        {cardNumber: 2, cardHeading: "Request Art Takedown", cardSubHeading: "Our team will handle the art takedown on your behalf."},
        {cardNumber: 3, cardHeading: "View Progress ", cardSubHeading: "Go on the platform and see how your takedown requests are going."},
    ]

    return <section ref={comp} className="w-full bg-primary ">
        <div className="container flex flex-col justify-center items-center py-20 sm:py-40">
            <h1 className="text-[40px] font-bold">How does it work?</h1>
            <p className="text-[25px]">Offload your art takedown requests to us and we will handle it for you.</p>

            <div className="flex w-full gap-5 items-center mt-20 flex-wrap justify-center">
                {stepperVals.map((elem) => {
                    return <StepperCard key={elem.cardNumber} cardNumber={elem.cardNumber} cardHeading={elem.cardHeading} cardSubHeading={elem.cardSubHeading} />
                })}
            </div>
        </div>
    </section>
}