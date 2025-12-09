
// --- Navbar Scroll Behavior (Mobile Only) ---
let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 100; // Minimum scroll amount before hiding

window.addEventListener('scroll', function () {
    // Only active on mobile/tablet (e.g. < 768px or similar logic if desired, 
    // but usually this behavior is fine on desktop too if user wants. 
    // User specifically asked for "Only hide on phone".

    if (window.innerWidth > 768) {
        // Determine if we should enforce show on desktop just in case
        header.style.transform = 'translateY(0)';
        return;
    }

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scroll Down - Hide
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll Up - Show
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, { passive: true });
