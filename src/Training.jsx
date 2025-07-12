import "./Training.css";

import mind from "./assets/mind.png";
import deepsleep from "./assets/deepsle.png";
import sunsal from "./assets/sunsal.png";
import yogastress from "./assets/stress.png";
import moonfull from "./assets/moonfull.png";
import jub from "./assets/j-u-b.png";

const Training = () => {
  return (
    <div className="training-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Explore Our Yoga Courses</h1>
          <p className="hero-description">
            Discover a transformative blend of self-paced and live yoga courses
            designed to nurture your mind, strengthen your body, and uplift your
            soul. Whether you prefer the flexibility of learning at your own
            pace or the connection of live instructor-led sessions, our diverse
            offerings empower you to grow on your own terms—physically,
            mentally, and spiritually.
          </p>
          <br></br>
          <button className="find-course-btn">Find Your Course</button>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-bar">
            <svg
              className="search-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#828282"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.9984 21.0004L16.6484 16.6504"
                stroke="#828282"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="featured-image-section">
        <div className="featured-image-container">
          <img
            /*src="https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWluZGZ1bCUyMG1vcm5pbmclMjB5b2dhfGVufDB8fDB8fHww"*/
            src={jub}
            alt="Yoga pose meditation"
            className="featured-image"
          />
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="courses-section">
        <div className="courses-container">
          <div className="courses-grid">
            {/* Course Card 1 */}
            <div className="course-card">
              <div className="course-image-wrapper">
                <img
                  /*src="https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWluZGZ1bCUyMG1vcm5pbmclMjB5b2dhfGVufDB8fDB8fHww"*/
                  src={mind}
                  alt="Mindful Morning Yoga"
                  className="course-image"
                />
                <span className="level-badge beginner">Beginner</span>
              </div>
              <div className="course-content">
                <div className="course-icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#F25C26" />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      fill="#F25C26"
                    />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      fill="#F25C26"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      fill="#F25C26"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0022 13.2428C19.6131 13.2428 20.1988 13.0001 20.6307 12.5682C21.0626 12.1363 21.3053 11.5506 21.3053 10.9397C21.3053 10.3289 21.0626 9.74316 20.6307 9.31126C20.1988 8.87936 19.6131 8.63672 19.0022 8.63672C18.3914 8.63672 17.8057 8.87936 17.3738 9.31126C16.9419 9.74316 16.6992 10.3289 16.6992 10.9397C16.6992 11.5506 16.9419 12.1363 17.3738 12.5682C17.8057 13.0001 18.3914 13.2428 19.0022 13.2428Z"
                      fill="#F25C26"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="course-title">Mindful Morning Yoga</h3>
                <div className="course-meta">
                  <div className="course-info">
                    <svg
                      className="time-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M38 19C38 24.0391 35.9982 28.8718 32.435 32.435C28.8718 35.9982 24.0391 38 19 38C13.9609 38 9.12816 35.9982 5.56497 32.435C2.00178 28.8718 0 24.0391 0 19C0 13.9609 2.00178 9.12816 5.56497 5.56497C9.12816 2.00178 13.9609 0 19 0C24.0391 0 28.8718 2.00178 32.435 5.56497C35.9982 9.12816 38 13.9609 38 19ZM19 8.3125C19 7.99756 18.8749 7.69551 18.6522 7.47281C18.4295 7.25011 18.1274 7.125 17.8125 7.125C17.4976 7.125 17.1955 7.25011 16.9728 7.47281C16.7501 7.69551 16.625 7.99756 16.625 8.3125V21.375C16.6251 21.5843 16.6805 21.7899 16.7856 21.9709C16.8907 22.1519 17.0417 22.3019 17.2235 22.4058L25.536 27.1558C25.8088 27.3032 26.1284 27.3381 26.4266 27.2529C26.7248 27.1678 26.9778 26.9694 27.1316 26.7002C27.2855 26.431 27.3279 26.1123 27.2499 25.8122C27.1718 25.5121 26.9795 25.2544 26.714 25.0942L19 20.6863V8.3125Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>30 mins/day for 14 days</span>
                  </div>
                  <div className="instructor-info">
                    <svg
                      className="instructor-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0013 3.16699C21.0805 3.16698 23.1395 3.57652 25.0604 4.37221C26.9814 5.1679 28.7269 6.33418 30.1972 7.80443C31.6674 9.27469 32.8337 11.0201 33.6294 12.9411C34.4251 14.8621 34.8347 16.921 34.8347 19.0003C34.8347 27.7448 27.7458 34.8337 19.0013 34.8337C10.2568 34.8337 3.16797 27.7448 3.16797 19.0003C3.16797 10.2558 10.2568 3.16699 19.0013 3.16699ZM20.5847 20.5837H17.418C13.4981 20.5837 10.1328 22.9577 8.68131 26.3466C10.9779 29.567 14.7444 31.667 19.0013 31.667C23.2582 31.667 27.0246 29.567 29.3213 26.3464C27.8698 22.9577 24.5045 20.5837 20.5847 20.5837ZM19.0013 7.91699C16.3779 7.91699 14.2513 10.0437 14.2513 12.667C14.2513 15.2903 16.3779 17.417 19.0013 17.417C21.6246 17.417 23.7513 15.2903 23.7513 12.667C23.7513 10.0437 21.6247 7.91699 19.0013 7.91699Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>Rishi Anant</span>
                  </div>
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="course-card">
              <div className="course-image-wrapper">
                <img
                  /*src="https://images.unsplash.com/photo-1723406251893-88cfd80c566b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVlcCUyMHNsZWVwJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"*/
                  src={deepsleep}
                  alt="Deep Sleep Yoga Nidra"
                  className="course-image"
                />
                <span className="level-badge all-levels">All Levels</span>
              </div>
              <div className="course-content">
                <div className="course-icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#F25C26" />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      fill="#F25C26"
                    />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      fill="#F25C26"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      fill="#F25C26"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0022 13.2428C19.6131 13.2428 20.1988 13.0001 20.6307 12.5682C21.0626 12.1363 21.3053 11.5506 21.3053 10.9397C21.3053 10.3289 21.0626 9.74316 20.6307 9.31126C20.1988 8.87936 19.6131 8.63672 19.0022 8.63672C18.3914 8.63672 17.8057 8.87936 17.3738 9.31126C16.9419 9.74316 16.6992 10.3289 16.6992 10.9397C16.6992 11.5506 16.9419 12.1363 17.3738 12.5682C17.8057 13.0001 18.3914 13.2428 19.0022 13.2428Z"
                      fill="#F25C26"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="course-title">Deep Sleep Yoga Nidra</h3>
                <div className="course-meta">
                  <div className="course-info">
                    <svg
                      className="time-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M38 19C38 24.0391 35.9982 28.8718 32.435 32.435C28.8718 35.9982 24.0391 38 19 38C13.9609 38 9.12816 35.9982 5.56497 32.435C2.00178 28.8718 0 24.0391 0 19C0 13.9609 2.00178 9.12816 5.56497 5.56497C9.12816 2.00178 13.9609 0 19 0C24.0391 0 28.8718 2.00178 32.435 5.56497C35.9982 9.12816 38 13.9609 38 19ZM19 8.3125C19 7.99756 18.8749 7.69551 18.6522 7.47281C18.4295 7.25011 18.1274 7.125 17.8125 7.125C17.4976 7.125 17.1955 7.25011 16.9728 7.47281C16.7501 7.69551 16.625 7.99756 16.625 8.3125V21.375C16.6251 21.5843 16.6805 21.7899 16.7856 21.9709C16.8907 22.1519 17.0417 22.3019 17.2235 22.4058L25.536 27.1558C25.8088 27.3032 26.1284 27.3381 26.4266 27.2529C26.7248 27.1678 26.9778 26.9694 27.1316 26.7002C27.2855 26.431 27.3279 26.1123 27.2499 25.8122C27.1718 25.5121 26.9795 25.2544 26.714 25.0942L19 20.6863V8.3125Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>20 mins/day for 10 days</span>
                  </div>
                  <div className="instructor-info">
                    <svg
                      className="instructor-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0013 3.16699C21.0805 3.16698 23.1395 3.57652 25.0604 4.37221C26.9814 5.1679 28.7269 6.33418 30.1972 7.80443C31.6674 9.27469 32.8337 11.0201 33.6294 12.9411C34.4251 14.8621 34.8347 16.921 34.8347 19.0003C34.8347 27.7448 27.7458 34.8337 19.0013 34.8337C10.2568 34.8337 3.16797 27.7448 3.16797 19.0003C3.16797 10.2558 10.2568 3.16699 19.0013 3.16699ZM20.5847 20.5837H17.418C13.4981 20.5837 10.1328 22.9577 8.68131 26.3466C10.9779 29.567 14.7444 31.667 19.0013 31.667C23.2582 31.667 27.0246 29.567 29.3213 26.3464C27.8698 22.9577 24.5045 20.5837 20.5847 20.5837ZM19.0013 7.91699C16.3779 7.91699 14.2513 10.0437 14.2513 12.667C14.2513 15.2903 16.3779 17.417 19.0013 17.417C21.6246 17.417 23.7513 15.2903 23.7513 12.667C23.7513 10.0437 21.6247 7.91699 19.0013 7.91699Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>Meera Devi</span>
                  </div>
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="course-card">
              <div className="course-image-wrapper">
                <img
                  /*src="https://plus.unsplash.com/premium_photo-1710516483702-ff9edaf2f7f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VuJTIwc2FsdXRhdGlvbiUyMG1hc3Rlcnl8ZW58MHx8MHx8fDA%3D"*/
                  src={sunsal}
                  alt="Sun Salutation Mastery"
                  className="course-image"
                />
                <span className="level-badge intermediate">Intermediate</span>
              </div>
              <div className="course-content">
                <div className="course-icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#F25C26" />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      fill="#F25C26"
                    />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      fill="#F25C26"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      fill="#F25C26"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0022 13.2428C19.6131 13.2428 20.1988 13.0001 20.6307 12.5682C21.0626 12.1363 21.3053 11.5506 21.3053 10.9397C21.3053 10.3289 21.0626 9.74316 20.6307 9.31126C20.1988 8.87936 19.6131 8.63672 19.0022 8.63672C18.3914 8.63672 17.8057 8.87936 17.3738 9.31126C16.9419 9.74316 16.6992 10.3289 16.6992 10.9397C16.6992 11.5506 16.9419 12.1363 17.3738 12.5682C17.8057 13.0001 18.3914 13.2428 19.0022 13.2428Z"
                      fill="#F25C26"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="course-title">Sun Salutation Mastery</h3>
                <div className="course-meta">
                  <div className="course-info">
                    <svg
                      className="time-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M38 19C38 24.0391 35.9982 28.8718 32.435 32.435C28.8718 35.9982 24.0391 38 19 38C13.9609 38 9.12816 35.9982 5.56497 32.435C2.00178 28.8718 0 24.0391 0 19C0 13.9609 2.00178 9.12816 5.56497 5.56497C9.12816 2.00178 13.9609 0 19 0C24.0391 0 28.8718 2.00178 32.435 5.56497C35.9982 9.12816 38 13.9609 38 19ZM19 8.3125C19 7.99756 18.8749 7.69551 18.6522 7.47281C18.4295 7.25011 18.1274 7.125 17.8125 7.125C17.4976 7.125 17.1955 7.25011 16.9728 7.47281C16.7501 7.69551 16.625 7.99756 16.625 8.3125V21.375C16.6251 21.5843 16.6805 21.7899 16.7856 21.9709C16.8907 22.1519 17.0417 22.3019 17.2235 22.4058L25.536 27.1558C25.8088 27.3032 26.1284 27.3381 26.4266 27.2529C26.7248 27.1678 26.9778 26.9694 27.1316 26.7002C27.2855 26.431 27.3279 26.1123 27.2499 25.8122C27.1718 25.5121 26.9795 25.2544 26.714 25.0942L19 20.6863V8.3125Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>45 mins/day for 7 days</span>
                  </div>
                  <div className="instructor-info">
                    <svg
                      className="instructor-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0013 3.16699C21.0805 3.16698 23.1395 3.57652 25.0604 4.37221C26.9814 5.1679 28.7269 6.33418 30.1972 7.80443C31.6674 9.27469 32.8337 11.0201 33.6294 12.9411C34.4251 14.8621 34.8347 16.921 34.8347 19.0003C34.8347 27.7448 27.7458 34.8337 19.0013 34.8337C10.2568 34.8337 3.16797 27.7448 3.16797 19.0003C3.16797 10.2558 10.2568 3.16699 19.0013 3.16699ZM20.5847 20.5837H17.418C13.4981 20.5837 10.1328 22.9577 8.68131 26.3466C10.9779 29.567 14.7444 31.667 19.0013 31.667C23.2582 31.667 27.0246 29.567 29.3213 26.3464C27.8698 22.9577 24.5045 20.5837 20.5847 20.5837ZM19.0013 7.91699C16.3779 7.91699 14.2513 10.0437 14.2513 12.667C14.2513 15.2903 16.3779 17.417 19.0013 17.417C21.6246 17.417 23.7513 15.2903 23.7513 12.667C23.7513 10.0437 21.6247 7.91699 19.0013 7.91699Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>Arjun Bhatt</span>
                  </div>
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>

            {/* Course Card 4 */}
            <div className="course-card">
              <div className="course-image-wrapper">
                <img
                  /*src="https://images.unsplash.com/photo-1630225760711-ac8eaa0c8947?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2ElMjBmb3IlMjBzdHJlc3MlMjByZWxpZWZ8ZW58MHx8MHx8fDA%3D"*/
                  src={yogastress}
                  alt="Yoga for Stress Relief"
                  className="course-image"
                />
                <span className="level-badge beginner">Beginner</span>
              </div>
              <div className="course-content">
                <div className="course-icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#F25C26" />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      fill="#F25C26"
                    />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      fill="#F25C26"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      fill="#F25C26"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0022 13.2428C19.6131 13.2428 20.1988 13.0001 20.6307 12.5682C21.0626 12.1363 21.3053 11.5506 21.3053 10.9397C21.3053 10.3289 21.0626 9.74316 20.6307 9.31126C20.1988 8.87936 19.6131 8.63672 19.0022 8.63672C18.3914 8.63672 17.8057 8.87936 17.3738 9.31126C16.9419 9.74316 16.6992 10.3289 16.6992 10.9397C16.6992 11.5506 16.9419 12.1363 17.3738 12.5682C17.8057 13.0001 18.3914 13.2428 19.0022 13.2428Z"
                      fill="#F25C26"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="course-title">Yoga for Stress Relief</h3>
                <div className="course-meta">
                  <div className="course-info">
                    <svg
                      className="time-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M38 19C38 24.0391 35.9982 28.8718 32.435 32.435C28.8718 35.9982 24.0391 38 19 38C13.9609 38 9.12816 35.9982 5.56497 32.435C2.00178 28.8718 0 24.0391 0 19C0 13.9609 2.00178 9.12816 5.56497 5.56497C9.12816 2.00178 13.9609 0 19 0C24.0391 0 28.8718 2.00178 32.435 5.56497C35.9982 9.12816 38 13.9609 38 19ZM19 8.3125C19 7.99756 18.8749 7.69551 18.6522 7.47281C18.4295 7.25011 18.1274 7.125 17.8125 7.125C17.4976 7.125 17.1955 7.25011 16.9728 7.47281C16.7501 7.69551 16.625 7.99756 16.625 8.3125V21.375C16.6251 21.5843 16.6805 21.7899 16.7856 21.9709C16.8907 22.1519 17.0417 22.3019 17.2235 22.4058L25.536 27.1558C25.8088 27.3032 26.1284 27.3381 26.4266 27.2529C26.7248 27.1678 26.9778 26.9694 27.1316 26.7002C27.2855 26.431 27.3279 26.1123 27.2499 25.8122C27.1718 25.5121 26.9795 25.2544 26.714 25.0942L19 20.6863V8.3125Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>30 mins/day for 21 days</span>
                  </div>
                  <div className="instructor-info">
                    <svg
                      className="instructor-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0013 3.16699C21.0805 3.16698 23.1395 3.57652 25.0604 4.37221C26.9814 5.1679 28.7269 6.33418 30.1972 7.80443C31.6674 9.27469 32.8337 11.0201 33.6294 12.9411C34.4251 14.8621 34.8347 16.921 34.8347 19.0003C34.8347 27.7448 27.7458 34.8337 19.0013 34.8337C10.2568 34.8337 3.16797 27.7448 3.16797 19.0003C3.16797 10.2558 10.2568 3.16699 19.0013 3.16699ZM20.5847 20.5837H17.418C13.4981 20.5837 10.1328 22.9577 8.68131 26.3466C10.9779 29.567 14.7444 31.667 19.0013 31.667C23.2582 31.667 27.0246 29.567 29.3213 26.3464C27.8698 22.9577 24.5045 20.5837 20.5847 20.5837ZM19.0013 7.91699C16.3779 7.91699 14.2513 10.0437 14.2513 12.667C14.2513 15.2903 16.3779 17.417 19.0013 17.417C21.6246 17.417 23.7513 15.2903 23.7513 12.667C23.7513 10.0437 21.6247 7.91699 19.0013 7.91699Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>Anaya Joshi</span>
                  </div>
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>

            {/* Course Card 5 */}
            <div className="course-card">
              <div className="course-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1640262653851-103cbaf802d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG93ZXIlMjB5b2dhJTIwZm9yJTIwc3RyZW5ndGh8ZW58MHx8MHx8fDA%3D"
                  alt="Power Yoga for Strength"
                  className="course-image"
                />
                <span className="level-badge advanced">Advanced</span>
              </div>
              <div className="course-content">
                <div className="course-icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#F25C26" />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      fill="#F25C26"
                    />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      fill="#F25C26"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      fill="#F25C26"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0022 13.2428C19.6131 13.2428 20.1988 13.0001 20.6307 12.5682C21.0626 12.1363 21.3053 11.5506 21.3053 10.9397C21.3053 10.3289 21.0626 9.74316 20.6307 9.31126C20.1988 8.87936 19.6131 8.63672 19.0022 8.63672C18.3914 8.63672 17.8057 8.87936 17.3738 9.31126C16.9419 9.74316 16.6992 10.3289 16.6992 10.9397C16.6992 11.5506 16.9419 12.1363 17.3738 12.5682C17.8057 13.0001 18.3914 13.2428 19.0022 13.2428Z"
                      fill="#F25C26"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="course-title">Power Yoga for Strength</h3>
                <div className="course-meta">
                  <div className="course-info">
                    <svg
                      className="time-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M38 19C38 24.0391 35.9982 28.8718 32.435 32.435C28.8718 35.9982 24.0391 38 19 38C13.9609 38 9.12816 35.9982 5.56497 32.435C2.00178 28.8718 0 24.0391 0 19C0 13.9609 2.00178 9.12816 5.56497 5.56497C9.12816 2.00178 13.9609 0 19 0C24.0391 0 28.8718 2.00178 32.435 5.56497C35.9982 9.12816 38 13.9609 38 19ZM19 8.3125C19 7.99756 18.8749 7.69551 18.6522 7.47281C18.4295 7.25011 18.1274 7.125 17.8125 7.125C17.4976 7.125 17.1955 7.25011 16.9728 7.47281C16.7501 7.69551 16.625 7.99756 16.625 8.3125V21.375C16.6251 21.5843 16.6805 21.7899 16.7856 21.9709C16.8907 22.1519 17.0417 22.3019 17.2235 22.4058L25.536 27.1558C25.8088 27.3032 26.1284 27.3381 26.4266 27.2529C26.7248 27.1678 26.9778 26.9694 27.1316 26.7002C27.2855 26.431 27.3279 26.1123 27.2499 25.8122C27.1718 25.5121 26.9795 25.2544 26.714 25.0942L19 20.6863V8.3125Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>40 mins/day for 15 days</span>
                  </div>
                  <div className="instructor-info">
                    <svg
                      className="instructor-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0013 3.16699C21.0805 3.16698 23.1395 3.57652 25.0604 4.37221C26.9814 5.1679 28.7269 6.33418 30.1972 7.80443C31.6674 9.27469 32.8337 11.0201 33.6294 12.9411C34.4251 14.8621 34.8347 16.921 34.8347 19.0003C34.8347 27.7448 27.7458 34.8337 19.0013 34.8337C10.2568 34.8337 3.16797 27.7448 3.16797 19.0003C3.16797 10.2558 10.2568 3.16699 19.0013 3.16699ZM20.5847 20.5837H17.418C13.4981 20.5837 10.1328 22.9577 8.68131 26.3466C10.9779 29.567 14.7444 31.667 19.0013 31.667C23.2582 31.667 27.0246 29.567 29.3213 26.3464C27.8698 22.9577 24.5045 20.5837 20.5847 20.5837ZM19.0013 7.91699C16.3779 7.91699 14.2513 10.0437 14.2513 12.667C14.2513 15.2903 16.3779 17.417 19.0013 17.417C21.6246 17.417 23.7513 15.2903 23.7513 12.667C23.7513 10.0437 21.6247 7.91699 19.0013 7.91699Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>Kabir Singh</span>
                  </div>
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>

            {/* Course Card 6 */}
            <div className="course-card">
              <div className="course-image-wrapper">
                <img
                  src={moonfull}
                  alt="Full Moon Meditation"
                  className="course-image"
                />
                <span className="level-badge all-levels">All Levels</span>
              </div>
              <div className="course-content">
                <div className="course-icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#F25C26" />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      fill="#F25C26"
                    />
                    <path
                      d="M21.9624 22.46L22.9504 24.5845C22.9504 24.5845 27.3918 25.5276 27.3918 27.7707C27.3918 29.3644 25.4158 29.3644 25.4158 29.3644H20.1534L17.5625 27.9251"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      fill="#F25C26"
                    />
                    <path
                      d="M16.0388 22.46L15.0519 24.5845C15.0519 24.5845 10.6094 25.5276 10.6094 27.7707C10.6094 29.3644 12.5854 29.3644 12.5854 29.3644H14.969L17.5599 27.9251L20.7266 25.9099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      fill="#F25C26"
                    />
                    <path
                      d="M8.63672 23.5215C8.63672 23.5215 11.1044 22.9907 12.5853 22.4598C14.065 15.0233 18.5052 15.5542 19.0004 15.5542C19.4944 15.5542 23.9357 15.0233 25.4154 22.4598C26.8963 22.9895 29.364 23.5215 29.364 23.5215"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0022 13.2428C19.6131 13.2428 20.1988 13.0001 20.6307 12.5682C21.0626 12.1363 21.3053 11.5506 21.3053 10.9397C21.3053 10.3289 21.0626 9.74316 20.6307 9.31126C20.1988 8.87936 19.6131 8.63672 19.0022 8.63672C18.3914 8.63672 17.8057 8.87936 17.3738 9.31126C16.9419 9.74316 16.6992 10.3289 16.6992 10.9397C16.6992 11.5506 16.9419 12.1363 17.3738 12.5682C17.8057 13.0001 18.3914 13.2428 19.0022 13.2428Z"
                      fill="#F25C26"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="course-title">Full Moon Meditation</h3>
                <div className="course-meta">
                  <div className="course-info">
                    <svg
                      className="time-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M38 19C38 24.0391 35.9982 28.8718 32.435 32.435C28.8718 35.9982 24.0391 38 19 38C13.9609 38 9.12816 35.9982 5.56497 32.435C2.00178 28.8718 0 24.0391 0 19C0 13.9609 2.00178 9.12816 5.56497 5.56497C9.12816 2.00178 13.9609 0 19 0C24.0391 0 28.8718 2.00178 32.435 5.56497C35.9982 9.12816 38 13.9609 38 19ZM19 8.3125C19 7.99756 18.8749 7.69551 18.6522 7.47281C18.4295 7.25011 18.1274 7.125 17.8125 7.125C17.4976 7.125 17.1955 7.25011 16.9728 7.47281C16.7501 7.69551 16.625 7.99756 16.625 8.3125V21.375C16.6251 21.5843 16.6805 21.7899 16.7856 21.9709C16.8907 22.1519 17.0417 22.3019 17.2235 22.4058L25.536 27.1558C25.8088 27.3032 26.1284 27.3381 26.4266 27.2529C26.7248 27.1678 26.9778 26.9694 27.1316 26.7002C27.2855 26.431 27.3279 26.1123 27.2499 25.8122C27.1718 25.5121 26.9795 25.2544 26.714 25.0942L19 20.6863V8.3125Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>1-hour sessions during each full moon</span>
                  </div>
                  <div className="instructor-info">
                    <svg
                      className="instructor-icon"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0013 3.16699C21.0805 3.16698 23.1395 3.57652 25.0604 4.37221C26.9814 5.1679 28.7269 6.33418 30.1972 7.80443C31.6674 9.27469 32.8337 11.0201 33.6294 12.9411C34.4251 14.8621 34.8347 16.921 34.8347 19.0003C34.8347 27.7448 27.7458 34.8337 19.0013 34.8337C10.2568 34.8337 3.16797 27.7448 3.16797 19.0003C3.16797 10.2558 10.2568 3.16699 19.0013 3.16699ZM20.5847 20.5837H17.418C13.4981 20.5837 10.1328 22.9577 8.68131 26.3466C10.9779 29.567 14.7444 31.667 19.0013 31.667C23.2582 31.667 27.0246 29.567 29.3213 26.3464C27.8698 22.9577 24.5045 20.5837 20.5847 20.5837ZM19.0013 7.91699C16.3779 7.91699 14.2513 10.0437 14.2513 12.667C14.2513 15.2903 16.3779 17.417 19.0013 17.417C21.6246 17.417 23.7513 15.2903 23.7513 12.667C23.7513 10.0437 21.6247 7.91699 19.0013 7.91699Z"
                        fill="#F25C26"
                      />
                    </svg>
                    <span>Tara Menon</span>
                  </div>
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready for your next step in the journey?
          </h2>
          <button className="contact-us-btn">Contact Us</button>
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

export default Training;
