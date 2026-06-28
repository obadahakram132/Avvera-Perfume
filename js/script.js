(function(){console.log('%c Avvera Perfume %c All rights reserved','font-size:20px;font-weight:bold;color:#c9a84c','font-size:12px;color:#888');window.addEventListener('contextmenu',e=>e.preventDefault());window.addEventListener('keydown',e=>{if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&['I','J','C'].includes(e.key)))e.preventDefault()});document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 800);
    });
    setTimeout(() => {
        if (!loader.classList.contains('hidden')) loader.classList.add('hidden');
    }, 3000);

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }
    window.addEventListener('scroll', updateActiveLink);

    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const INSTA_URL = 'https://www.instagram.com/avvera_perfume';

    const PRODUCTS = [
        { id: 1, title: 'Avvera Her', type: 'عطر فاخر', img: 'images/products/product1.webp', ingredient: 'images/ingredients/ingredient1.webp', price: '', tagline: 'A Touch of Elegance', desc: 'عطر يجمع بين الفخامة والأناقة، برائحة تدوم طويلاً. مزيج مثالي من العود والعنبر يمنحك حضوراً لا يُنسى.' },
        { id: 2, title: 'Avera Khamra', type: 'عطر مميز', img: 'images/products/product2.webp', ingredient: 'images/ingredients/ingredient2.webp', price: '', tagline: 'The Essence of Luxury', desc: 'عطر شرقي بنفحات المسك والعنبر، يمنحك إحساساً بالدفء والتميز. مناسب لجميع الأوقات.' },
        { id: 3, title: 'Avvera Special', type: 'عطر كلاسيكي', img: 'images/products/product3.webp', ingredient: null, price: '', tagline: 'Timeless Beauty', desc: 'عطر كلاسيكي بنفحات الحمضيات والأزهار، منعش وحيوي يمنحك انتعاشاً يدوم طوال اليوم.' },
        { id: 4, title: 'Avvera Valley', type: 'عطر شرقي', img: 'images/products/product4.webp', ingredient: null, price: '', tagline: 'Eastern Charm', desc: 'عطر شرقي فاخر بلمسات من المسك والعنبر. رائحة دافئة وجذابة تلفت الأنظار.' },
        { id: 5, title: 'Avvera SCNDL', type: 'عطر زهري', img: 'images/products/product5.webp', ingredient: null, price: '', tagline: 'Floral Dream', desc: 'عطر زهري منعش بمزيج من الورد والياسمين. يمنحك إحساساً بالانتعاش والأنوثة.' },
        { id: 6, title: 'Avvera VIP', type: 'عطر جذاب', img: 'images/products/product6.webp', ingredient: null, price: '', tagline: 'Bold & Beautiful', desc: 'عطر جذاب بنفحات خشبية وزهرية. يجمع بين القوة والرقة في توليفة فريدة.' },
        { id: 7, title: 'Avvera Bomb', type: 'عطر خشبي', img: 'images/products/product7.webp', ingredient: null, price: '', tagline: 'Woody Mystique', desc: 'عطر خشبي برائحة العود والجلد. مثالي للرجال الذين يبحثون عن التميز والثقة.' },
        { id: 8, title: 'Avvera Intense', type: 'عطر ملكي', img: 'images/products/product8.jpg', ingredient: null, price: '', tagline: 'Royal Signature', desc: 'عطر ملكي فاخر يجمع بين أرقى المكونات العالمية. تجربة عطرية لا تُضاهى.' },
    ];

    function renderProducts() {
        const grid = document.getElementById('productsGrid');
        grid.innerHTML = PRODUCTS.map(p => `
            <div class="product-card" data-id="${p.id}">
                <div class="product-card-image">
                    <img src="${p.img}" alt="${p.title}" loading="lazy">
                    <div class="product-card-overlay">
                        <p>اضغط للتفاصيل</p>
                        <span class="btn-small"><i class="fas fa-info-circle"></i> عرض التفاصيل</span>
                    </div>
                </div>
                <div class="product-card-body">
                    <h3>${p.title}</h3>
                    <span class="product-tagline">${p.tagline}</span>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const product = PRODUCTS.find(p => p.id === id);
                if (product) openModal(product);
            });
        });
    }

    const modalOverlay = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    function openModal(product) {
        document.getElementById('modalImg').src = product.img;
        document.getElementById('modalImg').alt = product.title;
        document.getElementById('modalTag').textContent = product.type;
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalPrice').textContent = product.tagline;
        document.getElementById('modalDesc').textContent = product.desc;

        const ingredientSection = document.getElementById('modalIngredient');
        const ingredientImg = document.getElementById('modalIngredientImg');
        if (product.ingredient) {
            ingredientImg.src = product.ingredient;
            ingredientSection.style.display = 'block';
        } else {
            ingredientSection.style.display = 'none';
        }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    renderProducts();

    function renderInstaGrid() {
        const container = document.getElementById('instagramPosts');
        container.innerHTML = PRODUCTS.map(p => `
            <a href="${INSTA_URL}" target="_blank" class="insta-post-link">
                <img src="${p.img}" alt="Avvera Perfume" loading="lazy">
                <div class="insta-post-overlay">
                    <i class="fab fa-instagram"></i>
                </div>
            </a>
        `).join('');
    }
    renderInstaGrid();

    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
        const video = wrapper.querySelector('.sound-video');
        const unmuteBtn = wrapper.querySelector('.unmute-btn');
        const toggleBtn = wrapper.querySelector('.sound-toggle');
        if (!video || !unmuteBtn || !toggleBtn) return;

        unmuteBtn.addEventListener('click', () => {
            video.muted = false;
            video.volume = 1.0;
            video.play();
            unmuteBtn.classList.add('hidden');
            toggleBtn.classList.remove('hidden');
            toggleBtn.querySelector('i').className = 'fas fa-volume-high';
        });

        toggleBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            const icon = toggleBtn.querySelector('i');
            icon.className = video.muted ? 'fas fa-volume-xmark' : 'fas fa-volume-high';
        });
    });

    document.querySelectorAll('.video-card video').forEach(v => {
        const card = v.closest('.video-card');
        const isSpecial = card?.classList.contains('featured') || card?.classList.contains('video-special');
        const playVideo = () => {
            if (v.paused) { v.play(); if (card) card.classList.add('playing'); }
        };
        v.addEventListener('click', (e) => { if (v.paused) playVideo(); });
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    v.preload = 'auto';
                    setTimeout(() => {
                        v.play().then(() => {
                            if (card) card.classList.add('playing');
                            if (isSpecial && v.muted) {
                                const wrapper = card?.querySelector('.video-wrapper');
                                if (wrapper) wrapper.querySelector('.unmute-btn')?.classList.remove('hidden');
                            }
                        }).catch(() => {});
                    }, 300);
                    videoObserver.unobserve(v);
                }
            });
        }, { threshold: 0.3 });
        videoObserver.observe(v);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .contact-card, .about-content > *').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `.animate-in { animation: fadeInUp 0.6s ease forwards !important; }`;
    document.head.appendChild(styleSheet);
});
})();
