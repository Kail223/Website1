// Page-specific slide configuration (optional for dynamic features)
const pageSlides = {
    'index.html': { image: './images/home-bg.jpg', leftText: 'Kyle', rightText: 'Baptiste' },
    'stockpage.html': { image: './images/latrip.jpg', leftText: 'Stock', rightText: 'Prediction' },
    'uepage.html': { image: './images/serbia.jpg', leftText: 'Unreal Engine', rightText: 'Game' },
    'selfdrivepage.html': { image: './images/brazil.jpg', leftText: 'Self Driving', rightText: 'AI' },
    'ue2page.html': { image: './images/africa.jpg', leftText: 'Unreal Engine', rightText: 'Blueprinting' },
    'futureprojpage.html': { image: './images/japan.jpg', leftText: 'Future', rightText: 'Projects' }
};

// Navigation configuration
const pageOrder = [
    'index.html',
    'stockpage.html',
    'uepage.html',
    'selfdrivepage.html',
    'ue2page.html',
    'futureprojpage.html'
];

/**
 * Setup page navigation logic
 */
function setupPageNavigation() {
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Ensure the current page is in the sequence
    const currentPageIndex = pageOrder.indexOf(currentPage);
    if (currentPageIndex === -1) {
        console.error(`Current page "${currentPage}" not found in navigation sequence.`);
        return;
    }

    // Navigation handler
    const navigateToPage = (direction) => {
        const newIndex = (currentPageIndex + direction + pageOrder.length) % pageOrder.length; // Ensure valid index
        window.location.href = pageOrder[newIndex];
    };

    // Attach event listeners if buttons exist
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateToPage(1));
    } else {
        console.warn('Next button (.next-btn) not found.');
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateToPage(-1));
    } else {
        console.warn('Previous button (.prev-btn) not found.');
    }
}

/**
 * Initialize script once DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.info('Page navigation script initialized.');
    setupPageNavigation();
});
