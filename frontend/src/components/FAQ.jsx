import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How do we generate leads effectively for IT companies using AI Search?",
    a: "We use our proprietary GEO Accessibility platform to optimize your brand's presence across Large Language Models (LLMs) like ChatGPT, Claude, and Gemini. By ensuring your solutions are frequently cited, we capture high-intent B2B leads."
  },
  {
    q: "Why choose AI-driven lead generation over traditional methods?",
    a: "Traditional search is saturated. AI search provides direct answers to decision-makers. By establishing a strong GEO Visibility Score, your company is positioned as the authoritative answer for B2B queries."
  },
  {
    q: "What are the best methods to get leads for SaaS business growth?",
    a: "For SaaS businesses, the best method integrates Multi-Platform AI Monitoring, Sentiment Analysis, and Prompt Monitoring to ensure your brand is the top recommended software."
  },
  {
    q: "How quickly can I see results in my GEO Visibility Score?",
    a: "Once you connect your brand, initial AI-Powered Insights are generated within minutes. Sustained improvements typically take 4-6 weeks as AI models ingest new, optimized data."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header text-center">
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">Learn more about how we generate leads effectively for tech and software companies.</p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, i) => (
            <div key={i} className="accordion-item">
              <button
                className={`accordion-header ${activeIndex === i ? 'active' : ''}`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                {faq.q}
                <Plus className={`icon transition-transform ${activeIndex === i ? 'rotate-45' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="accordion-content">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;