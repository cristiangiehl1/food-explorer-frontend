import { Container } from "./styles";

export function ButtonNavigate({ title, onclick, ...rest}) {
    return (
        <Container {...rest}>
            <button onClick={onclick}>
                {title}
            </button>
        </Container>
    )
    
}