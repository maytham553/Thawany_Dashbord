import React from "react";
import { Route, Routes } from "react-router-dom";
import AddAdmin from "../pages/admins/add/AddAdmin";
import EditAdmin from "../pages/admins/edit/EditAdmin";
import ShowAdmins from "../pages/admins/show/ShowAdmins";


class AdminRoutes extends React.Component {


    render() {
        return (
            <Routes>
                <Route path="ShowAdmins" element={<ShowAdmins />} />
                <Route path="EditAdmin/:id" element={<EditAdmin/>}/>
                <Route path="AddAdmin" element={<AddAdmin />} />
            </Routes>
        );
    }


}

export default AdminRoutes