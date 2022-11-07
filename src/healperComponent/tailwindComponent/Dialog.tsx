import React  ,{ MouseEventHandler } from "react";
import { DangerButton, PrimaryButton } from "./HelperComponent";

interface Props {
    onClose: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    title: string;
}

function Dialog(props: Props) {

    const {children , title} = props;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex ">
            <div className="relative p-8 bg-white w-full  max-w-md m-auto flex-col flex rounded-lg shadow">
                <div>
                    <h2 className="text-xl">{title}</h2>
                    
                    <div className="flex justify-center">
                        {children}
                    </div>

                </div>

               
            </div>
        </div>


    )
}


export default Dialog