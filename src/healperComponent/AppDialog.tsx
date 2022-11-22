import React, { MouseEventHandler } from "react";

interface Props {
    onClose: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    title: string;
}

function AppDialog(props: Props) {

    const { onClose, children, title } = props;
    console.log(title)
    return (
        <div className=" flex fixed inset-0 z-50 overflow-auto bg-neutral-100 backdrop-blur-[2px]  bg-opacity-0 ">
            <div className="relative p-8 bg-neutral-900 backdrop-blur  bg-opacity-70  m-auto flex-col flex rounded-3xl shadow gap-5 animate-popup ">
                <div className="flex justify-between items-center p-4 rounded-t  ">
                    <h3 className="text-lg  font-semibold text-white uppercase">
                        {title}
                    </h3>
                    <button type="button" className="text-white bg-transparent hover:bg-white hover:text-gray-600  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal" onClick={onClose}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div>

                    <div className="flex justify-center items-center">
                        {children}
                    </div>

                </div>


            </div>
        </div>


    )
}


export default AppDialog