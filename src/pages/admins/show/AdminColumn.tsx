import { Admin } from "../shared/Interfaces"
import React from "react"
import AdminRow from "./AdminRow";
// import UserRow from "./UserRow"

interface Props {
    admins: Admin[]
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}


function AdvsColumn(props: Props) {
    return <>
        <thead className="bg-gray-100">
            <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Phone</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Password</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">All Permission</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Add Users</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Allow Maps User</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Allow Notification</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Allow Thawany Cash</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">User Advert</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
            </tr>
        </thead>
        <tbody >
            {props.admins.map((admin, index) => {
                return <AdminRow admin={admin} key={index} onDelete={props.onDelete} onEdit={props.onEdit} />
            })}
        </tbody>
    </>

}


export default AdvsColumn