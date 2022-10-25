import React, { ButtonHTMLAttributes, FC } from 'react';
import { taillwindClasses } from './TaillWindClasses';
interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
}
export const PrimaryButton: FC<Button> = ({ text, className = " ", ...rest }) => {
    return (<button   {...rest} className={taillwindClasses.button + " " + className}>{text} </button>);
};