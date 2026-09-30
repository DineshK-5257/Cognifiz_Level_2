/**
 * Level 2 Web Development Internship Project - Cognifyz Technologies
 * JavaScript Logic (script.js)
 * Features: Mobile Hamburger Navigation Toggle, Smooth Scrolling, Skill Modal Interaction
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Mobile Hamburger Navigation Toggle Handler
    // ----------------------------------------------------------------------
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navbarContent = document.getElementById('navbarContent');
    const navLinks = document.querySelectorAll('.custom-navbar .nav-link');

    if (hamburgerBtn && navbarContent) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle Bootstrap collapse class manually if Bootstrap JS hasn't attached yet
            if (navbarContent.classList.contains('show')) {
                navbarContent.classList.remove('show');
            } else {
                navbarContent.classList.add('show');
            }
        });

        // Close mobile navigation menu automatically when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992 && navbarContent.classList.contains('show')) {
                    navbarContent.classList.remove('show');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 2. Skill Card Modal Interaction
    // ----------------------------------------------------------------------
    const cardButtons = document.querySelectorAll('.card-btn');
    const skillModalElement = document.getElementById('skillModal');
    const skillModalLabel = document.getElementById('skillModalLabel');
    const skillModalDescription = document.getElementById('skillModalDescription');

    if (cardButtons && skillModalElement) {
        const skillModal = new bootstrap.Modal(skillModalElement);

        cardButtons.forEach(button => {
            button.addEventListener('click', () => {
                const skillName = button.getAttribute('data-skill');
                const skillDesc = button.getAttribute('data-desc');

                if (skillModalLabel && skillModalDescription) {
                    skillModalLabel.textContent = `About ${skillName}`;
                    skillModalDescription.textContent = skillDesc;
                }

                skillModal.show();
            });
        });
    }

    // ----------------------------------------------------------------------
    // 3. Highlight Active Navigation Link on Scroll
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
