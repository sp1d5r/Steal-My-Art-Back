import React, {useState} from "react";

export interface FAQCardProp {
    question: string,
    answer: string,
}

// write a card component that takes in a question and answer as props
export const FAQCard :React.FC<FAQCardProp> = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="flex flex-col items-center border p-5 max-w-[1000px]">
        <div className="w-full flex justify-between items-center">
            <p className="text-xl font-semibold">{question}</p>
            <button onClick={toggleOpen} className="text-xl font-bold">
            {isOpen ? '▲' : '▼'}
            </button>
        </div>
        {isOpen && (
            <div className="mt-4 text-center">
            <p className="text-lg">{answer}</p>
            </div>
        )}
        </div>
    )
}


// write a component that uses the card component to display the questions and answers
export const FAQs: React.FC = () => {
 const faqVals: FAQCardProp[] = [
        {question: "How to create an account?", answer: "To create an account navigation to the sign in page, or press the top right button."},
        {question: "How do I stop my art from being stolen?", answer: "Our team will handle the art takedown on your behalf."},
        {question: "Can you opt-out of AI art?", answer: "Yes, we help you issue takedown requests to platforms that use your art without your permission."},
        {question: "Will art be replaced by AI?", answer: "Some forms of art will become far less profitable for artists as AI replicates them with ease!"},
    ]

    return <section className="w-full ">
            <div className="container flex flex-col justify-center items-center py-20 sm:py-40">
                <h1 className="text-[40px] font-bold">Frequently Asked Questions</h1>
                <div className="flex w-full gap-5 items-center mt-20  flex-wrap justify-center">
                 {faqVals.map((elem) => {
                    return <div className="px-5 py-[30px] bg-white rounded-[10px] shadow border border-stone-500 justify-center items-center gap-[92px] inline-flex">
                        <FAQCard question={elem.question} answer={elem.answer} />
                    </div>
                })}
            </div>
            </div> 
            

        </section>
    
}
