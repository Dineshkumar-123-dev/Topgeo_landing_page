import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

function Hero() {
    return (
        <section className="hero">
            <div className="glow-bg"></div>
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge">The Future of AI Search Discovery</div>
                    <h1>
                        Is your brand ready for <span className="gradient-text">AI search?</span>
                    </h1>
                    <p>
                        Your brand is invisible on AI search. Where the future of discovery is happening now.
                    </p>
                    <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
                        Track, analyze, and improve brand performance on AI search platforms through key metrics like Visibility, Position, and Sentiment.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <LeadForm />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;