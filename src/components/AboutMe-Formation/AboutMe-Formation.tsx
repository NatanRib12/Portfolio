import React from "react";
import './AboutMe-Formation.css'

const AboutMeFormation:React.FC = () =>{
    return(
        <div className="box">
            <div className="aboutMe-container">
                <div className="aboutMe-text">
                    <h1>Sobre mim</h1>    
                    <p>Oi oi, prazer em conhecer, permita me falar um pouco sobre mim.
                    <br></br>
                    <br></br>
                    Me chamo Natan, tenho 18 anos e atualmente estudo na Etec Jaraguá, lá   estudamos diversas tecnologias como Java, MySQL, React, JavaScript, PHP e     dentre outras. Ao término do ensino médio desejo ingressar na área de engenharia de software buscando me tornar um ótimo profissional.
                 <br></br>
                 <br></br>
                  Nos meus tempos de lazer gosto de tocar violão (quem não adora um som não é     mesmo? haha), jogar vídeo game e curiar na internet novas tecnologias que estão sendo utilizadas no mercado, principalmente na área de Front-End.</p>
             </div>
             <div className="aboutMe-habilits">
                 <h2>Minhas Habilidades</h2>
                     <div className="habilit-itens">
                         <div className="habilit-item">
                          JavaScript
                           </div>
                         <div className="habilit-item">
                              C#
                          </div>
                          <div className="habilit-item">
                              HTML/CSS
                          </div>
                          <div className="habilit-item">
                              PHP
                          </div>
                           <div className="habilit-item">
                              React
                         </div>
                          <div className="habilit-item">
                              Java
                         </div>
                         <div className="habilit-item">
                              React Native
                          </div>
                          <div className="habilit-item">
                              Figma
                      </div>
                  </div>
              </div>
            </div>
            <div className="formation-container">
                <h1>Formação</h1>
                <div className="formation-cards">
                    <div className="card-right">

                    </div>
                    <div className="card-left">

                    </div>
                </div>
            </div>
        </div>
    )
} 
export default AboutMeFormation