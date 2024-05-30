import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            
            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}