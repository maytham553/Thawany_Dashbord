import { Admin } from "../shared/Interfaces"
import React from "react"
import AdminRow from "./AdminRow";
import { Table } from "../../../shared/TailwindClasses";
// import UserRow from "./UserRow"

interface Props {
    admins: Admin[]
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}


function AdvsColumn(props: Props) {
    return <>
        <thead className={Table.thead}>
            <tr>
                <th scope="col" className={Table.th}>#</th>
                <th scope="col" className={Table.th}>Name</th>
                <th scope="col" className={Table.th}>Phone</th>
                <th scope="col" className={Table.th}>Password</th>
                <th scope="col" className={Table.th}>All Permission</th>
                <th scope="col" className={Table.th}>Add Users</th>
                <th scope="col" className={Table.th}>Allow Maps User</th>
                <th scope="col" className={Table.th}>Allow Notification</th>
                <th scope="col" className={Table.th}>Allow Thawany Cash</th>
                <th scope="col" className={Table.th}>User Advert</th>
                <th scope="col" className={Table.th}></th>
                <th scope="col" className={Table.th}></th>
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