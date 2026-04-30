/* ═══════════════════════════════════════════════════════════════
   XoDos Landing Page — JS
   Karys Developer (KD) — Pixel Fantasy Vibes
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── NAV SCROLL ──
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ── HERO PARTICLES ──
    const particlesContainer = document.getElementById('heroParticles');
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'hero-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = (60 + Math.random() * 40) + '%';
        p.style.animationDuration = (6 + Math.random() * 10) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.width = (1 + Math.random() * 2) + 'px';
        p.style.height = p.style.width;

        // Some particles are green (termux style)
        if (Math.random() > 0.7) {
            p.style.background = 'var(--termux-green)';
            p.style.boxShadow = '0 0 4px var(--termux-green-glow)';
        }
        particlesContainer.appendChild(p);
    }

    // ── TYPEWRITER ──
    const typewriterEl = document.getElementById('termuxType');
    const commands = [
        'xodos --install-system',
        'startx --wayland',
        'wine game.exe',
        'proot-distro login debian',
        'box64 winecfg',
        'turnip & dxvk enabled ✓',
        'echo "Gaming on Android 🎮"',
    ];
    let cmdIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 60;

    function typewrite() {
        const currentCmd = commands[cmdIndex];

        if (!isDeleting) {
            typewriterEl.textContent = currentCmd.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentCmd.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause before deleting
            } else {
                typeSpeed = 40 + Math.random() * 60;
            }
        } else {
            typewriterEl.textContent = currentCmd.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                cmdIndex = (cmdIndex + 1) % commands.length;
                typeSpeed = 400;
            } else {
                typeSpeed = 25;
            }
        }

        setTimeout(typewrite, typeSpeed);
    }
    typewrite();

    // ── STAT COUNTER ──
    function animateCounters() {
        document.querySelectorAll('.stat-num').forEach(el => {
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing: ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);

                // Format number
                if (target >= 1000) {
                    el.textContent = (current / 1000).toFixed(current >= 100000 ? 0 : 0) + 'K+';
                    if (current >= 1000 && current < 100000) {
                        el.textContent = Math.floor(current / 1000) + 'K+';
                    } else if (current >= 100000) {
                        el.textContent = Math.floor(current / 1000) + 'K+';
                    }
                } else {
                    el.textContent = current;
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    // Final value
                    if (target >= 100000) {
                        el.textContent = '300K+';
                    } else if (target >= 1000) {
                        el.textContent = Math.floor(target / 1000) + 'K+';
                    } else {
                        el.textContent = target;
                    }
                }
            }

            requestAnimationFrame(update);
        });
    }

    // Start counters when hero is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });
    heroObserver.observe(document.getElementById('hero'));

    // ── SCROLL REVEAL ──
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.about-card, .feature-item, .how-step, .release-card, .contributor-card, .credit-card, .community-card').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ── KD PIXEL AVATAR (watermark) ──
    // 16x20 shield sprite with KD + crossed swords
    // Palette: 1=purple, 2=green(termux), 3=gold, 4=dark purple, 5=white
    const KD_SHIELD = [
        //0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
        [0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0], // 0  top border
        [0,0,3,5,5,5,5,5,5,5,5,5,5,5,3,0], // 1
        [0,3,5,4,4,4,4,4,4,4,4,4,4,5,5,3], // 2  shield fill
        [0,3,5,4,1,4,4,4,4,4,4,4,2,4,5,3], // 3  K    D
        [0,3,5,4,1,4,4,4,4,4,4,2,4,4,5,3], // 4  K   D
        [0,3,5,4,1,4,4,4,4,4,2,4,4,4,5,3], // 5  K  D
        [0,3,5,4,1,1,4,4,4,2,4,4,4,4,5,3], // 6  KK D
        [0,3,5,4,1,4,1,4,2,2,2,2,4,4,5,3], // 7  K K DDDD
        [0,3,5,4,1,4,1,4,2,4,4,4,4,4,5,3], // 8  K K D
        [0,3,5,4,1,4,4,1,2,4,4,4,4,4,5,3], // 9  K  KD
        [0,3,5,4,1,4,4,1,2,4,4,4,4,4,5,3], // 10 K  KD
        [0,3,5,4,4,4,4,4,4,4,4,4,4,4,5,3], // 11
        [0,3,5,5,5,5,5,5,5,5,5,5,5,5,5,3], // 12
        [0,0,3,5,5,3,5,5,5,5,3,5,5,3,0,0], // 13 sword guards
        [0,0,0,3,0,0,3,5,5,3,0,0,3,0,0,0], // 14
        [0,0,3,0,0,0,0,3,3,0,0,0,0,3,0,0], // 15 crossguards
        [0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0], // 16
        [0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0], // 17 blades
        [0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0], // 18 pommel
        [0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0], // 19 tip
    ];

    const palette = {
        1: '#bb80d3', // K - light purple
        2: '#18dc6e', // D - termux green
        3: '#f5c518', // gold border/swords
        4: '#2d1b69', // dark purple fill
        5: '#4a2d8a', // mid purple
    };

    const pixelCanvas = document.getElementById('pixelCanvas');
    const pCtx = pixelCanvas.getContext('2d');

    function drawShield(ctx, data, size) {
        ctx.clearRect(0, 0, size[0], size[1]);
        const w = data[0].length;
        const h = data.length;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const val = data[y][x];
                if (val > 0) {
                    ctx.fillStyle = palette[val] || '#9b59b6';
                    ctx.fillRect(x, y, 1, 1);
                }
            }
        }
    }

    drawShield(pCtx, KD_SHIELD, [16, 20]);

    // Animate: subtle magical shimmer on the shield
    let shimmerFrame = 0;
    function shimmerShield() {
        shimmerFrame++;
        pCtx.clearRect(0, 0, 16, 20);
        const w = KD_SHIELD[0].length;
        const h = KD_SHIELD.length;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const val = KD_SHIELD[y][x];
                if (val > 0) {
                    const wave = Math.sin((shimmerFrame * 0.03) + (x * 0.5) + (y * 0.3)) * 0.12 + 0.88;
                    pCtx.globalAlpha = wave;
                    pCtx.fillStyle = palette[val] || '#9b59b6';
                    pCtx.fillRect(x, y, 1, 1);
                }
            }
        }
        pCtx.globalAlpha = 1;
        requestAnimationFrame(shimmerShield);
    }
    shimmerShield();

    // ── FOOTER PIXEL ART ──
    const footerCanvas = document.getElementById('footerPixelCanvas');
    const fCtx = footerCanvas.getContext('2d');
    drawShield(fCtx, KD_SHIELD, [16, 20]);

    // ── FOOTER YEAR ──
    document.querySelector('.year').textContent = new Date().getFullYear();

    // ── SMOOTH SCROLL for anchor links ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── EASTER EGG: Konami Code ──
    const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        // Rain of pixel swords
        const emojis = ['⚔', '🗡', '💎', '✨', '🛡'];
        for (let i = 0; i < 30; i++) {
            const el = document.createElement('div');
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}vw;
                font-size: ${16 + Math.random() * 24}px;
                z-index: 9999;
                pointer-events: none;
                animation: easterRain ${2 + Math.random() * 3}s linear forwards;
            `;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 5000);
        }

        // Add the rain animation if not present
        if (!document.getElementById('easterStyle')) {
            const style = document.createElement('style');
            style.id = 'easterStyle';
            style.textContent = `
                @keyframes easterRain {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

});
