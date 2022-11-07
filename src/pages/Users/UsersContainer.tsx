import React, { useEffect, useState } from 'react'
import { Endpoint } from '../../shared/Endpoint';
import { AxiosFunctions, TokenConfiguration } from '../../shared/Request';
import { Pages, Status } from '../../shared/Interfaces';
import { User } from './Shared/Interfaces';
import axios from 'axios';
import UserColumn from './Show/UserColumn';
import ConfirmDialog from '../../healperComponent/tailwindComponent/ConfirmDialog';
import Dialog from '../../healperComponent/tailwindComponent/Dialog';
import UserForm from './Shared/UserForm';
import Pagination from '../../healperComponent/tailwindComponent/Pagination';


interface Dilog {
        openDelete: boolean;
        openEdit: boolean;
        userId: string;
}
function ShowUsersContainer() {

        // Component State
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

        //Pagination functions

        const nextPage = () => {
                setPages({ totalPages: pages.totalPages, thisPage: pages.thisPage + 1, prevPage: pages.thisPage, nextPage: pages.thisPage + 2 });
                getUsers()
        }
        const prevPage = () => {
                setPages({ totalPages: pages.totalPages, thisPage: pages.thisPage - 1, prevPage: pages.thisPage - 2, nextPage: pages.thisPage });
        }

        const specificPage = (e: any) => {
                const pageNumber = Number(e.target.innerText);
                setPages({ totalPages: pages.totalPages, thisPage: pageNumber, prevPage: pageNumber - 1, nextPage: pageNumber + 1 });
        }



        //get Users 

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



        //Close popup window
        const onClose = () => {
                setDilog({ openDelete: false, openEdit: false, userId: '' });
        }

        //Delete User
        const openDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setDilog({ openDelete: true, openEdit: false, userId: (e.target as Element).id });
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

        // Edit User
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



        // Load data
        useEffect(() => {
                getUsersFirstTime()
        }, []);

        useEffect(() => {
                getUsers()
        }, [pages.thisPage]);


        // Error and loading Pages
        if (status.loading) return <div>loading</div>
        if (status.error) return <div>{status.errorMessage}</div>

        return <>
                {/* Delete popup window */}
                {
                        (dilog.openDelete) && <ConfirmDialog onClose={onClose} onConfirm={onDelete} title="Delete" text="Are you sure ?" />
                }
                {/* Edit popup window */}
                {
                        (dilog.openEdit) && <Dialog onClose={onClose} onConfirm={onDelete} title="  " >
                                <UserForm values={user} setValues={setUser} submit={submitEdit} cancel={onClose} submitText={'Edit'} />
                        </Dialog>
                }
                {/* Table of Users */}
                <div>
                        <table className="min-w-full ">
                                <UserColumn Users={Users} onDelete={openDelete} onEdit={openEdit} />
                        </table>

                        <Pagination thisPage={pages.thisPage} totalPages={pages.totalPages} goToPrevPage={prevPage} goToNextPage={nextPage} goToSpecificPages={specificPage} />

                </div>
        </>
}


export default ShowUsersContainer