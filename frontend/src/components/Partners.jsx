import { motion } from "framer-motion";

const partners = [
    "Google", "Amazon", "Infosys", "Wipro", "TCS", "Kissflow", "Persistent", "Mphasis"
];

function Partners() {
    return (
        <section className="partners-section">
            <div className="container">
                <p className="partners-title">Mastering Lead Generation for Global Customers</p>
                <div className="partners-grid">
                    {partners.map((name, i) => (
                        <motion.div
                            key={i}
                            className="partner-logo"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;
