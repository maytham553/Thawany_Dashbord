import React, { useEffect, useState } from 'react'
import { Notification } from "./Shared/Interfaces";
import NotificationForm from './Shared/NotificationForm';



function NotificationContainer() {


    const [notification, setNotification] = useState<Notification>(
        {
            title: "",
            message: ""
        }

    );




    const submitAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(notification)
        // try {
        //         const data = await axios.put(
        //                 Endpoint.users.put(user.id),
        //                 user,
        //                 new TokenConfiguration().config
        //         )
        //         const users: any = Users.filter(user => user.id != dilog.Id);
        //         users.push(data);
        //         setUsers(users);
        //         alert("Edit succes")
        // } catch (error) {
        //         alert(error)
        // }
    }






    return <>
        <NotificationForm values={notification} setValues={setNotification } submit={submitAdd} submitText={'Send'} />
    </>
}


export default NotificationContainer