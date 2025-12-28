// Language Detection and Translations
// Check if path starts with /es/ or /es or contains /es/
function isSpanishPage() {
  const path = window.location.pathname;
  return path.startsWith('/es/') || path.startsWith('/es') || path.includes('/es/');
}

const currentLang = isSpanishPage() ? 'es' : 'en';

// Initialize Language Toggle Switch
function initLanguageToggle() {
  const langToggle = document.getElementById('lang-toggle');
  const langLabelLeft = document.querySelector('.language-label-left');
  const langLabelRight = document.querySelector('.language-label-right');
  const langLinkEn = document.getElementById('lang-link-en');
  const langLinkEs = document.getElementById('lang-link-es');

  if (langToggle) {
    const isSpanish = isSpanishPage();

    // Set initial state based on current language
    // ENG is on the left (default/inactive), ESP is on the right (active)
    if (isSpanish) {
      langToggle.classList.add('active');
      if (langLabelLeft) langLabelLeft.classList.remove('active');
      if (langLabelRight) langLabelRight.classList.add('active');
    } else {
      langToggle.classList.remove('active');
      if (langLabelLeft) langLabelLeft.classList.add('active');
      if (langLabelRight) langLabelRight.classList.remove('active');
    }

    // Handle toggle click
    langToggle.addEventListener('click', function() {
      if (isSpanish) {
        // Currently Spanish, switch to English
        if (langLinkEn && langLinkEn.href) {
          window.location.href = langLinkEn.href;
        }
      } else {
        // Currently English, switch to Spanish
        if (langLinkEs && langLinkEs.href) {
          window.location.href = langLinkEs.href;
        }
      }
    });

    // Handle keyboard navigation
    langToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        langToggle.click();
      }
    });
  }
}

const translations = {
  en: {
    formErrorAllFields: 'Please fill in all fields.',
    formErrorEmail: 'Please enter a valid email address.',
    formSuccess: 'Thank you for your message! We will be in touch soon.',
    cvNotAvailable: 'CV Not Available',
    cvNotAvailableMessage: 'The CV for this team member is not currently available.',
    sending: 'Sending...'
  },
  es: {
    formErrorAllFields: 'Por favor complete todos los campos.',
    formErrorEmail: 'Por favor ingrese un correo electrónico válido.',
    formSuccess: '¡Gracias por su mensaje! Nos pondremos en contacto pronto.',
    cvNotAvailable: 'CV No Disponible',
    cvNotAvailableMessage: 'El CV de este miembro del equipo no está disponible actualmente.',
    sending: 'Enviando...'
  }
};

const t = translations[currentLang];

// Initialize Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNavigation = document.querySelector('.main-navigation');

  if (mobileMenuToggle && mainNavigation) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      mainNavigation.classList.toggle('mobile-open');
    });

    // Close mobile menu when clicking on a link
    const navLinks = mainNavigation.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mainNavigation.classList.remove('mobile-open');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target) && !mainNavigation.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mainNavigation.classList.remove('mobile-open');
      }
    });
  }
}

// Contact form validation and feedback
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      formMessage.textContent = t.formErrorAllFields;
      formMessage.style.color = '#bfa046';
      return;
    }
    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = t.formErrorEmail;
      formMessage.style.color = '#bfa046';
      return;
    }
    // Simulate successful submission
    formMessage.textContent = t.formSuccess;
    formMessage.style.color = '#0a2342';
    contactForm.reset();
  });
}

// Smooth scrolling for anchor links
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

// Initialize Header Scroll Effect
function initHeaderScroll() {
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    // Ensure header is always opaque on load
    siteHeader.style.background = '#fff';
    siteHeader.style.backdropFilter = 'none';

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        siteHeader.style.background = '#fff';
        siteHeader.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        siteHeader.style.background = '#fff';
        siteHeader.style.boxShadow = 'none';
      }
    });
  }
} 

// Footer Loading Functionality
function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    // Use absolute paths - Spanish has its own footer, English uses root footer
    const isSpanish = isSpanishPage();
    const footerPath = isSpanish ? '/es/footer.html' : '/en/footer.html';

    fetch(footerPath)
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;

        // Set logo path after footer is loaded - use absolute path
        const footerLogo = document.getElementById('footer-logo');
        if (footerLogo) {
          footerLogo.src = '/files/logos/lex.png';
        }
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }
}

