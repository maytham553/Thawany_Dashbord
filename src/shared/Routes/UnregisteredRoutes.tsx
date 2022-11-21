import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminsContainer from "../../pages/admins/AdminsContainer";
import AdvContainer from "../../pages/Advertisement/AdvContainer";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import LoginContainer from "../../pages/Login/LoginContainer";
import NotificationsContainer from "../../pages/Notifications/NotificationsContainer";
import Profile from "../../pages/Profile/Profile";
import TagScanContainer from "../../pages/tagScan/TagScanContainer";
import ShowUsersContainer from "../../pages/Users/UsersContainer";


class UnregisteredRoutes extends React.Component {


    render() {
        return (
            <Routes>
                <Route path="/:tagId" element={<TagScanContainer />} />
                {/* <Route path="*" element={<ErrorPage errorMessage={"404 Page Not Found"} />} /> */}
            </Routes>
        );
    }


}

export default UnregisteredRoutes