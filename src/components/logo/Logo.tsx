import React from 'react';
import LogoIcon from '../../assets/icons/Logo.svg';

export interface LogoProps {

}

export const Logo:React.FC<LogoProps> = ({}) => {
    return <div className='flex gap-5 items-center justify-center'>
        <img  className="h-[25px] sm:h-[50px]" src={LogoIcon} alt="" />
        <p className='text-[20px] md:text-[1.5rem]  font-bold'>stealmyartback</p>
    </div>
}