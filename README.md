# 🚀 Cognifyz Web Development Internship — Level 2 Project

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

A clean, modern, and fully responsive web development project built for the **Cognifyz Technologies Web Development Internship (Level 2)**.

This repository demonstrates practical implementation of **Frontend Frameworks (Bootstrap 5)** and **Responsive Design (CSS Media Queries & Mobile Hamburger Navigation)**.

---

## 📌 Table of Contents
- [Project Overview](#-project-overview)
- [Level 2 Task Requirements](#-level-2-task-requirements)
  - [Task 1: Front-end Frameworks](#task-1--front-end-frameworks)
  - [Task 2: Responsive Design](#task-2--responsive-design)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started / Running Locally](#-getting-started--running-locally)
- [Author](#-author)

---

## 💻 Project Overview

The project is structured as an independent, single-page application (`WebDev`) highlighting foundational web technologies (**HTML**, **CSS**, and **JavaScript**).

It features:
- A modern sticky navbar with logo and mobile hamburger toggle.
- A responsive Hero section with call-to-action buttons and modern vector artwork.
- An About section detailing the project capabilities.
- A **Web Development Skills** section using Bootstrap cards inside a responsive grid.
- An interactive contact section and a clean footer.

---

## 📋 Level 2 Task Requirements

### TASK 1 — Front-end Frameworks
1. **Responsive Card Component**:
   - Created 3 responsive Bootstrap cards representing core web technologies: **HTML**, **CSS**, and **JavaScript**.
   - Each card includes a high-resolution image, title, required description text, and a "Learn More" button.
   - Enhanced with custom CSS hover elevation (`transform: translateY(-8px)`), smooth image zoom, and rounded corners.

2. **Responsive Bootstrap Grid Layout**:
   - Built using Bootstrap 5 grid utilities: `<div class="col-lg-4 col-md-6 col-12">`.
   - **Desktop View (>992px)**: 3 columns in a single row (`col-lg-4`).
   - **Tablet View (768px - 991px)**: 2 columns on Row 1, 1 column on Row 2 (`col-md-6`).
   - **Mobile View (<768px)**: Vertically stacked single column (`col-12`).

---

### TASK 2 — Responsive Design
1. **Responsive Webpage & Media Queries**:
   - Page layouts dynamically adjust across Desktop, Laptop, Tablet, and Mobile screens.
   - Explicit CSS `@media` queries written in `style.css` for custom font scaling, padding adjustments, and zero horizontal scrolling (`overflow-x: hidden`).

2. **Mobile Hamburger Navigation**:
   - Navigation links collapse into an animated 3-bar hamburger button (`☰`) on smaller screens.
   - Features smooth toggle transitions and automatically closes when a nav link is selected.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic document structuring.
- **CSS3**: Modern styling, variables, glassmorphism, flexbox, grid, animations, and `@media` queries.
- **Bootstrap 5 (CDN)**: Framework grid system, card components, buttons, and modal utilities.
- **JavaScript (Vanilla)**: Minimal JS for hamburger menu toggle behavior, active link scroll indicators, and skill info modal trigger.

---

## 📁 Project Directory Structure

```
Cognifiz_Level_2/
│
├── index.html           # Main semantic HTML5 document with Bootstrap 5
├── style.css            # Custom CSS stylesheet with explicit @media queries
├── script.js            # Minimal JavaScript for nav toggle & modal logic
├── .gitignore           # Git ignore rules
├── README.md            # Comprehensive project documentation
└── assets/
    └── images/          # Visual asset graphics
        ├── hero.jpg     # Hero section illustration
        ├── html.jpg     # HTML card visual
        ├── css.jpg      # CSS card visual
        └── javascript.jpg # JavaScript card visual
```

---

## ⚡ Getting Started / Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DineshK-5257/Cognifiz_Level_2.git
   cd Cognifiz_Level_2
   ```

2. **Open directly in browser**:
   Simply double-click `index.html` or open it with any web browser.

3. **Or run using a local server**:
   ```bash
   # Using Python
   python -m http.server 8080

   # Or using Node.js serve / Live Server
   npx serve
   ```
   Navigate to `http://localhost:8080` in your web browser.

---

## 👤 Author

- **GitHub**: [@DineshK-5257](https://github.com/DineshK-5257)
- **Internship**: Cognifyz Technologies Web Development Internship (Level 2)
