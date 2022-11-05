import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Endpoint } from '../../../shared/Endpoint';
import { TokenConfiguration } from '../../../shared/Request';
import AdminForm from '../shared/AdminForm';
import { IAdmin, IStatus } from '../shared/Interfaces';
import { useParams } from "react-router-dom";

interface Props {
        id?: string;
}
function EditAdmin(props: Props) {
        const { id} = useParams();
        const defaultAdminValues: IAdmin = {
                id: props.id || id,
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
        const [LoadStatus, setLoadStatus] = useState<IStatus>(
                {
                        loading: true,
                        error: false,
                        success: false,
                        errorMessage: ""
                }
        );

        // const [SubmitStatus, setSubmitStatus] = useState<IStatus>(
        //         {
        //                 loading: true,
        //                 error: false,
        //                 success: false,
        //                 errorMessage: ""
        //         }
        // );


        const getAdmin = async () => {
                try {
                        const data = await axios.get(
                                Endpoint.admins.put(AdminFormValues.id || ""),
                                new TokenConfiguration().config
                        )
                        setLoadStatus({ loading: false, error: false, success: true, errorMessage: "" })
                        setAdminFormValues(data.data.data)
                } catch (error) {
                        setLoadStatus({ loading: false, error: true, success: false, errorMessage:String(error) })
                }
        }
        const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                try {
                        const data = await axios.put(
                                Endpoint.admins.put(AdminFormValues.id || ""),
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
        }, []);

        if (LoadStatus.loading) return <div>loading</div>
        if (LoadStatus.error) return <div>{LoadStatus.errorMessage}</div>
        return <>
                <AdminForm values={AdminFormValues}
                        setValues={setAdminFormValues}
                        submit={submit}
                />
        </>
}


export default EditAdmin


