import { Container, StyledFaAngleLeft } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg";
import { useNavigate } from "react-router-dom";




export function Favorites() {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [menuIsOpen, setMenuIsOpen] = useState(false);


    const navigate = useNavigate();

    async function handleRemoveFavorite(id) {
        await api.put(`/favorites/${id}`, {
            favorite: false
        })    

        const newFavoritres = favorites.filter(favorite => {
            return favorite.dishes.id !== id
        })

        setFavorites(newFavoritres);
    }

    function handleBack() {
        navigate("/")
    }

    useEffect(() => {
        const cartFromLocalStorage = localStorage.getItem(`@foodexpress:cart_${user.id}`);

        if(cartFromLocalStorage) {            
            setCart(JSON.parse(cartFromLocalStorage))
        }  
    }, []);

    useEffect(() => {
        async function fetchFavorites() {
            const userFavorites = await api.get(`/favorites`);

            const dishes = await api.get(`/dishes?name&ingredients`)

            const favoritesFilter = userFavorites.data.filter(favorite => {
                return favorite.favorite === 1;
            })

            const dishesWithFavorites = favoritesFilter.map(favorite => {
                const dishesFiltered = dishes.data.filter(dishe => dishe.id === favorite.dishe_id);
                return { ...favorite, dishes: dishesFiltered[0] }; 
            });

            setFavorites(dishesWithFavorites);
        }
        fetchFavorites();
    }, [])

    return(
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)} 
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} quantity={cart.length}/>
            <main className="favorite-main">
                <h1>Meus Favoritos</h1>
                <section className="favorites-wrapper">
                    {   favorites &&
                        favorites.map((favorite, index) => (
                            <div key={String(index)} className="favorites-content">
                                <img src={favorite.dishes.image ? `${api.defaults.baseURL}/files/dishes/${favorite.dishes.image}` : dishePlaceholder} alt={favorite.dishes.name}/>
                                <div className="favorites-text-wrapper">
                                    <h2>{favorite.dishes.name}</h2>
                                    <button onClick={() => handleRemoveFavorite(favorite.dishes.id)}>Remover dos favoritos</button>
                                </div>                               
                            </div>
                        ))
                    }
                </section>
                <button className="btn-nav-home" onClick={handleBack}>
                    <StyledFaAngleLeft />
                    Voltar
                </button>
            </main>
            <Footer />

        </Container>
    )
}