
// --- Navbar Scroll Behavior (Mobile Only) ---
let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 100; // Minimum scroll amount before hiding

window.addEventListener('scroll', function () {
    // Scroll animation disabled for mobile to prevent conflict with bottom navigation bar.
    // The bottom nav should always be visible.

    // if (window.innerWidth > 768) {
    //     header.style.transform = 'translateY(0)';
    //     return;
    // }

    // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    //     header.style.transform = 'translateY(-100%)';
    // } else {
    //     header.style.transform = 'translateY(0)';
    // }
    // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 

    // Always show header
    header.style.transform = 'translateY(0)';
}, { passive: true });

