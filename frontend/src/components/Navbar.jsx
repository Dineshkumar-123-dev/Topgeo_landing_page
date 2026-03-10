import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active link based on scroll position
            const sections = ['features', 'benefits', 'faq', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        setActiveLink(targetId);

        const element = document.getElementById(targetId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="container nav-content">
                    <a href="#" className="logo" onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                        <span className="gradient-text">TopGEO AI</span>
                    </a>

                    <nav className="nav-links">
                        <a
                            href="#features"
                            className={activeLink === 'features' ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, 'features')}
                        >
                            Features
                        </a>
                        <a
                            href="#benefits"
                            className={activeLink === 'benefits' ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, 'benefits')}
                        >
                            Benefits
                        </a>
                        <a
                            href="#faq"
                            className={activeLink === 'faq' ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, 'faq')}
                        >
                            FAQ
                        </a>
                    </nav>

                    <a
                        href="#contact"
                        className="btn btn-primary nav-cta click-effect"
                        onClick={(e) => handleNavClick(e, 'contact')}
                    >
                        Get Advice Now
                    </a>

                    <button
                        className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    <a
                        href="#features"
                        className={activeLink === 'features' ? 'active' : ''}
                        onClick={(e) => handleNavClick(e, 'features')}
                    >
                        Features
                    </a>
                    <a
                        href="#benefits"
                        className={activeLink === 'benefits' ? 'active' : ''}
                        onClick={(e) => handleNavClick(e, 'benefits')}
                    >
                        Benefits
                    </a>
                    <a
                        href="#faq"
                        className={activeLink === 'faq' ? 'active' : ''}
                        onClick={(e) => handleNavClick(e, 'faq')}
                    >
                        FAQ
                    </a>
                    <a
                        href="#contact"
                        className="btn btn-primary btn-large click-effect"
                        onClick={(e) => handleNavClick(e, 'contact')}
                    >
                        Get advice now
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;