import axios from "axios";
import React, { useEffect, useState } from "react";
import ConfirmDialog from "../../healperComponent/tailwindComponent/ConfirmDialog";
import Dialog from "../../healperComponent/tailwindComponent/Dialog";
import { FloatingButton } from "../../healperComponent/tailwindComponent/HelperComponent";
import Pagination from "../../healperComponent/tailwindComponent/Pagination";
import { Endpoint } from "../../shared/Endpoint";
import { Dilog, Pages, Status } from "../../shared/Interfaces";
import { TokenConfiguration } from "../../shared/Request";
import AdvForm from "./Shared/AdvForm";
import { Advertisement } from "./Shared/Interfaces";
import AdvsColumn from "./Show/AdvsColumn";


function AdvContainer() {

    const defaultAdv: Advertisement = {
        id: "",
        count: 0,
        total: 0,
        url: "",
        urlImage: "",
        imageBase64: ""
    }
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
    const [advs, setAdvs] = useState<Advertisement[]>(
        [
            defaultAdv
        ]
    );

    const [adv, setAdv] = useState<Advertisement>(defaultAdv);

    const [dilog, setDilog] = useState<Dilog>(
        {
            openDelete: false,
            openEdit: false,
            openAdd: false,
            Id: "",
        }
    );


    //get users
    const getAdvs = async () => {
        try {
            const data = (await axios.get(Endpoint.advs.get(pages.thisPage), new TokenConfiguration().config))
            setStatus({ loading: false, error: false, success: true, errorMessage: "" })
            setAdvs(data.data.data);
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

    //Delete adv
    const openDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setDilog({ openDelete: true, openEdit: false, Id: (e.target as Element).id });
    }
    const onDelete = async () => {
        try {
            const data = (await axios.delete(Endpoint.advs.delete(dilog.Id), new TokenConfiguration().config));
            const newAdvs: [Advertisement] = advs.filter((adv: Advertisement) => adv.id != dilog.Id) && [defaultAdv];
            setAdvs(newAdvs)
            alert("adv deleted successfully")
        } catch (error) {
            alert(error)
        }

    }

    //Pagination functions
    const nextPage = () => {
        setPages({ totalPages: pages.totalPages, thisPage: pages.thisPage + 1, prevPage: pages.thisPage, nextPage: pages.thisPage + 2 });
        getAdvs()
    }
    const prevPage = () => {
        setPages({ totalPages: pages.totalPages, thisPage: pages.thisPage - 1, prevPage: pages.thisPage - 2, nextPage: pages.thisPage });
    }

    const specificPage = (e: any) => {
        const pageNumber = Number(e.target.innerText);
        setPages({ totalPages: pages.totalPages, thisPage: pageNumber, prevPage: pageNumber - 1, nextPage: pageNumber + 1 });
    }


    // Edit Adv
    const openEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = (e.target as Element).id;
        const advId = advs.filter(function (el) {
            return el.id === id
        });
        setAdv(advId[0])
        setDilog({ openDelete: false, openEdit: true, Id: id });
    }

    const submitEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const data = await axios.put(
                Endpoint.users.put(adv.id),
                adv,
                new TokenConfiguration().config
            )
            const newAdvs: any = advs.filter(adv => adv.id != dilog.Id);
            newAdvs.push(data);
            setAdvs(newAdvs);
            alert("Edit succes")
        } catch (error) {
            alert(error)
        }
    }



    // Add Adv
    const openAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAdv(defaultAdv)
        setDilog({ openDelete: false, openEdit: false, openAdd: true, Id: "" });
    }

    const submitAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const data = await axios.post(
                Endpoint.advs.post,
                {
                    count: adv.count,
                    total: adv.total,
                    url: adv.url,
                    urlImage: adv.urlImage,
                },
                new TokenConfiguration().config
            )
            setAdvs(current => [data.data.data, ...current]);
            alert("Edit succes")
        } catch (error) {
            alert(error)
        }
    }





    // Load data
    useEffect(() => {
        getAdvs()
    }, [pages.thisPage]);



    if (status.loading) return <div>loading</div>
    if (status.error) return <div>{status.errorMessage}</div>

    return <>
        {
            (dilog.openDelete) && <ConfirmDialog onClose={onClose} onConfirm={onDelete} title="Delete" text="Are you sure ?" />
        }
        {
            (dilog.openEdit) && <Dialog onClose={onClose} title="  " >
                <AdvForm values={adv} setValues={setAdv} submit={submitEdit} cancel={onClose} submitText={'Edit'} />
            </Dialog>
        }
        {
            (dilog.openAdd) && <Dialog onClose={onClose} title="  " >
                <AdvForm values={adv} setValues={setAdv} submit={submitAdd} cancel={onClose} submitText={'Add'} />
            </Dialog>
        }
        <div>
            <table className="min-w-full ">
                <AdvsColumn advs={advs} onDelete={openDelete} onEdit={openEdit} />
            </table>

            <Pagination thisPage={pages.thisPage} totalPages={pages.totalPages} goToPrevPage={prevPage} goToNextPage={nextPage} goToSpecificPages={specificPage} />
        </div>

        <FloatingButton text={"+"} onClick={openAdd}/>
    </>

}

export default AdvContainer;