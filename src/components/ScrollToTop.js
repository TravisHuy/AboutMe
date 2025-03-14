import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Nếu có hash (ví dụ: #about), cuộn đến phần tử đó
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    window.scrollTo({
                        top: element.offsetTop - 70, // Trừ đi chiều cao của header
                        behavior: 'smooth'
                    });
                }, 100);
            }
        } else {
            // Nếu không có hash, cuộn lên đầu trang
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop; 