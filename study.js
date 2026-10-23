.rule-content {
    display: none;
    padding: 0 30px 30px;
}

.rule-item.active .rule-content {
    display: block;
}

.sub-rules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 25px;
}

.sub-rule {
    background: rgba(138, 74, 95, 0.05);
    padding: 20px;
    border-radius: 15px;
}

.sub-rule h5 {
    color: #8a4a5f;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
}

.sub-rule p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.arabic-example {
    background: white;
    padding: 15px;
    border-radius: 10px;
    font-family: "Amiri", serif;
    font-size: 1.5rem;
    text-align: center;
    color: #2d1b4e;
    direction: rtl;
    margin-bottom: 15px;
}

.practice-btn-container {
    margin-top: 25px;
    text-align: center;
}

.practice-btn {
    padding: 12px 35px;
    background: #8a4a5f;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.practice-btn:hover {
    background: #6d394a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(138, 74, 95, 0.2);
}

/* Быстрые ссылки */
.quick-links {
    margin-top: 50px;
    background: linear-gradient(135deg, rgba(138, 74, 95, 0.05), rgba(212, 165, 116, 0.05));
    padding: 30px;
    border-radius: 20px;
}

.quick-links h4 {
    color: #6d394a;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.quick-link {
    padding: 15px;
    background: white;
    border: 2px solid #8a4a5f;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.quick-link:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(138, 74, 95, 0.1);
}

.quick-link i {
    color: #8a4a5f;
    font-size: 1.5rem;
}

.quick-link span {
    color: #6d394a;
    font-weight: 500;
    font-size: 0.95rem;
}

.quick-link[data-action="tests"] {
    border-color: #d4a574;
}

.quick-link[data-action="tests"] i {
    color: #d4a574;
}

.quick-link[data-action="pdf"] {
    border-color: #4a2c7a;
}

.quick-link[data-action="pdf"] i {
    color: #4a2c7a;
}

/* ПРОГРЕСС В ФУТЕРЕ */
.study-footer {
    margin-top: 60px;
    text-align: center;
    padding: 30px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    border: 1px solid rgba(138, 74, 95, 0.1);
}

.progress-info {
    font-family: "Inter", sans-serif;
    color: #4a4048;
    font-size: 1.1rem;
    margin-bottom: 15px;
    font-weight: 500;
}

.progress-bar {
    width: 100%;
    height: 12px;
    background: rgba(138, 74, 95, 0.1);
    border-radius: 6px;
    margin: 20px auto;
    max-width: 500px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #8a4a5f, #d4a574);
    border-radius: 6px;
    width: 0%;
    transition: width 1s ease;
}

.progress-note {
    color: #888;
    font-size: 0.9rem;
    margin-top: 15px;
}

/* ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ */
.study-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.decoration-star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #d4a574;
    border-radius: 50%;
    animation: starTwinkle 3s infinite;
}

@keyframes starTwinkle {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.8;
        transform: scale(1.5);
    }
}

/* МОДАЛЬНОЕ ОКНО */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 2000;
    animation: fadeIn 0.3s ease;
}

.modal.active {
    display: flex;
}

.modal-content {
    background: white;
    border-radius: 25px;
    padding: 40px;
    max-width: 500px;
    width: 90%;
    position: relative;
    animation: slideUp 0.3s ease;
}

@keyframes slideUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.modal-close:hover {
    background: rgba(138, 74, 95, 0.1);
    color: #8a4a5f;
}

.modal-header {
    text-align: center;
    margin-bottom: 30px;
}

.modal-letter {
    font-family: "Amiri", serif;
    font-size: 5rem;
    color: #8a4a5f;
    margin-bottom: 20px;
    line-height: 1;
}

.modal-header h3 {
    font-family: "Cormorant Garamond", serif;
    font-size: 2.2rem;
    color: #6d394a;
    margin-bottom: 10px;
}

.modal-transcription {
    color: #d4a574;
    font-size: 1.3rem;
    font-weight: 500;
}

.modal-body {
    background: rgba(138, 74, 95, 0.05);
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 25px;
}

.modal-body p {
    color: #4a4048;
    line-height: 1.6;
    margin-bottom: 20px;
}

.modal-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
}

.detail-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.detail-label {
    color: #8a4a5f;
    font-weight: 500;
    font-size: 0.9rem;
}

.detail-value {
    color: #4a4048;
    font-weight: 600;
}

.modal-footer {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.modal-btn {
    padding: 12px 25px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    min-width: 160px;
    justify-content: center;
}

.sound-btn {
    background: #8a4a5f;
    color: white;
}

.sound-btn:hover {
    background: #6d394a;
    transform: translateY(-2px);
}

.favorite-btn {
    background: #d4a574;
    color: #2d1b4e;
}

.favorite-btn:hover {
    background: #c1955e;
    transform: translateY(-2px);
}

.favorite-btn.active {
    background: #FFC107;
    color: #2d1b4e;
}

.studied-btn {
    background: #4CAF50;
    color: white;
}

.studied-btn:hover {
    background: #388E3C;
    transform: translateY(-2px);
}

.studied-btn.active {
    background: #2E7D32;
}

/* АДАПТИВНОСТЬ */
@media (max-width: 1024px) {
    .content-container {
        padding: 40px 30px;
    }
    
    .alphabet-grid {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .study-tabs {
        flex-direction: column;
        align-items: center;
    }

    .tab {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }

    .content-container {
        padding: 30px 20px;
    }

    .study-title-arabic {
        font-size: 3.5rem;
    }

    .study-title-latin {
        font-size: 2rem;
    }

    .back-to-dashboard {
        top: 20px;
        left: 20px;
    }
    
    .back-btn span {
        display: none;
    }
    
    .back-btn {
        padding: 10px;
        width: 40px;
        height: 40px;
        justify-content: center;
    }
    
    .modal-footer {
        flex-direction: column;
    }
    
    .modal-btn {
        width: 100%;
    }
    
    .sifat-tabs {
        flex-direction: column;
        align-items: center;
    }
    
    .sifat-tab {
        width: 100%;
        max-width: 250px;
        justify-content: center;
    }
    
    .rules-filters {
        flex-direction: column;
        align-items: center;
    }
    
    .rule-filter {
        width: 100%;
        max-width: 200px;
        text-align: center;
    }
    
    .links-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .study-header {
        padding: 30px 0;
    }
    
    .study-title-arabic {
        font-size: 2.8rem;
    }
    
    .study-title-latin {
        font-size: 1.8rem;
    }
    
    .study-subtitle {
        font-size: 1rem;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .letter-display {
        font-size: 3rem;
    }
    
    .modal-content {
        padding: 30px 20px;
    }
    
    .modal-letter {
        font-size: 4rem;
    }
    
    .modal-header h3 {
        font-size: 1.8rem;
    }
}