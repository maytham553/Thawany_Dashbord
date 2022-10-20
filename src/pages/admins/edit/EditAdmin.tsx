import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Endpoint } from '../../../shared/Endpoint';
import { TokenConfiguration } from '../../../shared/Request';
import AdminForm from '../AdminForm';
import { IAdmin } from '../Interfaces';

interface Props  {
        id: string;
}
function EditAdmin(props: Props) {

        const defaultAdminValues: IAdmin = {
                id:props.id,
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

        
        const getAdmin = async () => {
                try {
                        const data = await axios.get(
                                Endpoint.admins.put(AdminFormValues.id||""),
                                new TokenConfiguration().config
                        )
                        setAdminFormValues(data.data.data)
                } catch (error) {
                        AdminFormValues.id==="" ?alert("Admin Id not Exist"):
                        alert(error)
                }
        }
        const submit = async () => {
                try {
                        const data = await axios.put(
                                Endpoint.admins.put(AdminFormValues.id||""),
                                AdminFormValues,
                                new TokenConfiguration().config
                        )
                        alert("succes")
                } catch (error) {
                        alert(error)
                }
        }

        useEffect(() => {
                getAdmin()
        },[] );

        return <>
                <AdminForm values={AdminFormValues}
                        setValues={setAdminFormValues}
                        submit={submit}
                />
        </>
}


export default EditAdmin
