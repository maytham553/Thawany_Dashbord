import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminsContainer from "../pages/admins/AdminsContainer";
import AdvContainer from "../pages/Advertisement/AdvContainer";
import ShowUsersContainer from "../pages/Users/UsersContainer";


class AdminRoutes extends React.Component {


    render() {
        return (
            <Routes>
                <Route path="Admins" element={<AdminsContainer />} />
                <Route path="ShowUsers" element={<ShowUsersContainer />} />
                <Route path="Advs" element={<AdvContainer />} />
            </Routes>
        );
    }


}

export default AdminRoutes