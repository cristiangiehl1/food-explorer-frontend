import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import { Container } from "./styles";

import { Input } from "../Input"
import { Footer } from "../Footer";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function SideMenu({ menuIsOpen, onCloseMenu}) {
    const { signOut, user } = useAuth();

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

    // function handleProfile() {
    //     navigate("/users");       
    // }

    function handleFavorites() {
        navigate("/favorites");  
        onCloseMenu();
    }

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    function handleNew() {
        navigate("/dishes");
        onCloseMenu();
    }

    function hadleBuyHistoric() {
        navigate("/historic")
        onCloseMenu();
    }

    async function handleNavDetails(id) {
        navigate(`/details/${id}`);
        onCloseMenu();
    }

    function formatPrice(price) {
        const formattedPrice = parseFloat(price).toFixed(2);
        return formattedPrice.replace('.', ',');
    }

    useEffect(() => {
        async function handleSearchResult() { 
            if (disheName.length === 0) {
                setDisheName("");
                setIngredientName("");
            }
        
            const dishesFromIngredientsResponse = await api.get(`/ingredients?ingredient=${ingredientName}`)

            if(dishesFromIngredientsResponse) {
                setSearchResult(dishesFromIngredientsResponse.data);                  
                return;
            }
            
            const dishesResponse = await api.get(`/dishes?name=${disheName}`);    
            setSearchResult(dishesResponse.data);      
        }
        handleSearchResult();

    }, [disheName])


    return (
        <Container data-menu-is-open={menuIsOpen}>
            <header>
                <button onClick={onCloseMenu}>
                    <IoMdClose size={25}/>
                </button>               
                <span>Menu</span>
            </header>
            <main>
                <Input 
                    placeholder="Busque por pratos ou ingredientes"
                    icon={IoIosSearch}
                    onChange={handleChange}  
                    onFocus={() => setShowSearchResult(true)} 
                    onBlur={() => handleBLur()}            
                />
                <aside data-search-bar-result={showSearchResult}>
                    {
                        searchResult.map(dishe => (                
                        <button
                            
                            key={String(dishe.id)}
                            onClick={() => {handleNavDetails(dishe.id)}}
                            
                        >
                            <span>{dishe.name}</span>
                            <span>R$ {formatPrice(dishe.price)}</span>
                        </button>
                        ))
                    } 
                </aside>
                {/* <section>
                    <button onClick={handleProfile}>Meu perfil</button>
                </section> */}
                {
                    [USER_ROLE.ADMIN].includes(user.role) &&
                    <section>
                        <button onClick={handleNew}>Novo prato</button>
                    </section>                   
                }
                {
                    [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <section>
                        <button onClick={handleFavorites}>Meus Favoritos</button>
                    </section>                   
                }
                <section>
                    <button onClick={hadleBuyHistoric}>Meus pedidos</button>
                </section>                   
                <section>
                    <button onClick={handleSignOut}>Sair</button>
                </section>
            </main>
            <Footer />         
        </Container>
    );
}