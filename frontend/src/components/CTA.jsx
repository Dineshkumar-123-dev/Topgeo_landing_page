import { motion } from "framer-motion";

function CTA() {
    return (
        <section className="mid-cta" id="benefits">
            <div className="container">
                <motion.div
                    className="cta-flex"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="cta-text">
                        <h2>Don't Let Your Competitors Own AI Search</h2>
                        <p>Join the world's most advanced GEO & AEO platform and start winning today.</p>
                    </div>
                    <div className="cta-action">
                        <a href="#contact" className="btn btn-primary btn-large">Get an advise now</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CTA;
