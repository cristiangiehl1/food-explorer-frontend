import { RxHamburgerMenu } from "react-icons/rx";
import { PiNewspaperClipping } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";

import { Container,
    StyledBsFillHexagonFill
 } from "./styles";
import { Input } from "../Input"

import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg";


export function Header({ onOpenMenu, quantity }) {
    const { user, signOut } = useAuth();

    const [disheName, setDisheName] = useState("");
    const [ingredientName, setIngredientName] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);

    const navigate = useNavigate();

    function handleChange(event) {
        setDisheName(event.target.value);
        setIngredientName(event.target.value);        
    }

    function handleBLur() {
        setTimeout(() => {
            setShowSearchResult(false)
        }, 100);
    }

    function formatPrice(price) {
        const formattedPrice = parseFloat(price).toFixed(2);
        return formattedPrice.replace('.', ',');
    }

    async function handleNavDetails(id) {
        navigate(`/details/${id}`);
    }

    function handleFavorites() {
        navigate("/favorites");
    }

    function handleSignOut() {
        signOut();
        navigate("/");
    }

    function handleNew() {
        navigate("/dishes");
    }

    function handleCart() {
        navigate("/cart");
    }

    function handleBuyHistoric() {
        navigate("/historic")
    }

    useEffect(() => {
        async function handleSearchResult() { 
            if (disheName.length === 0) {
                setDisheName("");
                setIngredientName("");
            }
        
            const dishesFromIngredientsResponse = await api.get(`/ingredients?ingredient=${ingredientName}`);

            if(dishesFromIngredientsResponse.data.length > 0) {
                setSearchResult(dishesFromIngredientsResponse.data); 
                return;
            }

            const dishesResponse = await api.get(`/dishes?name=${disheName}`);  
            if(dishesResponse.data.length > 0) {
                setSearchResult(dishesResponse.data);
            }                 
        }
        handleSearchResult();

    }, [disheName])


    return (
        <Container> 
            <button 
                className="menu"
                onClick={onOpenMenu}
            >
                <RxHamburgerMenu size={30}/>
            </button>
            <div className="wrapper">
                <StyledBsFillHexagonFill/>
                <div>
                    <h1>food explorer</h1>
                    {
                        [USER_ROLE.ADMIN].includes(user.role) &&
                        <span>{user.role}</span>
                    }
                </div>             
            </div>
            <div className="searchbar">
                <Input
                    placeholder="Busque por pratos ou ingredientes"
                    icon={IoIosSearch}
                    onChange={handleChange}
                    onFocus={() => setShowSearchResult(true)}
                    onBlur={() => handleBLur()}
                />
                <aside className="searchbarResult" data-search-bar-result={showSearchResult}>
                    {
                        searchResult.map(dishe => (                
                        <button                            
                            key={String(dishe.id)}
                            onClick={() => {handleNavDetails(dishe.id)}}
                        >
                            <div className="img-wrapper">
                                <img src={dishe.image ? `${api.defaults.baseURL}/files/dishes/${dishe.image}` : dishePlaceholder} alt="" />
                                <span>{dishe.name}</span>
                            </div>
                            <span>R$ {formatPrice(dishe.price)}</span>
                        </button>
                        ))
                    } 
                </aside>
            </div>                     
            {   [USER_ROLE.CUSTOMER].includes(user.role) &&        
                <button 
                    className="client-favorites-btn largeScreenBtn" 
                    onClick={handleFavorites}>
                        <span>Meus favoritos</span>
                </button> 
            }
            {   window.innerWidth >= 1024 &&       
                <button 
                    className="client-orders-btn largeScreenBtn" 
                    onClick={handleBuyHistoric}>
                        <span>Meus pedidos</span>
                </button> 
            }
            {   [USER_ROLE.CUSTOMER].includes(user.role) &&         
                <div className="ordersNumb">                    
                    <div className="smallScreenBtn-Container"  onClick={handleCart}>
                        <PiNewspaperClipping size={25}/>
                        <button className="smallScreenBtn">
                            {
                               quantity
                            }
                        </button>
                    </div>    
                               
                    <button onClick={handleCart} className="client-cart-btn largeScreenBtn">
                        <PiNewspaperClipping size={30}/>
                        {
                            `Pedidos (${quantity})`
                        }
                    </button>
                         
                </div>
            }
            { [USER_ROLE.ADMIN].includes(user.role) &&                  
                <div>
                    <button className="adminBtn" onClick={handleNew}>
                        { `Novo prato` }
                    </button>
                </div>
            }      

            <button className="logout" onClick={() => handleSignOut()}>
                <MdLogout size={30}/>
            </button>
        </Container>
    )
}