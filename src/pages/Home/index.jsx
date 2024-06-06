import { useEffect, useState } from "react";

import { Container } from "./styles";
import homeImg from "../../assets/dishes/homeimg.png";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Dishe } from "../../components/Dishe";
import { Footer } from "../../components/Footer";

import { api } from "../../services/api";
import { useCart } from "../../hooks/clientcart";
import { useAuth } from "../../hooks/auth";


export function Home() {
    const { user } = useAuth();
    const { quantity, setQuantity } = useCart();
    
    const [mostRequested, setMostRequested] = useState("");
    const [appetizer, setAppetizer] = useState("");
    const [meals, setMeals] = useState("");
    const [desserts, setDesserts] = useState("");
    const [drinks, setDrinks] = useState("");
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [cart, setCart] = useState([]);

    
    function cartToLocalStorage(data, quantity) {
        const newCart = [...cart];

        // Adicione os itens ao carrinho
        for (let i = 0; i < quantity; i++) {
            newCart.push(data);
        }
        setCart(newCart);
        setQuantity(1);
    }


    useEffect(() => {
        const cartFromLocalStorage = localStorage.getItem(`@foodexpress:cart_${user.id}`);

        if(cartFromLocalStorage) {            
            setCart(JSON.parse(cartFromLocalStorage))
        }  
    }, []);

    useEffect(() => {
        if(cart.length > 0) {
            localStorage.setItem(`@foodexpress:cart_${user.id}`, JSON.stringify(cart))
        }
    
    }, [cart]);

    useEffect(() => {

        document.querySelector(".content")

    }, [])

    
    useEffect(() => {
        async function dishesWithCategoriesDB() {
            const response = await api.get("/categories")            
            
            const dishesWithCategories = response.data;
            
            const fetchMostRequested = dishesWithCategories.filter(dishe => {
                return dishe.categories.some(category => category.most_ordered === 1) 
            });

            const fetchAppetizer = dishesWithCategories.filter(dishe => {
                return dishe.categories.some(category => category.type === "entrada") 
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
            
            setAppetizer(fetchAppetizer);  
            setMostRequested(fetchMostRequested);
            setMeals(fetchMeals);
            setDesserts(fetchDesserts);
            setDrinks(fetchDrinks);
        }
        
        dishesWithCategoriesDB();
    }, [])

    useEffect(() => {
        if (!menuIsOpen) {
          const content = document.querySelector(".content")
          content.style.display = "block";
          return;
        }
    
        const timeoutId = setTimeout(() => {
            const content = document.querySelector(".content")
            content.style.display = "none";
        }, 300);
    
        return () => clearTimeout(timeoutId);
      }, [menuIsOpen]);

    return (
        <Container data-hide-home={!menuIsOpen}>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}   
            />
            <div className="content" data-hide-home={!menuIsOpen}> 
                <Header onOpenMenu={() => setMenuIsOpen(true)} quantity={cart.length}/>
                <figure className="figureTitle">
                    <img src={homeImg} alt="imagem de macarons coloridos" />
                    <figcaption className="pageTitle">
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </figcaption>
                </figure>
                <main>
                    <h2>Mais Pedidos</h2>
                    <section>
                        {   mostRequested &&
                            mostRequested.map((dishe, index) => (
                            <Dishe
                                style={{
                                    '--delay' : ((30 / mostRequested.length) * (mostRequested.length - index) * - 1) + "s",
                                    '--arraysize' : mostRequested.length
                                }}
                                key={String(index)}
                                data={dishe}                                
                                fetchCart={() => cartToLocalStorage(dishe, quantity)}
                            />
                            ))
                        }
                    </section>
                    <h2>Entradas</h2>
                    <section>
                        {   
                            meals &&
                            appetizer.map((dishe, index) => (
                            <Dishe
                                style={{
                                    '--delay' : ((30 / appetizer.length) * (appetizer.length - index) * - 1) + "s",
                                    '--arraysize' : appetizer.length
                                }}                                
                                key={String(index)}
                                data={dishe}
                                fetchCart={() => cartToLocalStorage(dishe, quantity)}

                            />
                            ))
                        }
                    </section>
                    <h2>Refeições</h2>
                    <section>
                        {   
                            meals &&
                            meals.map((dishe, index)=> (
                            <Dishe
                                style={{
                                    '--delay' : ((30 / meals.length) * (meals.length - index) * - 1) + "s",
                                    '--arraysize' : meals.length
                                }}   
                                key={String(index)}
                                data={dishe}
                                fetchCart={() => cartToLocalStorage(dishe, quantity)}
                            />
                            ))
                        }
                    </section>
                    <h2>Sobremesas</h2>
                    <section>
                        {   
                            desserts &&
                            desserts.map((dishe, index) => (
                            <Dishe
                                style={{
                                    '--delay' : ((30 / desserts.length) * (desserts.length - index) * - 1) + "s",
                                    '--arraysize' : desserts.length
                                }}                              
                                key={String(index)}
                                data={dishe}  
                                fetchCart={() => cartToLocalStorage(dishe, quantity)}              
                            />
                            ))
                        }
                    </section>
                    <h2>Bebidas</h2>
                    <section>
                        {
                            drinks &&
                            drinks.map((dishe, index) => (
                            <Dishe
                                style={{
                                    '--delay' : ((30 / drinks.length) * (drinks.length - index) * - 1) + "s",
                                    '--arraysize' : drinks.length
                                }}   
                                key={String(index)}
                                data={dishe}  
                                fetchCart={() => cartToLocalStorage(dishe, quantity)}                                            
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