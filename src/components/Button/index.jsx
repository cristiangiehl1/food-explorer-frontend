import { Container } from "./styles";

export function Button({ icon: Icon, title, price, ...rest }) {
    return (
        <Container
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {title}
            {price}
        </Container>
    )
}