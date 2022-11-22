import { User } from "../Shared/Interfaces"
import React from "react"
import { DangerButton, PrimaryButton } from "../../../healperComponent/HelperComponent";
import { Table } from "../../../shared/TailwindClasses";

interface Props {
    User: User
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}

function UserRow(props: Props) {
    const { User } = props;
    return <>
        <tr className={Table.tr}>
            <td className={Table.td}>
                {User.id}
            </td>
            <td className={Table.td}>
                {User.name}
            </td>
            <td className={Table.td}>
                {User.phone}
            </td>
            <td className={Table.td}>
                <img src={User.image} />
            </td>
            <td className={Table.td}>
                {User.birthdate}
            </td>
            <td className={Table.td}>
                {User.countryCode}
            </td>
            <td className={Table.td}>
                {User.gender}
            </td>
            <td className={Table.td}>
                {User.tagId}
            </td>
            <td className={Table.td}>
                {User.tagScanned}
            </td>
            <td className={Table.td}>
                {User.views}
            </td>
            <td className={Table.td}>
                <input type="checkbox" defaultChecked={User.visibility} />
            </td>
            <td className={Table.td}>
                {User.method}
            </td>
            <td className={Table.td}>
                {User.token}
            </td>
            <td className={Table.td}>
                <PrimaryButton id={User.id} className="btn" text={"Edit"} onClick={props.onEdit} />
            </td>
            <td className={Table.td}>
                <DangerButton id={User.id} className="btn" text={"Delete"} onClick={props.onDelete} />
            </td>
        </tr>

    </>

}


export default UserRow