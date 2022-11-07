import { Advertisement } from "../Shared/Interfaces"
import React from "react"
import { DangerButton, PrimaryButton } from "../../../healperComponent/tailwindComponent/HelperComponent";

interface Props {
    Adv: Advertisement
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
}



function AdvRow(props: Props) {
    const { Adv } = props;
    return <tbody>
        <tr className="bg-gray-100 border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {Adv.id}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {Adv.count}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {Adv.total}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {Adv.url}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img src={Adv.urlImage} width="75" height="75"/>
            </td>

            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <PrimaryButton id={Adv.id} className="btn" text={"Edit"} onClick={props.onEdit} />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <DangerButton id={Adv.id} className="btn" text={"Delete"} onClick={props.onDelete} />
            </td>
        </tr>

    </tbody>

}


export default AdvRow