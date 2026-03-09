import { motion } from "framer-motion";

const stats = [
    {
        value: "40%",
        label: "of searches happen through AI platforms like ChatGPT, Perplexity, and Google AI."
    },
    {
        value: "90%",
        label: "of B2B companies now track AI visibility metrics as a core KPI."
    },
    {
        value: "80%",
        label: "of B2B buyers would use “ChatGPT-like” tools on B2B sites for research."
    },
    {
        value: "70%",
        label: "of consumers are inclined to purchase based on generative-AI suggestions."
    }
];

function Stats() {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <h2 className="stat-value">{s.value}</h2>
                            <p className="stat-label">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
