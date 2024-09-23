// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const form = document.querySelector('form');
const nameInput = document.querySelector('input[placeholder="Your Name"]');
const emailInput = document.querySelector('input[placeholder="Your Email"]');
const messageInput = document.querySelector('textarea[placeholder="Your Message"]');

form.addEventListener('submit', function(event) {
    let valid = true;

    // Name Validation
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        valid = false;
    }

    // Email Validation
    if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        valid = false;
    } else if (!validateEmail(emailInput.value)) {
        alert("Please enter a valid email.");
        valid = false;
    }

    // Message Validation
    if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        valid = false;
    }

    // Prevent form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
});

// Email Format Validation
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Scroll to Top Button (Optional Feature)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
