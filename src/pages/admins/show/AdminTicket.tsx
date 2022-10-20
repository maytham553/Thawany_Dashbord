import React, { useState } from 'react'
import { IAdmin } from '../Interfaces';




function AdminTicket({
        name,
        addUsers,
        allPermission,
        allowMapsUser,
        allowNotification,
        allowThawanyCash,
        userAdvert,
        password,
        phone,
}: IAdmin) {
        return <div>
                <span>{name}</span>
                <span>{String(addUsers)}</span>
                <span>{allPermission}</span>
                <span>{allowMapsUser}</span>
                <span>{allowNotification}</span>
                <span>{allowThawanyCash}</span>
                <span>{userAdvert}</span>
                <span>{password}</span>
                <span>{phone}</span>
        </div>
}


export default AdminTicket