import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { PiNewspaperClipping } from "react-icons/pi";


import { FaChevronLeft } from "react-icons/fa";

import { api } from "../../services/api";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";
import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg"

import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";


export function Details() {
    const { user } = useAuth();
    
    const [data, setData] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [disheQuantity, setDisheQuantity] = useState(1);

    const [cart, setCart] = useState([]);


    const params = useParams();
    const navigate = useNavigate();

    const disheURL = data && data.image ? `${api.defaults.baseURL}/files/dishes/${data.image}` : dishePlaceholder; 

    function addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    function handleDisheIncrease() {
        const quantity = disheQuantity + 1;

        setDisheQuantity(quantity);
    }

    function handleDisheDecrease() {
        if(disheQuantity <= 1){
            return
        }
        const quantity = disheQuantity - 1;

        setDisheQuantity(quantity);
    }

    function priceCorrection(price){
        return price.toFixed(2).replace(".", ",");
    }

    function handleBack() {
        navigate("/");
    }

    function handleEditNav() {
        navigate(`/editdishe/${params.id}`)
    }

    useEffect(() => {
        async function fetchDishe() {                       
            const response = await api.get(`/dishes/${params.id}`);            
            setData(response.data);     

        }
        fetchDishe();
    }, [data])

    function cartToLocalStorage(data, quantity) {
        const newCart = [...cart];

        // Adicione os itens ao carrinho
        for (let i = 0; i < quantity; i++) {
            newCart.push(data);
        }
        setCart(newCart);
        setDisheQuantity(1);
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


    return(
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}    
            />
            <div className="content"  data-hide-details={menuIsOpen}>
                <Header onOpenMenu={() => setMenuIsOpen(true)} quantity={cart.length}/>
                {
                    data &&
                    <main>
                        <button className="nav" onClick={handleBack}>
                            <FaChevronLeft size={20} />
                            <span>Voltar</span>
                        </button>
                        <figure>
                            <div><img src={disheURL} alt={data.name} /></div>
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
                                {  [USER_ROLE.ADMIN].includes(user.role) &&                      
                                    <Button
                                        className="btn-admin-only"
                                        title="Editar prato"
                                        onClick={handleEditNav}
                                    />
                                }
                                {  [USER_ROLE.CUSTOMER].includes(user.role) &&                      
                                    
                                    <div className="customerOnly">
                                        <div className="disheAddSubtract">
                                            <button><FaPlus onClick={() => handleDisheIncrease()}  size={15}/></button>
                                            <span>{addLeadingZero(disheQuantity)}</span>
                                            <button><FaMinus onClick={() => handleDisheDecrease()} size={15}/></button>
                                        </div>
                                        <Button
                                            className=""
                                            title={`Pedir - R$ ${priceCorrection(data.price * disheQuantity)}`}
                                            onClick={() => cartToLocalStorage(data, disheQuantity)}
                                            icon={PiNewspaperClipping}
                                            color="TINTS_TOMATO_100"
                                        />
                                    </div>
                                }                                
                            </figcaption>
                            
                            
                        </figure>

                    </main>
                }
                <Footer />
            </div>         
        </Container>
    )
}