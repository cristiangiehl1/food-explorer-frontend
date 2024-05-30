import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";

import { useAuth } from "../hooks/auth"
import { useOrder } from "../hooks/clientOrder"
import { api } from "../services/api";
import { USER_ROLE } from "../utils/roles"


export function Routes() {
    const { user, signOut } = useAuth();    

    function AcessRoute() {
        switch(user.role) {
            case USER_ROLE.ADMIN:
                return <AdminRoutes />;
            case USER_ROLE.CUSTOMER:
                return <CustomerRoutes />;
            default:
                return <CustomerRoutes />;
        }
    }

    useEffect(() => {  
        if(user) {
            api.get("/users/validated")
                .catch((error) =>  {
                    signOut();
                    console.log(error);
                });
        } 
    }, [user])
    
    return (
        <BrowserRouter>
            {user ? <AcessRoute /> : <AuthRoutes />}
        </BrowserRouter>
    )
}