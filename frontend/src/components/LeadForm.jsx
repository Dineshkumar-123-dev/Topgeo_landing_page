import { useState } from "react";
import Toast from "./Toast";

function LeadForm() {

    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const formValues = Object.fromEntries(data.entries());

        console.log("Submitting to Excel:", formValues);

        try {
            const response = await fetch('http://localhost:5000/api/submit-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            if (response.ok) {
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
                e.target.reset();
            } else {
                alert("Failed to submit lead. Please ensure the backend server is running.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Connection error. Is the backend server running on port 5000?");
        }
    };

    return (
        <>
            <div className="hero-form-wrapper" id="contact">
                <div className="form-card">
                    <h3>Get your lead gen plan</h3>
                    <p>Unlock AI-driven insights and start converting today.</p>

                    <form className="lead-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="input-group">
                                <label>Name *</label>
                                <input type="text" name="name" placeholder="John Doe" required />
                            </div>

                            <div className="input-group">
                                <label>Email *</label>
                                <input type="email" name="email" placeholder="john@company.com" required />
                            </div>

                            <div className="input-group">
                                <label>Contact *</label>
                                <input type="tel" name="contact" placeholder="+1..." required />
                            </div>

                            <div className="input-group">
                                <label>Website URL</label>
                                <input type="url" name="website" placeholder="https://..." />
                            </div>
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
                            <textarea name="comments" rows="3" placeholder="How can we help?"></textarea>
                        </div>

                        <button className="submit-btn" type="submit">
                            Get my lead gen plan
                        </button>
                    </form>
                    <p className="form-note">By submitting this form, you agree to our privacy policy.</p>
                </div>
            </div>

            <Toast
                show={showToast}
                message="Thank you! Your request has been recorded."
            />
        </>
    );
}

export default LeadForm;