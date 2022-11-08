import { Advertisement } from "../Shared/Interfaces"
import React from "react"
import AdvRow from "./AdvRow";
import { Table } from "../../../shared/TailwindClasses";
// import UserRow from "./UserRow"

interface Props {
    advs: Advertisement[]
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}
function AdvsColumn(props: Props) {
    return <>
        <thead className={Table.thead}>
            <tr>
                <th scope="col" className={Table.th}>#</th>
                <th scope="col" className={Table.th}>Count</th>
                <th scope="col" className={Table.th}>Total</th>
                <th scope="col" className={Table.th}>Adv URL</th>
                <th scope="col" className={Table.th}>URL Image</th>
                <th scope="col" className={Table.th}></th>
                <th scope="col" className={Table.th}></th>

            </tr>
        </thead>
        <tbody>
            {props.advs.map((adv, index) => {
                return <AdvRow Adv={adv} key={index} onDelete={props.onDelete} onEdit={props.onEdit} />
            })}
        </tbody>

    </>

}


export default AdvsColumn