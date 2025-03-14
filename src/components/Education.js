import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education section">
            <div className="container">
                <div className="section-header">
                    <h2>Học Vấn</h2>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2014 - 2018</div>
                            <h3>Cử nhân Khoa học Máy tính</h3>
                            <p className="institution">Đại học Quốc gia Hà Nội</p>
                            <p>Chuyên ngành: Phát triển phần mềm và Ứng dụng di động</p>
                            <p>GPA: 3.7/4.0</p>
                            <ul className="education-highlights">
                                <li>Tốt nghiệp loại Giỏi</li>
                                <li>Luận văn: "Ứng dụng Machine Learning trong phát triển ứng dụng Android"</li>
                                <li>Giải nhất cuộc thi phát triển ứng dụng di động cấp trường</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2022</div>
                            <h3>Chứng chỉ Android Developer Professional</h3>
                            <p className="institution">Google Developers</p>
                            <p>Chứng nhận kỹ năng phát triển ứng dụng Android chuyên nghiệp</p>
                            <ul className="education-highlights">
                                <li>Hiểu biết sâu sắc về kiến trúc ứng dụng Android</li>
                                <li>Thành thạo Kotlin và Jetpack Compose</li>
                                <li>Tối ưu hóa hiệu suất và trải nghiệm người dùng</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2020</div>
                            <h3>Chứng chỉ Kotlin Development Expert</h3>
                            <p className="institution">JetBrains Academy</p>
                            <p>Chứng nhận kỹ năng lập trình Kotlin chuyên sâu</p>
                            <ul className="education-highlights">
                                <li>Phát triển ứng dụng Android với Kotlin</li>
                                <li>Lập trình hướng đối tượng và functional programming</li>
                                <li>Coroutines và Flow</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education; 