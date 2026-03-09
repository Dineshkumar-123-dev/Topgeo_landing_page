import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="container nav-content">
                <a href="#" className="logo">
                    <span className="gradient-text">TopGEO AI</span>
                </a>

                <nav className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#benefits">Benefits</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <a href="#contact" className="btn btn-primary nav-cta">
                    Get an advise now
                </a>
            </div>
        </header>
    );
}

export default Navbar;