import { Container, FirstSection, SecondSection } from "./styles";
import { LinkButton } from "../../components/LinkButton";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import ImgCaio  from "../../assets/portifolio-img.png"

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
                    <LinkButton to="https://www.trello.com" target="_blank" text="Fale comigo" icon={BiMessageSquareDetail}/>
                </div>
            </FirstSection>
            <SecondSection>
            <div>
                <img src={ImgCaio} alt="Foto do desenvolvedor Caio"/>
            </div>
            </SecondSection>
        </Container>
    )
}