# Lex Advisors Website

Official website for Lex Advisors, a trusted legal services firm serving the Baja California Peninsula.

## Overview

This is a modern, responsive, bilingual website (English/Spanish) built with HTML, CSS, and JavaScript to showcase Lex Advisors' legal services, team members, and firm information.

## Features

- **Bilingual Support**: Full English and Spanish versions with language toggle
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Components**: Header, footer, and contact form loaded via JavaScript
- **Services Showcase**: Comprehensive display of 11 legal services with detailed descriptions
- **Team Profiles**: Interactive team member cards with CV popups
- **Impact Metrics**: Visual representation of firm achievements and statistics
- **Contact Forms**: Easy-to-use contact forms for client inquiries

## Project Structure

```
lexadvisors/
├── index.html              # English home page
├── services.html           # English services listing
├── team.html               # English team page
├── contact.html            # English contact page
├── thank-you.html          # English thank you page
├── header.html             # English header component (loaded via JS)
├── footer.html             # Footer component (shared)
├── contact-form.html       # English contact form component
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
│
├── es/                     # Spanish version (mirrors English structure)
│   ├── index.html          # Spanish home page
│   ├── services.html       # Spanish services listing
│   ├── team.html           # Spanish team page
│   ├── contact.html        # Spanish contact page
│   ├── thank-you.html      # Spanish thank you page
│   ├── header.html         # Spanish header component
│   ├── contact-form.html   # Spanish contact form component
│   ├── services/           # Spanish individual service pages
│   └── team/               # Spanish individual team member pages
│
├── services/               # English individual service pages
│   ├── real-estate-law.html
│   ├── corporate.html
│   ├── tax-law.html
│   └── ... (11 service pages)
│
├── team/                   # English individual team member pages
│
└── files/
    ├── images/
    │   ├── team/           # Team member photos
    │   ├── services/       # Service-related images
    │   ├── general/        # General site images
    │   └── developments/   # Development project images
    ├── logos/              # Logo files
    └── cv/                 # Team member CV HTML files
```

## Architecture

### Dynamic Component Loading

The website uses JavaScript to dynamically load reusable components, reducing code duplication:

- **Header** (`loadHeader()`): Loads the appropriate header based on language and sets navigation paths dynamically
- **Footer** (`loadFooter()`): Loads the shared footer component
- **Contact Form** (`loadContactForm()`): Loads the language-appropriate contact form

Each page includes container divs that are populated at runtime:
```html
<div id="header-container"></div>
<div id="contact-form-container"></div>
<div id="footer-container"></div>
```

### Language Switching

The language toggle switch in the header allows users to switch between English and Spanish:

- **URL Structure**: English pages are at root (`/`), Spanish pages are under `/es/`
- **Detection**: JavaScript detects the current language from the URL path
- **Navigation**: The toggle navigates to the equivalent page in the other language
- **Visual State**: Toggle position indicates current language (left=ENG, right=ESP)

### Path Resolution

The `script.js` file handles dynamic path resolution for:
- Logo images
- Navigation links
- Language switcher links
- Footer logo

Paths are calculated based on:
1. Current language (English vs Spanish)
2. Current directory (root, services/, team/)

## Technologies Used

- **HTML5**: Semantic markup with hreflang for SEO
- **CSS3**: Modern styling with CSS variables, Flexbox, and Grid layouts
- **JavaScript**: Vanilla JS for dynamic components and interactivity
- **Serve**: Local development server (via npm)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/juanesneco/lexadvisors.git
cd lexadvisors
```

2. Install dependencies:
```bash
npm install
```

### Running the Project

Start the local development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Key Sections

### Home Page
- Hero section with firm introduction
- About Us preview
- Impact metrics (3,000+ properties, $3B+ value, 25+ years, 1,000+ businesses)
- Testimonial section
- Services carousel overview
- Contact form

### Services (11 Practice Areas)
- Alternative Dispute Resolution (ADR)
- Appraisals
- Compliance: Anti-Money Laundering & Privacy Law
- Construction and Development
- Corporate Services
- Labour & Employment Law
- Notary Services
- Real Estate Law
- Rights & Entitlement
- Tax Law
- Title Search & Due Diligence

### Team Page
- Leadership team with detailed profiles
- Legal team members
- Administrative team
- Interactive CV popup functionality

## Design System

### Colors
- **Primary**: `#10405a` (Navy blue)
- **Secondary**: `#bfa046` (Gold)
- **Accent**: `#819DAA` (Slate blue)

### Typography
- **Headings**: Times New Roman, serif
- **Body**: System fonts with Times New Roman fallback

### Responsive Breakpoints
- Desktop: > 900px
- Tablet/Mobile: <= 900px

## Making Changes

### To update the header:
Edit `header.html` (English) and `es/header.html` (Spanish). Changes will apply to all pages automatically.

### To update the footer:
Edit `footer.html`. Changes will apply to all pages.

### To add a new page:
1. Create the English version in the root directory
2. Create the Spanish version in `/es/`
3. Include the header, footer, and contact form containers
4. Add `<link rel="alternate" hreflang="...">` tags for SEO

### To add a new service:
1. Create English page in `/services/`
2. Create Spanish page in `/es/services/`
3. Update the services carousel in both `index.html` files
4. Update the services grid in both `services.html` files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © Lex Advisors. All rights reserved.

## Contact

For questions or inquiries about the website:
- Email: info@lexadvisors.com.mx
- Website: [Lex Advisors](https://lexadvisors.com.mx)

---

*Last updated: December 2025*
