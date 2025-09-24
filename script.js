document.addEventListener('DOMContentLoaded', () => {
    // Image reveal
    const imageReveal = document.getElementById('imageReveal');
    imageReveal.addEventListener('click', () => {
        imageReveal.classList.add('revealed');
    });

    // Music
    const musicBtn = document.getElementById('musicBtn');
    const audio = document.getElementById('bdayMusic');
    musicBtn.addEventListener('click', () => {
        audio.play();
    });

    // Special moments toggle
    document.querySelectorAll('.remember-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const message = btn.nextElementSibling;
            message.style.display = message.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    setInterval(nextSlide, 1400); // 1.4s

    // Interactive game (random gift reveal)
    const gameBtn = document.getElementById('gameBtn');
    const giftMessage = document.getElementById('giftMessage');
    const gifts = ['A spa day voucher!', 'Personalized jewelry!', 'A surprise trip!', 'Handmade chocolates!'];
    gameBtn.addEventListener('click', () => {
        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
        giftMessage.textContent = `Your surprise: ${randomGift}`;
        giftMessage.classList.remove('hidden');
    });

    // Countdown
    const targetDate = new Date('2025-09-25T00:00:00');
    const timer = document.getElementById('timer');
    const updateTimer = () => {
        const now = new Date();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    setInterval(updateTimer, 1000);
    updateTimer();

    // Cake cut
    const cakeBtn = document.getElementById('cakeBtn');
    const cakeImage = document.getElementById('cakeImage');
    cakeBtn.addEventListener('click', () => {
        cakeImage.classList.add('cut');
        setTimeout(() => cakeImage.classList.remove('cut'), 1000);
    });
});
