// JavaScript to toggle navbar in mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Modal functionality (optional)
function openModal(projectId) {
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modalDescription = document.getElementById('modal-description');

    if (projectId === 'project1') {
        modalTitle.innerText = 'Project 1: Task Manager';
        modalDescription.innerText = 'This web application helps users manage their daily tasks efficiently with features like task categorization, reminders, and progress tracking.';
    } else if (projectId === 'project2') {
        modalTitle.innerText = 'Project 2: E-commerce Platform';
        modalDescription.innerText = 'An e-commerce platform that offers a seamless shopping experience, with features like product filtering, reviews, and a secure payment gateway.';
    } else if (projectId === 'project3') {
        modalTitle.innerText = 'Project 3: Business Website';
        modalDescription.innerText = 'A responsive, mobile-first website designed for a local business, focusing on user experience and accessibility.';
    }

    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of the content
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// JavaScript to animate skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillProgress = document.querySelectorAll('.skill-progress');

    skillProgress.forEach(skill => {
        const skillLevel = skill.innerText;
        skill.style.setProperty('--skill-level', skillLevel);
        skill.style.width = skillLevel;
    });
});

