import { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    occupation: "",
    town: "",
    location: "",
    exerciseHistory: "",
    currentInjuries: "",
    healthConditions: "",
    additionalHealth: "",
    receiveUpdates: false,
    acceptDisclaimer: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registration submitted successfully!");
  };

  const clearForm = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      occupation: "",
      town: "",
      location: "",
      exerciseHistory: "",
      currentInjuries: "",
      healthConditions: "",
      additionalHealth: "",
      receiveUpdates: false,
      acceptDisclaimer: false,
    });
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h1 className="registration-title">Registration Form</h1>

        <div className="registration-layout">
          {/* Left Side Images */}
          <div className="images-sidebar">
            <img
              src="https://plus.unsplash.com/premium_photo-1661604445845-4c75a36cb93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661604440767-cfc4cdd63d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1663047783710-2850204d003f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1663047282991-84b691885f54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1666283137652-9f5425ef7bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661598599843-8d98b0691372?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://images.unsplash.com/photo-1593164842249-d74fc06dae05?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://images.unsplash.com/photo-1717821681365-36b0da044a75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://images.unsplash.com/photo-1717820914668-2b93d2e764f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
            <img
              src="https://images.unsplash.com/photo-1717839339049-2aba90aaabc1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga pose"
              className="yoga-img"
            />
          </div>

          {/* Main Form Content */}
          <div className="form-content">
            <form onSubmit={handleSubmit} className="registration-form">
              {/* Personal Information Row 1 */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Mobile No</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="91 7011217595"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Personal Information Row 2 */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abc123@xyz.com"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    placeholder="Example  :Trainer"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Personal Information Row 3 */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Town</label>
                  <input
                    type="text"
                    name="town"
                    value={formData.town}
                    onChange={handleInputChange}
                    placeholder="Pune"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Location</label>
                  <div className="select-wrapper">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Choose</option>
                      <option value="london">London</option>
                      <option value="manchester">Manchester</option>
                      <option value="birmingham">Birmingham</option>
                      <option value="leeds">Leeds</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="select-arrow">
                      <svg
                        width="26"
                        height="18"
                        viewBox="0 0 26 18"
                        fill="none"
                      >
                        <path
                          d="M13 18L0.00961876 0L25.9904 0L13 18Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercise History */}
              <div className="form-field-full">
                <label className="field-label">
                  Have you done yoga or any other form of exercise before? If
                  yes please provide details below e.g. type of exercise and how
                  often.
                </label>
                <textarea
                  name="exerciseHistory"
                  value={formData.exerciseHistory}
                  onChange={handleInputChange}
                  placeholder="Your Answer"
                  className="form-textarea"
                  rows="4"
                />
              </div>

              {/* Current Injuries */}
              <div className="form-field-full">
                <label className="field-label">
                  Please give details of any current injuries that could cause
                  discomfort when practicing yoga.
                </label>
                <textarea
                  name="currentInjuries"
                  value={formData.currentInjuries}
                  onChange={handleInputChange}
                  placeholder="Your Answer"
                  className="form-textarea"
                  rows="4"
                />
              </div>

              {/* Health Conditions */}
              <div className="form-field-full">
                <label className="field-label">
                  Please give details of any health conditions that you
                  currently have (such as heart problems, high/low blood
                  pressure, respiratory problems etc.).
                </label>
                <textarea
                  name="healthConditions"
                  value={formData.healthConditions}
                  onChange={handleInputChange}
                  placeholder="Your Answer"
                  className="form-textarea"
                  rows="4"
                />
              </div>

              {/* Additional Health */}
              <div className="form-field-full">
                <label className="field-label">
                  Is there anything else you feel that we should know about your
                  health? If so, please give details below.
                </label>
                <textarea
                  name="additionalHealth"
                  value={formData.additionalHealth}
                  onChange={handleInputChange}
                  placeholder="Your Answer"
                  className="form-textarea"
                  rows="4"
                />
              </div>

              {/* Disclaimer Section */}
              <div className="disclaimer-section">
                <h2 className="disclaimer-title">Disclaimer</h2>
                <div className="disclaimer-text">
                  We have made every effort to ensure that all the information
                  provided in our seminars has been tested for accuracy, however
                  we make no guarantees regarding the results you will see from
                  using the information provided.The information in this seminar
                  is not medical advice, nor is it intended to replace medical
                  advice, or intended to diagnose, prescribe or treat any
                  disease, condition, illness or injury.If you have any concerns
                  about the condition of your health prior to starting this
                  seminar, please seek advice from a licensed medical
                  professional. Thank you for completing this form. This
                  information is private and confidential and will be stored and
                  used in accordance with GDPR guidelines. In order to comply
                  with GDPR regulations, it is necessary for us to check whether
                  or not you are happy for us to retain your contact details,
                  and to send you information that we think may be useful to
                  you, including training and events, and relevant updates.
                </div>

                {/* Consent Checkboxes */}
                <div className="consent-checkboxes">
                  <div className="checkbox-row">
                    <input
                      type="checkbox"
                      id="receiveUpdates"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleInputChange}
                      className="consent-checkbox"
                    />
                    <label htmlFor="receiveUpdates" className="checkbox-label">
                      I am happy to receive updates and details of future
                      training and events.
                    </label>
                  </div>

                  <div className="checkbox-row">
                    <input
                      type="checkbox"
                      id="acceptDisclaimer"
                      name="acceptDisclaimer"
                      checked={formData.acceptDisclaimer}
                      onChange={handleInputChange}
                      className="consent-checkbox"
                      required
                    />
                    <label
                      htmlFor="acceptDisclaimer"
                      className="checkbox-label"
                    >
                      I confirm my understanding and acceptance of this health
                      questionnaire and its disclaimer
                    </label>
                  </div>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="form-actions">
                <button
                  type="button"
                  onClick={clearForm}
                  className="clear-form-btn"
                >
                  Clear Form
                </button>
                <button type="submit" className="submit-btnn">
                  Click to Registrations
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
            {/* Footer */}
            <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Yog-Kulam</h4>
              <p>Yoga means Union;<br></br> Kulam means center <br></br>of education and <br></br>excellence, like <br></br>Guru-Kulam</p>
            </div>

            <div className="footer-section">
              <h4>Useful</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Why</li>
                <li>Workshop</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>
                Sewa UK 110 High St, Edgware HA8 7HF
                <br />
                Phone: +44(0) 7564 674 669
                <br />
                Email: info@yog-kulam.org
              </p>
            </div>

            <div className="footer-section">
              <h4>Our Newsletter</h4>
              <div className="newsletter-signup">
                <input type="email" placeholder="Enter your email" />
                <button className="cta-button">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © Copyright , All Rights Reserved, Designed By
              <br />
              Privacy Policy | Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Registration;
