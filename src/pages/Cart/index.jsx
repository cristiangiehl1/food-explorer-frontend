import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api"


export function Cart() {

    const { user } = useAuth();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [menuIsOpen, setMenuIsOpen] = useState("")

    const navigate = useNavigate();

    function handleRemoveCart(arrayindex) {
        const newCart = cart.filter((_, index) => index !== arrayindex);
        console.log(newCart);

        setCart(newCart)

        localStorage.setItem(`@foodexpress:cart_${user.id}`, JSON.stringify(newCart))

        let newTotal = 0;

        newCart.forEach(dishe => {
            newTotal += parseFloat(dishe.price)          
        })        

        setTotal(newTotal)
    }

    function handleBack() {
        navigate(-1)
    }


    useEffect(() => {
        const fetchCart = localStorage.getItem(`@foodexpress:cart_${user.id}`)

        if(fetchCart) {
            setCart(JSON.parse(fetchCart))
        }

        let newTotal = 0;

        JSON.parse(fetchCart).forEach(dishe => {
            newTotal += parseFloat(dishe.price)            
        })
        

        setTotal(newTotal)


    }, [])



    return(
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}   
            />
            <Header
                onOpenMenu={() => setMenuIsOpen(true)}
                quantity={cart.length}
            />
            <main>
                <h1>Meu pedido</h1>
                <div className="cart-wrapper">
                    {   cart && 
                        cart.map((dishe, index) => {
           
                            return (                                
                                <div className="individual-dishe" key={String(index)}>
                                    <img src={dishe.image ? `${api.defaults.baseURL}/files/dishes/${dishe.image}` : dishePlaceholder} alt={dishe.name} />
                                    <div className="dishe-text-wrapper">
                                        <h2>{dishe.name}</h2>
                                        <button onClick={() => handleRemoveCart(index)}>Remover do carrinho</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="total-price-wrapper">
                    <h2>{`Total: R$ ${total.toFixed(2).replace(".", ",")}`}</h2>
                </div>
                <div className="cart-next-btn-wrapper">
                    <Button 
                        className="cart-back-btn" 
                        color="TINTS_TOMATO_400" 
                        title="Voltar para o menu"
                        onClick={handleBack}
                    />
                    <Button className="cart-next-btn" title="Avançar"/>
                </div>
            </main>
           
            <Footer />

        </Container>
    )
}