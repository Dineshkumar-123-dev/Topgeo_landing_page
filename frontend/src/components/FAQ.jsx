import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";

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

const accordionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

const contentVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
};

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.div
          className="faq-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">Learn more about how we generate leads effectively for tech and software companies.</p>
        </motion.div>

        <div className="faq-accordion">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`accordion-item ${activeIndex === i ? 'active' : ''}`}
              custom={i}
              variants={accordionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button
                className={`accordion-header ${activeIndex === i ? 'active' : ''}`}
                onClick={() => handleClick(i)}
              >
                <span className="accordion-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="accordion-question">{faq.q}</span>
                <motion.span
                  className="accordion-icon"
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>
              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="accordion-body"
                  >
                    <div className="accordion-content">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;