import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

const formVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

function Hero() {
    return (
        <section className="hero">
            <div className="glow-bg"></div>
            <motion.div
                className="floating-shapes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </motion.div>
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="badge" variants={itemVariants}>
                        <span className="badge-dot"></span>
                        The Future of AI Search Discovery
                    </motion.div>
                    <motion.h1 variants={itemVariants}>
                        Is your brand ready for <span className="gradient-text">AI search?</span>
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        Your brand is invisible on AI search. Where the future of discovery is happening now.
                    </motion.p>
                    <motion.p variants={itemVariants} style={{ fontSize: '0.95rem', opacity: 0.8 }}>
                        Track, analyze, and improve brand performance on AI search platforms through key metrics like Visibility, Position, and Sentiment.
                    </motion.p>
                    <motion.div className="hero-stats" variants={itemVariants}>
                        <div className="hero-stat">
                            <span className="hero-stat-value">10+</span>
                            <span className="hero-stat-label">AI Platforms</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">500+</span>
                            <span className="hero-stat-label">Brands Tracked</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">24/7</span>
                            <span className="hero-stat-label">Monitoring</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <LeadForm />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;