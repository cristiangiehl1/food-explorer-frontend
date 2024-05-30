import { GoPencil } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaPlus, FaMinus, FaHeart, FaAngleRight } from "react-icons/fa";

import { Container } from "./styles";

import { Button } from "../Button"

import { api } from "../../services/api";

import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg";

import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/clientOrder";
import { USER_ROLE } from "../../utils/roles";
import { useEffect, useState } from "react";

export function Dishe({data, ...rest}) {
    const { user } = useAuth();
    const { order, setOrder } = useOrder();

    const [isFavorite, setIsFavorite] = useState("");
    const [disheQuantity, setDisheQuantity] = useState(1);

    const [storedItens, setStoredItens] = useState({}) 

    const avatarUrl = data.image ? `${api.defaults.baseURL}/files/dishes/${data.image}` : dishePlaceholder; 
    const navigate = useNavigate();

    function navEdit(id) {
        navigate(`/editdishe/${id}`)
    }

    async function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    async function handleAddFavorite(id) {
        setIsFavorite(1)

        await api.put(`/categories/${id}`, {
            favorite: true
        })
    }

    async function handleRemoveFavorite(id) {
        setIsFavorite(0)

        await api.put(`/categories/${id}`, {
            favorite: false
        })
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


    function addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }
    

    function editPrice(price) {
        return price.toFixed(2).replace(".", ",");
    }

    useEffect(() => {
        const orders = localStorage.getItem("@foodexpress:order");  

        if(orders) {
            setStoredItens({                
                orders: JSON.parse(orders)
            });
        }        
    }, []);


    useEffect(() => {
        async function fetchCategories() {
            const categories = await api.get(`/categories/${data.id}`)

            const favorite = categories.data.favorite;
            setIsFavorite(favorite)  
        }
        fetchCategories();
    }, [])

    return (
        <Container {...rest}>
            <figure>
                <button className="edit_like">
                    {   [USER_ROLE.ADMIN].includes(user.role) &&
                        <GoPencil onClick={() => navEdit(data.id)} size={20}/>
                    }
                    {   ([USER_ROLE.CUSTOMER].includes(user.role) && isFavorite === 0) &&
                        
                        <FaRegHeart onClick={() => handleAddFavorite(data.id)} size={20}/>
                    }
                    {   ([USER_ROLE.CUSTOMER].includes(user.role) && isFavorite === 1) &&
                        
                        <FaHeart onClick={() => handleRemoveFavorite(data.id)} size={20}/>
                    }                                          
                </button>
                <div className="nav-wrapper">
                    <div className="figure-content" onClick={() => handleDetails(data.id)}>
                        <img src={avatarUrl} alt={data.name} />
                        <figcaption>
                            <div className="disheName">
                                <h2>{data.name} </h2>
                                <FaAngleRight size={12}/>
                            </div>
                            <p>R$ {editPrice(data.price * disheQuantity)}</p>
                        </figcaption>
                    </div>
                    <div className="disheAddSubtract">
                        <button><FaPlus onClick={() => handleDisheIncrease()} /></button>
                        <span>{addLeadingZero(disheQuantity)}</span>
                        <button><FaMinus onClick={() => handleDisheDecrease()} /></button>
                    </div>
                    <Button 
                        title="Incluir"
                        color="TINTS_TOMATO_100"
                        onClick={() => {}}
                    />                     
                </div>
            </figure>
        </Container>
    )
}