import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api"; 


const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [message, setMessage] = useState("");
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api
                .post("/sessions", { email, password }, { withCredentials: true });
            
                const { user } = response.data;
            
            localStorage.setItem("@foodexpress:user", JSON.stringify(user));

            setData({ user });

        } catch (error) {
            if(error.response) {
                setMessage(error.response.data.message);

                setTimeout(() => {
                    setMessage("");
                }, 5900)
            } else {
                setMessage("Não foi possível logar.");

                setTimeout(() => {
                    setMessage("")
                }, 5900);
            }
        }
    }

    async function signOut() {{
        localStorage.removeItem("@foodexpress:user");

        setData({});
    }}


    useEffect(() => {
        const user = localStorage.getItem("@foodexpress:user");
  

        if(user) {

            setData({                
                user: JSON.parse(user)
            });
        }        
    }, []);


    return (
        <AuthContext.Provider value={{
            signIn, 
            signOut,
            message,
            user: data.user
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const context = useContext(AuthContext);

    return context;
}



export { AuthProvider, useAuth };