import axios from 'axios';
import React, { useState } from 'react';
import { Endpoint } from '../../../shared/Endpoint';
import { TokenConfiguration } from '../../../shared/Request';
import AdminForm from '../AdminForm';
import { IAdmin } from '../Interfaces';

function AddAdmin() {

        const defaultAdminValues: IAdmin = {
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
        const [AdminFormValues, setAdminFormValues] = useState<IAdmin>(
                defaultAdminValues
        );


        const submit = async () => {
                try {
                        const data = await axios.post(
                                Endpoint.admins.post,
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


export default AddAdmin
