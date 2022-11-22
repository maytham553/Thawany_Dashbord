import React, { useEffect, useState } from 'react'
import { Endpoint } from '../../shared/Endpoint';
import {  TokenConfiguration } from '../../shared/Request';
import { Dilog, Pages, Status } from '../../shared/Interfaces';
import { User } from './Shared/Interfaces';
import axios from 'axios';
import UserColumn from './Show/UserColumn';
import ConfirmDialog from '../../healperComponent/ConfirmDialog';
import Dialog from '../../healperComponent/Dialog';
import UserForm from './Shared/UserForm';
import Pagination from '../../healperComponent/Pagination';
import { Table } from '../../shared/TailwindClasses';
import LoadingPage from '../LoadingPage/LoadingPage';
import ErrorPage from '../ErrorPage/ErrorPage';



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
                        Id: "",
                }
        );

        //Pagination functions

        const nextPage = () => {
                setPages({ totalPages: pages.totalPages, thisPage: pages.thisPage + 1, prevPage: pages.thisPage, nextPage: pages.thisPage + 2 });
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
                        (pages.totalPages === 1) && setPages({ ...pages, totalPages: data.data.pagesCount })

                } catch (error) {
                        setStatus({ loading: false, error: true, success: false, errorMessage: String(error) })
                        setPages({ totalPages: 0, prevPage: 0, nextPage: 0, thisPage: 0 });
                        console.log(error)
                }
        }
    


        //Close popup window
        const onClose = () => {
                setDilog({ openDelete: false, openEdit: false, Id: '' });
        }

        //Delete User
        const openDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setDilog({ openDelete: true, openEdit: false, Id: (e.target as Element).id });
        }
        const onDelete = async () => {
                try {
                        const data = (await axios.delete(Endpoint.users.delete(dilog.Id), new TokenConfiguration().config));
                        const users: any = Users.filter(user => user.id != dilog.Id);
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
                setDilog({ openDelete: false, openEdit: true, Id: id });
        }

        const submitEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                try {
                        const data = await axios.put(
                                Endpoint.users.put(user.id),
                                user,
                                new TokenConfiguration().config
                        )
                        const users: any = Users.filter(user => user.id != dilog.Id);
                        users.push(data);
                        setUsers(users);
                        alert("Edit succes")
                } catch (error) {
                        alert(error)
                }
        }



        // Load data
        useEffect(() => {
                getUsers()
        }, [pages.thisPage]);



        // Error and loading Pages
        if (status.loading) return <LoadingPage/>
        if (status.error) return <ErrorPage errorMessage={ status.errorMessage} />

        return <>

                {
                        (dilog.openDelete) && <ConfirmDialog onClose={onClose} onConfirm={onDelete} title="Delete" text="Are you sure ?" />
                }

                {
                        (dilog.openEdit) && <Dialog onClose={onClose}  title="  " >
                                <UserForm values={user} setValues={setUser} submit={submitEdit} cancel={onClose} submitText={'Edit'} />
                        </Dialog>
                }

                <div>
                        <table className={Table.table}>
                                <UserColumn Users={Users} onDelete={openDelete} onEdit={openEdit} />
                        </table>

                        <Pagination thisPage={pages.thisPage} totalPages={pages.totalPages} goToPrevPage={prevPage} goToNextPage={nextPage} goToSpecificPages={specificPage} />
                </div>
        </>
}


export default ShowUsersContainer