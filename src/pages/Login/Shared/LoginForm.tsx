import React, { Dispatch, SetStateAction, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import {  Form, TextInput } from "../../../healperComponent/FormComponent";
import { DangerButton, PrimaryButton } from "../../../healperComponent/HelperComponent";
import  {Login}  from "./Interfaces";

interface Props {
        values: Login,
        setValues: Dispatch<SetStateAction<Login>>,
        submit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
        // cancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
        submitText: string
}
function LoginForm(props: Props) {
        const { values, setValues, submit ,submitText } = props
        const simpleValidator = useRef(new SimpleReactValidator())

        const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValues({ ...values, [e.target.id]: e.target.value })
                simpleValidator.current.showMessageFor(e.target.id)
        }
      
        const InternalSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault()
                simpleValidator.current.allValid()?submit(e):alert("Please check all fields")
        }


        return <>
                <Form>
                        <TextInput name={"name"} label={"Name"} onChange={textHandler} value={values.name} placeholder="Name" errorMessage={simpleValidator.current.message('name', values.name, 'required')} />
                        <TextInput name={"password"} label={"Password"} onChange={textHandler} value={values.password} placeholder="Password"  errorMessage={simpleValidator.current.message('password', values.password, 'required')} />
                        <DangerButton text={props.submitText} onClick={InternalSubmit} />
                </Form>
        </>
}


export default LoginForm