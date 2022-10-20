import axios from 'axios';
import React, { useState } from 'react';
import { Endpoint } from '../../../shared/Endpoint';
import { TokenConfiguration } from '../../../shared/Request';
import AdminForm from '../AdminForm';
import { IAdminForm } from '../Interfaces';

function AddAdminForm() {

        const defaultAdminValues: IAdminForm = {
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
        const [AdminFormValues, setAdminFormValues] = useState<IAdminForm>(
                defaultAdminValues
        );


        const submit = async () => {
                try {
                        const data = await axios.post(
                                Endpoint.admins.get,
                                AdminFormValues,
                                new TokenConfiguration().config
                        )
                        alert("succes")
                        setAdminFormValues(defaultAdminValues)
                } catch (error) {
                        alert(error)
                }
        }

        return <>
                <AdminForm values={AdminFormValues}
                        setValues={setAdminFormValues}
                        submit={submit}
                />
        </>
}


export default AddAdminForm
