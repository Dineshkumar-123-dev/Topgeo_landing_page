import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Connect Your Brand",
        desc: "Initialize your profile by linking your primary brand domains and social entities."
    },
    {
        number: "02",
        title: "Add Competitors",
        desc: "Select key competitors to benchmark your AI search visibility against."
    },
    {
        number: "03",
        title: "Configure Prompts",
        desc: "Define the specific queries and prompts you want to monitor for brand citations."
    },
    {
        number: "04",
        title: "Get Insights",
        desc: "Receive real-time data on how AI models perceive and rank your brand."
    },
    {
        number: "05",
        title: "Daily Monitoring",
        desc: "Stay updated with daily reports on visibility shifts and new AI citations."
    }
];

function HowItWorks() {
    return (
        <section className="how-it-works">
            <div className="container">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get Started in <span className="gradient-text">Minutes</span></h2>
                    <p className="section-subtitle">Simplified onboarding to start winning in the age of AI search.</p>
                </motion.div>

                <div className="steps-grid">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            className="step-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="step-number">{s.number}</div>
                            <div className="step-content">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
