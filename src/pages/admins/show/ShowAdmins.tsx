import React, { useEffect, useState } from 'react'
import { IAdmin, IStatus } from '../shared/Interfaces';
import { Endpoint } from '../../../shared/Endpoint';
import { AxiosFunctions } from '../../../shared/Request';
import AdminTicket from './AdminTicket';

function ShowAdmins() {
        const [admins, setAdmins] = useState<[IAdmin]>(
                [{
                        id:"",
                        name: "",
                        addUsers: false,
                        allPermission: false,
                        allowMapsUser: false,
                        allowNotification: false,
                        allowThawanyCash: false,
                        userAdvert: false,
                        password: "",
                        phone: "",
                }]
        );
        const [status, setStatus] = useState<IStatus>(
                {
                        loading: true,
                        error: false,
                        success: false,
                        errorMessage: ""
                }
        );


        const axiosFunctions = new AxiosFunctions;

        const getAdmins = async () => {
                try {
                        const data = (await axiosFunctions.fetchData(Endpoint.admins.get))
                        setStatus({ loading: false, error: false, success: true, errorMessage: "" })
                        setAdmins(data.data.data);
                } catch (error) {
                        setStatus({ loading: false, error: true, success: false, errorMessage: String(error) })
                }
        }
        useEffect(() => {
                getAdmins()
        },[] );

        if (status.loading) return <div>loading</div>
        if (status.error) return <div>{status.errorMessage}</div>
        return <div>
                {admins.map(admin => <AdminTicket key={admin.name}
                        name={admin.name}
                        addUsers={admin.addUsers}
                        allPermission={admin.allPermission}
                        allowMapsUser={admin.allowMapsUser}
                        allowNotification={admin.allowNotification}
                        allowThawanyCash={admin.allowThawanyCash}
                        userAdvert={admin.userAdvert}
                        password={admin.password}
                        phone={admin.phone}
                />)}
        </div>
}


export default ShowAdmins