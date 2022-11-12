import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Endpoint } from '../../shared/Endpoint';
import { TokenConfiguration } from '../../shared/Request';
import { Login } from "./Shared/Interfaces";
import LoginForm from './Shared/LoginForm';



function LoginContainer() {


    const [adminLogin, setAdminLogin] = useState<Login>(
        {
            name: "",
            password: "",
        }

    );




    const submitAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const data = await axios.post(
                Endpoint.admins.login,
                { phone: adminLogin.name, password: adminLogin.password }
            )
            
            window.localStorage.setItem('token', data.data.data.token);
            window.localStorage.setItem('name', data.data.data.name);
            window.localStorage.setItem('phone', data.data.data.phone);
            window.localStorage.setItem('addUsers', data.data.data.addUsers);
            window.localStorage.setItem('allPermission', data.data.data.allPermission);
            window.localStorage.setItem('allowMapsUser', data.data.data.allowMapsUser);
            window.localStorage.setItem('allowNotification', data.data.data.allowNotification);
            window.localStorage.setItem('allowThawanyCash', data.data.data.allowThawanyCash);
            window.localStorage.setItem('userAdvert', data.data.data.userAdvert);

            alert("Admin valid")
        } catch (error) {
            alert(error)
        }
    }






    return <div >
        <LoginForm values={adminLogin} setValues={setAdminLogin} submit={submitAdd} submitText={'Login'} />
    </div>
}


export default LoginContainer