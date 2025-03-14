import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        
        // Simulate form submission
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            setTimeout(() => {
                alert(`Cảm ơn ${formData.name} đã liên hệ! Chúng tôi sẽ phản hồi qua email ${formData.email} sớm nhất có thể.`);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setIsSubmitted(false);
            }, 1000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <h2>Liên Hệ</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="contact-details">
                                <h3>Địa chỉ</h3>
                                <p>Vạn Lộc, Hòa Mỹ Đông, Tây Hòa, Phú Yên</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>honhathuy098@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="contact-details">
                                <h3>Điện thoại</h3>
                                <p>+84 349929163</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <div className="contact-details">
                                <h3>Website</h3>
                                <p>travishuy.pages.dev</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Họ và tên" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Chủ đề" 
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Nội dung tin nhắn" 
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className={`btn primary-btn ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'success' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span> Đang gửi...
                                    </>
                                ) : isSubmitted ? (
                                    <>Đã gửi!</>
                                ) : (
                                    <>Gửi tin nhắn</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 