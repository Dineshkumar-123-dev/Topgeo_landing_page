import { motion } from "framer-motion";
import {
    BarChart3,
    Search,
    Target,
    TrendingUp,
    Zap,
    MessageSquare,
    Share2,
    ShieldCheck
} from "lucide-react";

const features = [
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "GEO Visibility Score",
        desc: "Measure and track your brand's prominence across all major AI search platforms."
    },
    {
        icon: <Search className="w-8 h-8" />,
        title: "Multi-Platform AI Monitoring",
        desc: "Keep a real-time pulse on your citations across ChatGPT, Gemini, Claude, and more."
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Competitor Benchmarking",
        desc: "Analyze competitor sentiment and citation intelligence to stay ahead of the pack."
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Citation Intelligence",
        desc: "Identify where and how your brand is being cited by AI agents."
    },
    {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Prompt Monitoring",
        desc: "Understand what prompts are triggering your brand mentions in AI outputs."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "AI-Powered Insights",
        desc: "Get actionable intelligence to improve your brand's AI organic positioning."
    },
    {
        icon: <Share2 className="w-8 h-8" />,
        title: "Content Pickup Tracking",
        desc: "Track which of your articles and reports are being used as sources by LLMs."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Sentiment & Brand Analysis",
        desc: "Monitor the tone and perception of your brand within generative AI responses."
    }
];

function Features() {
    return (
        <section className="features" id="features">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Everything You Need to Win in <span className="gradient-text">AI Search</span></h2>
                    <p className="section-subtitle">The first comprehensive Generative Engine Optimization (GEO) platform.</p>
                </motion.div>

                <div className="feature-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        >
                            <div className="icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="platform-benefits">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Complete AI Search <span className="gradient-text">Analytics Platform</span></h2>
                        <p className="section-subtitle">Get cited, get ranked, and get discovered automatically across 10+ engines.</p>
                    </motion.div>

                    <div className="benefit-grid">
                        {[
                            { title: "Boost your ranking", desc: "Climb to the top of AI search results with data-driven optimization strategies." },
                            { title: "Increase platform mentions", desc: "Get cited more frequently across ChatGPT, Perplexity, and other AI engines." },
                            { title: "Improve Visibility Score", desc: "Track and enhance your overall AI search performance with actionable metrics." },
                            { title: "Amplify AI authority", desc: "Maximize your brand's presence and authority in AI-generated responses." }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                className="benefit-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="benefit-icon">
                                    <span className="benefit-check">✓</span>
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;