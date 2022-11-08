import { Admin } from "../shared/Interfaces"
import React from "react"
import { DangerButton, PrimaryButton } from "../../../healperComponent/tailwindComponent/HelperComponent";

interface Props {
    admin: Admin
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}


function UserRow(props: Props) {
    const { admin } = props;
    return <><tr className=" border focus:bg-gray-500 odd:bg-white even:bg-gray-200">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {admin.id}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {admin.name}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {admin.phone}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {admin.password}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <input type="checkbox" checked={admin.allPermission} />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <input type="checkbox" checked={admin.addUsers} />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <input type="checkbox" checked={admin.allowMapsUser} />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <input type="checkbox" checked={admin.allowNotification} />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <input type="checkbox" checked={admin.allowThawanyCash} />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <input type="checkbox" checked={admin.userAdvert} />
            </td>

            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <PrimaryButton id={admin.id} className="btn" text={"Edit"} onClick={props.onEdit} />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <DangerButton id={admin.id} className="btn" text={"Delete"} onClick={props.onDelete} />
            </td>
        </tr>

</>
}


export default UserRow