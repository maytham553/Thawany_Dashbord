import { User } from "../Shared/Interfaces"
import React from "react"
import UserRow from "./UserRow"
import { Table } from "../../../shared/TailwindClasses";

interface Props {
    Users: [User]
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}
function UserColumn(props: Props) {
    return <><thead className={Table.thead}>
        <tr>
            <th scope="col" className={Table.th}>#</th>
            <th scope="col" className={Table.th}>Name</th>
            <th scope="col" className={Table.th}>Phone</th>
            <th scope="col" className={Table.th}>Image</th>
            <th scope="col" className={Table.th}>Birthday</th>
            <th scope="col" className={Table.th}>Country code</th>
            <th scope="col" className={Table.th}>Gender</th>
            <th scope="col" className={Table.th}>Tag Id</th>
            <th scope="col" className={Table.th}>Tag Scanned</th>
            <th scope="col" className={Table.th}>Views</th>
            <th scope="col" className={Table.th}>visibility</th>
            <th scope="col" className={Table.th}>method</th>
            <th scope="col" className={Table.th}>token</th>
            <th scope="col" className={Table.th}></th>
            <th scope="col" className={Table.th}></th>

        </tr>
    </thead>
        <tbody>
            {props.Users.map(user => {
                return <UserRow User={user} key={user.id} onDelete={props.onDelete} onEdit={props.onEdit} />
            })}
        </tbody>
    </>

}


export default UserColumn