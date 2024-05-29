import { Container } from "./styles";

export function Button({ icon: Icon, title, price, color, ...rest }) {

    

    return (
        <Container
            color={color}            
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {title}
            {price}
        </Container>
    )
}