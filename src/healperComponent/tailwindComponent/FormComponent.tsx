import React, { FC, FormHTMLAttributes, InputHTMLAttributes } from 'react';
import { taillwindClasses } from './TaillWindClasses';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}


interface Form extends FormHTMLAttributes<HTMLFormElement> {
    className?:string
}


export const TextInput: FC<InputProps> = ({ name, label , className =" ", ...rest }) => {
    return (
        <div className="mb-4" >
            <label htmlFor={name} className={taillwindClasses.labelText + " " + className}>{label}</label>
            <input type="text" id={name}  {...rest} className={taillwindClasses.inputText} /><br />
        </div>
    );
};



export const CheckboxInput: FC<InputProps> = ({ name, label , className, ...rest }) => {
    return (
        <div className="mb-4" >
            <input type="checkbox" id={name}   {...rest} className={taillwindClasses.inputCheckbox+ " "  +className } />
            <label htmlFor={name} className={taillwindClasses.labelCheckbox}>{label}</label>
        </div>

    );
};

export const Form: FC<Form> = ({ children ,  ...rest }) => {
    return (
        <form className={taillwindClasses.form}>
            {children}
        </form>
    );
};




