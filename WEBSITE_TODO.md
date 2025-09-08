# Lex Advisors Website - TODO List

## 🚀 Priority Tasks

### 1. Contact Form Integration
- [ ] **Connect contact form to webhook (replacing Formspree)**
  - Set up webhook service (Zapier, Make.com, or custom)
  - Replace placeholder webhook URL in `contact-form.html`
  - Test form submissions with webhook
  - Verify data is being received correctly
  - Configure email notifications or CRM integration
  - Add success/error messages for user feedback

### 2. Content Updates Required

#### Service Descriptions
- [ ] **Receive all service descriptions from team**
  - [ ] Real Estate Law
  - [ ] Corporate Law
  - [ ] Tax Law
  - [ ] Notary Services
  - [ ] Title Search & Due Diligence
  - [ ] Construction Law
  - [ ] Appraisals
  - [ ] Mediation & Conciliation
  - [ ] Labour Law
  - [ ] Entitlement Process
  - [ ] Compliance & Anti-Money Laundering

#### Team Images
- [ ] **Collect professional headshots for all team members**
  - [ ] Leadership Team (missing images)
  - [ ] Legal Team (missing images)
  - [ ] Administrative Team (missing images)
  - [ ] Ensure consistent style/quality across all photos
  - [ ] Optimize images for web (proper sizing/compression)

### 3. Individual Profile Pages
- [x] **Javier Mazoy** - ✅ Completed
- [ ] **Luis Manuel Espinoza Colli** - Create profile page
- [ ] **María de Lourdes de la Torre** - Create profile page  
- [ ] **Laura Nava** - Create profile page
- [ ] **Carolina Romans** - Create profile page

---

## 📋 Detailed Task Breakdown

### Contact Form Implementation
**File:** `contact-form.html`
**Priority:** High
**Dependencies:** Webhook service setup

**Steps:**
1. Set up webhook service (Zapier, Make.com, or custom server)
2. Get webhook endpoint URL
3. Replace placeholder URL in contact-form.html
4. Configure webhook to handle JSON data format
5. Set up email notifications or CRM integration
6. Test form submissions thoroughly
7. Verify data format and delivery

### Service Content Updates
**Files:** All service pages in `/services/` directory
**Priority:** High
**Dependencies:** Content from team

**Missing Content:**
- Detailed service descriptions
- Process explanations
- Benefits/value propositions
- Related services cross-references

### Team Profile Pages
**Directory:** `/team/`
**Priority:** Medium
**Dependencies:** Professional photos, bio content

**Template Structure (based on Javier's page):**
- Professional banner with contact info
- Education section
- Professional background
- Areas of expertise
- Publications (if applicable)
- Community involvement (if applicable)

---

## 🎯 Future Enhancements

### Technical Improvements
- [ ] Add loading animations
- [ ] Implement lazy loading for images
- [ ] Add breadcrumb navigation
- [ ] Improve mobile menu functionality
- [ ] Add search functionality
- [ ] Implement analytics tracking

### Content Enhancements
- [ ] Add client testimonials
- [ ] Create case studies/success stories
- [ ] Add blog/news section
- [ ] Include awards/certifications
- [ ] Add downloadable resources
- [ ] Create FAQ section

### SEO Optimization
- [ ] Add meta descriptions for all pages
- [ ] Optimize page titles
- [ ] Add structured data markup
- [ ] Create XML sitemap
- [ ] Add Open Graph tags
- [ ] Optimize images with alt tags

---

## 📞 Contact Information for Updates

### Content Providers
- **Service Descriptions:** [Team Member Name/Email]
- **Professional Photos:** [Photographer/Team Contact]
- **Bio Information:** [Individual Team Members]

### Technical Implementation
- **FormSpring Setup:** [Developer/Admin Contact]
- **Image Optimization:** [Design Team]
- **Testing:** [QA Team/Process]

---

## ✅ Completed Tasks

### Recent Completions
- [x] Created professional banner for Javier Mazoy profile page
- [x] Fixed team page leadership banner styles
- [x] Added rounded corners to team images
- [x] Resolved CSS conflicts between pages
- [x] Updated Javier's contact information
- [x] Implemented responsive design for profile banners
- [x] Made logo clickable across all pages (links to home)
- [x] Updated home page background image to lex_background.jpeg
- [x] Fixed Francisco Javier Mazoy Kuri's image sizing issue
- [x] Updated Francisco Javier Mazoy Kuri to use Lex logo
- [x] Modified contact form to use webhook instead of Formspree

---

## 📝 Notes & Reminders

### Design Guidelines
- Maintain consistency with existing color scheme (#10405A, #819DAA)
- Use Times New Roman font family throughout
- Ensure mobile responsiveness for all new pages
- Follow established banner design patterns

### Content Guidelines
- Professional tone throughout
- Bilingual considerations (Spanish/English)
- Legal accuracy in service descriptions
- Consistent formatting across team profiles

### Technical Standards
- Validate HTML/CSS
- Test across multiple browsers
- Optimize for performance
- Maintain accessibility standards

---

**Last Updated:** $(date)
**Next Review:** [Schedule regular reviews of this document]
