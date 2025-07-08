import { useState } from "react";
import "./Upcoming.css";

const Upcoming = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Sunrise Yoga Session",
      image:
        "https://media.istockphoto.com/id/1205575762/photo/upcoming-events.webp?a=1&b=1&s=612x612&w=0&k=20&c=8w9FLqnZmBLWHp272Id4vh_2ZXTXBgUiA7R192Muz2o=",
      date: "March 25, 2024",
      time: "6:00 AM - 7:30 AM",
      location: "Beachfront Park",
      description:
        "Start your day with energizing yoga as the sun rises over the horizon.",
    },
    {
      id: 2,
      title: "Meditation Workshop",
      image:
        "https://media.istockphoto.com/id/1205575762/photo/upcoming-events.webp?a=1&b=1&s=612x612&w=0&k=20&c=8w9FLqnZmBLWHp272Id4vh_2ZXTXBgUiA7R192Muz2o=",
      date: "March 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Yoga Studio Downtown",
      description:
        "Deep meditation techniques for inner peace and mindfulness.",
    },
    {
      id: 3,
      title: "Family Yoga Day",
      image:
        "https://media.istockphoto.com/id/1205575762/photo/upcoming-events.webp?a=1&b=1&s=612x612&w=0&k=20&c=8w9FLqnZmBLWHp272Id4vh_2ZXTXBgUiA7R192Muz2o=",
      date: "April 2, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      description:
        "Bring the whole family for a fun and relaxing yoga experience together.",
    },
    {
      id: 4,
      title: "Advanced Asana Practice",
      image:
        "https://media.istockphoto.com/id/1205575762/photo/upcoming-events.webp?a=1&b=1&s=612x612&w=0&k=20&c=8w9FLqnZmBLWHp272Id4vh_2ZXTXBgUiA7R192Muz2o=",
      date: "April 5, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Rooftop Studio",
      description:
        "Challenge yourself with advanced yoga poses and techniques.",
    },
  ];

  const handleViewDetails = (eventId) => {
    console.log(`Viewing details for event ${eventId}`);
    // Add modal or navigation logic here
  };

  const handleExpand = (eventId) => {
    console.log(`Expanding event ${eventId}`);
    // Add expand functionality here
  };

  return (
    <div className="upcoming-page">
      <div className="container">
        <h1 className="page-title">Upcoming Events</h1>

        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="event-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <div className="event-actions">
                  <button
                    className="action-btn view-btn"
                    onClick={() => handleViewDetails(event.id)}
                    title="View Details"
                  >
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
                      <path
                        d="M13 0C7.5 0 2.73 3.11 0 7.5C2.73 11.89 7.5 15 13 15C18.5 15 23.27 11.89 26 7.5C23.27 3.11 18.5 0 13 0ZM13 12.5C10.24 12.5 8 10.26 8 7.5C8 4.74 10.24 2.5 13 2.5C15.76 2.5 18 4.74 18 7.5C18 10.26 15.76 12.5 13 12.5ZM13 4.5C11.34 4.5 10 5.84 10 7.5C10 9.16 11.34 10.5 13 10.5C14.66 10.5 16 9.16 16 7.5C16 5.84 14.66 4.5 13 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    className="action-btn expand-btn"
                    onClick={() => handleExpand(event.id)}
                    title="Expand"
                  >
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
                      <path d="M10 15L0 0L20 0L10 15Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="event-info">
                <h3 className="event-title">Upcoming Events</h3>

                {hoveredCard === event.id && (
                  <div className="event-details">
                    <h4>{event.title}</h4>
                    <div className="event-meta">
                      <p>
                        <strong>Date:</strong> {event.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {event.time}
                      </p>
                      <p>
                        <strong>Location:</strong> {event.location}
                      </p>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <button className="register-btn">Register Now</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Events Section */}
        <section className="additional-events">
          <h2>More Upcoming Events</h2>
          <div className="events-list">
            <div className="event-item">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">Apr</span>
              </div>
              <div className="event-content">
                <h3>Pranayama Workshop</h3>
                <p>
                  Learn advanced breathing techniques for better health and
                  vitality.
                </p>
                <span className="event-time">2:00 PM - 4:00 PM</span>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">Apr</span>
              </div>
              <div className="event-content">
                <h3>Yoga Teacher Training Info Session</h3>
                <p>
                  Discover our comprehensive 200-hour teacher training program.
                </p>
                <span className="event-time">6:00 PM - 8:00 PM</span>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="day">30</span>
                <span className="month">Apr</span>
              </div>
              <div className="event-content">
                <h3>Outdoor Yoga Retreat</h3>
                <p>
                  A full-day retreat combining yoga, meditation, and nature
                  connection.
                </p>
                <span className="event-time">9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="events-cta">
          <div className="cta-content">
            <h2>Don't Miss Out!</h2>
            <p>
              Stay updated with our latest events and workshops. Join our
              community today.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                Subscribe to Updates
              </button>
              <button className="cta-button secondary">View All Events</button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Yog-Kulam</h4>
              <p>
                Yoga means Union; Kulam means centre of education and
                excellence, like Guru-Kulam.
              </p>
            </div>

            <div className="footer-section">
              <h4>Useful</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Why Yog-Kulam</li>
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
                <input type="email" placeholder="Yog-Kulam" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Upcoming;
