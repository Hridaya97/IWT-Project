// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;
    let errorMessage = '';

    // Validate Name
    if (name === '') {
        valid = false;
        errorMessage += 'Name is required.\n';
    }

    // Validate Email
    if (email === '') {
        valid = false;
        errorMessage += 'Email is required.\n';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        valid = false;
        errorMessage += 'Enter a valid email address.\n';
    }

    // Validate Message
    if (message === '') {
        valid = false;
        errorMessage += 'Message is required.\n';
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission
        alert(errorMessage); // Display error messages
    }
});
