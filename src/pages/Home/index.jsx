import { Container, FirstSection, SecondSection, SectionDescription, SectionTitle, ThirdSection, FourthSection, FifthSection, SixthSection } from "./styles";
import { LinkButton } from "../../components/LinkButton";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiMessageSquareDetail, BiLogoReact, BiLogoJavascript, BiLogoNodejs,BiLogoGithub } from "react-icons/bi";
import { AiOutlineHtml5, AiOutlineConsoleSql } from "react-icons/ai"
import { BsFiletypeCss } from "react-icons/bs"
import { RiGraduationCapFill } from "react-icons/ri"
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
            <ThirdSection>
                <SectionTitle> Sobre mim </SectionTitle>
                <SectionDescription> Me chamo Caio, tenho 26 anos e sou desenvolvedor web fullstack. Sempre fui apaixonado por desenvolvimento, tive meu primeiro contato com a programação quando era adolescente e criava servidores de jogos como Tibia, Mu e Ragnarok. No momento estou focando em me aperfeiçoar nas tecnologias React e NodeJS. </SectionDescription>
            </ThirdSection>
            <FourthSection>
                <SectionTitle> Formação Acadêmica </SectionTitle>
                <SectionDescription> <RiGraduationCapFill/> Ensino Médio/Técnico - Processamento de Dados - Concluido - FAETEC</SectionDescription>
                <SectionDescription> <RiGraduationCapFill/> Ensino Superior - Gestão de Recursos Humanos - Concluido - UVA</SectionDescription>
                <SectionDescription> <RiGraduationCapFill/> Formação em Desenvolvimento Web FullStack Rocketseat Explorer - Concluido - Rocketseat </SectionDescription>
                <SectionDescription> <RiGraduationCapFill/> Ensino Superior - Análise e Desenvolvimento de Sistemas - Cursando - Estacio </SectionDescription>
            </FourthSection>
            <FifthSection>
                <SectionTitle> Tecnologias que utilizo </SectionTitle>
                <ul>
                    <li>
                        <SectionDescription> <AiOutlineHtml5/> HTML</SectionDescription>
                    </li>
                    <li>
                        <SectionDescription> <BsFiletypeCss/> CSS</SectionDescription>
                    </li>
                    <li>
                        <SectionDescription> <BiLogoJavascript/> JAVASCRIPT</SectionDescription>
                    </li>
                    <li>    
                        <SectionDescription> <BiLogoReact/> REACT</SectionDescription>
                    </li>
                    <li>
                        <SectionDescription> <BiLogoNodejs/> NODE</SectionDescription>
                    </li>
                    <li>
                        <SectionDescription> <AiOutlineConsoleSql/> SQL</SectionDescription>
                    </li>
                    <li>
                        <SectionDescription> <BiLogoGithub/> GIT</SectionDescription>
                    </li>
                </ul>
            </FifthSection>
            <SixthSection>
                <SectionTitle> Projetos </SectionTitle>
                <SectionDescription> Me chamo Caio, tenho 26 anos e sou desenvolvedor web fullstack. Sempre fui apaixonado por desenvolvimento, tive meu primeiro contato com a programação quando era adolescente e criava servidores de jogos como Tibia, Mu e Ragnarok. No momento estou focando em me aperfeiçoar nas tecnologias React e NodeJS. </SectionDescription>
            </SixthSection>
        </Container>
    )
}