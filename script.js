/* ==========================================================================
   FITBEES INTERACTIVITY & CONTROLLERS
   Fuel Better, Live Higher — Health & Nutrition Platform
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Links Active State ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const target = link.getAttribute('data-nav');
            console.log(`Navigated to section: ${target}`);
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-open');
        });
    }

    // --- Image View Switcher (Studio HD vs Original Mockup) ---
    const heroImage = document.getElementById('heroImage');
    const btnShotStudio = document.getElementById('btnShotStudio');
    const btnShotMockup = document.getElementById('btnShotMockup');

    if (heroImage && btnShotStudio && btnShotMockup) {
        btnShotStudio.addEventListener('click', () => {
            heroImage.style.opacity = '0.4';
            setTimeout(() => {
                heroImage.src = 'assets/hero-couple.jpg';
                heroImage.style.opacity = '1';
                btnShotStudio.classList.add('active');
                btnShotMockup.classList.remove('active');
            }, 150);
        });

        btnShotMockup.addEventListener('click', () => {
            heroImage.style.opacity = '0.4';
            setTimeout(() => {
                heroImage.src = 'assets/mockup-original.jpg';
                heroImage.style.opacity = '1';
                btnShotMockup.classList.add('active');
                btnShotStudio.classList.remove('active');
            }, 150);
        });
    }

    // --- Feature Cards Data & Modal Controller ---
    const featureData = {
        'eat-better': {
            title: 'Eat Better — Smart Nutrition Reports',
            category: 'Smart Meal Analytics',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.63-.77 1.06-1.84.94-2.91-.91.04-2.02.61-2.67 1.38-.58.67-1.09 1.76-.95 2.81 1.02.08 2.05-.51 2.68-1.28z"/></svg>`,
            content: `
                <p>Designed for college schedules and tight dorm budgets. Fitbees automatically calculates your daily caloric burn, breaks down clean protein targets, and flags hidden sodium or excess junk fats.</p>
                <div class="insight-metric-grid">
                    <div class="metric-box">
                        <span class="metric-val">120g</span>
                        <span class="metric-label">Daily Protein</span>
                    </div>
                    <div class="metric-box">
                        <span class="metric-val">2,200</span>
                        <span class="metric-label">Target Calories</span>
                    </div>
                    <div class="metric-box">
                        <span class="metric-val">&lt; 15%</span>
                        <span class="metric-label">Junk Ratio</span>
                    </div>
                </div>
                <p>Scan dining hall menus or quick groceries to get instant healthy swaps in seconds.</p>
            `
        },
        'energy': {
            title: 'More Energy Everyday — Fuel Your Peak',
            category: 'Cognitive & Athletic Vitality',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.08-.13C8.44 10.82 10.92 6.53 14.64 3h1l-1 7h3.5c.49 0 .56.33.41.63l-.07.13-7.48 10.24z"/></svg>`,
            content: `
                <p>Prevent 3 PM study crashes and groggy morning lectures. Fitbees times your complex carbohydrate intake and hydration intervals so you sustain high energy across exams, workouts, and sports.</p>
                <div class="insight-metric-grid">
                    <div class="metric-box">
                        <span class="metric-val">+34%</span>
                        <span class="metric-label">Focus Score</span>
                    </div>
                    <div class="metric-box">
                        <span class="metric-val">3.2 L</span>
                        <span class="metric-label">Hydration</span>
                    </div>
                    <div class="metric-box">
                        <span class="metric-val">0</span>
                        <span class="metric-label">Sugar Crashes</span>
                    </div>
                </div>
                <p>Personalized meal timing recommendations built around your class timetable.</p>
            `
        },
        'community': {
            title: 'Supportive Community — Train & Eat Together',
            category: 'Student Fitness Network',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
            content: `
                <p>Stay accountable with campus peers on the same fitness journey. Share high-protein dorm recipes, celebrate 7-day streaks, and join university fitness challenges.</p>
                <div class="insight-metric-grid">
                    <div class="metric-box">
                        <span class="metric-val">4.8k</span>
                        <span class="metric-label">Active Students</span>
                    </div>
                    <div class="metric-box">
                        <span class="metric-val">12</span>
                        <span class="metric-label">Campus Clubs</span>
                    </div>
                    <div class="metric-box">
                        <span class="metric-val">98%</span>
                        <span class="metric-label">Consistency</span>
                    </div>
                </div>
                <p>Connect with gym partners, find meal-prep buddies, and cheer each other on.</p>
            `
        }
    };

    const featureModal = document.getElementById('featureModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalBody = document.getElementById('modalBody');
    const modalCtaBtn = document.getElementById('modalCtaBtn');

    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-feature');
            const data = featureData[key];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalSubtitle.textContent = data.category;
            modalIcon.innerHTML = data.icon;
            modalBody.innerHTML = data.content;

            featureModal.classList.add('open');
            featureModal.setAttribute('aria-hidden', 'false');
        });

        // Accessibility enter/space key
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    if (modalCloseBtn && featureModal) {
        modalCloseBtn.addEventListener('click', () => {
            featureModal.classList.remove('open');
            featureModal.setAttribute('aria-hidden', 'true');
        });

        featureModal.addEventListener('click', (e) => {
            if (e.target === featureModal) {
                featureModal.classList.remove('open');
                featureModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // --- Auth Modal (Log In / Sign Up) ---
    const authModal = document.getElementById('authModal');
    const authModalClose = document.getElementById('authModalClose');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const tabLogin = document.getElementById('tabLogin');
    const tabSignup = document.getElementById('tabSignup');
    const goalField = document.getElementById('goalField');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const authForm = document.getElementById('authForm');

    function openAuthModal(isSignup = false) {
        authModal.classList.add('open');
        authModal.setAttribute('aria-hidden', 'false');
        if (isSignup) {
            tabSignup.classList.add('active');
            tabLogin.classList.remove('active');
            if (goalField) goalField.style.display = 'flex';
            authSubmitBtn.textContent = 'Create Fitbees Account';
        } else {
            tabLogin.classList.add('active');
            tabSignup.classList.remove('active');
            if (goalField) goalField.style.display = 'none';
            authSubmitBtn.textContent = 'Log In to Fitbees';
        }
    }

    if (loginBtn) loginBtn.addEventListener('click', () => openAuthModal(false));
    if (signupBtn) signupBtn.addEventListener('click', () => openAuthModal(true));
    if (modalCtaBtn) modalCtaBtn.addEventListener('click', () => {
        featureModal.classList.remove('open');
        openAuthModal(true);
    });

    if (tabLogin) tabLogin.addEventListener('click', () => openAuthModal(false));
    if (tabSignup) tabSignup.addEventListener('click', () => openAuthModal(true));

    if (authModalClose && authModal) {
        authModalClose.addEventListener('click', () => {
            authModal.classList.remove('open');
            authModal.setAttribute('aria-hidden', 'true');
        });

        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.remove('open');
                authModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Form submit feedback
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('userEmail').value;
            authSubmitBtn.textContent = '✓ Welcome to Fitbees!';
            authSubmitBtn.style.backgroundColor = '#297442';
            setTimeout(() => {
                authModal.classList.remove('open');
                authSubmitBtn.textContent = 'Continue to Fitbees';
                authSubmitBtn.style.backgroundColor = '';
                authForm.reset();
            }, 1200);
        });
    }

    // Global escape key to close modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (featureModal) featureModal.classList.remove('open');
            if (authModal) authModal.classList.remove('open');
        }
    });

    // --- Interactive Mouse Parallax on Doodles ---
    const doodleRight = document.querySelector('.doodle-top-right');
    const doodleLeft = document.querySelector('.doodle-bottom-left');

    window.addEventListener('mousemove', (e) => {
        const xOffset = (e.clientX / window.innerWidth - 0.5) * 12;
        const yOffset = (e.clientY / window.innerHeight - 0.5) * 12;

        if (doodleRight) {
            doodleRight.style.transform = `rotate(14deg) translate(${xOffset}px, ${yOffset}px)`;
        }
        if (doodleLeft) {
            doodleLeft.style.transform = `rotate(-9deg) translate(${-xOffset * 0.7}px, ${-yOffset * 0.7}px)`;
        }
    });
});
