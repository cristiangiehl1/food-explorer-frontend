import { Container } from "./styles";

export function Input({icon: Icon, id, label, ...rest }) {
    return (
        <Container>
            <label htmlFor={id}>
                {label}
            </label>
            <div className="input-wrapper">
                {Icon && <Icon size={20} />}
                <input id={id} {...rest}></input>
            </div>
        </Container>
    )
}