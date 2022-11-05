import React, { useEffect, useState } from 'react'
import { Endpoint } from '../../../shared/Endpoint';
import { AxiosFunctions, TokenConfiguration } from '../../../shared/Request';
import { Pages, Status } from '../../../shared/Interfaces';
import { User } from '../Shared/Interfaces';
import axios from 'axios';
import UserColumn from './UserColumn';

function ShowUsersContainer() {
        const [Users, setUsers] = useState<[User]>(
                [{
                        id: "",
                        name: "",
                        phone: "",
                        image: "",
                        birthdate: "",
                        countryCode: "",
                        gender: "",
                        tagId: "",
                        tagScanned: 0,
                        views: 0,
                        visibility: false,
                        method: "",
                        token: ""
                }]

        );
        const [status, setStatus] = useState<Status>(
                {
                        loading: true,
                        error: false,
                        success: false,
                        errorMessage: ""
                }
        );
        const [pages, setPages] = useState<Pages>(
                {
                        thisPage: 1,
                        prevPage: 0,
                        nextPage: 2,
                        totalPages: 1
                }
        );

        const nextPage = () => {
                setPages({ totalPages: pages.totalPages, thisPage: pages.thisPage + 1, prevPage: pages.thisPage, nextPage: pages.thisPage + 2 });
                getUsers()
        }
        const prevPage = () => {
                setPages({ totalPages: pages.totalPages, thisPage: pages.thisPage - 1, prevPage: pages.thisPage - 2, nextPage: pages.thisPage });
        }

        const specificPages = (e: any) => {
                const pageNumber = Number(e.target.innerText);
                setPages({ totalPages: pages.totalPages, thisPage: pageNumber, prevPage: pageNumber - 1, nextPage: pageNumber + 1 });
        }



        const getUsers = async () => {
                try {
                        const data = (await axios.get(Endpoint.users.get(pages.thisPage), new TokenConfiguration().config))
                        setStatus({ loading: false, error: false, success: true, errorMessage: "" })
                        setUsers(data.data.data);
                } catch (error) {
                        setStatus({ loading: false, error: true, success: false, errorMessage: String(error) })
                        setPages({ totalPages: 0, prevPage: 0, nextPage: 0, thisPage: 0 });
                }
        }
        const getUsersFirstTime = async () => {
                try {
                        const data = (await axios.get(Endpoint.users.get(pages.thisPage), new TokenConfiguration().config))
                        setStatus({ loading: false, error: false, success: true, errorMessage: "" })
                        setUsers(data.data.data);
                        setPages({ ...pages, totalPages: data.data.pagesCount });
                } catch (error) {
                        setStatus({ loading: false, error: true, success: false, errorMessage: String(error) })
                        setPages({ totalPages: 0, prevPage: 0, nextPage: 0, thisPage: 0 });
                }
        }



        useEffect(() => {
                getUsersFirstTime()
        }, []);

        useEffect(() => {
                getUsers()
        }, [pages.thisPage]);

        if (status.loading) return <div>loading</div>
        if (status.error) return <div>{status.errorMessage}</div>
        return <div>
                <table className="min-w-full ">
                        <UserColumn Users={Users} />
                </table>

                <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                        <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
                                {!(pages.thisPage === 1) ?
                                        <button onClick={prevPage} className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm ml-3 font-medium leading-none">
                                                Previous
                                        </button> :
                                        <button onClick={prevPage} className="flex items-center pt-3 text-gray-300 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm ml-3 font-medium leading-none">
                                                Previous
                                        </button>
                                }

                                <div className="sm:flex hidden">

                                        {
                                                new Array(pages.totalPages).fill(1).map((key, index) => ((index + 1) === pages.thisPage) ?
                                                        <button onClick={specificPages} key={index} className="text-sm font-medium leading-none cursor-pointer text-indigo-700 dark:text-indigo-400 border-t border-indigo-400 pt-3 mr-4 px-2">{index + 1}</button>
                                                        :
                                                        <button onClick={specificPages} key={index} className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">{index + 1}</button>
                                                )
                                        }
                                </div>
                                {!(pages.totalPages === pages.thisPage) ?
                                        <button onClick={nextPage} className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm font-medium leading-none mr-3">
                                                Next
                                        </button>
                                        :
                                        <button disabled onClick={nextPage} className="flex items-center pt-3 text-gray-300 dark:text-gray-200  hover:text-indigo-700 cursor-pointer text-sm font-medium leading-none mr-3">
                                                Next
                                        </button>
                                }
                        </div>
                </div>


        </div>
}


export default ShowUsersContainer