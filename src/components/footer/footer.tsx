import React from "react";
import './footer.css'

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-item-name">
                    Natan Santos
                </div>
                <div className="footer-itens">
                    <div className="footer-item-contact">
                        <div className="contact">
                            <p>Contato</p>
                        </div>
                        <div className="email">
                            <a href="#">
                                NatanSantos.dev@gmail.com
                                </a>
                        </div>
                    </div>
                    <div className="footer-item-socialmedia">
                        <p>Redes Sociais</p>
                        <div className="icon">
                            <a href="#">
                                <FaLinkedin color="white" />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="#">
                                <FaGithub color="white" />
                            </a>
                        </div>
                    </div>
                
                <div className="footer-item-text">
                    <p>Ainda sou novo no mundo da programação e desenvolvimento, porém sempre busco aprender e principalmente colocar em prática. Estou ansioso para entrar no mercado de trabalho e me especializar cada vez mais.</p>
                </div>
            </div>
            </div>
            <div className="footer-copyright">
                <div className="copyright-text">
                    &copy; 2024 - Natan Santos | Todos os direitos reservados
                </div>
            </div>
        </div>
    )
}
export default Footer