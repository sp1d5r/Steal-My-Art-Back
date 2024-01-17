import React from 'react';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useSwapBetweenComponentsABTesting } from '../ab-testing/swapBetweenComponents';

export interface RegisterFormProps {
    registerText : string
}


export const SimpleRegisterForm :React.FC<RegisterFormProps> & {identifier: string} = ({registerText}) => {
  return (
    <div className="flex items-center justify-center w-[90%] min-h-[50px]">
      <button onClick={() => {window.location.href = "https://calendly.com/steal-my-art-back/30min"}} className="bg-secondary px-10 py-5 rounded-xl hover:scale-105">
        <p className="font-bold text-white">Book a free consultation</p>
      </button>
    </div>
  );
}
SimpleRegisterForm.identifier = "SimpleRegisterForm"; // Give the component a unique identifier so that the hook can distinguish between the two components


// create a form with 3 fields and a submit button underneath, one field for email, another for phone number and a last one for free text
export const DetailedRegisterForm :React.FC<RegisterFormProps> & {identifier: string} = ({registerText}) => {
    return (
        <div className="w-[90%] bg-white border border-grey-200 p-4 mx-auto">
          <div className="mb-4">
            <input className="w-full px-3 py-2 border rounded-md" name="email" placeholder="Enter your email" />
          </div>
    
          <div className="mb-4">
            <input className="w-full px-3 py-2 border rounded-md" name="phone" placeholder="Enter your phone number" />
          </div>
    
          <div className="mb-4">
            <textarea className="w-full px-3 py-2 border rounded-md" name="freeText" placeholder="What days and times work best for our free consultation? e.g. Mondays 13:00 - 13:30"></textarea>
          </div>
    
          <PrimaryButton onClick={() => {}} className="bg-secondary px-4 py-2 mx-auto block">
            <p className="text-white text-[1rem] font-bold">{registerText}</p>
          </PrimaryButton>
        </div>
      );
}

DetailedRegisterForm.identifier = "DetailedRegisterForm";


  // Main component that uses A/B testing hook
export const RegisterFormContainer: React.FC<RegisterFormProps> = (props) => {
    // Using custom hook to pick one variant of the form
    const [ChosenRegisterForm, RegistrationFormIdentifier] = useSwapBetweenComponentsABTesting([SimpleRegisterForm, DetailedRegisterForm]);
    //TODO: add some form of logging to track which form is being used
    return <ChosenRegisterForm {...props} />;
 };

 