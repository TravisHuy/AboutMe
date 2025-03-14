import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-heading">
                            <span className="greeting">Xin chào, tôi là</span>
                            <span className="name">Nguyễn Văn A</span>
                        </h1>
                        <h2 className="hero-title">Android Developer</h2>
                        <p className="hero-description">
                            Tôi là một nhà phát triển Android đam mê với 3 năm 
                            kinh nghiệm trong việc xây dựng các ứng dụng di động 
                            hiện đại và chất lượng cao.
                        </p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn primary-btn">Liên Hệ</a>
                            <a href="#" className="btn secondary-btn">Tải CV</a>
                        </div>
                        <div className="social-icons">
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="profile-image-container">
                            <img 
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                                alt="Nguyễn Văn A" 
                                className="profile-image" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 