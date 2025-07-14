import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Get in touch with us. We're here to assist you.
              </h1>
              <p className="hero-description">
                We'd love to hear from you. Whether you're seeking guidance,
                have questions about our classes, or just wish to connect—reach
                out and let's walk this wellness journey together.
              </p>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Yoga pose"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path
                    d="M34.4047 2.1543C21.8268 2.1543 11.5938 12.3874 11.5938 24.9652C11.5938 40.7743 34.4271 67.7793 34.4271 67.7793C34.4271 67.7793 57.2156 39.9968 57.2156 24.9652C57.2156 12.3874 46.9829 2.1543 34.4047 2.1543ZM41.2872 31.6443C39.3894 33.5417 36.8973 34.4905 34.4047 34.4905C31.9125 34.4905 29.4195 33.5417 27.5226 31.6443C23.7274 27.8495 23.7274 21.6748 27.5226 17.8796C29.3602 16.0411 31.8048 15.0286 34.4047 15.0286C37.0046 15.0286 39.4487 16.0415 41.2872 17.8796C45.0824 21.6748 45.0824 27.8495 41.2872 31.6443Z"
                    fill="#F96F00"
                  />
                </svg>
              </div>
              <h3>Address</h3>
              <p>Sewa UK 110 High St, Edgware HA8 7HF</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <g clipPath="url(#clip0_133_2335)">
                    <path
                      d="M23.5126 28.814C25.9114 26.4151 25.9114 22.5121 23.5126 20.1132L15.0761 11.6767C13.7856 10.3861 11.9966 9.73217 10.1696 9.88256C8.37754 10.0301 6.7566 10.9436 5.7226 12.3887C5.50795 12.6887 5.30068 12.993 5.09766 13.2998L22.0621 30.2643L23.5126 28.814Z"
                      fill="#F96F00"
                    />
                    <path
                      d="M58.3221 54.925L49.8856 46.4885C47.487 44.0899 43.5837 44.0896 41.1848 46.4885L39.7344 47.939L56.6995 64.9041C57.0063 64.7011 57.3101 64.493 57.61 64.2785C59.0551 63.2445 59.9686 61.6235 60.1163 59.8314C60.2668 58.0042 59.6128 56.2158 58.3221 54.925Z"
                      fill="#F96F00"
                    />
                    <path
                      d="M33.9353 51.192C32.2918 51.192 30.7471 50.552 29.5849 49.39L20.6107 40.4158C19.4488 39.2538 18.8086 37.7088 18.8086 36.0654C18.8086 35.1319 19.0158 34.2304 19.4071 33.4125L3.00053 17.0059C0.692718 21.8516 -0.328571 27.2805 0.092796 32.7299C0.660589 40.0731 3.82727 46.9711 9.00973 52.1534L17.8475 60.991C23.0297 66.1733 29.9278 69.34 37.271 69.908C38.0734 69.97 38.8751 70.0008 39.6749 70.0008C44.3063 70.0008 48.8627 68.9683 52.9949 67.0004L36.5881 50.5936C35.7704 50.985 34.8689 51.192 33.9353 51.192Z"
                      fill="#F96F00"
                    />
                    <path
                      d="M41.2891 0C40.1565 0 39.2383 0.918203 39.2383 2.05078C39.2383 3.18336 40.1565 4.10156 41.2891 4.10156C54.8587 4.10156 65.8984 15.1413 65.8984 28.7109C65.8984 29.8435 66.8166 30.7617 67.9492 30.7617C69.0818 30.7617 70 29.8435 70 28.7109C70 12.8797 57.1203 0 41.2891 0Z"
                      fill="#F96F00"
                    />
                    <path
                      d="M41.2889 28.709C41.2889 28.709 41.2891 28.7097 41.2891 28.7109C41.2891 29.8435 42.2073 30.7617 43.3398 30.7617C44.4724 30.7617 45.3906 29.8435 45.3906 28.7109C45.3906 26.4493 43.5507 24.6094 41.2891 24.6094C40.1565 24.6094 39.2383 25.5266 39.2383 26.6592C39.2383 27.7918 40.1563 28.709 41.2889 28.709Z"
                      fill="#F96F00"
                    />
                    <path
                      d="M41.2891 20.5078C45.8123 20.5078 49.4922 24.1877 49.4922 28.7109C49.4922 29.8435 50.4104 30.7617 51.543 30.7617C52.6755 30.7617 53.5938 29.8435 53.5938 28.7109C53.5938 21.9261 48.0739 16.4062 41.2891 16.4062C40.1565 16.4062 39.2383 17.3245 39.2383 18.457C39.2383 19.5896 40.1565 20.5078 41.2891 20.5078Z"
                      fill="#F96F00"
                    />
                    <path
                      d="M41.2891 8.20312C40.1565 8.20312 39.2383 9.12133 39.2383 10.2539C39.2383 11.3865 40.1565 12.3047 41.2891 12.3047C50.3355 12.3047 57.6953 19.6645 57.6953 28.7109C57.6953 29.8435 58.6135 30.7617 59.7461 30.7617C60.8787 30.7617 61.7969 29.8435 61.7969 28.7109C61.7969 17.4029 52.5971 8.20312 41.2891 8.20312Z"
                      fill="#F96F00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_133_2335">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3>Phone Number</h3>
              <p>+44(0) 7564 674 669</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path
                    d="M64.1654 21.9766V49.5828C64.1655 51.8147 63.3127 53.9622 61.7816 55.5861C60.2505 57.2099 58.1567 58.1873 55.9287 58.3182L55.4154 58.3328H14.582C12.3502 58.3329 10.2026 57.4802 8.57877 55.9491C6.95493 54.4179 5.97755 52.3242 5.84661 50.0961L5.83203 49.5828V21.9766L33.3799 40.3428L33.7183 40.5353C34.117 40.7301 34.5549 40.8314 34.9987 40.8314C35.4425 40.8314 35.8804 40.7301 36.2791 40.5353L36.6174 40.3428L64.1654 21.9766Z"
                    fill="#F96F00"
                  />
                  <path
                    d="M55.4143 11.666C58.5643 11.666 61.3264 13.3285 62.8664 15.8281L34.9977 34.4073L7.12891 15.8281C7.86038 14.6405 8.86517 13.645 10.0595 12.9245C11.2538 12.2041 12.6031 11.7796 13.9947 11.6864L14.581 11.666H55.4143Z"
                    fill="#F96F00"
                  />
                </svg>
              </div>
              <h3>Email</h3>
              <p>info@yog-kulam.org</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-media">
            <div className="social-icon">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M7.99875 1.9925H9.09425V0.0845C8.90525 0.0585 8.25525 0 7.49825 0C5.91875 0 4.83675 0.9935 4.83675 2.8195V4.5H3.09375V6.633H4.83675V12H6.97375V6.6335H8.64625L8.91175 4.5005H6.97325V3.031C6.97375 2.4145 7.13975 1.9925 7.99875 1.9925Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="social-icon">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <g clipPath="url(#clip0_133_2362)">
                  <path
                    d="M9.481 0H3.51898C1.57858 0 0 1.57858 0 3.51898V9.4811C0 11.4214 1.57858 13 3.51898 13H9.4811C11.4214 13 13 11.4214 13 9.4811V3.51898C13 1.57858 11.4214 0 9.481 0V0ZM12.2379 9.4811C12.2379 11.0012 11.0012 12.2379 9.481 12.2379H3.51898C1.99881 12.2379 0.762114 11.0012 0.762114 9.4811V3.51898C0.762114 1.99881 1.99881 0.762114 3.51898 0.762114H9.4811C11.0012 0.762114 12.2379 1.99881 12.2379 3.51898V9.4811Z"
                    fill="black"
                  />
                  <path
                    d="M6.49989 2.94531C4.53986 2.94531 2.94531 4.53986 2.94531 6.49989C2.94531 8.45993 4.53986 10.0545 6.49989 10.0545C8.45993 10.0545 10.0545 8.45993 10.0545 6.49989C10.0545 4.53986 8.45993 2.94531 6.49989 2.94531ZM6.49989 9.29236C4.96019 9.29236 3.70743 8.03969 3.70743 6.49989C3.70743 4.96019 4.96019 3.70743 6.49989 3.70743C8.03969 3.70743 9.29236 4.96019 9.29236 6.49989C9.29236 8.03969 8.03969 9.29236 6.49989 9.29236Z"
                    fill="black"
                  />
                  <path
                    d="M10.1402 1.68359C9.56096 1.68359 9.08984 2.15481 9.08984 2.73393C9.08984 3.31315 9.56096 3.78437 10.1402 3.78437C10.7194 3.78437 11.1906 3.31315 11.1906 2.73393C11.1906 2.15471 10.7194 1.68359 10.1402 1.68359ZM10.1402 3.02215C9.98129 3.02215 9.85196 2.89282 9.85196 2.73393C9.85196 2.57494 9.98129 2.44571 10.1402 2.44571C10.2992 2.44571 10.4285 2.57494 10.4285 2.73393C10.4285 2.89282 10.2992 3.02215 10.1402 3.02215Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_133_2362">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="social-icon">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M13 2.46919C12.5166 2.68125 12.0014 2.82181 11.4644 2.89006C12.0169 2.56019 12.4386 2.04181 12.6368 1.417C12.1217 1.72412 11.5529 1.94106 10.9468 2.06213C10.4577 1.54131 9.76056 1.21875 9.00006 1.21875C7.52456 1.21875 6.33669 2.41638 6.33669 3.88456C6.33669 4.09581 6.35456 4.29894 6.39844 4.49231C4.18275 4.38425 2.22219 3.32231 0.905125 1.70463C0.675187 2.10356 0.540313 2.56019 0.540313 3.05175C0.540313 3.97475 1.01562 4.79294 1.72413 5.26662C1.29594 5.2585 0.875875 5.13419 0.52 4.93837C0.52 4.9465 0.52 4.95706 0.52 4.96762C0.52 6.26275 1.44381 7.3385 2.65525 7.58631C2.43831 7.64563 2.20187 7.67406 1.9565 7.67406C1.78587 7.67406 1.61362 7.66431 1.45194 7.62856C1.79725 8.684 2.77713 9.45994 3.94225 9.48512C3.0355 10.1944 1.88419 10.6218 0.637812 10.6218C0.41925 10.6218 0.209625 10.6121 0 10.5852C1.18056 11.3466 2.57969 11.7812 4.0885 11.7812C8.99275 11.7812 11.674 7.71875 11.674 4.19737C11.674 4.07956 11.6699 3.96581 11.6643 3.85287C12.1932 3.4775 12.6376 3.00869 13 2.46919Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="social-icon">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <g clipPath="url(#clip0_133_2376)">
                  <path
                    d="M10.9971 10.9993V10.9988H10.9998V6.96458C10.9998 4.99099 10.575 3.4707 8.26771 3.4707C7.15854 3.4707 6.41421 4.07937 6.11033 4.65641H6.07825V3.65495H3.89062V10.9988H6.16854V7.36241C6.16854 6.40495 6.35004 5.47912 7.53575 5.47912C8.70404 5.47912 8.72146 6.57179 8.72146 7.42383V10.9993H10.9971Z"
                    fill="black"
                  />
                  <path
                    d="M0.179688 3.65625H2.46035V11.0001H0.179688V3.65625Z"
                    fill="black"
                  />
                  <path
                    d="M1.32092 0C0.591708 0 0 0.591708 0 1.32092C0 2.05013 0.591708 2.65421 1.32092 2.65421C2.05013 2.65421 2.64183 2.05013 2.64183 1.32092C2.64138 0.591708 2.04967 0 1.32092 0V0Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_133_2376">
                    <rect width="11" height="11" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2 className="form-title">Say hello</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="8"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Get in touch
              </button>
            </form>
          </div>
        </div>

        {/* Decorative SVG Elements */}
        <svg
          className="decorative-svg-1"
          width="567"
          height="256"
          viewBox="0 0 568 258"
          fill="none"
        >
          <path
            d="M0 90.5832C28.934 66.4404 78.6557 31.1588 137.925 15.1579C205.5 -3.08543 322.663 -16.1217 371.172 58.1153C395.132 94.784 369.128 136.415 398 168.415C426.691 200.213 474.941 179.777 511.5 196.915C543.5 211.915 552 238.415 567 256.915"
            stroke="#E17A0E"
          />
        </svg>

        <svg
          className="decorative-svg-2"
          width="1048"
          height="265"
          viewBox="0 0 1048 267"
          fill="none"
        >
          <path
            d="M1 1C29.4186 32.5504 103.606 94.1487 173.008 88.1391C259.759 80.6271 319 56 393.377 79.1247C439.677 93.5199 435.257 138.219 477.137 170.771C519.017 203.323 701.495 124.197 701.495 124.197C701.495 124.197 830.127 66.6047 842.591 124.197C855.055 181.789 803.702 250.398 827.135 264.421C845.881 275.638 982.856 224.357 1049 197.313"
            stroke="#E17A0E"
          />
        </svg>
      </section>

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

export default Contact;
