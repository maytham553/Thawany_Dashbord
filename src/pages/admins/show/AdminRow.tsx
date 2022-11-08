import { Admin } from "../shared/Interfaces"
import React from "react"
import { DangerButton, PrimaryButton } from "../../../healperComponent/tailwindComponent/HelperComponent";
import { Table } from "../../../shared/TailwindClasses";

interface Props {
    admin: Admin
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}


function UserRow(props: Props) {
    const { admin } = props;
    return <><tr className={Table.tr}>
            <td className={Table.td}>
                {admin.id}
            </td>
            <td className={Table.td}>
                {admin.name}
            </td>
            <td className={Table.td}>
                {admin.phone}
            </td>
            <td className={Table.td}>
                {admin.password}
            </td>
            <td className={Table.td}>
                <input type="checkbox" defaultChecked={admin.allPermission} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" defaultChecked={admin.addUsers} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" defaultChecked={admin.allowMapsUser} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" defaultChecked={admin.allowNotification} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" defaultChecked={admin.allowThawanyCash} />
            </td>
            <td className={Table.td}>
                <input type="checkbox"  defaultChecked={admin.userAdvert} />
            </td>

            <td className={Table.td}>
                <PrimaryButton id={admin.id} className="btn" text={"Edit"} onClick={props.onEdit} />
            </td>
            <td className={Table.td}>
                <DangerButton id={admin.id} className="btn" text={"Delete"} onClick={props.onDelete} />
            </td>
        </tr>

</>
}


export default UserRow