import { User } from "../Shared/Interfaces"
import React from "react"
import UserRow from "./UserRow"

interface Props {
    Users: [User]
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}
function UserColumn(props: Props) {
    return <><thead className="bg-white border-b">
        <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Phone</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Image</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Birthday</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Country code</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Gender</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Tag Id</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Tag Scanned</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Views</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">visibility</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">method</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">token</th>
        </tr>
    </thead>
        {props.Users.map(user => {
            return <UserRow User={user} key={user.id} onDelete={props.onDelete} onEdit={props.onEdit} />
        })}

    </>

}


export default UserColumn