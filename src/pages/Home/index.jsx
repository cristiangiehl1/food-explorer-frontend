import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Dishe } from "../../components/Dishe";

import { SideMenu } from "../../components/SideMenu";
import { useEffect, useState } from "react";

import homeImg from "../../assets/dishes/homeimg.png"

import { api } from "../../services/api";


export function Home() {
    
    const [searchDishe, setSearchDishe] = useState("");
    const [searchIngredient, setSearchIngredient] = useState(""); 
    
    const [dishes, setDishes] = useState([]); 

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const navigate = useNavigate();

    async function handleDetails(id) {
        navigate(`/details/${id}`)
    }
    
    useEffect(() => {
        async function dishesDB() {
            const dishesWithIngredientsResponse = await api.get(`/dishes?name=${searchDishe}&indredients=${searchIngredient}`);
            const categoriesResponse = await api.get()
            
            setDishes(dishesWithIngredientsResponse.data);   
        }
        dishesDB();
    }, [])

    return (
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}   
            />
            <div className="content" data-hide-home={!menuIsOpen}> 
                <Header onOpenMenu={() => setMenuIsOpen(true)}/>
                <figure>
                    <img src={homeImg} alt="imagem de macarons coloridos" />
                    <figcaption>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </figcaption>
                </figure>
                <main>
                    <h2>Mais Pedidos</h2>
                    <section>
                        {
                            dishes.map(dishe => (
                            <Dishe
                                key={String(dishe.id)}
                                data={dishe}
                                navDetails={() => handleDetails(dishe.id)}
                            />
                            ))
                        }
                    </section>
                    <h2>Refeições</h2>
                    <section>
                        {
                            dishes.map(dishe => (
                            <Dishe
                                key={String(dishe.id)}
                                data={dishe}
                                navDetails={() => handleDetails(dishe.id)}
                            />
                            ))
                        }
                    </section>
                    <h2>Sobremesas</h2>
                    <section>
                        {
                            dishes.map(dishe => (
                            <Dishe
                                key={String(dishe.id)}
                                data={dishe}
                                navDetails={() => handleDetails(dishe.id)}
                
                            />
                            ))
                        }
                    </section>
                    <h2>Bebidas</h2>
                    <section>
                        {
                            dishes.map(dishe => (
                            <Dishe
                                key={String(dishe.id)}
                                data={dishe}
                                navDetails={() => handleDetails(dishe.id)}
                
                            />
                            ))
                        }
                    </section>
                </main>
                <Footer />
            </div>
        </Container>
    )
}