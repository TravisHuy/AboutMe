import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <h2>Giới Thiệu</h2>
                </div>
                <div className="about-content">
                    <div className="about-img">
                        <img src="https://avatars.githubusercontent.com/u/117434972?s=400&u=48a1371b0c1296f07373e25c8ea052598f754e8c&v=4" alt="Về tôi" />
                    </div>
                    <div className="about-text">
                        <h3>Tôi là ai?</h3>
                        <p>Tôi là một Android Developer với hơn 1 năm kinh nghiệm trong việc phát triển các ứng dụng di động chất lượng cao. Tôi có kiến thức sâu rộng về Java, Kotlin, và kiến trúc ứng dụng Android hiện đại.</p>
                        <p>Tôi đam mê việc tạo ra những trải nghiệm người dùng tuyệt vời trên thiết bị di động và luôn tìm cách cải thiện kỹ năng của mình. Tôi làm việc tốt trong môi trường nhóm và luôn sẵn sàng học hỏi công nghệ mới.</p>
                        <div className="personal-info">
                            <div className="info-item">
                                <span className="info-title">Họ tên:</span>
                                <span className="info-value">Hồ Nhật Huy</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Ngày sinh:</span>
                                <span className="info-value">01/11/2002</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Email:</span>
                                <span className="info-value">honhathuy098@gmail.com</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Điện thoại:</span>
                                <span className="info-value">+84 349929163</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Địa chỉ:</span>
                                <span className="info-value">Vạn Lộc, Hòa Mỹ Đông, Tây Hóa, Phú Yên</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 