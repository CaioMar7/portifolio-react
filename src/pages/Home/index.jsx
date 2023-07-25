import { Container, FirstSection, SecondSection, SectionDescription, SectionTitle, ThirdSection, FourthSection, FifthSection, SixthSection } from "./styles";
import { LinkButton } from "../../components/LinkButton";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiMessageSquareDetail, BiLogoReact, BiLogoJavascript, BiLogoNodejs,BiLogoGithub } from "react-icons/bi";
import { AiOutlineHtml5, AiOutlineConsoleSql, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { BsFiletypeCss } from "react-icons/bs"
import { RiGraduationCapFill } from "react-icons/ri"
import ImgCaio  from "../../assets/portifolio-img.png"
import { Card } from "../../components/Card";

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

    const projectList = [
        {id: 1, title: "Meu Portifólio", description: "Projeto do meu portifólio, mobile-first, responsivo. A idéia desse portifólio é ser minimalista e objetivo, pois acredito que passe maior profissionalismo e facilite para a análise dos recrutadores.", projectLink: "https://github.com/CaioMar7/portifolio-react", imgSrc: "https://i.imgur.com/AibiHiL.png"},
        {id: 2, title: "Frontend Food Explorer", description: "Frontend do projeto Food Explorer, criado para o desafio final do curso da Rocketseat Explorer. É um app que simula um restaurante online, possui painel admnistrativo e os usuários podem realizar pedidos.", projectLink: "https://github.com/CaioMar7/foodexplorer-frontend", imgSrc: "https://github.com/CaioMar7/foodexplorer-frontend/blob/main/src/assets/images/food-explorer.png?raw=true"},
        {id: 3, title: "Backend Food Explorer", description: "Backend do projeto Food Explorer, criado para o desafio final do curso da Rocketseat Explorer. É um app que simula um restaurante online, possui painel admnistrativo e os usuários podem realizar pedidos.", projectLink: "https://github.com/CaioMar7/foodexplorer-backend", imgSrc: "https://github.com/CaioMar7/foodexplorer-frontend/blob/main/src/assets/images/food-explorer.png?raw=true"},
        {id: 3, title: "Frontend InfraWiki", description: "Frontend do projeto InfraWiki, o projeto consiste em um pequeno blog com interface agradável voltada para a área de infraestrutura, os usuários podem publicar seus conteúdos para outros usuários visualizarem.", projectLink: "https://github.com/CaioMar7/infrawiki-frontend", imgSrc: "https://i.imgur.com/dFUc3nG.png"},
        {id: 3, title: "Backend InfraWiki", description: "Frontend do projeto InfraWiki, o projeto consiste em um pequeno blog com interface agradável voltada para a área de infraestrutura, os usuários podem publicar seus conteúdos para outros usuários visualizarem.", projectLink: "https://github.com/CaioMar7/infrawiki-backend", imgSrc: "https://i.imgur.com/dFUc3nG.png"},
        {id: 3, title: "Meu Bolso", description: "A idéia desse projeto é desenvolver um app que facilite sua gestão financeira, para utilização pessoal ou comercial. Esse projeto está sendo refeito pois perdi quando meu pc ficou ruim.", projectLink: "https://github.com/CaioMar7/meubolso-frontend", imgSrc: "https://i.imgur.com/aOhViEQ.png"},
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
                </div>
                <div>
                    <LinkButton to="https://github.com/CaioMar7" target="_blank" text="Github" icon={BiLogoGithub}/>
                    <LinkButton to="https://www.linkedin.com/in/caiomar7/" target="_blank" text="Linkedin" icon={AiOutlineLinkedin}/>
                    <LinkButton to="https://api.whatsapp.com/send?phone=5521982072895" target="_blank" text="Whatsapp" icon={AiOutlineWhatsApp}/>
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
                <SectionDescription> Clicando no botão 'Ver projeto' projeto você será encaminhado para o respectivo repositório em meu Github. </SectionDescription>
                <ul>
                    {
                        projectList && projectList.map(project => (
                            <Card imgSrc={project.imgSrc} title={project.title} description={project.description} projectLink={project.projectLink}/>
                        ))
                    }
                </ul>
            </SixthSection>
        </Container>
    )
}