// Header Loading Functionality
function loadHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    const currentPath = window.location.pathname;
    const isSpanish = isSpanishPage();
    const isInServicesDir = currentPath.includes('/services/');
    const isInTeamDir = currentPath.includes('/team/');

    // Use absolute paths to ensure correct header is loaded
    const headerPath = isSpanish ? '/es/header.html' : '/en/header.html';

    fetch(headerPath)
      .then(response => response.text())
      .then(html => {
        headerContainer.innerHTML = html;

        // Set paths after header is loaded
        const headerLogoLink = document.getElementById('header-logo-link');
        const headerLogoImg = document.getElementById('header-logo-img');
        const navHome = document.getElementById('nav-home');
        const navServices = document.getElementById('nav-services');
        const navTeam = document.getElementById('nav-team');
        const navContact = document.getElementById('nav-contact');

        // Use absolute paths for all navigation
        const logoPath = '/files/logos/lex.png';
        let homePath, servicesPath, teamPath, contactPath;

        if (isSpanish) {
          homePath = '/es/index.html';
          servicesPath = '/es/services.html';
          teamPath = '/es/team.html';
          contactPath = '/es/contact.html';
        } else {
          homePath = '/en/index.html';
          servicesPath = '/en/services.html';
          teamPath = '/en/team.html';
          contactPath = '/en/contact.html';
        }

        // Set paths
        if (headerLogoLink) headerLogoLink.href = homePath;
        if (headerLogoImg) headerLogoImg.src = logoPath;
        if (navHome) navHome.href = homePath;
        if (navServices) navServices.href = servicesPath;
        if (navTeam) navTeam.href = teamPath;
        if (navContact) navContact.href = contactPath;

        // Set active state based on current page
        const pageName = currentPath.split('/').pop() || 'index.html';
        if (pageName === 'index.html' || pageName === '') {
          if (navHome) navHome.classList.add('active');
        } else if (pageName === 'services.html' || isInServicesDir) {
          if (navServices) navServices.classList.add('active');
        } else if (pageName === 'team.html' || isInTeamDir) {
          if (navTeam) navTeam.classList.add('active');
        } else if (pageName === 'contact.html') {
          if (navContact) navContact.classList.add('active');
        }

        // Set language switcher links dynamically
        const langLinkEn = document.getElementById('lang-link-en');
        const langLinkEs = document.getElementById('lang-link-es');

        if (langLinkEn && langLinkEs) {
          // Get the current page filename (handle empty or just slash)
          let currentPageName = currentPath.split('/').pop();
          if (!currentPageName || currentPageName === '' || currentPageName === 'es' || currentPageName === 'en') {
            currentPageName = 'index.html';
          }

          if (isSpanish) {
            // Currently on Spanish page - set links to switch to English
            if (isInServicesDir) {
              langLinkEn.href = '/en/services/' + currentPageName;
              langLinkEs.href = '/es/services/' + currentPageName;
            } else if (isInTeamDir) {
              langLinkEn.href = '/en/team/' + currentPageName;
              langLinkEs.href = '/es/team/' + currentPageName;
            } else {
              langLinkEn.href = '/en/' + currentPageName;
              langLinkEs.href = '/es/' + currentPageName;
            }
          } else {
            // Currently on English page - set links to switch to Spanish
            if (isInServicesDir) {
              langLinkEn.href = '/en/services/' + currentPageName;
              langLinkEs.href = '/es/services/' + currentPageName;
            } else if (isInTeamDir) {
              langLinkEn.href = '/en/team/' + currentPageName;
              langLinkEs.href = '/es/team/' + currentPageName;
            } else {
              langLinkEn.href = '/en/' + currentPageName;
              langLinkEs.href = '/es/' + currentPageName;
            }
          }
        }

        // Initialize header-related functionality after header is loaded
        initLanguageToggle();
        initMobileMenu();
        initHeaderScroll();
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  }
}

