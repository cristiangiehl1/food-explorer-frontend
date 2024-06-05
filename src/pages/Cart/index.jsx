import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, 
    StyledFaPix, 
    StyledFaRegCreditCard,
    StyledFaRegClock,
    StyledFaRegCheckCircle,
    StyledCiForkAndKnife
} from "./styles";

import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg";
import qrCode from "../../assets/qrcode.svg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";
import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api"


export function Cart() {

    const { user } = useAuth();
    const [cart, setCart] = useState([]);
    const [latestCart, setLatestCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [menuIsOpen, setMenuIsOpen] = useState("")

    const [paymentBtn, setPaymentBtn] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const [showClientOrder, setShowClientOrder] = useState(true);

    const [latestPurchase, SetLatestPurchase] = useState({});
 
    const navigate = useNavigate();


    function handlePaymentMethod() {
        setShowClientOrder(false)
    }



    function handleNextCartFlow(event) {
        event.preventDefault();

        const countItem = {};       

        cart.forEach(item => {
            
            if(countItem[item.name]) {
                countItem[item.name]++;
            } else {
                countItem[item.name] = 1;
            }
        })

        let details = "";

        const keys = Object.keys(countItem);

        keys.forEach((item, index) => {
            details += `${countItem[item]}x ${item}`;
        
            if (index < keys.length - 1) {
                details += ", ";
            }
        });      

        api.post(`/historic/`, {
            details
        })

        localStorage.setItem(`@foodexpress:latest_purchase_${user.id}`, JSON.stringify(cart))
        localStorage.removeItem(`@foodexpress:cart_${user.id}`)

        window.location.reload();
    }

    function handleSelectPaymentMethodBtn() {
        const newStatus = !paymentBtn
        setPaymentBtn(newStatus)
    }


    function handleRemoveCart(arrayindex) {
        const newCart = cart.filter((_, index) => index !== arrayindex);
        
        if (newCart.length > 0) {
            localStorage.setItem(`@foodexpress:cart_${user.id}`, JSON.stringify(newCart))
           
        } else {
            localStorage.removeItem(`@foodexpress:cart_${user.id}`)
        }

        setCart(newCart)

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
        const fetchLatestCart = localStorage.getItem(`@foodexpress:latest_purchase_${user.id}`);
        
        let newTotal = 0;

        console.log(fetchLatestCart);

        if(fetchLatestCart) {
            setLatestCart(JSON.parse(fetchLatestCart))

            JSON.parse(fetchLatestCart).forEach(dishe => {
                newTotal += parseFloat(dishe.price)            
            })      
        } 

        console.log(latestCart.length);

        if(fetchCart) {
            setCart(JSON.parse(fetchCart))

            if (!fetchLatestCart) {
                JSON.parse(fetchCart).forEach(dishe => {
                    newTotal += parseFloat(dishe.price)            
                })   
            }            
        }            

       
        setTotal(newTotal);

    }, [])


    useEffect(() => {
        function handleScreenResize() {                    
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleScreenResize);

        handleScreenResize();
    }, [])


    useEffect(() => {
        async function fetchLatestPurchase() {
            const latestPurchaseData = await api.get("/historic/latest")

            
            if(latestPurchaseData) {
                SetLatestPurchase(latestPurchaseData.data)
            }        
        }
        fetchLatestPurchase();        

        const interval = setInterval(fetchLatestPurchase, 60 * 1000);

        return () => clearInterval(interval); 
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
            <div className="cart-flow-wrapper" >
                {
                    (screenWidth < 1024 === true) && (   
                                            
                        <span data-select-cart-flow={(showClientOrder && cart.length > 0)}>
                            Confirmar pedido
                        </span>
                    )
                }
                <span data-select-cart-flow={(( screenWidth >= 1024 === true && cart.length > 0) || (latestCart.length > 0 && latestPurchase.status === "pendente")) || (!showClientOrder)}>
                    Método de pagamento
                </span>
                <span data-select-cart-flow={( latestCart.length > 0 && latestPurchase.status === "preparando")}>
                   Confirmação
                </span>      
                <span data-select-cart-flow={( latestPurchase.status === "entregue" && cart.length === 0)}>
                   Pedido Entregue
                </span>  
            </div>
                {   
                    screenWidth >= 1024 &&
                    <div className="large-screen-fix"> 
                        <main className="client-cart-wrapper">
                            <h1>Meu pedido</h1>                    
                            <div className="cart-wrapper">
                            {latestCart.length > 0 ? (
                                latestCart.map((dishe, index) => (
                                    <div className="individual-dishe" key={String(index)}>
                                        <img src={dishe.image ? `${api.defaults.baseURL}/files/dishes/${dishe.image}` : dishePlaceholder} alt={dishe.name} />
                                        <div className="dishe-text-wrapper">
                                            <h2>{dishe.name}</h2>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                cart.map((dishe, index) => (
                                    <div className="individual-dishe" key={String(index)}>
                                        <img src={dishe.image ? `${api.defaults.baseURL}/files/dishes/${dishe.image}` : dishePlaceholder} alt={dishe.name} />
                                        <div className="dishe-text-wrapper">
                                            <h2>{dishe.name}</h2>
                                            <button onClick={() => handleRemoveCart(index)}>Remover do carrinho</button>
                                        </div>
                                    </div>
                                ))
                            )}
                            </div>
                            
                            <div className="total-price-wrapper">
                                <h2>{`Total: R$ ${total.toFixed(2).replace(".", ",")}`}</h2>
                            </div>
                            {
                                latestCart.length > 0 && 
                                <div className="onyly-latest-purchase">
                                    <h2> Compra confirmada!</h2>
                                    <span>Status da compra: {latestPurchase.status}</span>
                                </div>
                            }
                        </main>

                        <main className="client-payment-method-wrapper">
                        <h1>Pagamento</h1>
                        
                        <div className="content-wrapper">
                            <div className="payment-method-btn-wrapper">
                                <button
                                    className="payment-pix-btn"
                                    data-show-payment-method={paymentBtn}
                                    onClick={() => handleSelectPaymentMethodBtn()}
                                >
                                    <StyledFaPix />
                                    <span>Pix</span>
                                </button>
                                <button
                                    className="payment-credit-card-btn"
                                    data-show-payment-method={!paymentBtn}
                                    onClick={() => handleSelectPaymentMethodBtn()}>
                                    <StyledFaRegCreditCard />
                                    <span>Crédito</span>
                                </button>
                            </div>

                            {   ( cart.length > 0 && latestPurchase.length !== 0) === true && (             
                                <div className="render-payment" >
                                    <div className="pix" data-show-payment-method={paymentBtn}>
                                        <img src={qrCode} alt="pix image" />
                                    </div>
                                    <form className="credit-card" data-show-payment-method={!paymentBtn}>
                                        <Input label="Número do Cartão" placeholder="0000 0000 0000 0000"/>
                                        <div>
                                            <Input label="Validade" placeholder="04/25"/>
                                            <Input label="CVC" placeholder="000"/>
                                        </div>
                                        <Button title="Finalizar pagamento" onClick={(event) => handleNextCartFlow(event)} />
                                    </form>
                            
                                </div>
                            )}               

                            { 
                                ( latestCart.length > 0 && latestPurchase.status === "pendente") === true && (
                                    
                                <div className="awaiting-payment">
                                    <StyledFaRegClock />
                                    <h2>Aguardando pagamento no caixa</h2>
                                </div>
                            )}

                            {   
                                ( latestCart.length > 0 && latestPurchase.status === "preparando") === true && (                 
                                <div className="awaiting-payment" >
                                    <StyledFaRegCheckCircle />
                                    <h2>Pagamento Aprovado</h2>
                                </div>
                            )}
                        
                            {  
                                ( latestPurchase.status === "entregue" && cart.length === 0) === true && (                  
                                <div className="awaiting-payment">
                                <StyledCiForkAndKnife />
                                <h2>Pedido entregue!</h2>
                                </div>
                            )}
                        </div>
                        </main>
                    </div>
                }
                {   
                    screenWidth < 1024 &&
                    <div className="small-screen-fix"> 
                        {   
                            (cart.length > 0 && latestCart) &&                    
                            <main className="client-cart-wrapper" data-show-client-order={showClientOrder}>
                                <h1>Meu pedido</h1>                    
                                <div className="cart-wrapper">
                                {
                                    cart.map((dishe, index) => (
                                        <div className="individual-dishe" key={String(index)}>
                                            <img src={dishe.image ? `${api.defaults.baseURL}/files/dishes/${dishe.image}` : dishePlaceholder} alt={dishe.name} />
                                            <div className="dishe-text-wrapper">
                                                <h2>{dishe.name}</h2>
                                                <button onClick={() => handleRemoveCart(index)}>Remover do carrinho</button>
                                            </div>
                                        </div>
                                    ))
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
                                    <Button className="cart-next-btn" onClick={() => handlePaymentMethod()} title="Avançar"/>
                                </div>
                            </main>
                        }

                        {                 
                            <main className="client-payment-method-wrapper" data-show-page={(!showClientOrder || latestCart.length > 0 || cart.length === 0)}>
                            <h1>Pagamento</h1>
                            
                            <div className="content-wrapper">
                                <div className="payment-method-btn-wrapper">
                                    <button
                                        className="payment-pix-btn"
                                        data-show-payment-method={paymentBtn}
                                        onClick={() => handleSelectPaymentMethodBtn()}
                                    >
                                        <StyledFaPix />
                                        <span>Pix</span>
                                    </button>
                                    <button
                                        className="payment-credit-card-btn"
                                        data-show-payment-method={!paymentBtn}
                                        onClick={() => handleSelectPaymentMethodBtn()}>
                                        <StyledFaRegCreditCard />
                                        <span>Crédito</span>
                                    </button>
                                </div>

                                {   !showClientOrder && (             
                                    <div className="render-payment" >
                                        <div className="pix" data-show-payment-method={paymentBtn}>
                                            <img src={qrCode} alt="pix image" />
                                        </div>
                                        <form className="credit-card" data-show-payment-method={!paymentBtn}>
                                            <Input label="Número do Cartão" placeholder="0000 0000 0000 0000"/>
                                            <div>
                                                <Input label="Validade" placeholder="04/25"/>
                                                <Input label="CVC" placeholder="000"/>
                                            </div>
                                            <Button title="Finalizar pagamento" onClick={(event) => handleNextCartFlow(event)} />
                                        </form>
                                
                                    </div>
                                )}               

                                { 
                                    ( latestCart.length > 0 && latestPurchase.status === "pendente") === true && (
                                        
                                    <div className="awaiting-payment">
                                        <StyledFaRegClock />
                                        <h2>Aguardando pagamento no caixa</h2>
                                    </div>
                                )}

                                {   
                                    ( latestCart.length > 0 && latestPurchase.status === "preparando") === true && (                 
                                    <div className="awaiting-payment" >
                                        <StyledFaRegCheckCircle />
                                        <h2>Pagamento Aprovado</h2>
                                    </div>
                                )}
                            
                                {  
                                    ( latestPurchase.status === "entregue" && cart.length === 0) && (                  
                                    <div className="awaiting-payment">
                                    <StyledCiForkAndKnife />
                                    <h2>Pedido entregue!</h2>
                                    </div>
                                )}
                            </div>
                            </main>
                        }
                    </div>
                }
            <Footer />
        </Container>
    )
}