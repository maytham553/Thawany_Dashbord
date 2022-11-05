import React, { useState } from 'react'
import { Admin } from '../shared/Interfaces';
import { Link } from "react-router-dom";




function AdminTicket({
        id,
        name,
        addUsers,
        allPermission,
        allowMapsUser,
        allowNotification,
        allowThawanyCash,
        userAdvert,
        password,
        phone,
}: Admin) {

        return <div className="grid grid-cols-2 gap-4  p-5 rounded-lg overflow-hidden shadow-lg " >
                {/* <div className="bg-white rounded-lg pl-2">
                        Name
                </div> */}
                <div className="bg-white rounded-lg p-2 col-span-2 text-center text-white bg-rose-500">
                        {name}
                </div>
                <div>
                        Password
                </div>
                <div>
                        {password}
                </div>
                <div>
                        Phone
                </div>
                <div>
                        {phone}
                </div>
                <div>
                        Permissions
                </div>
                <div>
                        {addUsers && "Add User ,"} {allPermission && "All Permisions ,"} {allowMapsUser && "Allow Maps Users ,"} {allowNotification && "All Notification ,"} {allowThawanyCash && "Allow Thawany Cash ,"} {userAdvert && "User Advert"}
                </div>
                <Link to={{ pathname: "/EditAdmin/" + id }}>Edit</Link>
        </div>
}


export default AdminTicket