import React from 'react';

interface Props {
    thisPage: number;
    totalPages: number;
    goToPrevPage: React.MouseEventHandler<HTMLButtonElement>;
    goToSpecificPages: React.MouseEventHandler<HTMLButtonElement>;
    goToNextPage: React.MouseEventHandler<HTMLButtonElement>;
}

function Pagination(props: Props) {
    const { thisPage, totalPages, goToPrevPage, goToSpecificPages, goToNextPage } = props;
    return <>
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
            <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
                {!(thisPage === 1) ?
                    <button onClick={goToPrevPage} className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm ml-3 font-medium leading-none">
                        Previous
                    </button> :
                    <button onClick={goToPrevPage} className="flex items-center pt-3 text-gray-300 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm ml-3 font-medium leading-none">
                        Previous
                    </button>
                }

                <div className="sm:flex hidden">

                    {
                        new Array(totalPages).fill(1).map((key, index) => ((index + 1) === thisPage) ?
                            <button onClick={goToSpecificPages} key={index} className="text-sm font-medium leading-none cursor-pointer text-indigo-700 dark:text-indigo-400 border-t border-indigo-400 pt-3 mr-4 px-2">{index + 1}</button>
                            :
                            <button onClick={goToSpecificPages} key={index} className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">{index + 1}</button>
                        )
                    }
                </div>
                {!(totalPages === thisPage) ?
                    <button onClick={goToNextPage} className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm font-medium leading-none mr-3">
                        Next
                    </button>
                    :
                    <button disabled onClick={goToNextPage} className="flex items-center pt-3 text-gray-300 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm font-medium leading-none mr-3">
                        Next
                    </button>
                }
            </div>
        </div>
    </>
}

export default Pagination;