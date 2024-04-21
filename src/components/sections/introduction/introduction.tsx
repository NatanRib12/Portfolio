import React from 'react';
import './introduction.css'
const Introduction: React.FC = () => {

    return (
        <div>
            <div className="hero-container">
                <div className="hero-photo-container">
                    <div className="hero-photo">
                        <img src="https://avatars.githubusercontent.com/u/80856939?v=4" alt="Natan Santos" />
                        <p>Desenvolvedor Front e Back-end</p>
                    </div>
                </div>
                <div className="hero-card-container">
                    <div className="hero-card">
                        <div className="hero-card-text">
                            <h2>
                                Transformando ideias em realidade digital, onde criatividade e código se encontram para dar vida a projetos excepcionais.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;