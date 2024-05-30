import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api"; 


const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [message, setMessage] = useState("");
    const [error, setError] = useState({});
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

    async function updateDishe({ dishe, disheImgFile }) {
        try {

            if(disheImgFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("image", disheImgFile);

                const response = await api.patch(`/dishes/image/${dishe.id}`, fileUploadForm);

                dishe.image = response.data.image;
            }

            await api.put(`/dishes/${dishe.id}`, dishe)
            setMessage("Prato atualizado com sucesso.")
            setTimeout(() => {
                setMessage("");
            }, 5900)            

        } catch (error) {
            if(error.response) {
                setMessage(error.response.data.message);
                setError(error.response)
                console.log(error.response.status);

                setTimeout(() => {
                    setMessage("");
                }, 5900)
            } else {
                setMessage("Não foi possível atualizar o prato.");
                setError({name: "deu ruim"})

                setTimeout(() => {
                    setMessage("")
                }, 5900);
            }
        }
    }

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
            updateDishe,
            message,
            error,
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