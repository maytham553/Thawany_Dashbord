import React  ,{ MouseEventHandler } from "react";
import { DangerButton, PrimaryButton } from "./HelperComponent";

interface Props {
    onClose: MouseEventHandler<HTMLButtonElement>;
    onConfirm: MouseEventHandler<HTMLButtonElement>;
    title: string;
    text: string;
}

function ConfirmDialog(props: Props) {

    const { onClose , onConfirm , title, text} = props;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex ">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow">
                <div>
                    <h2 className="text-xl">{title}</h2>
                    <div className="py-5">{text}</div>
                    <div className="flex justify-end">
                        <div className="p-1">
                            <PrimaryButton onClick={onClose} text={"Cancel"}/>
                        </div>
                        <div className="p-1">
                            <DangerButton onClick={(e) => { onClose(e); onConfirm(e)}} text={"Yes"}/>
                        </div>
                    </div>

                </div>
               
            </div>
        </div>


    )
}


export default ConfirmDialog