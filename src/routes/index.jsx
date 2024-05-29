import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../hooks/auth"
import { api } from "../services/api";


export function Routes() {
    const { user, signOut } = useAuth();    

    useEffect(() => {  
        if(user) {
            api.get("/users/validated").catch((error) =>  signOut());
        } 
    }, [user])
    
    return (
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}