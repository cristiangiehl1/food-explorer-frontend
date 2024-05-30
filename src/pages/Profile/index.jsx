import { CiMail } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";
import { FaPersonHalfDress } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

import { Container, EditProfile } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { useNavigate } from "react-router-dom";

export function Profile() {
    const [editProfile, seteditProfile] = useState(true);
    const [payment, setPayment] = useState(false);
    const [adress, setAdress] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const [lastOrders, setLastOrders] = useState(false);

    const [menuIsOpen, setMenuIsOpen] = useState();

    const navigate = useNavigate();

    function handleEditProfile() {
        seteditProfile(true);
        setPayment(false);
        setAdress(false);
        setFavorites(false);
        setLastOrders(false);
    }

    function handleEditPayment() {
        seteditProfile(false);
        setPayment(true);
        setAdress(false);
        setFavorites(false);
        setLastOrders(false);  
    }

    function handleEditMyAdress() {
        seteditProfile(false);
        setPayment(false);
        setAdress(true);
        setFavorites(false);
        setLastOrders(false);  
    }

    function handleEditMyFavorites() {
        seteditProfile(false);
        setPayment(false);
        setAdress(false);
        setFavorites(true);
        setLastOrders(false);  
    }

    function handleLastOrders() {
        seteditProfile(false);
        setPayment(false);
        setAdress(false);
        setFavorites(false);
        setLastOrders(true);  
    }

    function handleBack() {
        navigate(-1);
    }




    return (
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}   
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)}/>
            <aside className="profileMenu">
                <button 
                    data-highlight-button={editProfile}
                    onClick={handleEditProfile}
                >
                    Editar perfil
                </button>
                <button 
                    data-highlight-button={payment}
                    onClick={handleEditPayment}
                >
                    Método de pagamento
                </button>                    
                <button 
                    data-highlight-button={adress}
                    onClick={handleEditMyAdress}
                >
                    Meu endereço
                </button>                    
                <button 
                    data-highlight-button={favorites}
                    onClick={handleEditMyFavorites}
                >
                    Meus favoritos
                </button>
                <button 
                    data-highlight-button={lastOrders}
                    onClick={handleLastOrders}
                >
                    Meu pedidos
                </button>   
                <button className="backHomeBtn" onClick={handleBack}> <IoIosArrowBack />Voltar</button>                 
            </aside>
            <main>
                <EditProfile data-show-page={editProfile}>
                <Input
                    type="text"
                    label="Nome"
                    placeholder="Cristian Giehl"
                    icon={FaPersonHalfDress}
                    id="nome"                
                />
                <Input
                    type="text"
                    label="E-mail"
                    placeholder="cristiangiehl@email.com"
                    icon={CiMail}
                    id="email"                
                />
                <Input
                    type="password"
                    label="Senha atual"
                    placeholder="As senhas devem ser diferentes"
                    icon={IoLockClosed}
                    id="old_password"                
                />
                <Input
                    type="password"
                    label="Nova senha"
                    placeholder="As senhas devem ser diferentes"
                    icon={IoLockClosed}
                    id="new_password"                
                />
                <Button
                    title="Salvar alterações"
                />                
                </EditProfile>



            </main>
            <Footer />
        </Container>
    )
}