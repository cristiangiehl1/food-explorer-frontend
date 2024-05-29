import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { EditDishe } from "../pages/EditDishe";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/editdishe/:id" element={<EditDishe />} />
        </Routes>
    )
}