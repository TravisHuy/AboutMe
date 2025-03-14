import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header">
                    <h2>Kinh Nghiệm Làm Việc</h2>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2021 - Hiện tại</div>
                            <h3>Senior Android Developer</h3>
                            <p className="company">Công ty ABC</p>
                            <ul className="job-description">
                                <li>Phát triển và duy trì các ứng dụng Android với Kotlin và Java</li>
                                <li>Áp dụng các mẫu kiến trúc hiện đại (MVVM, Clean Architecture)</li>
                                <li>Tối ưu hiệu suất và trải nghiệm người dùng trên đa dạng thiết bị</li>
                                <li>Hướng dẫn và đào tạo các nhà phát triển junior</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2019 - 2021</div>
                            <h3>Android Developer</h3>
                            <p className="company">Công ty XYZ</p>
                            <ul className="job-description">
                                <li>Phát triển các ứng dụng Android sử dụng Java</li>
                                <li>Tích hợp với các RESTful API và Firebase</li>
                                <li>Triển khai các tính năng mới và sửa lỗi</li>
                                <li>Tham gia vào quá trình phát triển từ thiết kế đến xuất bản</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2018 - 2019</div>
                            <h3>Mobile App Developer Intern</h3>
                            <p className="company">Công ty MNO</p>
                            <ul className="job-description">
                                <li>Hỗ trợ phát triển các ứng dụng di động Android</li>
                                <li>Học các công nghệ di động hiện đại</li>
                                <li>Tham gia vào quá trình thiết kế và phát triển</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience; 