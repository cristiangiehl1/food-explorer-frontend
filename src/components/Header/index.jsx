import { MdHexagon } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import { Container } from "./styles";



export function Header() {
    return (
        <Container> 
            <button>
                <RxHamburgerMenu size={30}/>
            </button>
            <div className="wrapper">
                <MdHexagon size={30}/>
                <h1>food explorer</h1>
                <span>admin</span>
            </div>
        </Container>
    )
}