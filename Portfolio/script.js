
const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu-icon");

if (menuIcon && nav) {
	menuIcon.setAttribute('role', 'button');
	menuIcon.setAttribute('tabindex', '0');
	menuIcon.setAttribute('aria-expanded', 'false');

	const toggleNav = () => {
		const expanded = nav.classList.toggle('active');
		menuIcon.setAttribute('aria-expanded', expanded);
	};

	menuIcon.addEventListener('click', toggleNav);
	menuIcon.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleNav();
		}
	});

	// Close mobile menu when a navigation link is clicked (useful on phones)
	const navLinks = document.querySelectorAll('nav a');
	if (navLinks && nav) {
		navLinks.forEach(link => {
			link.addEventListener('click', () => {
				if (nav.classList.contains('active')) {
					nav.classList.remove('active');
					if (menuIcon) menuIcon.setAttribute('aria-expanded', 'false');
				}
			});
		});
	}
}







// Basic contact form validation (progressively enhanced)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
	const nameInput = document.getElementById('input_name');
	const emailInput = document.getElementById('input-email');
	const messageInput = document.getElementById('input-message');
	const outputName = document.getElementById('output1');
	const outputEmail = document.getElementById('output2');
	const outputMessage = document.getElementById('output3');

	const clearErrors = () => {
		if (outputName) outputName.textContent = '';
		if (outputEmail) outputEmail.textContent = '';
		if (outputMessage) outputMessage.textContent = '';
	};

	[nameInput, emailInput, messageInput].forEach(el => {
		if (el) el.addEventListener('input', clearErrors);
	});

	contactForm.addEventListener('submit', function (e) {
		let valid = true;
		clearErrors();

		if (!nameInput || !nameInput.value.trim()) {
			if (outputName) outputName.textContent = 'Enter your name';
			valid = false;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
			if (outputEmail) outputEmail.textContent = 'Enter a valid email';
			valid = false;
		}

		if (!messageInput || !messageInput.value.trim()) {
			if (outputMessage) outputMessage.textContent = 'Enter your message';
			valid = false;
		}

		if (!valid) e.preventDefault();
	});
}
     

// Mobile "See more" toggle for the About section
document.addEventListener('DOMContentLoaded', function () {
    const seeBtn = document.querySelector('.see-more-btn');
    const aboutText = document.querySelector('.about-me .about-me-text');

    if (seeBtn && aboutText) {
        seeBtn.addEventListener('click', function () {
            const expanded = aboutText.classList.toggle('expanded');
            seeBtn.setAttribute('aria-expanded', expanded);
            seeBtn.textContent = expanded ? 'See less' : 'See more';
        });
    }
});


