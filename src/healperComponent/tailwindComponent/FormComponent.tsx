import React, { FC, FormHTMLAttributes, InputHTMLAttributes } from 'react';
import { taillwindClasses } from './TaillWindClasses';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}


interface Form extends FormHTMLAttributes<HTMLFormElement> {
    className?: string
}


export const TextInput: FC<InputProps> = ({ name, label, className = " ", ...rest }) => {
    return (
        <div className="mb-4" >
            <label htmlFor={name} className={taillwindClasses.labelText + " " + className}>{label}</label>
            <input type="text" id={name}  {...rest} className={taillwindClasses.inputText} /><br />
        </div>
    );
};

export const NumberInput: FC<InputProps> = ({ name, label, className = " ", ...rest }) => {
    return (
        <div className="mb-4" >
            <label htmlFor={name} className={taillwindClasses.labelText + " " + className}>{label}</label>
            <input type="number" id={name}  {...rest} className={taillwindClasses.inputText} /><br />
        </div>
    );
};

export const DateInput: FC<InputProps> = ({ name, label, className = " ", ...rest }) => {
    return (
        <div className="mb-4" >
            <label htmlFor={name} className={taillwindClasses.labelText + " " + className}>{label}</label>
            <input type="date" id={name}  {...rest} className={taillwindClasses.inputText} /><br />
        </div>
    );
};

export const GenderInput: FC<InputProps> = ({ name, label, className = " ", value, ...rest }) => {
    return (
        <div className="mb-4 flex flex-wrap" >
            <div className="flex items-center mr-4">
                <input type="radio" id={name} value="Male" name={name} {...rest} className={taillwindClasses.radio + " " + className} checked={value === "Male"}
                />
                <label htmlFor="Male" className={taillwindClasses.radioText}>Male</label>
            </div>
            <div className="flex items-center mr-4">
                <input type="radio" id={name} value="Female" name={name} {...rest} className={taillwindClasses.radio + " " + className} checked={value === "Female"} />
                <label htmlFor="female" className={taillwindClasses.radioText}>Female</label>
            </div>
        </div>
    );
};





export const CheckboxInput: FC<InputProps> = ({ name, label, className, ...rest }) => {
    return (
        <div className="mb-4" >
            <input type="checkbox" id={name}   {...rest} className={taillwindClasses.inputCheckbox + " " + className} />
            <label htmlFor={name} className={taillwindClasses.labelCheckbox}>{label}</label>
        </div>

    );
};

export const Form: FC<Form> = ({ children, ...rest }) => {
    return (
        <form className={taillwindClasses.form}>
            {children}
        </form>
    );
};



export const ImageInput: FC<InputProps> = ({ name, label, className = " ", ...rest }) => {
    return (
        <div className="mb-4" >
            <label htmlFor={name} className={taillwindClasses.labelText + " " + className}>{label}</label>
            <input type="file" accept="image/*" alt="Submit" width="48" height="48" id={name}  {...rest} className={taillwindClasses.inputText} />
            <br />
        </div>
    );
};




