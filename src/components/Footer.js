import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter, faFacebookF, faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>Hồ Nhật Huy</h2>
                        <p>Android Developer</p>
                    </div>
                    <div className="footer-social">
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Hồ Nhật Huy. Bản quyền thuộc TravisHuy.</p>
                    <div className="tech-stack">
                        <span>Được phát triển với:</span>
                        <span><FontAwesomeIcon icon={faReact} /> React</span>
                    </div>
                </div>
            </div>
            <a href="#home" className="back-to-top" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </footer>
    );
};

export default Footer; 