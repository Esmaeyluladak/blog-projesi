// Sertifika verileri - Kendi sertifika bilgilerinizi buraya ekleyin
const certificates = {
    cert1: {
        title: 'CCNA Introduction to Networks',
        image: 'images/image.png'
    },
    cert2: {
        title: 'Introduction to Cybersecurity',
        image: 'images/2.png'
    },
    cert3: {
        title: 'Linux Unhatched',
        image: 'images/3.png'
    },
    cert4: {
        title: '101:HTML',
        image: 'images/4.png'
    },
    cert5: {
        title: '201: HTML5 & CSS',
        image: 'images/5.png'
    },
    cert6: {
        title: 'Unity 101 - Visual Studio ve C#',
        image: 'images/6.png'
    }
};

// Modal acma fonksiyonu
function openModal(certId) {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    const cert = certificates[certId];
    
    if (cert) {
        modalImage.src = cert.image;
        modalImage.alt = cert.title;
        modalTitle.textContent = cert.title;
        modalDescription.textContent = cert.description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Modal kapatma fonksiyonu
function closeModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Modal disina tiklayinca kapat
document.getElementById('certificateModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// ESC tusu ile modal kapatma
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Mobil menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Hamburger animasyonu
    const spans = this.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Menu linklerine tiklayinca mobil menuyu kapat
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll ile navbar shadow degisimi
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll icin aktif link belirleme
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector('.nav-links a[href*=' + sectionId + ']');
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// Sayfa yuklendiginde animasyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer ile scroll animasyonlari
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animasyon eklenecek elementler
    const animateElements = document.querySelectorAll('.certificate-card, .skill-card, .stat-item, .contact-card');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Animasyon class'i icin CSS ekleme
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .nav-links a.active {
        color: var(--primary);
    }
`;
document.head.appendChild(style);