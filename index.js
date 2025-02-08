const btn1 = document.getElementById('pls');
const btn2 = document.getElementById('pls-1');
const btn3 = document.getElementById('pls-2');

const element1 = document.getElementById('target');
const element2 = document.getElementById('target1');
const element3 = document.getElementById('target2');
const element4 = document.getElementById('send-message');

// Function to remove all active classes
function removeAllEffects() {
    element1.classList.remove('active');
    element1.classList.remove('active-1');
    element1.classList.remove('active-2');
    element2.classList.remove('active-1');
    element3.classList.remove('active-2');
    element4.classList.remove('active');
    element4.classList.remove('active-1');
    element4.classList.remove('active-2');
}

// Button 1 Click Event
btn1.addEventListener('click', () => {
    removeAllEffects();               // Remove effects from all elements
    element1.classList.add('active');  // Apply only active-1 to Element 1
    element4.classList.add('active');
});

// Button 2 Click Event
btn2.addEventListener('click', () => {
    removeAllEffects();               // Remove effects from all elements
    element2.classList.add('active-1');  // Apply only active-2 to Element 2
    element4.classList.add('active-1');
    element1.classList.add('active-1');
});

// Button 3 Click Event
btn3.addEventListener('click', () => {
    removeAllEffects();               // Remove effects from all elements
    element3.classList.add('active-2');  // Apply only active-3 to Element 3
    element4.classList.add('active-2');
    element1.classList.add('active-2');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  // Tell the server we're sending JSON
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the server's response
        document.getElementById('confirmationMessage').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});




// script.js

// Select all nav items and sections
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Scroll to section on click
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight nav item on scroll
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 100)) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-target') === currentSection) {
            item.classList.add('active');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed-text', {
        strings: ['National Polytechnical School Student'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});


window.addEventListener('load', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        introScreen.classList.add('fade-out');
        mainContent.style.overflow = 'visible';
    }, 3000); // Intro lasts for 3 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed-intro', {
        strings: ['Hello, World!...'],
        typeSpeed: 40,
        backSpeed: 5,
        loop: false
    });
});


// script.js

// Select all sections
const sectionsTwo = document.querySelectorAll('.section');

// Function to check if section is in viewport
function checkSections() {
    sectionsTwo.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 200) {  // Trigger 100px before the section is fully visible
            section.classList.add('visible');
        }
    });
}

// Check on scroll and when page loads
window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('/send-message', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the response from the server
        document.getElementById('confirmationMessage').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});
