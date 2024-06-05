import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";


import { 
    Container, 
    StyledFaCircle,
    StyledFaRegSadCry,
    StyledGiCancel
 } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";


import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";



export function BuyHistoric() {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);
    const [menuIsOpen, setMenuIsOpen] = useState("");
    const [buyHistoric, setBuyHistoric] = useState([]);  
    
    const navigate = useNavigate();

    async function handleStatusChange(e, order_id, user_id) {
        const newStatus = e.target.value

        await api.patch(`/historic/${order_id}`, {
            status: newStatus
        })


        const newBuyHistoric = buyHistoric.map(item => {
            return item.id === order_id ? { ...item, status: newStatus } : item
        })        

        if(newStatus === "entregue") {
            localStorage.removeItem(`@foodexpress:latest_purchase_${user_id}`)
        }

       
        setBuyHistoric(newBuyHistoric);
    }


    function formatDate(date) {
        const dateObject = new Date(date)

        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const hours = dateObject.getHours().toString().padStart(2, '0');
        const minutes = dateObject.getMinutes().toString().padStart(2, '0');

        const dateFormated = `${day}/${month} às ${hours}h${minutes}`;
        return dateFormated

    }

    function handleBack() {
        navigate("/");
    }

    useEffect(() => {
        const fetchCart = localStorage.getItem(`@foodexpress:cart_${user.id}`);

        if(fetchCart) {
            setCart(JSON.parse(fetchCart))
        }

    }, [])

    useEffect(() => {
        async function fetchHistoric() {
            
            const fetchHistoric = await api.get("/historic")

            if(fetchHistoric) {
                setBuyHistoric(fetchHistoric.data);
            }   
            
        } 
        fetchHistoric();
    }, [])



    return(
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}   
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} quantity={cart.length}/>
            
              
            <main className="large-screen">
                <h1>Histórico de pedidos</h1>
                {   buyHistoric.length === 0 &&                  
                    <div className="no-historic-msg">
                        <h3>Você ainda não fez nenhuma compra em nosso restaurante.</h3>
                        <StyledFaRegSadCry />
                    </div>                
                }
                { buyHistoric.length !== 0 &&               
                    <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Detalhamento</th>                       
                            <th>Data e hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        { buyHistoric && 
                            buyHistoric.map((item, index) => {     
                                                          
                                return (
                                    <tr key={String(index)}>                           
                                    { [USER_ROLE.CUSTOMER].includes(user.role) &&                                    
                                        <td>
                                            <div className="status-wrapper">
                                                <StyledFaCircle status={item.status}/>{item.status}
                                            </div>
                                        </td>
                                    }
                                    { [USER_ROLE.ADMIN].includes(user.role) &&                                    
                                        <td>
                                            <div className="status-wrapper" onChange={(e) => handleStatusChange(e, item.id, item.user_id)}>
                                                {   item.status !== "cancelar" ?
                                                    <StyledFaCircle status={item.status}/> :
                                                    <StyledGiCancel />
                                                }                                                    
                                                <select name="status" id="status">
                                                <option value="status_atual">{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</option>
                                                <option value="pendente">Pendente</option>
                                                <option value="preparando">Preparando</option>
                                                <option value="entregue">Entregue</option>
                                                <option value="cancelar">Cancelar</option>
                                                </select>    
                                            </div>
                                        </td>
                                    }
                                    <td>{item.code}</td>
                                    <td>{item.details}</td>
                                    <td>{formatDate(item.updated_at)}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                }
                <button className="back-home-btn" onClick={handleBack}>
                    <IoIosArrowBack size={20}/>
                    Voltar
                    </button>
            </main>
        
            <main className="small-screen">     

            <h1>Pedidos</h1>            
            {   buyHistoric.length === 0 &&                
                <div className="no-historic-msg">
                    <h3>Você ainda não fez nenhuma compra em nosso restaurante.</h3>
                    <StyledFaRegSadCry />
                </div>
            }

            { buyHistoric.length !== 0 && 
                buyHistoric.map((item, index) => {                    
                    return (
                        <div className="order-wrapper" key={String(index)}>
                            <div className="order-infos">
                                <span>{item.code}</span>
                                { [USER_ROLE.CUSTOMER].includes(user.role) &&     
                                    <span className="status-wrapper"><StyledFaCircle status={item.status}/>{item.status}</span>
                                }
                                { [USER_ROLE.ADMIN].includes(user.role) &&                                   
                                        <div className="status-wrapper" onChange={(e) => handleStatusChange(e, item.id, item.user_id)}>
                                            {   item.status !== "cancelar" ?
                                                <StyledFaCircle status={item.status}/> :
                                                <StyledGiCancel />
                                            }                                                    
                                            <select name="status" id="status">
                                            <option value="status_atual">{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</option>
                                            <option value="pendente">Pendente</option>
                                            <option value="preparando">Preparando</option>
                                            <option value="entregue">Entregue</option>
                                            <option value="cancelar">Cancelar</option>
                                            </select>    
                                        </div>
                                }
                                <span>{formatDate(item.updated_at)}</span>
                            </div>
                            <div className="order-dishes">
                                <span>{item.details}</span>
                            </div>
                        </div>
                    )
                })
            }
                <button className="back-home-btn" onClick={handleBack}>
                    <IoIosArrowBack size={20}/>
                    Voltar
                </button>
            </main>
            
            <Footer />
        </Container>
    )
}