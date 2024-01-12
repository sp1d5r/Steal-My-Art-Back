import React, { ReactNode } from "react";

export interface ButtonProps {
    className?: string;
    children: ReactNode;
    onClick: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({children, onClick, className = ''}) => {
    return <button className={className + ' rounded-full sm:px-[30px] sm:py-[15px]'}>
        {children}
    </button>
}