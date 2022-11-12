import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Endpoint } from '../../shared/Endpoint';
import { TokenConfiguration } from '../../shared/Request';
import { Notification } from "./Shared/Interfaces";
import NotificationForm from './Shared/NotificationForm';



function NotificationContainer() {


    const [notification, setNotification] = useState<Notification>(
        {
            title: "",
            body: ""
        }

    );




    const submitAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const data = await axios.post(
                Endpoint.notification.post,
                notification,
                new TokenConfiguration().config
            )
            setNotification({
                title: "",
                body: ""
            })
            alert("notification sent")
        } catch (error) {
            alert(error)
        }
    }






    return <>
        <NotificationForm values={notification} setValues={setNotification} submit={submitAdd} submitText={'Send'} />
    </>
}


export default NotificationContainer