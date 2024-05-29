import { Container } from "./styles";


export function Textarea({title, label, id, description, ...rest}) {
    return(
        <Container>
            <label htmlFor={id}>{label}</label>
            <textarea {...rest} name={title} id={id}>{description}</textarea>
        </Container>
    )
}