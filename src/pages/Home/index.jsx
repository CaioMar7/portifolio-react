import { Container, FirstSection, SecondSection, SectionDescription, SectionTitle, ThirdSection, FourthSection, FifthSection, SixthSection } from "./styles";
import { LinkButton } from "../../components/LinkButton";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiMessageSquareDetail, BiLogoReact, BiLogoJavascript, BiLogoNodejs,BiLogoGithub } from "react-icons/bi";
import { AiOutlineHtml5, AiOutlineConsoleSql } from "react-icons/ai"
import { BsFiletypeCss } from "react-icons/bs"
import { RiGraduationCapFill } from "react-icons/ri"
import ImgCaio  from "../../assets/portifolio-img.png"

export function Home() {
    const academicList = [
        {id: 1, text: "Ensino Médio/Técnico - Processamento de Dados - Concluido - FAETEC"},
        {id: 2, text: " Ensino Superior - Gestão de Recursos Humanos - Concluido - UVA"},
        {id: 3, text: "Formação em Desenvolvimento Web FullStack Rocketseat Explorer - Concluido - Rocketseat"},
        {id: 4, text: "Ensino Superior - Análise e Desenvolvimento de Sistemas - Cursando - Estacio"}
    ]

    const techList = [
        {id: 1, icon: <AiOutlineHtml5/>, text: "HTML"},
        {id: 2, icon: <BsFiletypeCss/>, text: "CSS"},
        {id: 3, icon: <BiLogoJavascript/>, text: "JAVASCRIPT"},
        {id: 4, icon: <BiLogoReact/>, text: "REACT"},
        {id: 5, icon: <BiLogoNodejs/>, text: "NODEJS"},
        {id: 6, icon: <AiOutlineConsoleSql/>, text: "SQL"},
        {id: 7, icon: <BiLogoGithub/>, text: "GIT"},
    ]

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
            <ThirdSection>
                <SectionTitle> Sobre mim </SectionTitle>
                <SectionDescription> Me chamo Caio, tenho 26 anos e sou desenvolvedor web fullstack. Sempre fui apaixonado por desenvolvimento, tive meu primeiro contato com a programação quando era adolescente e criava servidores de jogos como Tibia, Mu e Ragnarok. No momento estou focando em me aperfeiçoar nas tecnologias React e NodeJS. </SectionDescription>
            </ThirdSection>
            <FourthSection>
                <SectionTitle> Formação Acadêmica </SectionTitle>
                { 
                academicList && academicList.map(academic => (
                        <SectionDescription key={academic.id}> <RiGraduationCapFill/> {academic.text}</SectionDescription>
                    )) 
                }
            </FourthSection>
            <FifthSection>
                <SectionTitle> Tecnologias que utilizo </SectionTitle>
                <ul>
                    { 
                    techList && techList.map(tech => (
                        <li key={tech.id}>
                            <SectionDescription> {tech.icon} {tech.text}</SectionDescription>
                        </li>
                        ))
                    }
                </ul>
            </FifthSection>
            <SixthSection>
                <SectionTitle> Projetos </SectionTitle>
                <SectionDescription> Clicando em qualquer projeto você será encaminhado para o respectivo repositório em meu Github. </SectionDescription>
                <ul>

                </ul>
            </SixthSection>
        </Container>
    )
}