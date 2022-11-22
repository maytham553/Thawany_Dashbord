import { Admin } from "../shared/Interfaces"
import React from "react"
import { DangerButton, PrimaryButton } from "../../../healperComponent/HelperComponent";
import { Table } from "../../../shared/TailwindClasses";

interface Props {
    admin: Admin
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}


function UserRow(props: Props) {
    const { admin } = props;

    const onChangeCheckbox = ()=>{return 0}
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
                <input type="checkbox" checked={admin.allPermission} onChange={onChangeCheckbox} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" checked={admin.addUsers} onChange={onChangeCheckbox} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" checked={admin.allowMapsUser} onChange={onChangeCheckbox} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" checked={admin.allowNotification} onChange={onChangeCheckbox} />
            </td>
            <td className={Table.td}>
                <input type="checkbox" checked={admin.allowThawanyCash} onChange={onChangeCheckbox} />
            </td>
            <td className={Table.td}>
                <input type="checkbox"  checked={admin.userAdvert} onChange={onChangeCheckbox} />
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