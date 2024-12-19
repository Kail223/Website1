// Page-specific slide configuration (optional for dynamic features)
const pageSlides = {
    'index.html': [
        { image: './images/home-bg.jpg', leftText: 'Kyle', rightText: 'Baptiste' }
    ],
    'stockpage.html': [
        { image: './images/latrip.jpg', leftText: 'Stock', rightText: 'Prediction' }
    ],
    'uepage.html': [
        { image: './images/serbia.jpg', leftText: 'Unreal Engine', rightText: 'Game' }
    ],
    'selfdrivepage.html': [
        { image: './images/brazil.jpg', leftText: 'Self Driving', rightText: 'AI' }
    ],
    'ue2page.html': [
        { image: './images/africa.jpg', leftText: 'Unreal Engine', rightText: 'Blueprinting' }
    ],
    'futureprojpage.html': [
        { image: './images/japan.jpg', leftText: 'Future', rightText: 'Projects' }
    ]
};

// Navigation function
function setupPageNavigation() {
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Define pages order
    const pageOrder = [
        'index.html',
        'stockpage.html',
        'uepage.html',
        'selfdrivepage.html',
        'ue2page.html',
        'futureprojpage.html'
    ];

    // Get the current page index
    let currentPageIndex = pageOrder.indexOf(currentPage);

    // Ensure the current page is in the sequence
    if (currentPageIndex === -1) {
        console.error('Current page is not found in the navigation sequence:', currentPage);
        return;
    }

    // Set up click handlers for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentPageIndex = (currentPageIndex + 1) % pageOrder.length; // Loop back to the start if at the end
            console.log(`Navigating to: ${pageOrder[currentPageIndex]}`); // Debug log
            window.location.href = pageOrder[currentPageIndex];
        });
    } else {
        console.error('Next button (.next-btn) not found.');
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentPageIndex = (currentPageIndex - 1 + pageOrder.length) % pageOrder.length; // Loop back to the end if at the start
            console.log(`Navigating to: ${pageOrder[currentPageIndex]}`); // Debug log
            window.location.href = pageOrder[currentPageIndex];
        });
    } else {
        console.error('Previous button (.prev-btn) not found.');
    }
}

// Initialize functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing page navigation...');
    setupPageNavigation();
});
