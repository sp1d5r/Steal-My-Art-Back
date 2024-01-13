import React from 'react';
import { PrimaryButton } from '../buttons/PrimaryButton';

export interface RegisterFormProps {
    registerText : string
}

export const RegisterForm :React.FC<RegisterFormProps> = ({registerText}) => {
    return <div className=" w-[90%] min-h-[50px] rounded-full bg-white border border-grey-200">
    <label className="flex justify-between p-2 pl-5">
        <input className="flex-1 text-[18px]" name="email" placeholder="Your email address"/> 
        <PrimaryButton onClick={() => {}} className="bg-secondary  px-2 py-2" children={
            <p className="text-white text-[1rem] text-bold"> {registerText}</p>
        }/>
    </label>
 </div>
}