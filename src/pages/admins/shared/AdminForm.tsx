import React, { Dispatch, SetStateAction } from "react";
import { IAdmin } from "./Interfaces";

interface Props {
        values: IAdmin,
        setValues: Dispatch<SetStateAction<IAdmin>>
        submit: () => void
}
function AdminForm(props: Props) {
        const { values, setValues, submit } = props

        const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValues({ ...values, [e.target.name]: e.target.value })
        }
        const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValues({ ...values, [e.target.name]: e.target.checked })
        }

        return <>
                <div>
                        <label htmlFor="name">name</label>
                        <input type="text" name="name" onChange={textHandler} /><br />
                        <label htmlFor="password">password</label>
                        <input type="text" name="password" onChange={textHandler} value={values.password} /><br />
                        <label htmlFor="phone">phone</label>
                        <input type="text" name="phone" onChange={textHandler} value={values.phone} /><br />
                        <label htmlFor="addUsers">add users</label>
                        <input type="checkbox" onChange={checkboxHandler} name="addUsers" checked={values.addUsers} /><br />
                        <label htmlFor="allPermission">all permissions</label>
                        <input type="checkbox" onChange={checkboxHandler} name="allPermission" checked={values.allPermission} /><br />
                        <label htmlFor="allowMapsUser">allowMapsUser</label>
                        <input type="checkbox" onChange={checkboxHandler} name="allowMapsUser" checked={values.allowMapsUser} /><br />
                        <label htmlFor="allowNotification">allowNotification</label>
                        <input type="checkbox" onChange={checkboxHandler} name="allowNotification" checked={values.allowNotification} /><br />
                        <label htmlFor="allowThawanyCash">allowThawanyCash</label>
                        <input type="checkbox" onChange={checkboxHandler} name="allowThawanyCash" checked={values.allowThawanyCash} /><br />
                        <label htmlFor="userAdvert">userAdvert</label>
                        <input type="checkbox" onChange={checkboxHandler} name="userAdvert" checked={values.userAdvert} /><br />
                        <input type="submit" onClick={submit} />
                </div>
        </>
}


export default AdminForm