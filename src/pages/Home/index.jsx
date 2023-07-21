import { Container, FirstSection, SecondSection } from "./styles";
import { LinkButton } from "../../components/LinkButton";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

export function Home() {
    return (
        <Container>
            <FirstSection>
                <div>
                    <p>Prazer, me chamo</p>
                    <h1> Caio Marques </h1>
                    <p> Desenvolvedor Web Fullstack</p>
                </div>
                <div>
                    <LinkButton to="https://www.trello.com" target="_blank" text="Download CV" icon={BsFillArrowDownCircleFill}/>
                    <LinkButton to="https://www.trello.com" target="_blank" text="Fale comigo" icon={AiOutlineMessage}/>
                </div>
            </FirstSection>
            <SecondSection>

            </SecondSection>
        </Container>
    )
}