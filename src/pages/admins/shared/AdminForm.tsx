import React, { Dispatch, SetStateAction } from "react";
import { CheckboxInput, Form, TextInput } from "../../../healperComponent/tailwindComponent/FormComponent";
import { PrimaryButton } from "../../../healperComponent/tailwindComponent/HelperComponent";
import { IAdmin } from "./Interfaces";

interface Props {
        values: IAdmin,
        setValues: Dispatch<SetStateAction<IAdmin>>
        submit: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
function AdminForm(props: Props) {
        const { values, setValues, submit } = props

        const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValues({ ...values, [e.target.id]: e.target.value })
        }
        const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValues({ ...values, [e.target.id]: e.target.checked })
        }
        return <>
                <Form>
                        <TextInput name={"name"} label={"Name"}  onChange={textHandler} value={values.name} placeholder="Name"/>
                        <TextInput name={"password"} label={"Password"} onChange={textHandler} value={values.password} placeholder="***********" type="password" />
                        <TextInput name={"phone"} label={"Phone"} onChange={textHandler} value={values.phone} placeholder="phone" />
                        <CheckboxInput name={"addUsers"} label={"Add Users"} onChange={checkboxHandler} checked={values.addUsers} />
                        <CheckboxInput name={"allPermission"} label={"All permissions"} onChange={checkboxHandler} checked={values.allPermission} />
                        <CheckboxInput name={"allowMapsUser"} label={"Allow Maps User"} onChange={checkboxHandler} checked={values.allowMapsUser} />
                        <CheckboxInput name={"allowNotification"} label={"Allow Notifications"} onChange={checkboxHandler} checked={values.allowNotification} />
                        <CheckboxInput name={"allowThawanyCash"} label={"Allow Thawany Cash"} onChange={checkboxHandler} checked={values.allowThawanyCash} />
                        <CheckboxInput name={"userAdvert"} label={"User Advert"} onChange={checkboxHandler} checked={values.userAdvert} />
                        <PrimaryButton text={"Add"} onClick={submit}/>
                </Form>
        </>
}


export default AdminForm