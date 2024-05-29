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
    
    const [mostRequested, setMostRequested] = useState("");
    const [meals, setMeals] = useState("");
    const [desserts, setDesserts] = useState("");
    const [drinks, setDrinks] = useState("");
    
    const [dishes, setDishes] = useState([]); 

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const navigate = useNavigate();

    async function handleDetails(id) {
        navigate(`/details/${id}`)
    }
    
    useEffect(() => {
        async function dishesWithCategoriesDB() {
            const response = await api.get("/categories")            
            
            const dishesWithCategories = response.data;
            
            const fetchMostRequested = dishesWithCategories.filter(dishe => {
                return dishe.categories.some(category => category.most_ordered === 1) 
            });

            const fetchMeals = dishesWithCategories.filter(dishe => {
                return dishe.categories.some(category => category.type === "refeição") 
            });


            const fetchDesserts = dishesWithCategories.filter(dishe => {
                return dishe.categories.some(category => category.type === "sobremesa") 
            });

            const fetchDrinks = dishesWithCategories.filter(dishe => {
                return dishe.categories.some(category => category.type === "bebida") 
            });                     
            
            setDishes(dishesWithCategories);  
            setMostRequested(fetchMostRequested);
            setMeals(fetchMeals);
            setDesserts(fetchDesserts);
            setDrinks(fetchDrinks);
        }
        
        dishesWithCategoriesDB();
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
                        {   mostRequested &&
                            mostRequested.map(dishe => (
                            <Dishe
                                key={String(dishe.id)}
                                data={dishe}
                                navDetails={() => handleDetails(dishe.id)}
                            />
                            ))
                        }
                    </section>
                    <h2>Entradas</h2>
                    <section>
                        {   
                            meals &&
                            meals.map(dishe => (
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
                            meals &&
                            meals.map(dishe => (
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
                            desserts &&
                            desserts.map(dishe => (
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
                            drinks &&
                            drinks.map(dishe => (
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