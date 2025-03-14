import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                <div className="section-header">
                    <h2>Dự Án</h2>
                </div>
                <div className="portfolio-filter">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
                        onClick={() => handleFilterChange('all')}
                    >
                        Tất cả
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'app' ? 'active' : ''}`} 
                        onClick={() => handleFilterChange('app')}
                    >
                        Apps
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'lib' ? 'active' : ''}`} 
                        onClick={() => handleFilterChange('lib')}
                    >
                        Libraries
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'ui' ? 'active' : ''}`} 
                        onClick={() => handleFilterChange('ui')}
                    >
                        UI/UX
                    </button>
                </div>
                <div className="portfolio-grid">
                    <div 
                        className="portfolio-item" 
                        data-category="app"
                        style={{ display: filter === 'all' || filter === 'app' ? 'block' : 'none' }}
                    >
                        <div className="portfolio-img">
                            <img src="https://via.placeholder.com/400x300" alt="Project 1" />
                        </div>
                        <div className="portfolio-info">
                            <h3>Ứng dụng Mua sắm trực tuyến</h3>
                            <p>Kotlin, MVVM, Retrofit, Room Database</p>
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faLink} /></a>
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="portfolio-item" 
                        data-category="app"
                        style={{ display: filter === 'all' || filter === 'app' ? 'block' : 'none' }}
                    >
                        <div className="portfolio-img">
                            <img src="https://via.placeholder.com/400x300" alt="Project 2" />
                        </div>
                        <div className="portfolio-info">
                            <h3>Ứng dụng Quản lý Nhiệm vụ</h3>
                            <p>Kotlin, Jetpack Compose, Firebase</p>
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faLink} /></a>
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="portfolio-item" 
                        data-category="ui"
                        style={{ display: filter === 'all' || filter === 'ui' ? 'block' : 'none' }}
                    >
                        <div className="portfolio-img">
                            <img src="https://via.placeholder.com/400x300" alt="Project 3" />
                        </div>
                        <div className="portfolio-info">
                            <h3>Material Design UI Kit</h3>
                            <p>Jetpack Compose, Material Design 3</p>
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faLink} /></a>
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="portfolio-item" 
                        data-category="app"
                        style={{ display: filter === 'all' || filter === 'app' ? 'block' : 'none' }}
                    >
                        <div className="portfolio-img">
                            <img src="https://via.placeholder.com/400x300" alt="Project 4" />
                        </div>
                        <div className="portfolio-info">
                            <h3>Ứng dụng Theo dõi Sức khỏe</h3>
                            <p>Kotlin, Room, WorkManager, HealthConnect API</p>
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faLink} /></a>
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="portfolio-item" 
                        data-category="lib"
                        style={{ display: filter === 'all' || filter === 'lib' ? 'block' : 'none' }}
                    >
                        <div className="portfolio-img">
                            <img src="https://via.placeholder.com/400x300" alt="Project 5" />
                        </div>
                        <div className="portfolio-info">
                            <h3>Thư viện Network Utils</h3>
                            <p>Kotlin, Coroutines, Retrofit</p>
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faLink} /></a>
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="portfolio-item" 
                        data-category="ui"
                        style={{ display: filter === 'all' || filter === 'ui' ? 'block' : 'none' }}
                    >
                        <div className="portfolio-img">
                            <img src="https://via.placeholder.com/400x300" alt="Project 6" />
                        </div>
                        <div className="portfolio-info">
                            <h3>Custom Animation Library</h3>
                            <p>Kotlin, Motion Layout, Lottie</p>
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faLink} /></a>
                                <a href="#" className="portfolio-link"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio; 