import { positions, transitions } from 'react-alert'
import * as React from 'react';


export const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}
export const AlertTemplate = ({ style, options, message, close }: any) => (
    <div style={style} >
        {options.type === 'info' &&
            <> <div className="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative w-[90vw] sm:w-[60vw] md:w-[40vw]" role="alert">
                <span className="text-xs md:text-sm block sm:inline"><strong className="text-xs md:text-sm font-bold">warning:</strong> {message}.</span>
                <button className="m-1" onClick={close}>X</button>
            </div>
            </>
        }

        {options.type === 'success' &&
            <>  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3   rounded relative flex row justify-between items-center w-[90vw] sm:w-[60vw] md:w-[40vw]" role="alert">
                <span className="text-xs md:text-sm block sm:inline"><strong className="text-xs md:text-sm font-bold">Good:</strong> {message}.</span>
                <button className="m-1" onClick={close}>X</button>
            </div>
            </>
        }
        {options.type === 'error' &&
            <>  <div className="bg-red-100 border border-red-400 text-red-700 md:px-4 py-3 rounded relative w-[90vw] sm:w-[60vw] md:w-[40vw]" role="alert">
                <span className="text-xs md:text-sm block sm:inline"><strong className="text-xs md:text-sm font-bold">error:</strong> {message}.</span>
                <button className="m-1" onClick={close}>X</button>
            </div>
            </>
        }

    </div>
)



