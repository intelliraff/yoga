import React, { useState } from "react";
import "./Donation.css";

const Donation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    postTown: "",
    postalCode: "",
    selectedAmount: "",
    customAmount: "",
    donationType: "one-time",
    emailUpdates: false,
  });

  const [selectedAmount, setSelectedAmount] = useState("");

  const impactCards = [
    {
      amount: "$500",
      description: "Supports a free yoga class for 10 people",
    },
    {
      amount: "$1000",
      description: "Provides a yoga mat + kit for a student in need",
    },
    {
      amount: "$2500",
      description: "Sponsors a day of wellness retreat for one individual",
    },
    {
      amount: "$5000",
      description: "Helps develop online content for global reach",
    },
  ];

  const donationAmounts = [
    "$10",
    "$20",
    "$50",
    "$100",
    "$250",
    "$500",
    "$1000",
    "$2000",
    "$5000",
    "$10,000",
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setFormData({ ...formData, selectedAmount: amount, customAmount: "" });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your generous donation! Your support makes a difference.",
    );
  };

  return (
    <div className="donation-page">
      {/* Hero Section */}
      <section className="donation-hero">
        <h1 className="hero-title">
          Support Our Mission Through Your Generosity
        </h1>
        <p className="hero-description">
          Your support helps us spread the ancient wisdom of yoga, promote
          wellness, and reach those who need healing the most. Whether it's
          sponsoring a free class for underprivileged communities or supporting
          our retreats and online resources, every donation makes a difference.
        </p>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2 className="section-title">Impact of your Donation</h2>
        <div className="impact-cards">
          {impactCards.map((card, index) => (
            <div key={index} className="impact-card">
              <div className="impact-amount">{card.amount}</div>
              <p className="impact-description">{card.description}</p>
            </div>
          ))}
        </div>
        <p className="impact-note">
          Your donation goes directly into our community outreach, education
          programs, and wellness initiatives.
        </p>
      </section>

      {/* Donation Form */}
      <section className="donation-form-section">
        <div className="donation-form-container">
          <form onSubmit={handleSubmit} className="donation-form">
            <h3 className="form-section-title">Donate any Amount</h3>

            {/* Donation Type */}
            <div className="donation-type">
              <button
                type="button"
                className={`type-button ${formData.donationType === "one-time" ? "active" : ""}`}
                onClick={() =>
                  setFormData({ ...formData, donationType: "one-time" })
                }
              >
                One time donation
              </button>
              <button
                type="button"
                className={`type-button ${formData.donationType === "recurring" ? "active" : ""}`}
                onClick={() =>
                  setFormData({ ...formData, donationType: "recurring" })
                }
              >
                Recurring Donation
              </button>
            </div>

            {/* Amount Selection */}
            <div className="amount-grid">
              {donationAmounts.map((amount, index) => (
                <button
                  key={index}
                  type="button"
                  className={`amount-button ${selectedAmount === amount ? "selected" : ""}`}
                  onClick={() => handleAmountClick(amount)}
                >
                  {amount}
                </button>
              ))}
              <button
                type="button"
                className={`amount-button other-amount ${selectedAmount === "other" ? "selected" : ""}`}
                onClick={() => handleAmountClick("other")}
              >
                Other Amount
              </button>
            </div>

            {/* Custom Amount Input */}
            {selectedAmount === "other" && (
              <div className="custom-amount">
                <input
                  type="number"
                  name="customAmount"
                  placeholder="Enter amount"
                  value={formData.customAmount}
                  onChange={handleInputChange}
                  className="custom-amount-input"
                />
              </div>
            )}

            <div className="form-divider"></div>

            {/* Personal Information */}
            <h3 className="form-section-title">Your Information</h3>

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Johndoe123@xyz.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="United Kingdom"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Post Town</label>
              <input
                type="text"
                name="postTown"
                placeholder="Birmingham"
                value={formData.postTown}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                placeholder="B1 2DN"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email Updates */}
            <div className="email-updates-section">
              <h3 className="form-section-title">
                Would you like to hear from us?
              </h3>
              <p className="email-description">
                We'd like to keep you updated on our campaigns, policies,
                appeals and opportunities to get involved - in addition to
                contact regarding donations. You can unsubscribe at any time
              </p>

              <div className="email-consent">
                <div className="consent-options">
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      name="emailUpdates"
                      checked={formData.emailUpdates}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-text">
                      Yes, keep me updated via email
                    </span>
                  </label>
                </div>
              </div>

              <p className="privacy-policy">
                To learn how we collect and use your information, please read
                our{" "}
                <a href="#" className="privacy-link">
                  privacy policy
                </a>
                .
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="give-securely-button">
              <svg
                className="lock-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"
                  fill="white"
                />
              </svg>
              Give Securely
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Take the next step in your yoga journey</h2>
          <p className="cta-description">
            Be part of a transformative journey for yourself and the next
            generation.
          </p>
          <button className="cta-button">Join Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Yog-Kulam</h3>
            <p className="footer-description">
              Yoga means Union; Kulam means centre of education and excellence,
              like Guru-Kulam.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Useful</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/training">Why Yog-Kulam</a>
              </li>
              <li>
                <a href="/upcoming">Workshop</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <p>Sewa UK 110 High St, Edgware HA8 7HF</p>
              <p>Phone: +44(0) 7564 674 669</p>
              <p>Email: info@yog-kulam.org</p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Newsletter</h3>
            <p className="newsletter-text">Yog-Kulam</p>
            <div className="newsletter-signup">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Donation;
