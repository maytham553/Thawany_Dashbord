import React, { ButtonHTMLAttributes, FC } from 'react';
import { taillwindClasses } from './TaillWindClasses';
interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}
export const PrimaryButton: FC<Button> = ({ text, className = " ", ...rest }) => {
    return (<button   {...rest} className={taillwindClasses.button + " " + className}>{text} </button>);
};

export const DangerButton: FC<Button> = ({ text, className = " ", ...rest }) => {
    return (<button   {...rest} className={taillwindClasses.DangerButton + " " + className}>{text} </button>);
};

export const FloatingButton: FC<Button> = ({ text, className = " ", ...rest }) => {
    return (<button   {...rest} className={taillwindClasses.floatingButton + " " + className}>{text} </button>);
};
