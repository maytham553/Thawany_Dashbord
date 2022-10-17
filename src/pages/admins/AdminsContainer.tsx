import React, { useState } from 'react';
import { Endpoint } from '../../shared/Endpoint';
import { AxiosFunctions } from '../../shared/Request';

interface IAdmin {
        name: string;
        addUsers: boolean;
        allPermission: boolean;
        allowMapsUser: boolean;
        allowNotification: boolean;
        allowThawanyCash: boolean;
        userAdvert: boolean;
        password: string;
        phone: string;
}
function AdminsContainer() { 

        const testObject: IAdmin = {
                
                "name": " qasim",
                "addUsers": false,
                "allPermission": true,
                "allowMapsUser": true,
                "allowNotification": true,
                "allowThawanyCash": false,
                "userAdvert": false,
                "password": "1212",
                "phone": "+9647807690407"
        };

        const [Admins, setAdmis] = useState<[IAdmin]>(
                [{
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

        const getAdmins = async () => {
                const data = (await axiosFunctions.fetchData(Endpoint.admins.get))
                setAdmis(data.data.data[0]);
        }

        const axiosFunctions = new AxiosFunctions;

        return <div>
                <button onClick={async () => { console.log(await axiosFunctions.submitData(Endpoint.admins.post, testObject)); }} > postData</button>
                <button onClick={async () => { console.log(await axiosFunctions.updateData(Endpoint.admins.put("a808d199-6bd6-4a39-b13d-77ba4931d4c9"), testObject)); }} > updateData</button>
                <button onClick={() => { getAdmins(); console.log(Admins); }} > getData</button>
                <button onClick={async () => { console.log(await axiosFunctions.fetchData(Endpoint.admins.getById("a808d199-6bd6-4a39-b13d-77ba4931d4c9"))); }} > get one item</button>
                <button onClick={async () => { console.log(await axiosFunctions.delete(Endpoint.admins.delete("a808d199-6bd6-4a39-b13d-77ba4931d4c9"))); }} > delete item</button>

        </div>
}

export default AdminsContainer;