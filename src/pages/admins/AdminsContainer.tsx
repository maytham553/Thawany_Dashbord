import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ConfirmDialog from '../../healperComponent/tailwindComponent/ConfirmDialog';
import Dialog from '../../healperComponent/tailwindComponent/Dialog';
import { FloatingButton } from '../../healperComponent/tailwindComponent/HelperComponent';
import Pagination from '../../healperComponent/tailwindComponent/Pagination';
import { Endpoint } from '../../shared/Endpoint';
import { Dilog, Pages, Status } from '../../shared/Interfaces';
import { TokenConfiguration } from '../../shared/Request';
import { Table } from '../../shared/TailwindClasses';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoadingPage from '../LoadingPage/LoadingPage';
import AdminForm from './shared/AdminForm';
import { Admin } from './shared/Interfaces';
import AdminColumn from './show/AdminColumn';


function AdminsContainer() {

        const defaultAdmin: Admin = {
                id: "",
                name: "",
                addUsers: false,
                allPermission: false,
                allowMapsUser: false,
                allowNotification: false,
                allowThawanyCash: false,
                userAdvert: false,
                password: "",
                phone: ""
        };

        const [admins, setAdmins] = useState<Admin[]>([defaultAdmin]);

        const [admin, setAdmin] = useState<Admin>(defaultAdmin);

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
                        openAdd: false,
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

        //get Admins 

        const getAdmins = async () => {
                try {
                        const data = (await axios.get(Endpoint.admins.get, new TokenConfiguration().config))
                        setStatus({ loading: false, error: false, success: true, errorMessage: "" })
                        setAdmins(data.data.data);
                        (pages.totalPages === 1) && setPages({ ...pages, totalPages: data.data.pagesCount })
                } catch (error) {
                        setStatus({ loading: false, error: true, success: false, errorMessage: String(error) })
                        setPages({ totalPages: 0, prevPage: 0, nextPage: 0, thisPage: 0 });
                }
        }

        //Close popup window
        const onClose = () => {
                setDilog({ openDelete: false, openEdit: false, Id: '' });
        }

        //Delete Admin
        const openDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setDilog({ openDelete: true, openEdit: false, Id: (e.target as Element).id });
        }
        const onDelete = async () => {
                try {
                        const data = (await axios.delete(Endpoint.admins.delete(dilog.Id), new TokenConfiguration().config));
                        const newAdmins: any = admins.filter(admin => admin.id != dilog.Id);
                        setAdmins(newAdmins)
                        alert("Admin deleted successfully")
                } catch (error) {
                        alert(error)
                }

        }

        // Edit Admin
        const openEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                const id = (e.target as Element).id;
                const adminToEdit = admins.filter(function (el) {
                        return el.id === id
                });
                setAdmin(adminToEdit[0])
                setDilog({ openDelete: false, openEdit: true, Id: id });
        }

        const submitEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                try {
                        const data = await axios.put(
                                Endpoint.admins.put(dilog.Id),
                                admin,
                                new TokenConfiguration().config
                        )
                        const adminsWithoutEditedOne: any = admins.filter(admin => admin.id != dilog.Id);
                        setAdmins([data.data.data, ...adminsWithoutEditedOne]);
                        alert("Edit succes")
                        onClose()
                } catch (error) {
                        alert(error)
                }
        }

        // Add Adv
        const openAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setAdmin(defaultAdmin)
                setDilog({ openDelete: false, openEdit: false, openAdd: true, Id: "" });
        }

        const submitAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                try {
                        const data = await axios.post(
                                Endpoint.admins.post,
                                {
                                        name: admin.name,
                                        addUsers: admin.addUsers,
                                        allPermission: admin.allPermission,
                                        allowMapsUser: admin.allowMapsUser,
                                        allowNotification: admin.allowNotification,
                                        allowThawanyCash: admin.allowThawanyCash,
                                        userAdvert: admin.userAdvert,
                                        password: admin.password,
                                        phone: admin.phone
                                },
                                new TokenConfiguration().config
                        )
                        setAdmins(current => [data.data.data, ...current]);
                        alert("Add succes")
                } catch (error) {
                        alert(error)
                }
        }

        // Load data
        useEffect(() => {
                getAdmins()
        }, [pages.thisPage]);


        if (status.loading) return <LoadingPage/>
        if (status.error) return <ErrorPage errorMessage={ status.errorMessage} />

        return <div>
                {
                        (dilog.openDelete) && <ConfirmDialog onClose={onClose} onConfirm={onDelete} title="Delete" text="Are you sure ?" />
                }

                {
                        (dilog.openEdit) && <Dialog onClose={onClose} title="  " >
                                <AdminForm values={admin} setValues={setAdmin} submit={submitEdit} cancel={onClose} submitText={'Edit'} />
                        </Dialog>
                }
                {
                        (dilog.openAdd) && <Dialog onClose={onClose} title="  " >
                                <AdminForm values={admin} setValues={setAdmin} submit={submitAdd} cancel={onClose} submitText={'Add'} />
                        </Dialog>
                }

                <div>
                        <table className={Table.table}>
                                <AdminColumn admins={admins} onDelete={openDelete} onEdit={openEdit} />
                        </table>

                        <Pagination thisPage={pages.thisPage} totalPages={pages.totalPages} goToPrevPage={prevPage} goToNextPage={nextPage} goToSpecificPages={specificPage} />
                </div>
                <FloatingButton text={"+"} onClick={openAdd}/>

        </div>
}

export default AdminsContainer;