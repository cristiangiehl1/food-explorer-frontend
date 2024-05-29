import { MdHexagon } from "react-icons/md";


import { Container } from "./styles";

export function Footer() {
    return(
        <Container>
            <MdHexagon size={20}/>
            <span className="project">food explorer</span>
            <span className="copyright">&copy; 2024 - Todos os direitos reservados.</span>
        </Container>
    )
}