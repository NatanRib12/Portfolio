import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './aboutme.css'

const AboutMeFormation: React.FC = () => {
    return (
        <div className="box">
            <div className="aboutme">
                <div className="aboutme-right">
                    <div className="title-right">
                        <h1>Sobre mim</h1>
                    </div>
                    <div className="text-right">
                        Oi oi, prazer em conhecer, permita me falar um pouco sobre mim.
                        <br />
                        <br />
                        Me chamo Natan, tenho 18 anos e atualmente estudo na Etec Jaraguá, lá estudamos diversas tecnologias como Java, MySQL, React, JavaScript, PHP e dentre outras. Ao término do ensino médio desejo ingressar na área de engenharia de software buscando me tornar um ótimo profissional.
                        <br />
                        <br />
                        Nos meus tempos de lazer gosto de tocar violão (quem não adora um som não é mesmo? haha), jogar vídeo game e curiar na internet novas tecnologias que estão sendo utilizadas no mercado, principalmente na área de Front-End.
                    </div>
                </div>
                <div className="aboutme-left">
                    <div className="text-left">
                        <h2>Minhas habilidades</h2>
                    </div>
                    <div className="left-habilits">
                        <div className="itens-habilit">
                            <div className="item-habilit">
                                JavaScript
                            </div>
                            <div className="item-habilit">
                                C#
                            </div>
                            <div className="item-habilit">
                                HTML/CSS
                            </div>
                            <div className="item-habilit">
                                PHP
                            </div>
                            <div className="item-habilit">
                                React
                            </div>
                            <div className="item-habilit">
                                Java
                            </div>
                            <div className="item-habilit">
                                React Native
                            </div>
                            <div className="item-habilit">
                                Figma
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="formation">
                <div className="header-title reverse">
                    <h1>Formação</h1>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: '#0060FD', color: '#fff' 
                        }}
                        contentArrowStyle={{
                             borderRight: '7px solid  #0060FD' 
                        }}
                        date="Atualmente"
                        dateClassName={ 
                             "date-time"
                        }
                        iconStyle={{
                            background: '#0060FD', color: '#fff',
                            padding: 5
                        }}
                        icon={<img src="https://static.wixstatic.com/media/01601d_aa1ff15d320a40a794ce1a1437b53468~mv2.png/v1/fit/w_2500,h_1330,al_c/01601d_aa1ff15d320a40a794ce1a1437b53468~mv2.png" width={50} height={50}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Desenvolvimento de Sistemas</h3>
                        Etec Jaragua
                        <p>
                            Lógica de programação, Design visual, experiência do usuário, análise de projeto de sistemas, trabalho em equipe
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: '#0060FD', color: '#fff' 
                        }}
                        date="Atualmente"
                        dateClassName={ 
                            "date-time"
                       }
                        iconStyle={{ 
                            background: '#0060FD', color: '#fff', padding: 5
                        }}
                        icon={ <img src="https://res.cloudinary.com/apideck/image/upload/v1627336391/marketplaces/ckn4lw3qkkm4p0b34v4uqmj4f/listings/yixc59zsrws0n9br6qgy.png" width={50} height={50}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Curso de Programação</h3>
                        Alura
                        <p>
                            Lógica de programação, Design visual, experiência do usuário, análise de projeto de sistemas, trabalho em equipe
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className="hero-projects">
                <div className="hero-projects-title">
                    <h1>Projetos</h1>
                </div>
                <div className="projects">
                    <div className="project">
                        <div className="project-img">
                            <img src="https://avatars.githubusercontent.com/u/80856939?v=4" alt="Natan Santos" />
                        </div>
                        <div className="project-title">
                            Aqui tem um título
                        </div>
                        <div className="project-decription">
                            descrição
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src="https://avatars.githubusercontent.com/u/80856939?v=4" alt="Natan Santos" />
                        </div>
                        <div className="project-title">
                            Aqui tem um título
                        </div>
                        <div className="project-decription">
                            descrição
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMeFormation
