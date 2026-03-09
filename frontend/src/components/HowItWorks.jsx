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
        <section className="how-it-works" style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 className="section-title">Get Started in <span className="gradient-text">Minutes</span></h2>
                    <p className="section-subtitle">Simplified onboardings to start winning in the age of AI search.</p>
                </div>

                <div className="steps-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            style={{ position: 'relative', textAlign: 'center' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '800',
                                color: 'rgba(37, 99, 235, 0.05)',
                                position: 'absolute',
                                top: '-20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: '-1'
                            }}>
                                {s.number}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '20px', color: '#0F172A' }}>{s.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
