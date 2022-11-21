import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Endpoint } from '../../shared/Endpoint';
import { Dilog, Status } from '../../shared/Interfaces';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoadingPage from '../LoadingPage/LoadingPage';
import { Dialog, UserInformation } from './Interfaces';
import SocialAccountsContainer from './SocialAccountsContainer';




function TagScanContainer() {
    const defaultUserInformation: UserInformation = {
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
        token: "",
        location: {
            id: "",
            city: "",
            country: "",
            loc: "",
        },
        socialAccounts: [
            {
                id: "",
                category: "",
                label: "",
                type: "",
                url: "",
                default: false
            }
        ],
        defaultAccount: {
            id: "",
            category: "",
            label: "",
            type: "",
            url: "",
            default: false
        }
    }

    const [status, setStatus] = useState<Status>(
        {
            loading: true,
            error: false,
            success: false,
            errorMessage: ""
        }
    );
    const [dilog, setDilog] = useState<Dialog>({ open: false, id: 0 });
    const [userInformation, setUserInformation] = useState<UserInformation>(defaultUserInformation);
    const { tagId } = useParams();
    const tagIdArray = tagId?.split("=");


    //Togle popup window
    const squareScallTogle = (id: number) => {
        setDilog({ open: !dilog.open, id: id });
    }



    const getUserByTagId = async () => {
        if (tagIdArray) {
            try {
                const data = (await axios.get(Endpoint.users.tags.getById(tagIdArray[1])))
                setUserInformation(data.data.data)
                setStatus({ loading: false, error: false, success: true, errorMessage: "" })
            } catch (error) {
                setStatus({ loading: false, error: true, success: false, errorMessage: String(error) })
            }
        }
    }





    // Load data
    useEffect(() => {
        getUserByTagId()
    }, []);


    if (status.loading) return <LoadingPage />
    if (status.error) return <ErrorPage errorMessage={status.errorMessage} />
    return <>
        <div className="flex flex-col   items-center justify-between h-screen overflow-hidden " >
            <SocialAccountsContainer userInformation={userInformation} squareScallTogle={{ set: squareScallTogle, get: dilog }} />
        </div>
    </>
}

export default TagScanContainer