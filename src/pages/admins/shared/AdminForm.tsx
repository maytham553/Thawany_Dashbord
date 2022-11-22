import React, { Dispatch, SetStateAction, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { CheckboxInput, Form, TextInput } from "../../../healperComponent/FormComponent";
import { DangerButton, PrimaryButton } from "../../../healperComponent/HelperComponent";
import { Admin } from "./Interfaces";

interface Props {
        values: Admin,
        setValues: Dispatch<SetStateAction<Admin>>,
        submit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
        cancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
        submitText: string
}
function AdminForm(props: Props) {
        const { values, setValues, submit } = props
        const simpleValidator = useRef(new SimpleReactValidator())

        const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValues({ ...values, [e.target.id]: e.target.value })
                simpleValidator.current.showMessageFor(e.target.id)
        }
        const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValues({ ...values, [e.target.id]: e.target.checked })
        }
        const InternalSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault()
                simpleValidator.current.allValid()?submit(e):alert("Please check all fields")
        }


        return <>
                <Form>
                        <TextInput name={"name"} label={"Name"} onChange={textHandler} value={values.name} placeholder="Name" errorMessage={simpleValidator.current.message('name', values.name, 'required')} />
                        <TextInput name={"password"} label={"Password"} onChange={textHandler} value={values.password} placeholder="***********" type="password" errorMessage={simpleValidator.current.message('password', values.password, 'required')} />
                        <TextInput name={"phone"} label={"Phone"} onChange={textHandler} value={values.phone} placeholder="phone" errorMessage={simpleValidator.current.message('phone', values.phone, 'phone|required')} />
                        <CheckboxInput name={"addUsers"} label={"Add Users"} onChange={checkboxHandler} checked={values.addUsers} />
                        <CheckboxInput name={"allPermission"} label={"All permissions"} onChange={checkboxHandler} checked={values.allPermission} />
                        <CheckboxInput name={"allowMapsUser"} label={"Allow Maps User"} onChange={checkboxHandler} checked={values.allowMapsUser} />
                        <CheckboxInput name={"allowNotification"} label={"Allow Notifications"} onChange={checkboxHandler} checked={values.allowNotification} />
                        <CheckboxInput name={"allowThawanyCash"} label={"Allow Thawany Cash"} onChange={checkboxHandler} checked={values.allowThawanyCash} />
                        <CheckboxInput name={"userAdvert"} label={"User Advert"} onChange={checkboxHandler} checked={values.userAdvert} />
                        <DangerButton text={props.submitText} onClick={InternalSubmit} />
                        <PrimaryButton onClick={props.cancel} text={"Cancel"} />
                </Form>
        </>
}


export default AdminForm