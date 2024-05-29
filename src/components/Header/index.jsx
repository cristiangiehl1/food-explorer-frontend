import { MdHexagon } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiNewspaperClipping } from "react-icons/pi";



import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";


export function Header({ onOpenMenu }) {
    const { user } = useAuth();
    
    const [ordersShow, setOrdersShow] = useState("");
    

    useEffect(() => {
        if(user.role === "admin") {
            setOrdersShow("false")
        }
    }, [])


    return (
        <Container> 
            <button 
                className="menu"
                onClick={onOpenMenu}
            >
                <RxHamburgerMenu size={30}/>
            </button>
            <div className="wrapper">
                <MdHexagon size={30}/>
                <h1>food explorer</h1>
                <span>{user.role}</span>                
            </div>
            <div 
                className="ordersNumb"
                data-orders-is-available={ordersShow}
            >
                <PiNewspaperClipping size={25}/>
                <span>2</span>
            </div>
        </Container>
    )
}