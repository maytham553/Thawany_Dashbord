import React, { Dispatch, SetStateAction } from "react";
import { IAdminForm } from "./Interfaces";

interface Props {
        values: IAdminForm,
        setValues: Dispatch<SetStateAction<IAdminForm>>
        submit:() => void
}
function AdminForm(props:Props) {
        const { values , setValues , submit } = props

       const  nameHandler = (e:React.ChangeEvent<HTMLInputElement>) => { 
               e.preventDefault();
               setValues({ ...values ,  [e.target.name]:( e.target.checked || e.target.value  )})
               console.log(e.target.checked || e.target.value)
        }
        return <>
                <div>
                        <label htmlFor="name">name</label>
                        <input type="text" name="name" onChange={nameHandler} value={values.name} /><br />
                        <label htmlFor="password">password</label>
                        <input type="text" name="password" onChange={nameHandler} value={values.password}/><br />
                        <label htmlFor="phone">phone</label>
                        <input type="text" name="phone" onChange={nameHandler} value={values.phone} /><br />
                        <label htmlFor="allPermission">all permissions</label>
                        <input type="checkbox" onChange={nameHandler} name="allPermission"  checked={values.allPermission} /><br />
                        <label htmlFor="allowMapsUser">allowMapsUser</label>
                        <input type="checkbox" onChange={nameHandler} name="allowMapsUser" checked={values.allowMapsUser} /><br />
                        <label htmlFor="allowNotification">allowNotification</label>
                        <input type="checkbox" onChange={nameHandler} name="allowNotification"  checked={values.allowNotification} /><br />
                        <label htmlFor="allowThawanyCash">allowThawanyCash</label>
                        <input type="checkbox" onChange={nameHandler}  name="allowThawanyCash" checked={values.allowThawanyCash} /><br />
                        <label htmlFor="userAdvert">userAdvert</label>
                        <input type="checkbox" onChange={nameHandler} name="userAdvert" checked={values.userAdvert} /><br />
                </div>
        </>
}


export default AdminForm