// Contact Form Loading Functionality
function loadContactForm() {
  const contactFormContainer = document.getElementById('contact-form-container');
  if (contactFormContainer) {
    // Use absolute paths for contact form
    const isSpanish = isSpanishPage();
    const contactFormPath = isSpanish ? '/es/contact-form.html' : '/en/contact-form.html';

    fetch(contactFormPath)
      .then(response => response.text())
      .then(html => {
        contactFormContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading contact form:', error);
      });
  }
}

// Services Carousel Functionality
function initServicesCarousel() {
  const carousel = document.getElementById('services-carousel');
  const leftArrow = document.getElementById('carousel-left');
  const rightArrow = document.getElementById('carousel-right');
  
  if (!carousel || !leftArrow || !rightArrow) return;
  
  let currentIndex = 0;
  const cards = carousel.querySelectorAll('.service-overview-card');
  const totalCards = cards.length;
  
  // Function to update arrow states
  function updateArrows() {
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex >= totalCards - 1;
    
    // Add visual feedback
    if (leftArrow.disabled) {
      leftArrow.style.opacity = '0.3';
    } else {
      leftArrow.style.opacity = '0.9';
    }
    
    if (rightArrow.disabled) {
      rightArrow.style.opacity = '0.3';
    } else {
      rightArrow.style.opacity = '0.9';
    }
  }
  
  // Function to scroll to specific card
  function scrollToCard(index) {
    if (index < 0 || index >= totalCards) return;
    
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap);
    const scrollPosition = index * cardWidth;
    
    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    currentIndex = index;
    updateArrows();
  }
  
  // Left arrow click
  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  });
  
  // Right arrow click
  rightArrow.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
      scrollToCard(currentIndex + 1);
    }
  });
  
  // Update arrows on scroll (for touch scrolling)
  carousel.addEventListener('scroll', () => {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap);
    const newIndex = Math.round(carousel.scrollLeft / cardWidth);
    
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      updateArrows();
    }
  });
  
  // Initialize arrows
  updateArrows();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    updateArrows();
  });
}

// CV Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Load header, footer and contact form
  loadHeader();
  loadFooter();
  loadContactForm();

  // Initialize services carousel
  initServicesCarousel();
  
  const cvPopup = document.getElementById('cv-popup');
  const cvContent = document.getElementById('cv-content');
  const closeButton = document.querySelector('.cv-popup-close');
  const overlay = document.querySelector('.cv-popup-overlay');

  // Handle clickable team cards
  document.addEventListener('click', function(e) {
    const clickableCard = e.target.closest('.clickable');
    if (clickableCard) {
      const cvFile = clickableCard.getAttribute('data-cv');
      if (cvFile) {
        loadCV(cvFile);
        showPopup();
      }
    }
  });

  // Close popup when clicking close button or overlay
  if (closeButton) {
    closeButton.addEventListener('click', hidePopup);
  }
  
  if (overlay) {
    overlay.addEventListener('click', hidePopup);
  }

  // Close popup with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cvPopup.classList.contains('active')) {
      hidePopup();
    }
  });

  function showPopup() {
    cvPopup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function hidePopup() {
    cvPopup.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  function loadCV(cvFile) {
    const cvPath = `files/cv/${cvFile}-cv.html`;
    
    fetch(cvPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('CV not found');
        }
        return response.text();
      })
      .then(html => {
        cvContent.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading CV:', error);
        cvContent.innerHTML = `
          <div class="cv-popup-content">
            <div class="cv-header">
              <h2>${t.cvNotAvailable}</h2>
            </div>
            <div class="cv-section">
              <p>${t.cvNotAvailableMessage}</p>
            </div>
          </div>
        `;
      });
  }
});

// Toggle role content function for roles and responsibilities page
function toggleRole(roleId) {
  const roleContent = document.getElementById(roleId);
  const toggleIcon = document.querySelector(`[onclick="toggleRole('${roleId}')"] .toggle-icon`);
  
  if (roleContent && toggleIcon) {
    if (roleContent.style.display === 'none' || roleContent.style.display === '') {
      roleContent.style.display = 'block';
      toggleIcon.textContent = '−';
    } else {
      roleContent.style.display = 'none';
      toggleIcon.textContent = '+';
    }
  }
} 