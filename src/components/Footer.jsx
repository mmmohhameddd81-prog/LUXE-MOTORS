import React from "react";
import { Link } from "react-router-dom";

// Contact details — the phone number is used only to build the WhatsApp deep link
// and is never displayed on the page.
const whatsappUrl = "https://wa.me/201554672640";
const email = "mohamedadelzaki20@fmail.com";
const github = "https://github.com/mmmohhameddd81-prog";
const linkedin = "https://www.linkedin.com/in/mohamed-adel-153147332/";

const whatsappIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.16a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 01-1.26-4.39c0-4.53 3.69-8.21 8.23-8.21a8.17 8.17 0 018.22 8.21c0 4.53-3.69 8.24-8.23 8.24zm4.5-6.16c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.13-1.05-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.16 1.76 2.68 4.26 3.76.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
  </svg>
);

const emailIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v.4l10 6 10-6V6zm0 2.4l-10 6-10-6V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8.4z" />
  </svg>
);

const githubIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 00-3.64 22.42c.58.1.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.48.11-3.08 0 0 .98-.32 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.52 3.2-1.2 3.2-1.2.63 1.6.23 2.78.11 3.08.75.82 1.2 1.85 1.2 3.12 0 4.45-2.71 5.43-5.29 5.72.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" />
  </svg>
);

const linkedinIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 8.5H3.2V21h3.3V8.5zM4.85 3a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM21 13.4c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1-3.3 1.8V8.5H10.2c0 1.6.05 12.5.05 12.5h3.3v-7c0-.4.03-.8.15-1.1.3-.8 1-1.6 2.2-1.6 1.6 0 2.2 1.2 2.2 3V21H21v-7.6z" />
  </svg>
);

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.13-2.45-.13C12.1 3.47 10.4 5.2 10.4 8.4v1.5H7.7V13h2.7v8h3.1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.95 4.95.06 1.3.07 1.7.07 4.78s-.01 3.48-.07 4.78c-.15 3.24-1.65 4.8-4.95 4.95-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-3.3-.15-4.8-1.71-4.95-4.95-.06-1.3-.07-1.7-.07-4.78s.01-3.48.07-4.78C2.3 3.95 3.8 2.4 7.1 2.27 8.4 2.2 8.8 2.2 12 2.2zm0 3.05a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm0 11.15a4.4 4.4 0 110-8.8 4.4 4.4 0 010 8.8zm7-11.4a1.58 1.58 0 11-3.16 0 1.58 1.58 0 013.16 0z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://www.x.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.3 22H3.2l7.3-8.4L2.8 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L8.3 3.9H6.5L17.8 20z" />
      </svg>
    ),
  },
  { label: "GitHub", href: github, icon: githubIcon },
  { label: "LinkedIn", href: linkedin, icon: linkedinIcon },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 12s0-3.4-.4-5a2.6 2.6 0 00-1.8-1.8C19.2 4.8 12 4.8 12 4.8s-7.2 0-8.8.4A2.6 2.6 0 001.4 7C1 8.6 1 12 1 12s0 3.4.4 5c.2 1 1 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.8-.2 1.6-.8 1.8-1.8.4-1.6.4-5 .4-5zM9.8 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand">
              <span className="brand-mark">LM</span>
              LUXE MOTORS
            </Link>
            <p className="footer-tagline">Premium Cars. Exceptional Experience.</p>
            <p>
              A premium automotive destination offering hand-picked luxury, sports,
              SUV, and electric vehicles — backed by expert guidance and exceptional
              service.
            </p>
            <div className="socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/cars">Cars</Link></li>
            </ul>
          </div>

          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><a href={`mailto:${email}`}>Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <a
              className="whatsapp-button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
            >
              {whatsappIcon}
              Contact via WhatsApp
            </a>
            <ul className="footer-contact-links">
              <li>
                <a href={`mailto:${email}`}>
                  {emailIcon}
                  {email}
                </a>
              </li>
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  {githubIcon}
                  GitHub
                </a>
              </li>
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  {linkedinIcon}
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LUXE MOTORS. All rights reserved.</span>
          <span>Premium Cars. Exceptional Experience.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
