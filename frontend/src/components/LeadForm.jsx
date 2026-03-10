import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import Toast from "./Toast";

function LeadForm() {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw5Ly1vJv8qXWrG_cIN533F3vbM2RWZLXucE-nbPB-gDACEE8ZNaEpPQdR-9ujL2BAvng/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());

    try {
      // Send to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      // Since mode is 'no-cors', we can't read the response
      // But if no error is thrown, assume success
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      e.target.reset();
      setFocusedField(null);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focused: { scale: 1.02, transition: { duration: 0.2 } },
    unfocused: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="hero-form-wrapper" id="contact">
        <motion.div
          className="form-card"
          whileHover={{ boxShadow: "0 30px 60px rgba(0, 0, 0, 0.12)" }}
        >
          <div className="form-header">
            <motion.div
              className="form-icon"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 0.5,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
            <h3>Get Your Lead Gen Plan</h3>
          </div>
          <p>Unlock AI-driven insights and start converting today.</p>

          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <motion.div
                className={`input-group ${focusedField === "name" ? "focused" : ""}`}
                variants={inputVariants}
                animate={focusedField === "name" ? "focused" : "unfocused"}
              >
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              <motion.div
                className={`input-group ${focusedField === "email" ? "focused" : ""}`}
                variants={inputVariants}
                animate={focusedField === "email" ? "focused" : "unfocused"}
              >
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              <motion.div
                className={`input-group ${focusedField === "contact" ? "focused" : ""}`}
                variants={inputVariants}
                animate={focusedField === "contact" ? "focused" : "unfocused"}
              >
                <label>Contact *</label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="+1..."
                  required
                  onFocus={() => setFocusedField("contact")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              <motion.div
                className={`input-group ${focusedField === "website" ? "focused" : ""}`}
                variants={inputVariants}
                animate={focusedField === "website" ? "focused" : "unfocused"}
              >
                <label>Website URL</label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://..."
                  onFocus={() => setFocusedField("website")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>
            </div>

            <div className="input-group">
              <label className="select-label">Nature of Business</label>
              <select name="business">
                <option value="">Please Select</option>
                <option>IT Services</option>
                <option>SaaS Company</option>
                <option>Startup</option>
                <option>Marketing Agency</option>
                <option>Other</option>
              </select>
            </div>

            <div className="input-group">
              <label>Target Region</label>
              <select name="region" required>
                <option value="">Select a country...</option>
                <option value="Global">Global / Multiple Regions</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Singapore">Singapore</option>
                <option value="UAE">UAE</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
                <option value="South Africa">South Africa</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="input-group">
              <label className="select-label">Comments</label>
              <textarea
                name="comments"
                rows="3"
                placeholder="How can we help?"
                onFocus={() => setFocusedField("comments")}
                onBlur={() => setFocusedField(null)}
              ></textarea>
            </div>

            <motion.button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Get My Lead Gen Plan
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
          <p className="form-note">
            By submitting this form, you agree to our privacy policy.
          </p>
        </motion.div>
      </div>

      <Toast
        show={showToast}
        message="Thank you! Your request has been recorded."
      />
    </>
  );
}

export default LeadForm;
