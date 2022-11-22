import React, { Dispatch, SetStateAction } from "react";
import { CheckboxInput, DateInput, Form, GenderInput, NumberInput, TextInput } from "../../../healperComponent/FormComponent";
import { PrimaryButton } from "../../../healperComponent/HelperComponent";
import { User } from "./Interfaces";

interface Props {
    values: User,
    setValues: Dispatch<SetStateAction<User>>,
    submit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    cancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    submitText: string
}
function UserForm(props: Props) {
    const { values, setValues, submit } = props
    let stringDate = "";
    const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.id]: e.target.value })

    }
    const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.id]: e.target.id })
    }
    const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.id]: e.target.checked })
    }

    if (values.birthdate) {
        const date = new Date(values.birthdate);
        stringDate = date.toISOString().split('T')[0];
    }
    return <>
        <Form>
            <TextInput name={"name"} label={"Name"} onChange={textHandler} value={values.name} placeholder="Name" />
            <TextInput name={"phone"} label={"Phone"} onChange={textHandler} value={values.phone} placeholder="phone" />
            <DateInput name={"birthdate"} label={"Birthdate"} onChange={textHandler} value={stringDate} />
            <TextInput name={"countryCode"} label={"Country Code"} onChange={textHandler} value={values.countryCode} placeholder="countryCode" />
            <GenderInput name={"gender"} label={"Gender"} onChange={textHandler} value={values.gender} />
            <TextInput name={"tagId"} label={"tag Id"} onChange={textHandler} value={values.tagId} placeholder="tag Id" />
            <NumberInput name={"tagScanned"} label={"Tag scanned"} onChange={textHandler} value={values.tagScanned} placeholder="Tag Scanned" />
            <NumberInput name={"views"} label={"views"} onChange={textHandler} value={values.views} placeholder="views" />
            <CheckboxInput name={"visibility"} label={"visibility"} onChange={checkboxHandler} checked={values.visibility} />
            <TextInput name={"method"} label={"method"} onChange={textHandler} value={values.method} placeholder="method" />
            <PrimaryButton text={props.submitText} onClick={submit} />
            <PrimaryButton onClick={props.cancel} text={"Cancel"} />
        </Form>
    </>
}

// image: string;
export default UserForm