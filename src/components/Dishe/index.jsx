import { useNavigate } from "react-router-dom";

import { Container, 
        StyledFaAngleRight, 
        StyledFaHeart, 
        StyledFaMinus, 
        StyledFaPlus,
        StyledFaRegHeart,
        StyledGoPencil 
    } from "./styles";

import { Button } from "../Button"

import { api } from "../../services/api";

import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/clientcart";
import { USER_ROLE } from "../../utils/roles";
import { useEffect, useState } from "react";

export function Dishe({ data, fetchCart, ...rest }) {
    const { user } = useAuth();
    const { quantity, setQuantity } = useCart();

    const [isFavorite, setIsFavorite] = useState("");
    const [disheQuantity, setDisheQuantity] = useState(1);

    const disheImageURL = data.image ? `${api.defaults.baseURL}/files/dishes/${data.image}` : dishePlaceholder; 
    const navigate = useNavigate();

    function navEdit(id) {
        navigate(`/editdishe/${id}`)
    }

    async function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    async function handleAddFavorite(id) {       
        const disheFavoriteExists = await api.get(`/favorites/${id}`)        

        if(!disheFavoriteExists.data) {
            await api.post(`/favorites/${id}`)
        }        

        await api.put(`/favorites/${id}/`, {
            favorite: true
        })

        setIsFavorite(1)
    }

    async function handleRemoveFavorite(id) {
        setIsFavorite(0)

        await api.put(`/favorites/${id}/`, {
            favorite: false
        })
    }

    function addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }    

    function editPrice(price) {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    }

    function handleDisheIncrease() {
        const qtdDishe = disheQuantity + 1
        
        setDisheQuantity(prevState => prevState + 1);          

        setQuantity(qtdDishe);       
    }

    function handleDisheDecrease() {
        if(disheQuantity <= 1){
            return
        }
        const qtdDishe = disheQuantity - 1
        setDisheQuantity(prevState => prevState - 1);        
        setQuantity(qtdDishe);

    }

    useEffect(() => {
        async function fetchCategories() {
            const categories = await api.get(`/favorites/${data.id}`)
            
            if(!categories.data) {                
                return setIsFavorite(0)
            }
            const favorite = categories.data.favorite;
            
            setIsFavorite(favorite)  
        }
        fetchCategories();
    }, [])


    useEffect(() => {
        if(quantity === 1) {
            setDisheQuantity(1);
        }
    }, [quantity]);


    return (
        <Container {...rest}>
            <figure>
                <button className="edit_like">
                    {   [USER_ROLE.ADMIN].includes(user.role) &&
                        <StyledGoPencil onClick={() => navEdit(data.id)}/>
                    }
                    {   ([USER_ROLE.CUSTOMER].includes(user.role) && isFavorite === 0) &&
                        
                        <StyledFaRegHeart onClick={() => handleAddFavorite(data.id)}/>
                        
                    }
                    {   ([USER_ROLE.CUSTOMER].includes(user.role) && isFavorite === 1) &&
                        
                        <StyledFaHeart onClick={() => handleRemoveFavorite(data.id)}/>
                    }                                          
                </button>
                <div className="nav-wrapper">
                    <div className="figure-content" onClick={() => handleDetails(data.id)}>
                        <img src={disheImageURL} alt={data.name} />
                        <figcaption>
                            <div className="disheName">
                                <h2>{data.name} </h2>
                                <StyledFaAngleRight />
                            </div>
                            <p className="description">{data.description}</p>
                            <p className="price">R$ {editPrice(data.price * disheQuantity)}</p>
                        </figcaption>
                    </div>
                    {   [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <div className="fixScreenSize">
                        <div className="disheAddSubtract">
                            <button><StyledFaPlus onClick={() => handleDisheIncrease()} /></button>
                            <span>{addLeadingZero(disheQuantity)}</span>
                            <button><StyledFaMinus onClick={() => handleDisheDecrease()} /></button>
                        </div>
                        <Button
                            title="Incluir"
                            color="TINTS_TOMATO_100"
                            onClick={fetchCart}
                        />
                    </div> 
                    }                 
                </div>
            </figure>
        </Container>
    )
}