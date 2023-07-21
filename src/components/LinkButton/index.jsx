import { Container } from "./styles";

export function LinkButton({icon: Icon, text, ...rest }) {
    return (
        <Container { ...rest}>
            {text}
            {Icon && <Icon size={20}/>}
        </Container>
    )
}