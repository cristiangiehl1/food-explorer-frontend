import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { EditDishe } from "../pages/EditDishe";
import { New } from "../pages/New";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/editdishe/:id" element={<EditDishe />} />
            <Route path="/dishes" element={<New />} />
        </Routes>
    )
}