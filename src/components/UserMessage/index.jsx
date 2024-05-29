import { Container } from "./styles";

export function UserMesssage({ message, background, isMessage }) {
    return(
        <Container 
            $background={background}
            $isMessage={isMessage}
        >
            <span>{message}</span>
        </Container>
    )
}