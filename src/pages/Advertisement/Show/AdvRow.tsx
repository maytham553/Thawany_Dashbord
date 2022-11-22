import { Advertisement } from "../Shared/Interfaces"
import React from "react"
import { DangerButton, PrimaryButton } from "../../../healperComponent/HelperComponent";
import { Table } from "../../../shared/TailwindClasses";

interface Props {
    Adv: Advertisement
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}



function AdvRow(props: Props) {
    const { Adv } = props;
    return <>
        <tr className={Table.tr}>
            <td className={Table.td}>
                {Adv.id}
            </td>
            <td className={Table.td}>
                {Adv.count}
            </td>
            <td className={Table.td}>
                {Adv.total}
            </td>
            <td className={Table.td}>
                {Adv.url}
            </td>
            <td className={Table.td}>
                <img src={Adv.urlImage} width="75" height="75"/>
            </td>

            <td className={Table.td}>
                <PrimaryButton id={Adv.id} className="btn" text={"Edit"} onClick={props.onEdit} />
            </td>
            <td className={Table.td}>
                <DangerButton id={Adv.id} className="btn" text={"Delete"} onClick={props.onDelete} />
            </td>
        </tr>

    </>

}


export default AdvRow