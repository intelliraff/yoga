import React, { useState } from "react";
import "./Gallery.css";

import G1 from "./assets/G1.png";
import G2 from "./assets/G2.png";
import G3 from "./assets/G3.png";
import G4 from "./assets/G4.png";
import G5 from "./assets/G5.png";
import G6 from "./assets/G6.png";
import G7 from "./assets/G7.png";
import G8 from "./assets/G8.png";
import G9 from "./assets/G9.png";
import G10 from "./assets/G10.png";
import G11 from "./assets/G11.png";
import G12 from "./assets/G12.png";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const milestones = [
    {
      year: "2013",
      text: "2013 Hyde Park (Central London) First Yoga session in public by Hindu Swayamsevak Sangh UK.",
    },
    {
      year: "2014",
      text: "2014, 21st June - International Yoga Day (IYD) started by Shri Narendra Modi, 193 Countries agreed to participate",
    },
    {
      year: "2016",
      text: "2016 (IYD) took place at Shaard 82 floor 5 AM",
    },
    {
      year: "2017",
      text: "2017 (IYD) took place at Trafalgar Square",
    },
    {
      year: "2018",
      text: "2018 First Research paper was presented",
    },
  ];

  const galleryItems = [
    {
      id: 1,
      image:
        G1,
      title: "Youtube Link",
      category: "video",
    },
    {
      id: 2,
      image:
        G2,
      title: "Youtube Link",
      category: "video",
    },
    {
      id: 3,
      image:
        G3,
      title: "Youtube Link",
      category: "video",
    },
    {
      id: 4,
      image:
        G4,
      title: "Youtube Link",
      category: "video",
    },
    {
      id: 5,
      image:
        G5,
      title: "Suryanamaskar",
      category: "practice",
    },
    {
      id: 6,
      image:
        G6,
      title: "Yoga Ashan",
      category: "practice",
    },
    {
      id: 7,
      image:
        G7,
      title: "Hyde Park",
      category: "location",
    },
    {
      id: 8,
      image:
        G8,
      title: "Hyde Park",
      category: "location",
    },
    {
      id: 9,
      image:
        G9,
      title: "Tower Bridge",
      category: "location",
    },
    {
      id: 10,
      image:
        G10,
      title: "Shard",
      category: "location",
    },
    {
      id: 11,
      image:
        G11,
      title: "Woolwich",
      category: "location",
    },
    {
      id: 12,
      image:
        G12,
      title: "Tarafalgar Square",
      category: "location",
    },
  ];

  const handleImageView = (item) => {
    setSelectedImage(item);
  };

  const handleImageExpand = (item) => {
    // Open image in new tab or modal
    window.open(item.image, "_blank");
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className="hero-title">Important Milestones in the past</h1>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="milestones-section">
        <div className="container">
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`milestone-card milestone-${index + 1}`}
              >
                <p className="milestone-text">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                  />

                  {/* YouTube Play Button for video items */}
                  {item.category === "video" && (
                    <div className="youtube-overlay">
                      <svg
                        className="youtube-icon"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="50" fill="#FF0000" />
                        <polygon points="35,25 35,75 75,50" fill="white" />
                      </svg>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="gallery-actions">
                    <button
                      className="action-btn view-btn"
                      onClick={() => handleImageView(item)}
                      aria-label="View image"
                    >
                      <svg
                        width="26"
                        height="18"
                        viewBox="0 0 26 18"
                        fill="none"
                      >
                        <path
                          d="M13 0C7.363 0 2.555 3.445 0 8.5C2.555 13.555 7.363 17 13 17C18.637 17 23.445 13.555 26 8.5C23.445 3.445 18.637 0 13 0ZM13 14.167C9.596 14.167 6.833 11.404 6.833 8C6.833 4.596 9.596 1.833 13 1.833C16.404 1.833 19.167 4.596 19.167 8C19.167 11.404 16.404 14.167 13 14.167ZM13 3.5C10.513 3.5 8.5 5.513 8.5 8C8.5 10.487 10.513 12.5 13 12.5C15.487 12.5 17.5 10.487 17.5 8C17.5 5.513 15.487 3.5 13 3.5Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button
                      className="action-btn expand-btn"
                      onClick={() => handleImageExpand(item)}
                      aria-label="Expand image"
                    >
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                      >
                        <path d="M19 8H14V13H12V8H7L13 2L19 8Z" fill="black" />
                        <path d="M1 8H6V13H8V8H13L7 2L1 8Z" fill="black" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="gallery-item-footer">
                  <h3 className="gallery-item-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

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

export default Gallery;
