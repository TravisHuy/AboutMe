import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Cập nhật trạng thái scrolled khi cuộn trang
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Cập nhật active link dựa trên vị trí cuộn
            const sections = document.querySelectorAll('section');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            if (current) {
                setActiveLink(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="container">
                <nav>
                    <div className="logo">
                        <span className="logo-bracket">&lt;</span> 
                        Android Dev
                        <span className="logo-bracket">/&gt;</span>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link 
                                to="/#home" 
                                className={activeLink === 'home' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Trang Chủ
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#about" 
                                className={activeLink === 'about' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Giới Thiệu
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#skills" 
                                className={activeLink === 'skills' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Kỹ Năng
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#experience" 
                                className={activeLink === 'experience' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Kinh Nghiệm
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#education" 
                                className={activeLink === 'education' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Học Vấn
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#portfolio" 
                                className={activeLink === 'portfolio' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Dự Án
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#contact" 
                                className={activeLink === 'contact' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Liên Hệ
                            </Link>
                        </li>
                    </ul>
                    <div 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header; 