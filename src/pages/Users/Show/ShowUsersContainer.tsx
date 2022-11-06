import React, { useEffect, useState } from 'react'
import { Endpoint } from '../../../shared/Endpoint';
import { AxiosFunctions, TokenConfiguration } from '../../../shared/Request';
import { Pages, Status } from '../../../shared/Interfaces';
import { User } from '../Shared/Interfaces';
import axios from 'axios';
import UserColumn from './UserColumn';
import ConfirmDialog from '../../../healperComponent/tailwindComponent/ConfirmDialog';
import Dialog from '../../../healperComponent/tailwindComponent/Dialog';
import UserForm from '../Shared/UserForm';


interface Dilog {
        openDelete: boolean;
        openEdit: boolean;
        userId: string;
}
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
        const [user, setUser] = useState<User>(
                {
                        id: "",
                        name: "",
                        phone: "",
                        birthdate: "",
                        countryCode: "",
                        gender: "",
                        tagId: "",
                        tagScanned: 0,
                        views: 0,
                        visibility: false,
                        method: "",
                }

        );
        const [selectedImage, setSelectedImage] = useState(null);

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

        const [dilog, setDilog] = useState<Dilog>(
                {
                        openDelete: false,
                        openEdit: false,
                        userId: "",
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
                        console.log(data.data.data)
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

        const onClose = () => {
                setDilog({ openDelete: false, openEdit: false, userId: '' });
        }
        const openDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setDilog({ openDelete: true, openEdit: false, userId: (e.target as Element).id });
        }


        const openEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                const id = (e.target as Element).id;
                const userId = Users.filter(function (el) {
                        return el.id === id
                });
                setUser(userId[0])
                setDilog({ openDelete: false, openEdit: true, userId: id });
        }

        const submitEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                try {
                        const data = await axios.put(
                                Endpoint.users.put(user.id),
                                user,
                                new TokenConfiguration().config
                        )
                        const users: any = Users.filter(user => user.id != dilog.userId);
                        users.push(data);
                        setUsers(users);
                        alert("Edit succes")
                } catch (error) {
                        alert(error)
                }
        }


        const onDelete = async () => {
                try {
                        const data = (await axios.delete(Endpoint.users.delete(dilog.userId), new TokenConfiguration().config));
                        const users: any = Users.filter(user => user.id != dilog.userId);
                        setUsers(users)
                        alert("user deleted successfully")
                } catch (error) {
                        alert(error)
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
        return <>
                {
                        (dilog.openDelete) && <ConfirmDialog onClose={onClose} onConfirm={onDelete} title="Delete" text="Are you sure ?" />
                }
                {
                        (dilog.openEdit) && <Dialog onClose={onClose} onConfirm={onDelete} title="  " >
                                <UserForm values={user} setValues={setUser} submit={submitEdit} cancel={onClose} submitText={'Edit'} />
                        </Dialog>
                }
                <div>
                        <table className="min-w-full ">
                                <UserColumn Users={Users} onDelete={openDelete} onEdit={openEdit} />
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


                </div></>
}


export default ShowUsersContainer