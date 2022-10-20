import React, { useState } from 'react';
import AdminForm from '../AdminForm';
import { IAdminForm } from '../Interfaces';

function AddAdminForm() {
        const [AdminFormValues, setAdminFormValues] = useState<IAdminForm>(
                {
                        name: "",
                        password: "",
                        phone: "",
                        addUsers: false,
                        allPermission: false,
                        allowMapsUser: false,
                        allowNotification: false,
                        allowThawanyCash: false,
                        userAdvert: false,
                }
        );

        const submit = () => { 
                console.log(AdminFormValues)
        }

        return <>
                <AdminForm values={AdminFormValues}
                        setValues={setAdminFormValues}
                        submit={submit}
                />
        </>
}


export default AddAdminForm
