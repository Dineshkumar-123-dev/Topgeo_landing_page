import { useState } from 'react';

function Footer() {
    const [subscribed, setSubscribed] = useState(false);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="gradient-text">TopGEO AI</span>
                        </a>
                        <p>Your brand is invisible on AI search.<br />Where the future of discovery is happening now.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Visibility Score</a></li>
                            <li><a href="#">Citation Intelligence</a></li>
                            <li><a href="#">Multi-Platform Monitoring</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers Offered</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-links newsletter-col">
                        <h4>Stay Updated</h4>
                        <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Get the latest insights on AI search optimization.</p>
                        {subscribed ? (
                            <div className="success-msg" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                                Thanks for joining!
                            </div>
                        ) : (
                            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                                <input type="email" placeholder="Email address" required />
                                <button type="submit" className="btn btn-primary">Join</button>
                            </form>
                        )}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 TopGEO AI. All rights reserved.</p>
                    <div className="legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;