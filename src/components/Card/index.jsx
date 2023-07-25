import { Container } from "./styles";
import { LinkButton } from "../LinkButton"
import { AiOutlineEye } from "react-icons/ai"

export function Card({imgSrc, title, description, projectLink}) {
    return (
        <Container>
            <img src={imgSrc} alt=""/>
            <h3> {title} </h3>
            <p> {description} </p>
            <LinkButton to={projectLink} target="_blank" text="Ver projeto" icon={AiOutlineEye}/>
        </Container>
    )
}