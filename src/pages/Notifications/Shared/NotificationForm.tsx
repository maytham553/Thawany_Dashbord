import React, { Dispatch, SetStateAction, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import {  Form, TextInput } from "../../../healperComponent/tailwindComponent/FormComponent";
import { DangerButton, PrimaryButton } from "../../../healperComponent/tailwindComponent/HelperComponent";
import  {Notification}  from "./Interfaces";

interface Props {
        values: Notification,
        setValues: Dispatch<SetStateAction<Notification>>,
        submit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
        // cancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
        submitText: string
}
function NotificationForm(props: Props) {
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
                        <TextInput name={"title"} label={"Title"} onChange={textHandler} value={values.title} placeholder="Title" errorMessage={simpleValidator.current.message('title', values.title, 'required')} />
                        <TextInput name={"message"} label={"Message"} onChange={textHandler} value={values.message} placeholder="Message"  errorMessage={simpleValidator.current.message('message', values.message, 'required')} />
                        <DangerButton text={props.submitText} onClick={InternalSubmit} />
                        {/* <PrimaryButton onClick={props.cancel} text={submitText} />  */}
                </Form>
        </>
}


export default NotificationForm