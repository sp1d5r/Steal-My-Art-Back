import React from 'react';

export interface CTAProps {

}

export const CTA :React.FC<CTAProps> = ({}) => {
    return <section className={"bg-primary w-full min-h-[50vh] flex justify-center items-center p-5"}>
        <div className={"container flex flex-col justify-center items-center gap-5 p-5"}>
            <h1 className='text-[2rem] font-bold '>Get Access to Steal My Art Back</h1>
            <p className='text-[1rem]'>Provide your email address and start taking down your art. </p>

            <div className={"flex gap-10 flex-col sm:flex-row"}>
                <button className={"bg-secondary px-10 py-5 rounded-xl hover:scale-105"}>
                    <p className={"font-bold text-white"}>Free Consultation</p>
                </button>

                <button className={"border border-dark px-10 py-5 rounded-xl hover:scale-105"} >
                    <p className={"font-bold text-dark"}>Contact Sales</p>
                </button>

            </div>
        </div>
    </section>
}