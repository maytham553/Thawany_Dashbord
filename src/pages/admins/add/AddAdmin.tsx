import axios from 'axios';
import React, { useState } from 'react';
import { Endpoint } from '../../../shared/Endpoint';
import { TokenConfiguration } from '../../../shared/Request';
import AdminForm from '../shared/AdminForm';
import { Admin } from '../shared/Interfaces';

function AddAdmin() {

        const defaultAdminValues: Admin = {
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
        const [AdminFormValues, setAdminFormValues] = useState<Admin>(
                defaultAdminValues
        );


        const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                try {
                        const data = await axios.post(
                                Endpoint.admins.post,
                                AdminFormValues,
                                new TokenConfiguration().config
                        )
                        alert("succes")
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
