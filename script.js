const nextBtn = document.querySelector('.prev-btn');
const prevBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

//slider next button
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');

}


//slider prev button
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');

}

document.addEventListener("DOMContentLoaded", function () {
    var scrollBtn = document.querySelector(".content .btn");

    scrollBtn.addEventListener("click", function (event) {
        event.preventDefault();

        var scrollTarget = document.getElementById("scroll-target");

        // Scroll to the target element smoothly
        scrollTarget.scrollIntoView({ behavior: "smooth" });
    });
});

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const moreDetailsBtn = document.querySelector('.more-details');
    const dynamicContent = document.querySelector('.dynamic-content');

    // Set a flag to track whether details are currently visible
    let detailsVisible = false;

    // Add click event listener to the "More Details" button
    moreDetailsBtn.addEventListener('click', toggleDetails);

    // Function to toggle details and scroll down
    function toggleDetails() {
        // Toggle the visibility of dynamic content
        if (detailsVisible) {
            dynamicContent.innerHTML = ''; // Clear content if details are visible
        } else {
            // Set or update the dynamic content
            dynamicContent.innerHTML = `
                <h3>How it works</h3>
                <p>The tool utilizes Facebook prophet to forecast the database data of the top 100 stocks. The user can use the page sliders to scale from present to years into the future.</p>
                <!-- Add more content as needed -->
            `;
        }

        // Toggle the flag
        detailsVisible = !detailsVisible;

        // Scroll down smoothly to the next section
        window.scrollBy({
            top: window.innerHeight, // Adjust this value based on your design
            behavior: 'smooth'
        });
    }
});


function toggleDetails() {
    // Toggle your details display logic if needed
}


// Add this to your existing JavaScript
const modal = document.getElementById('myModal');
const moreDetailsBtn = document.querySelector('.more-details');
const closeModalBtn = document.querySelector('.close');

moreDetailsBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function openModal(modalId) {
    // Check if modalId is 'modal-right'
    if (modalId === 'modal-right') {
        // Open GitHub repository in a new tab
        window.open('https://github.com/Kail223/All-Python-Code-for-Project', '_blank');
    } else {
        // Open the specified modal
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }
}