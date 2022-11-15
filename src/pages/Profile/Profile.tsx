import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Endpoint } from '../../shared/Endpoint';
import { TokenConfiguration } from '../../shared/Request';
import AdminForm from '../admins/shared/AdminForm';
import { Admin } from '../admins/shared/Interfaces';


function Profile() {


    const defaultAdmin: Admin = {
        id: window.localStorage.getItem('id') || "",
        name: window.localStorage.getItem('name') || "",
        addUsers: Boolean(window.localStorage.getItem('addUsers')) || false,
        allPermission: Boolean(window.localStorage.getItem('allPermission')) || false,
        allowMapsUser: Boolean(window.localStorage.getItem('allowMapsUser')) || false,
        allowNotification: Boolean(window.localStorage.getItem('allowNotification')) || false,
        allowThawanyCash: Boolean(window.localStorage.getItem('allowThawanyCash')) || false,
        userAdvert: Boolean(window.localStorage.getItem('userAdvert')) || false,
        password: "",
        phone: window.localStorage.getItem('phone') || ""
    };


    const [admin, setAdmin] = useState<Admin>(defaultAdmin);


    const submitEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const data = await axios.put(
                Endpoint.admins.put(window.localStorage.getItem('id') || ""),
                admin,
                new TokenConfiguration().config
            )
            setAdmin(data.data.data);
            window.localStorage.setItem('token', data.data.data.token);
            window.localStorage.setItem('id', data.data.data.id);
            window.localStorage.setItem('name', data.data.data.name);
            window.localStorage.setItem('phone', data.data.data.phone);
            window.localStorage.setItem('addUsers', data.data.data.addUsers);
            window.localStorage.setItem('allPermission', data.data.data.allPermission);
            window.localStorage.setItem('allowMapsUser', data.data.data.allowMapsUser);
            window.localStorage.setItem('allowNotification', data.data.data.allowNotification);
            window.localStorage.setItem('allowThawanyCash', data.data.data.allowThawanyCash);
            window.localStorage.setItem('userAdvert', data.data.data.userAdvert);

            alert("Edit succes")
        } catch (error) {
            alert(error)
        }
    }

    const cancel = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAdmin(defaultAdmin)
    }


    return <AdminForm values={admin} setValues={setAdmin} submit={submitEdit} cancel={cancel} submitText={'Edit'} />

}

export default Profile