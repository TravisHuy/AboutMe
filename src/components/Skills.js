import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-level');
                    skillBars.forEach((bar, index) => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 300 + (index * 100));
                    });
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.2
        });

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Kỹ Năng</h2>
                </div>
                <div className="skills-content" ref={skillsRef}>
                    <div className="skills-row">
                        <div className="skill-column">
                            <h3 className="skill-title">Kỹ năng kỹ thuật</h3>
                            <div className="skills-list">
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Java</span>
                                        <span className="skill-percentage">95%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="95%">
                                            <span className="skill-level-text">95%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Kotlin</span>
                                        <span className="skill-percentage">95%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="95%">
                                            <span className="skill-level-text">95%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Android SDK</span>
                                        <span className="skill-percentage">92%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="92%">
                                            <span className="skill-level-text">92%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Jetpack Compose</span>
                                        <span className="skill-percentage">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="85%">
                                            <span className="skill-level-text">85%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">MVVM & Clean Architecture</span>
                                        <span className="skill-percentage">88%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="88%">
                                            <span className="skill-level-text">88%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-column">
                            <h3 className="skill-title">Kỹ năng mềm</h3>
                            <div className="skills-list">
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Giao tiếp</span>
                                        <span className="skill-percentage">90%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="90%">
                                            <span className="skill-level-text">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Làm việc nhóm</span>
                                        <span className="skill-percentage">95%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="95%">
                                            <span className="skill-level-text">95%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Quản lý thời gian</span>
                                        <span className="skill-percentage">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="85%">
                                            <span className="skill-level-text">85%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Giải quyết vấn đề</span>
                                        <span className="skill-percentage">90%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="90%">
                                            <span className="skill-level-text">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">Tiếng Anh</span>
                                        <span className="skill-percentage">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-level" data-width="85%">
                                            <span className="skill-level-text">85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 