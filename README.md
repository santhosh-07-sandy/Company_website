# Prodiagnox Healthcare Website

![Prodiagnox Logo](logo.jpg)

**Prodiagnox Healthcare** is a modern, responsive website for a medical technology company specializing in high-accuracy wired ECG devices and real-time monitoring web applications. This project showcases a premium, "glass-morphism" design with advanced animations and a seamless dark/light mode experience.

## 🚀 Features

*   **Responsive Design:** Fully optimized for all devices, from mobile phones to large desktop screens.
*   **Dual-Theme Support:** Toggle between a sleek **Dark Mode** (default) and a clean **Light Mode** with high-contrast elements.
*   **Advanced Animations:**
    *   **Real-time ECG Visual:** A continuously running, mathematically verified ECG waveform animation using SVG path manipulation.
    *   **Glass Card Effects:** Partner logos and cards feature a "Glassmorphism" style with 3D lift and glow effects on hover.
    *   **Scroll Animations:** Elements fade in and slide up as you scroll down the page.
*   **Interactive Components:**
    *   Smooth scrolling navigation.
    *   Mobile hamburger menu with backdrop blur.
    *   Interactive contact form integrated with Google Sheets.
*   **Partner Carousel:** An infinite-scrolling carousel showcasing partner affiliations with premium hover animations.

## 🛠️ Tech Stack

*   **HTML5:** Semantic markup for structure and SEO.
*   **CSS3:** Custom styles using modern CSS variables (`var(--)`), Flexbox, Grid, and Media Queries. No external CSS frameworks were used, ensuring a lightweight and unique design.
*   **JavaScript (ES6+):** Vanilla JavaScript for theme toggling, animations, mobile menu logic, and form handling.
*   **FontAwesome:** For vector icons.

## 📂 Project Structure

```
c:\Company_Website\
├── assets/             # Images for partners, profiles, and logos
├── index.html          # Main landing page
├── style.css           # Global styles, variables, and animations
├── script.js           # Logic for theme, menu, and form submission
├── logo.jpg            # Website favicon and logo
└── README.md           # Project documentation
```

## 🔧 Setup & Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/prodiagnox-website.git
    ```
2.  **Open the project:**
    Navigate to the project directory and open `index.html` in your browser.
    *   VS Code Live Server is recommended for the best development experience.

## 📝 Contact Form Integration

The contact form is configured to send data to a Google Sheet via a Google Apps Script Web App.
*   **Script URL:** `https://script.google.com/macros/s/AKfycbz28QWz3vwXleMvQkbIuHinM9JN1i0PW1Tz9ZW3MtpZOyLUi1ytMbmE7htH6gSstsPgPg/exec`
*   **Fields:** Name, Email, Message

## 🎨 Customization

*   **Theme Colors:** Edit the `:root` variables in `style.css` to change the primary colors (currently Teal `#64ffda` for Dark Mode and Blue `#0284c7` for Light Mode).
*   **ECG Animation:** The ECG path and animation duration can be adjusted in the `.ecg-line::after` CSS rule.

## 📄 License

This project is proprietary to Prodiagnox Healthcare. All rights reserved.

---
*Built with precision and care for the future of cardiac monitoring.*
