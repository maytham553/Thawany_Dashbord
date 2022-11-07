import { Advertisement } from "../Shared/Interfaces"
import React from "react"
import AdvRow from "./AdvRow";
// import UserRow from "./UserRow"

interface Props {
    advs: Advertisement[]
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}
function AdvsColumn(props: Props) {
    return <>
        <thead className="bg-white border-b">
            <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Count</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Adv URL</th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">URL Image</th>
            </tr>
        </thead>
        {props.advs.map((adv , index) => {
            return <AdvRow Adv={adv} key={index} onDelete={props.onDelete} onEdit={props.onEdit} />
        })}

    </>

}


export default AdvsColumn