document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Theme Toggle Logic
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Sticky Navbar Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchor Links (Polyfill for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// ===== Google Sheets Contact Form Submit =====
const scriptURL = "https://script.google.com/macros/s/AKfycbz28QWz3vwXleMvQkbIuHinM9JN1i0PW1Tz9ZW3MtpZOyLUi1ytMbmE7htH6gSstsPgPg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const submitButton = form?.querySelector("button[type='submit']");

if (form && submitButton && msg) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitButton.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        msg.className = ""; // Reset classes
        msg.innerHTML = "";

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
            .then(() => {
                // Success feedback handled by button only
                submitButton.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
                submitButton.classList.remove('loading');
                submitButton.classList.add('success');

                setTimeout(() => {
                    submitButton.innerHTML = "Submit";
                    submitButton.classList.remove('success');
                    submitButton.disabled = false;
                }, 5000);
                form.reset();
            })
            .catch((error) => {
                msg.className = "show error";
                msg.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Error sending message. Please try again.';

                submitButton.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Try Again';
                submitButton.classList.remove('loading');
                submitButton.classList.add('error');
                submitButton.disabled = false;
                console.error("Error!", error.message);

                // Reset button state after error too after a delay
                setTimeout(() => {
                    submitButton.classList.remove('error');
                    submitButton.innerHTML = "Submit";
                }, 3000);
            });
    });
}
