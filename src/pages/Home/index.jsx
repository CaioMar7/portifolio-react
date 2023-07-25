import { Container, FirstSection, SecondSection, SectionDescription, SectionTitle, ThirdSection, FourthSection, FifthSection, SixthSection } from "./styles";
import { LinkButton } from "../../components/LinkButton";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiMessageSquareDetail, BiLogoReact, BiLogoJavascript, BiLogoNodejs,BiLogoGithub } from "react-icons/bi";
import { AiOutlineHtml5, AiOutlineConsoleSql } from "react-icons/ai"
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
        {id: 2, title: "Lorem ipsum dolor sit amet. In dolores quis sed labo", description: "Lorem ipsum dolor sit amet. In dolores quis sed laboriosam fugiat sit veniam recusandae eos eius voluptatem est omnis tenetur. Et cumque unde et nobis iste ex odio alias ut libero officiis et voluptas consequuntur? Ut molestias mollitia et dolor libero et repudiandae ratione At eius voluptatem.", projectLink: "www.google.com.br", imgSrc: "https://pbs.twimg.com/profile_images/1662499731564638209/boE4IzYd_400x400.jpg"},
        {id: 3, title: "Lorem ipsum dolor sit amet. In dolores quis sed labo", description: "Lorem ipsum dolor sit amet. In dolores quis sed laboriosam fugiat sit veniam recusandae eos eius voluptatem est omnis tenetur. Et cumque unde et nobis iste ex odio alias ut libero officiis et voluptas consequuntur? Ut molestias mollitia et dolor libero et repudiandae ratione At eius voluptatem.", projectLink: "www.google.com.br", imgSrc: "https://pbs.twimg.com/profile_images/1662499731564638209/boE4IzYd_400x400.jpg"},
        {id: 3, title: "Lorem ipsum dolor sit amet. In dolores quis sed labo", description: "Lorem ipsum dolor sit amet. In dolores quis sed laboriosam fugiat sit veniam recusandae eos eius voluptatem est omnis tenetur. Et cumque unde et nobis iste ex odio alias ut libero officiis et voluptas consequuntur? Ut molestias mollitia et dolor libero et repudiandae ratione At eius voluptatem.", projectLink: "www.google.com.br", imgSrc: "https://pbs.twimg.com/profile_images/1662499731564638209/boE4IzYd_400x400.jpg"},
        {id: 3, title: "Lorem ipsum dolor sit amet. In dolores quis sed labo", description: "Lorem ipsum dolor sit amet. In dolores quis sed laboriosam fugiat sit veniam recusandae eos eius voluptatem est omnis tenetur. Et cumque unde et nobis iste ex odio alias ut libero officiis et voluptas consequuntur? Ut molestias mollitia et dolor libero et repudiandae ratione At eius voluptatem.", projectLink: "www.google.com.br", imgSrc: "https://pbs.twimg.com/profile_images/1662499731564638209/boE4IzYd_400x400.jpg"},
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