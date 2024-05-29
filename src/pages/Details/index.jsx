import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { FaChevronLeft } from "react-icons/fa";


import { api } from "../../services/api";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";
import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg"



export function Details() {
    
    const [data, setData] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);


    const params = useParams();
    const navigate = useNavigate();

    const disheURL = data && data.image ? `${api.defaults.baseURL}/files/dishes/${data.image}` : dishePlaceholder; 

    function handleBack() {
        navigate("/");
    }

    function handleEditNav() {
        navigate(`/editdishe/${params.id}`)
    }

    useEffect(() => {
        async function fetchDishe() {
            const response = await api.get(`/dishes/${params.id}`)
            
            setData(response.data)
        }
        fetchDishe();
    }, [data])

    return(
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}    
            />
            <div className="content"  data-hide-details={menuIsOpen}>
                <Header onOpenMenu={() => setMenuIsOpen(true)}/>
                {
                    data &&
                    <main>
                        <button className="nav" onClick={handleBack}>
                            <FaChevronLeft size={20} />
                            <span>Voltar</span>
                        </button>
                        <figure>
                            <img src={disheURL} alt={data.name} />
                            <figcaption>
                                <h2>{data.name}</h2>
                                <p>{data.description}</p>
                                <div className="ingredients">
                                    {
                                        data.ingredients.map(ingredient => {
                
                                            return <div key={ingredient.id}>
                                                    <span>{ingredient.ingredient}</span>
                                                </div>
                                        })
                                    }
                                </div>
                            </figcaption>
                        </figure>
                        <Button
                            title="Editar prato"
                            onClick={handleEditNav}
                        />
                    </main>
                }
                <Footer />
            </div>         
        </Container>
    )
}