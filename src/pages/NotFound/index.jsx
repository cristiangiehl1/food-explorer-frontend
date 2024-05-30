import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { IoIosArrowRoundBack } from "react-icons/io";



export function NotFound() {
    const navigate = useNavigate();

    function handleBack() {
        navigate("/");
    }

    return(
        <Container>
            <h1>Página indisponível bb 💀</h1>
            <button onClick={handleBack}> <IoIosArrowRoundBack size={30}/>Voltar para o início</button>
        </Container>
    )
}