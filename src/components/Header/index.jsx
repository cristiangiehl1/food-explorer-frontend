import { MdHexagon } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiNewspaperClipping } from "react-icons/pi";

import { Container } from "./styles";

import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/roles";


export function Header({ onOpenMenu, cartQuantity }) {
    const { user } = useAuth();


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
                {
                    [USER_ROLE.ADMIN].includes(user.role) &&
                    <span>{user.role}</span>
                }                
            </div>
            {   [USER_ROLE.CUSTOMER].includes(user.role) &&         
                <div 
                    className="ordersNumb"
                
                >
                    <PiNewspaperClipping size={25}/>
                    <span>{cartQuantity}</span>
                </div>
            }
        </Container>
    )
}