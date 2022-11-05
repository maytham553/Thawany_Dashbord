import React, { useEffect, useState } from 'react'
import { Admin } from '../shared/Interfaces';
import { Endpoint } from '../../../shared/Endpoint';
import { AxiosFunctions } from '../../../shared/Request';
import AdminTicket from './AdminTicket';
import { Status } from '../../../shared/Interfaces';

function ShowAdmins() {
        const [admins, setAdmins] = useState<[Admin]>(
                [{
                        id: "",
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
        const [status, setStatus] = useState<Status>(
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
        }, []);

        if (status.loading) return <div>loading</div>
        if (status.error) return <div>{status.errorMessage}</div>
        return <div className={"grid grid-cols-3 gap-4 m-10 p-5"} >
                {admins.map((admin, index) => <AdminTicket key={index}
                        id={admin.id}
                        name={admin.name}
                        addUsers={admin.addUsers}
                        allPermission={admin.allPermission}
                        allowMapsUser={admin.allowMapsUser}
                        allowNotification={admin.allowNotification}
                        allowThawanyCash={admin.allowThawanyCash}
                        userAdvert={admin.userAdvert}
                        password={admin.password}
                        phone={admin.phone}
                />
                )}
        </div>
}


export default ShowAdmins