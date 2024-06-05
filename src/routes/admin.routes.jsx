import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { EditDishe } from "../pages/EditDishe";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";
import { Cart } from "../pages/Cart";
import { BuyHistoric } from "../pages/BuyHistoric";
import { NotFound } from "../pages/NotFound";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/editdishe/:id" element={<EditDishe />} />
            <Route path="/dishes" element={<New />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/historic" element={<BuyHistoric />} />
            
            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}