// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navLinksItems = document.querySelectorAll('.nav-links li');
const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');
const contactForm = document.getElementById('contact-form');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Prevent body scrolling when menu is open
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // Toggle icons
    if (document.body.classList.contains('light-theme')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }

    // Save theme preference to localStorage
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }

    // Add animations with delay for elements
    const animateElements = () => {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-animate');
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(section);
        });
    };

    animateElements();
});

// Handle contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields');
            return;
        }

        // Here you would normally send the form data to a server
        // For this demo, we'll just show a success message

        const formData = {
            name,
            email,
            subject,
            message
        };

        console.log('Form submitted:', formData);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your message, ${name}! I'll get back to you soon.</p>
        `;

        // Replace form with success message
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
    });
}

// Smooth scrolling removed for multi-page navigation

// Add typing effect to the binary in hero section
const binaryElement = document.querySelector('.binary');
if (binaryElement) {
    const originalText = binaryElement.innerText;
    binaryElement.innerText = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            binaryElement.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    // Start typing effect when page loads
    setTimeout(typeWriter, 1000);
}

// Game Modal Functionality
const gameModal = document.getElementById('game-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalEngine = document.getElementById('modal-engine');
const modalPlatform = document.getElementById('modal-platform');
const modalStatus = document.getElementById('modal-status');
const mainImage = document.getElementById('main-image');
const playLink = document.getElementById('play-link');
const githubLink = document.getElementById('github-link');
const modalClose = document.querySelector('.modal-close');

// Project data
const gameData = {
    linger: {
        title: 'Linger',
        description: 'A psychological horror game that explores themes of isolation and the unknown. Experience intense atmospheric tension and immersive storytelling in this Unreal Engine masterpiece. Navigate through eerie environments while uncovering dark secrets and facing your deepest fears.',
        engine: 'Unreal Engine',
        platform: 'PC',
        status: 'In Development',
        images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'],
        playLink: '#',
        githubLink: '#'
    },
    'unfinished-horror': {
        title: 'The Forest',
        description: 'A grieving father. A cursed forest. A relentless shadow that will never stop hunting. This is my unfinished retro-styled psychological horror game — every step forward takes you deeper into despair. Will you escape the curse, or be swallowed by it? Stay tuned… the forest isn\'t done with you yet. Dare to step into the dark?',
        engine: 'Unity',
        platform: 'PC',
        status: 'Unfinished',
        images: ['images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg'],
        playLink: '#',
        githubLink: '#'
    },
    'voting-system': {
        title: 'Voting System',
        description: 'A comprehensive voting system developed for WBNHS Club elections in 2024. This web application features secure authentication, real-time results visualization, and a user-friendly interface. Built with modern web technologies to ensure fair and transparent democratic processes within the school community.',
        engine: 'Web Development',
        platform: 'Web',
        status: 'Completed',
        images: ['images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg', 'images/16.jpg', 'images/17.jpg', 'images/18.jpg'],
        playLink: '#',
        githubLink: '#'
    },
    'wbnhs-website': {
        title: 'WBNHS School Website',
        description: 'Official website for Western Bicutan National High School featuring comprehensive school information, important announcements, student resources, and community engagement tools. This responsive web platform serves as a digital hub for students, parents, and faculty, showcasing the school\'s commitment to educational excellence.',
        engine: 'HTML/CSS/JS',
        platform: 'Web',
        status: 'Completed',
        images: ['images/19.jpg', 'images/20.jpg', 'images/21.jpg', 'images/22.jpg'],
        playLink: '#',
        githubLink: '#'
    },
    'no-name-game': {
        title: 'No Name Game',
        description: 'The game features nine puzzles that get progressively trickier, a multi-floor map system that updates as you go, a proper inventory management setup, and good old-fashioned zombie combat. The zombies come in four different models, each randomly dressed and skinned like they\'re auditioning for some kind of undead fashion show.',
        engine: 'Unity',
        platform: 'PC',
        status: 'In Development',
        images: ['images/23.jpg', 'images/24.jpg', 'images/25.jpg', 'images/26.jpg'],
        playLink: '#',
        githubLink: '#'
    },
    'unfinished-horror-game': {
        title: 'Unfinished Horror Game',
        description: 'A grieving father. A cursed forest. A relentless shadow that will never stop hunting. This is my unfinished retro-styled psychological horror game — every step forward takes you deeper into despair. Will you escape the curse, or be swallowed by it? Stay tuned… the forest isn\'t done with you yet. Dare to step into the dark?',
        engine: 'Unity',
        platform: 'PC',
        status: 'In Development',
        images: ['images/27.jpg', 'images/28.jpg', 'images/29.jpg'],
        playLink: '#',
        githubLink: '#'
    },
    'dont-die-just-dine': {
        title: 'Don\'t Die Just Dine',
        description: 'These days, some food companies seem less interested in feeding people and more interested in running a secret Hunger Games for your stomach. What looks like a "safe" snack might actually turn into a toxic time bomb—especially when you mix it with the wrong thing. In this game, you\'re not just eating—you\'re the official taste tester. Your noble mission? Shovel down the weirdest dishes imaginable while making sure you don\'t, y\'know… keel over. Just don\'t eat poison and you\'ll be fine… probably.',
        engine: 'Unity',
        platform: 'PC',
        status: 'In Development',
        images: ['images/30.jpg', 'images/31.jpg', 'images/32.jpg', 'images/33.jpg'],
        playLink: '#',
        githubLink: '#'
    }
};

// Open modal function
function openModal(gameId) {
    const game = gameData[gameId];
    if (!game) return;

    // Populate modal with game data
    modalTitle.textContent = game.title;
    modalDescription.textContent = game.description;
    modalEngine.textContent = game.engine;
    modalPlatform.textContent = game.platform;
    modalStatus.textContent = game.status;
    mainImage.src = game.images[0];
    playLink.href = game.playLink;
    githubLink.href = game.githubLink;

    // Set up thumbnails dynamically
    setupThumbnails(game.images);

    // Show modal with animation
    gameModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scrolling

    // Reset thumbnail active state
    document.querySelector('.thumbnail.active')?.classList.remove('active');
    document.querySelector('.thumbnail').classList.add('active');
}

// Close modal function
function closeModal() {
    gameModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore body scrolling
}

// Event listeners for game cards
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        const gameId = card.dataset.game;
        openModal(gameId);
    });
});

// Close modal when clicking close button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
gameModal.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && gameModal.classList.contains('active')) {
        closeModal();
    }
});

// Thumbnail click functionality
document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        // Update main image
        mainImage.src = thumb.src;

        // Update active thumbnail
        document.querySelector('.thumbnail.active').classList.remove('active');
        thumb.classList.add('active');
    });
});

// Update thumbnail setup to handle variable number of images
function setupThumbnails(images) {
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
    thumbnailsContainer.innerHTML = ''; // Clear existing thumbnails

    images.forEach((imageSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imageSrc;
        thumb.alt = `Screenshot ${index + 1}`;
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.addEventListener('click', () => {
            // Update main image
            mainImage.src = imageSrc;

            // Update active thumbnail
            document.querySelector('.thumbnail.active').classList.remove('active');
            thumb.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumb);
    });
}

// Achievement item click functionality for enhanced interactivity
document.querySelectorAll('.achievement-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle expanded state
        item.classList.toggle('expanded');

        // Add a subtle pulse animation
        item.style.animation = 'pulse 0.6s ease-in-out';

        // Remove animation after it completes
        setTimeout(() => {
            item.style.animation = '';
        }, 600);
    });
});

// Genre card click functionality for enhanced interactivity
document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', () => {
        // Toggle expanded state
        card.classList.toggle('expanded');

        // Add a subtle pulse animation
        card.style.animation = 'pulse 0.6s ease-in-out';

        // Remove animation after it completes
        setTimeout(() => {
            card.style.animation = '';
        }, 600);
    });
});

// Education timeline item click functionality for enhanced interactivity
document.querySelectorAll('.education-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle expanded state
        item.classList.toggle('expanded');

        // Add a subtle pulse animation
        item.style.animation = 'pulse 0.6s ease-in-out';

        // Remove animation after it completes
        setTimeout(() => {
            item.style.animation = '';
        }, 600);
    });
});

// Stat card click functionality for enhanced interactivity
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('click', () => {
        // Toggle expanded state
        card.classList.toggle('expanded');

        // Add a subtle pulse animation
        card.style.animation = 'pulse 0.6s ease-in-out';

        // Remove animation after it completes
        setTimeout(() => {
            card.style.animation = '';
        }, 600);
    });
});

// Highlight tag hover effects for enhanced interactivity
document.querySelectorAll('.highlight-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1) rotate(1deg)';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Interactive timeline items for learnings section
document.querySelectorAll('.interactive-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle expanded state
        item.classList.toggle('expanded');

        // Add a subtle pulse animation
        item.style.animation = 'pulse 0.6s ease-in-out';

        // Remove animation after it completes
        setTimeout(() => {
            item.style.animation = '';
        }, 600);
    });
});

// Skill tag hover effects for enhanced interactivity
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1) rotate(2deg)';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .genre-card.expanded {
        transform: scale(1.02);
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 238, 255, 0.4);
    }

    .genre-card.expanded .genre-content p {
        max-height: none;
        overflow: visible;
    }
`;
document.head.appendChild(style);
