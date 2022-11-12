import React, { Dispatch, SetStateAction } from "react";
import { CheckboxInput, DateInput, Form, GenderInput, ImageInput, NumberInput, TextInput } from "../../../healperComponent/tailwindComponent/FormComponent";
import { PrimaryButton } from "../../../healperComponent/tailwindComponent/HelperComponent";
import {getBase64} from "../../../shared/HelperFunction";
import { Advertisement } from "./Interfaces";

interface Props {
    values: Advertisement,
    setValues: Dispatch<SetStateAction<Advertisement>>,
    submit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    cancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    submitText: string
}
function AdvForm(props: Props) {
    const { values, setValues, submit } = props

    const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.id]: e.target.value })
    }
    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(values)
        if (e.target.files?.length) {
            getBase64(e.target.files[0], (result: any) => {
                setValues({ ...values, imageBase64: result })
            })
        }
    }




    return <>
        <Form>
            <TextInput name={"url"} label={"URL"} onChange={textHandler} value={values.url} placeholder="url" />
            <ImageInput name={"advImage"} label={"advImage"} src={values.urlImage} onChange={imageHandler} />
            <NumberInput name={"total"} label={"Total"} onChange={textHandler} value={values.total} placeholder="Total" />
            <NumberInput name={"count"} label={"Count"} onChange={textHandler} value={values.count} placeholder="Count" />
            <PrimaryButton text={props.submitText} onClick={submit} />
            <PrimaryButton onClick={props.cancel} text={"Cancel"} />
        </Form>
    </>
}

export default AdvForm

