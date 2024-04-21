import React from 'react';
import './navbar.css'

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <div className='navbar'>
            <div className="navbar-content">
                <div className="navbar-logo">
                    <h1 className='poppins-bold'>Natan Santos</h1>
                </div>
                <div className="navbar-items">
                    <div className="navbar-item">
                        <a href="#hero">Início</a>
                    </div>
                    <div className="navbar-item">
                        <a href="#aboutme">Sobre Mim</a>
                    </div>
                    <div className="navbar-item">
                        <a href="#formation">Formação</a>
                    </div>
                    <div className="navbar-item">
                        <a href="#projects">Projetos</a>
                    </div>
                </div>
                <div className="navbar-icons">
                    <div className="navbar-icon">
                        <FaGithub color='white' />
                    </div>
                    <div className="navbar-icon">
                        <FaLinkedin color='white' />
                    </div>
                    <div className="navbar-icon">
                        <FaEnvelope color='white' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;