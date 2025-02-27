import React from "react";
import logo from '../assets/Logo.svg';

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="Little Lemon Logo" className="logo" />
            </div>

            <div className="footer-sections">
                <section className="doormat-navigation">
                    <h3>Sitemap</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                    </ul>
                </section>

                <section className="contact-info">
                    <h3>Contact</h3>
                    <address>
                        123 Lemon Street<br />
                        Chicago, IL 60601<br />
                        Phone: (123) 456-7890<br />
                        Email: info@littlelemon.com
                    </address>
                </section>

                <section className="social-media">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </section>
            </div>

            <div className="copyright">
                <p>&copy; 2025 Little Lemon Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;