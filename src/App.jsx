import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import Training from "./Training";
import Registration from "./Registration";
import Upcoming from "./Upcoming";
import Contact from "./Contact";
import Donation from "./Donation";
import Gallery from "./Gallery";
import yogaHero from './assets/yoga-hero-bg.png';
import dannam from './assets/dannam.png';

import logo from './assets/logo.png';
import apply from "./assets/apply.png";
import pose1 from "./assets/pose-1.png";
import pose2 from "./assets/pose-2.png";
import pose3 from "./assets/pose-3.png";
import pose4 from "./assets/pose-4.png";
import pose5 from "./assets/pose-5.png";

import "./App.css";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  
  const location = useLocation();

  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const textt1 =useRef(null);

  // Clear previous refs to avoid duplication on re-renders
  navLinksRef.current = [];

  const addToNavLinksRef = (el) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animate logo
    gsap.fromTo(
      logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate nav links with stagger
    gsap.fromTo(
      navLinksRef.current,
      { y:-30,  opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1
      }
    );
    if(textt1.current){
      gsap.fromTo(
        textt1.current,
        { y:-30,  opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          
          }
      );
    }    

  }, []);

  

  return (
    <div className="yoga-website">
      
      <nav className="navigation">
        <div className="nav-container">
        <div className="logo">
        <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>

            <img
              src={logo}
              ref={logoRef}
      
              alt="Yoga Logo"
              className="logo-image"
              
            />
              </Link>
            
          </div>
          <div className="nav-links">
            <Link
              to="/"
              ref={addToNavLinksRef}
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/training"
              ref={addToNavLinksRef}
              className={`nav-link ${location.pathname === "/training" ? "active" : ""}`}
            >
              Training
            </Link>
            <Link
              to="/registration"
              ref={addToNavLinksRef}
              className={`nav-link ${location.pathname === "/registration" ? "active" : ""}`}
            >
              Registration-Form
            </Link>
            <a href="#" ref={addToNavLinksRef} className="nav-link">
              Moodle
            </a>
            <Link
              to="/upcoming"
              ref={addToNavLinksRef}
              className={`nav-link ${location.pathname === "/upcoming" ? "active" : ""}`}
            >
              Upcoming-Event
            </Link>
            <Link
              to="/contact"
              ref={addToNavLinksRef}
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
            <Link
              to="/donation"
              ref={addToNavLinksRef}
              className={`nav-link ${location.pathname === "/donation" ? "active" : ""}`}
            >
              Donate
            </Link>
            <Link
              to="/gallery"
              ref={addToNavLinksRef}
              className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}
            >
              Gallery
            </Link>
          </div>
          <div className="nav-icons">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13C10.9391 13 9.92172 12.5786 9.17157 11.8284C8.42143 11.0783 8 10.0609 8 9C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9ZM14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM3 12C3 14.09 3.713 16.014 4.908 17.542C5.74744 16.4401 6.83015 15.5471 8.07164 14.9327C9.31312 14.3183 10.6798 13.9991 12.065 14C13.4324 13.9984 14.7821 14.3091 16.0111 14.9084C17.2402 15.5077 18.3162 16.3797 19.157 17.458C20.0234 16.3216 20.6068 14.9952 20.8589 13.5886C21.111 12.182 21.0244 10.7355 20.6065 9.36898C20.1886 8.00243 19.4512 6.75505 18.4555 5.73004C17.4598 4.70503 16.2343 3.93186 14.8804 3.47451C13.5265 3.01716 12.0832 2.88877 10.6699 3.09997C9.25652 3.31117 7.91379 3.85589 6.75277 4.68905C5.59175 5.52222 4.64581 6.61987 3.99323 7.8912C3.34065 9.16252 3.00018 10.571 3 12ZM12 21C9.93391 21.0033 7.93014 20.2926 6.328 18.988C6.97281 18.0646 7.83119 17.3107 8.83008 16.7905C9.82896 16.2702 10.9388 15.999 12.065 16C13.1772 15.999 14.2735 16.2635 15.263 16.7713C16.2524 17.2792 17.1064 18.0158 17.754 18.92C16.1395 20.267 14.1026 21.0033 12 21Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/training" element={<Training />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};




const HomePage = () => {

  const location = useLocation();

  
  
  const textt1 =useRef(null);
  const explore=useRef(null);
  const exploree=useRef(null);
  const exploreee=useRef(null);
  const join=useRef(null);
  const bar=useRef(null);

  // Clear previous refs to avoid duplication on re-renders
  

  

  useEffect(() => {
    // Animate logo
    
    if(textt1.current){
      gsap.fromTo(
        textt1.current,
        { x:-30,  opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          
          }
      );
    }
    
    if(explore.current){
      gsap.fromTo(
        explore.current,
        { scale:0 },
        {
          scale:1
        }
      )
    }

    if(exploree.current){
      gsap.fromTo(
        exploree.current,
        { scale:0 },
        {
          scale:1,
          scrollTrigger: {
            trigger: exploree.current,
            start: "top 90%",
            end: "top 80%",
            //scrub: true, // scroll-linked animation
            //markers: true, // shows markers for debugging
          },
        }
      )
    }

    if(exploreee.current){
      gsap.fromTo(
        exploreee.current,
        { scale:0 },
        {
          scale:1,
          scrollTrigger: {
            trigger: exploreee.current,
            start: "top 90%",
            end: "top 80%",
            //scrub: true, // scroll-linked animation
            //markers: true, // shows markers for debugging
          },
        }
      )
    }

    if(join.current){
      gsap.fromTo(
        join.current,
        {
          x:-30, opacity: 0
        }
        ,{
          x:0,
          opacity:1,
          duration:0.4
        }
      )
    }

    if(bar.current){
      gsap.fromTo(
        bar.current,
        { scale:0 },
        {
          
          scale:2
        }
      )
    }




    gsap.from("quote-text",{
      color:"blue",
      duration:2,
      delay:1,
      opacity:0,
      y:20,
      stagger:0.5,
      repeat:-1
  })
  }, []);






  return (




    <>
      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-background">
          <img
            src={yogaHero}
            alt="Mountain meditation background"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 ref={textt1} className="hero-title">Discover the Yogic Path Within</h1>
              <p className="hero-subtitle">
                Ancient Wisdom. Modern Transformation
              </p>
              <button ref={explore} className="cta-button">Explore Programs</button>
            </div>

            <div className="hero-quote">
              <div className="quote-accent" ref={bar}></div>
              <p ref={join} className="quote-text">
                Join our global community of seekers and teachers.
              </p>
            </div>
          </div>
        </div>
      </main>
    

      {/* Programs Cards */}
      <section className="programs-section">
        <div className="container">
          <div className="programs-grid">
            <div className="program-card">
              <div className="card-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path
                    d="M19.2954 61.25C17.9518 61.25 16.8308 60.8008 15.9324 59.9025C15.0341 59.0042 14.584 57.8832 14.582 56.5396V13.4604C14.582 12.1187 15.0322 10.9987 15.9324 10.1004C16.8327 9.20208 17.9537 8.75194 19.2954 8.75H50.7049C52.0466 8.75 53.1676 9.20014 54.0679 10.1004C54.9681 11.0007 55.4173 12.1217 55.4154 13.4633V56.5396C55.4154 57.8812 54.9662 59.0022 54.0679 59.9025C53.1695 60.8028 52.0476 61.2519 50.702 61.25H19.2954ZM19.2954 58.3333H50.7049C51.1522 58.3333 51.5634 58.1467 51.9387 57.7733C52.314 57.4 52.5006 56.9878 52.4987 56.5367V13.4633C52.4987 13.0142 52.312 12.6019 51.9387 12.2267C51.5654 11.8514 51.1531 11.6647 50.702 11.6667H46.6654V27.4575C46.6654 27.9281 46.469 28.2781 46.0762 28.5075C45.6834 28.7369 45.2819 28.7253 44.8716 28.4725L42.025 26.7867C41.6147 26.5339 41.2102 26.4075 40.8116 26.4075C40.413 26.4075 40.0086 26.5339 39.5983 26.7867L36.7545 28.4725C36.3423 28.7253 35.9466 28.7369 35.5674 28.5075C35.1883 28.2781 34.9987 27.9281 34.9987 27.4575V11.6667H19.2954C18.8462 11.6667 18.434 11.8533 18.0587 12.2267C17.6834 12.6 17.4968 13.0112 17.4987 13.4604V56.5396C17.4987 56.9868 17.6854 57.3981 18.0587 57.7733C18.432 58.1486 18.8433 58.3353 19.2924 58.3333M34.9987 27.5129V27.4575C34.9987 27.9281 35.1883 28.2781 35.5674 28.5075C35.9466 28.7369 36.3423 28.7253 36.7545 28.4725L39.5983 26.7867C40.0086 26.5339 40.413 26.4075 40.8116 26.4075C41.2102 26.4075 41.6147 26.5339 42.025 26.7867L44.8687 28.4725C45.2809 28.7253 45.6834 28.7369 46.0762 28.5075C46.469 28.2781 46.6654 27.9281 46.6654 27.4575V27.5129C46.6654 27.9465 46.469 28.2781 46.0762 28.5075C45.6834 28.7369 45.2809 28.7437 44.8687 28.5279L42.025 26.7867C41.6147 26.5339 41.2102 26.4075 40.8116 26.4075C40.413 26.4075 40.0086 26.5339 39.5983 26.7867L36.7545 28.5279C36.3423 28.7437 35.9466 28.7369 35.5674 28.5075C35.1883 28.2781 34.9987 27.9465 34.9987 27.5129Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="card-badge">Breath Yoga</div>
              <p className="card-description">
                Was conducted for 7 weeks during Covid-19
              </p>
            </div>

            <div className="program-card">
              <div className="card-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path
                    d="M33.5404 8.75C40.8891 8.75 47.9368 11.6693 53.1331 16.8656C58.3294 22.0619 61.2487 29.1096 61.2487 36.4583C61.2487 43.807 58.3294 50.8548 53.1331 56.0511C47.9368 61.2474 40.8891 64.1667 33.5404 64.1667C26.1917 64.1667 19.1439 61.2474 13.9476 56.0511C8.75129 50.8548 5.83203 43.807 5.83203 36.4583C5.83203 29.1096 8.75129 22.0619 13.9476 16.8656C19.1439 11.6693 26.1917 8.75 33.5404 8.75ZM33.5404 11.6667C26.9652 11.6667 20.6593 14.2786 16.01 18.928C11.3607 23.5773 8.7487 29.8832 8.7487 36.4583C8.7487 43.0335 11.3607 49.3394 16.01 53.9887C20.6593 58.638 26.9652 61.25 33.5404 61.25C36.7961 61.25 40.0199 60.6087 43.0277 59.3628C46.0356 58.117 48.7686 56.2908 51.0707 53.9887C53.3728 51.6866 55.199 48.9536 56.4449 45.9457C57.6908 42.9378 58.332 39.714 58.332 36.4583C58.332 29.8832 55.7201 23.5773 51.0707 18.928C46.4214 14.2786 40.1155 11.6667 33.5404 11.6667ZM32.082 20.4167H34.9987V36.225L48.707 44.1292L47.2487 46.6667L32.082 37.9167V20.4167Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="card-badge">Happy Yoga</div>
              <p className="card-description">
                Four weeks classes were held for children's during Covid-19
              </p>
            </div>

            <div className="program-card">
              <div className="card-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path
                    d="M55.6227 38.331L39.1231 54.8335C38.0292 55.9271 36.5458 56.5414 34.999 56.5414C33.4522 56.5414 31.9687 55.9271 30.8748 54.8335L14.3752 38.3339C13.0113 36.9819 11.9278 35.3738 11.1871 33.6019C10.4463 31.83 10.0628 29.9293 10.0586 28.0088C10.0544 26.0883 10.4296 24.1859 11.1626 22.4108C11.8956 20.6357 12.972 19.0229 14.33 17.6649C15.6879 16.3069 17.3008 15.2305 19.0759 14.4975C20.851 13.7645 22.7534 13.3894 24.6739 13.3936C26.5943 13.3978 28.4951 13.7813 30.267 14.522C32.0388 15.2628 33.6469 16.3463 34.999 17.7102C37.7452 15.0323 41.4359 13.5442 45.2715 13.5682C49.1072 13.5923 52.779 15.1265 55.4914 17.8386C58.2039 20.5507 59.7386 24.2222 59.7632 28.0578C59.7878 31.8935 58.3002 35.5844 55.6227 38.331Z"
                    stroke="#F8F8F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="card-badge">Donations</div>
              <p className="card-description">
                Bank details - , liyods bank, s/c: 30-91-91 Acc no 36987368
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Us</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Yoga means Union; means centre of education and excellence, like
                . will be utilizing ancient learning method to develop the
                knowledge and will be focused on education, training and
                research in the field of Yoga.
              </p>
              <p>
                We aim to promote deeper knowledge of Yoga and practise Yoga as
                'Way of life'. We strive to protect and preserve the
                authenticity of ancient Yoga knowledge. We endeavour to
                establish communication and collaboration with other
                organisations having similar objectives. We thrive to foster
                community cohesion in society. Our name in true sense,
                symbolizes aims of our organisation.
              </p>
            </div>
            <div className="about-image">
              <img
                /*src="https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D"*/
                src={dannam}
                alt="About us meditation"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Plan Cards */}
      <section className="mvp-section">
        <div className="container">
          <div className="mvp-grid">
            <div className="mvp-card">
              <img
                src="https://images.unsplash.com/photo-1582106316415-d02d4d0e9066?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Mission"
                className="mvp-image"
              />
              <div className="mvp-content">
                <h3>Our Mission</h3>
                <p>
                  We aim to bring together the experience of modern education
                  and ancient yoga, to teach the techniques and tools of yoga in
                  the school system.
                </p>
              </div>
            </div>

            <div className="mvp-card">
              <img
                src="https://images.unsplash.com/photo-1717821552922-61e18814a44a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2slMjBzdHJldGNoJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Our Plan"
                className="mvp-image"
              />
              <div className="mvp-content">
                <h3>Our Plan</h3>
                <p>
                  Our main focus is to serve educational institutions by
                  transforming level of excellence in physical, mental and
                  emotional abilities.
                </p>
              </div>
            </div>

            <div className="mvp-card">
              <img
                src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMHBvc2VzfGVufDB8fDB8fHww"
                alt="Our Vision"
                className="mvp-image"
              />
              <div className="mvp-content">
                <h3>Our Vision</h3>
                <p>
                  Yoga to be integrated in modern education for all round
                  development of children. Yoga will guide each child to reach
                  its maximum potential. Through Yoga we aim to secure our
                  children's bright future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <img
              src="https://media.istockphoto.com/id/637872606/photo/woman-doing-yoga-asana-natarajasana-outdoors-on-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZw8mnhieNznajlkN388sfDfE1mS8RbAHREn7zRdcvw="
              alt="Join Us Banner"
              className="cta-image"
            />
            <div className="cta-text">
              <h2>Join Us in Spreading the Light of Yoga in Education</h2>
              <p>
                Join us in bringing ancient wisdom to modern learning. Whether
                you're a teacher, parent, or yoga enthusiast—there's a place for
                you.
              </p>
              <center><button ref={exploree} className="cta-button secondary">Connect with Us</button></center>
            </div>
          </div>
        </div>
      </section>

      {/* Why Yog-Kulam Section */}
      <section className="why-yogkulam-section">
        <div className="container">
          <div className="why-yogkulam-content">
            <div className="why-yogkulam-text">
              <div className="section-header-underlined">
                <h2>Why Yog-Kulam</h2>
                <div className="orange-underline"></div>
              </div>
              <p className="why-yogkulam-description">
                Currently, Yog-Kulam is working on integrating ancient Yoga with
                our education system, with an aim of comprehensive development
                of our children. Over the course of time, different styles of
                Yoga have developed, we aim to bring it all under one roof.
              </p>
            </div>

            <div className="why-yogkulam-visual">
              <div className="circular-design">
                <svg className="circles-bg" viewBox="0 0 349 350" fill="none">
                  <path
                    opacity="0.32"
                    d="M344.263 175.037C343.944 129.712 328.165 90.1984 296.821 57.3737C264.067 23.0684 223.125 4.95644 176.032 4.88599C80.955 4.74365 5.31719 79.7417 4.8918 174.368C4.68045 221.247 21.4986 261.727 54.4211 295.062C87.4286 328.483 128.465 345.09 174.752 345.025C221.349 344.96 262.493 327.943 295.425 294.082C327.461 261.143 343.811 221.409 344.263 175.037ZM348.916 171.935C349.514 223.334 331.608 264.517 298.35 298.286C264.389 332.785 222.008 350.215 173.376 349.998C125.227 349.785 83.5325 331.688 50.0543 297.727C16.7357 263.93 -0.172779 222.361 0.00133102 174.177C0.172849 126.807 17.0588 85.9864 49.6729 52.6761C84.0563 17.5592 126.846 -0.631215 176.48 0.016724C224.599 0.64331 265.918 18.7804 299.586 52.8078C328.963 82.5008 350.524 127.614 348.916 171.935Z"
                    fill="#F96F00"
                  />
                  <path
                    opacity="0.32"
                    d="M309.805 187.49C309.485 138.617 296.94 107.601 271.741 81.6048C245.425 54.4601 213.368 40.2518 175.734 39.9891C102.15 39.4797 40.3052 100.092 40.3479 174.699C40.3905 249.819 100.439 309.779 174.968 310.09C213.312 310.248 246.661 295.835 272.901 267.828C297.126 241.972 310.431 211.008 309.805 187.49ZM175.536 35.0116C214.847 35.5263 248.267 49.9733 275.625 78.1407C301.841 105.132 315.145 138.016 314.999 175.354C314.852 212.984 301.281 246.084 274.605 273.045C246.998 300.949 213.318 314.855 174.021 314.999C150.68 315.086 128.741 309.198 108.366 298.221C87.6712 287.077 70.9454 271.303 57.8701 251.603C42.6039 228.602 35.2219 202.903 35.0048 175.842C34.8317 154.293 39.3477 133 49.3706 113.32C62.3621 87.8104 80.9551 67.4565 105.738 53.3547C127.204 41.1397 150.527 34.6876 175.536 35.0116Z"
                    fill="#F96F00"
                  />
                  <path
                    opacity="0.32"
                    d="M76.8031 175.236C74.822 229.904 121.439 274.31 174.215 274.293C202.519 274.284 226.672 264.108 246.328 243.842C264.885 224.711 274.137 201.011 274.032 174.64C273.918 146.538 263.318 121.885 242.719 102.491C223.831 84.7056 201.248 75.8837 175.071 75.4688C122.754 74.6375 74.3089 119.688 76.8031 175.236ZM174.492 278.952C117.884 279.874 71.0383 232.428 71 174.677C70.9789 145.05 82.3087 119.43 103.299 98.9968C123.152 79.6716 148.087 69.8254 175.512 70.0023C203.215 70.1819 228.175 80.4483 247.923 100.359C268.341 120.945 278.959 146.141 279 175.687C279.077 230.619 232.295 280.768 174.492 278.952Z"
                    fill="#F96F00"
                  />
                  <path
                    opacity="0.32"
                    d="M174.826 238.449C210.067 240.456 239.795 207.655 239.439 174.929C239.043 138.538 211.285 109.996 175.248 109.9C139.762 109.804 111.237 136.618 110.796 174.612C110.384 210.057 140.137 239.887 174.826 238.449ZM243.973 174.785C244.755 211.392 214.85 244.511 174.757 243.994C135.322 243.485 106.04 214.357 106 174.322C105.96 135.444 136.236 105.077 175.186 105C213.11 104.924 245.056 136.63 243.973 174.785Z"
                    fill="#F96F00"
                  />
                  <path
                    opacity="0.32"
                    d="M203.415 175.304C204.92 157.756 188.823 144.647 174.718 145.241C158.171 145.935 145.912 156.082 145.896 174.357C145.877 193.805 158.879 203.815 174.891 203.968C190.232 204.115 203.913 191.764 203.415 175.304ZM141.108 174.071C139.526 155.559 160.165 138.933 175.452 140.054C194.118 141.421 208.911 155.795 209 174.352C209.082 192.022 195.489 208.787 174.297 208.999C155.972 209.178 139.508 192.236 141.108 174.071Z"
                    fill="#F96F00"
                  />
                </svg>
              </div>
              
              <div className="yoga-images-collage">
                <img
                  src={pose1}
                  alt="Yoga pose 1"
                  className="yoga-image yoga-image-1"
                />
                <img
                  src={pose2}
                  alt="Yoga pose 2"
                  className="yoga-image yoga-image-2"
                />
                <img
                  src={pose3}
                  alt="Yoga pose 3"
                  className="yoga-image yoga-image-3"
                />
                <img
                  src={pose4}
                  alt="Yoga pose 4"
                  className="yoga-image yoga-image-4"
                />
                <img
                  src={pose5}
                  alt="Main yoga pose"
                  className="yoga-image yoga-image-main"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Detail Section */}
      <section className="programs-detail-section">
        <div className="container">
          <div className="programs-detail-grid">
            <div className="program-detail-card">
              <div className="program-image-container">
                <img
                  src="https://media.istockphoto.com/id/538353314/photo/women-meditating-pastel-on-high-mountain-in-sunset-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=bm8jsOS2qMCFC4kqV54rbipbrcrsy8QOXRJv2uYRScM="
                  alt="Happy Yoga"
                  className="program-image"
                />
              </div>
              <div className="program-info">
                <h3>Happy Yoga</h3>
                <p>
                  In 2020, During lockdown we organised Happyoga events. Which
                  improved and developing children by using Yoga.
                </p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="program-detail-card">
              <div className="program-image-container">
                <img
                  src="https://media.istockphoto.com/id/1277689627/photo/senior-man-in-public-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=jmGF7PajdnpVPOdTejo0q0AB_-9sgvKq_5xpU4iKf4s="
                  alt="Breathe Yoga"
                  className="program-image"
                />
              </div>
              <div className="program-info">
                <h3>Breathe Yoga</h3>
                <p>
                  Teen Yoga is currently working with Leeds, York and Sheffield
                  universities to conduct research into how mindfulness in
                  schools could be most effective for young people.
                </p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="program-detail-card">
              <div className="program-image-container">
                <img
                  src="https://media.istockphoto.com/id/855913958/photo/the-days-of-excuses-are-behind-them.webp?a=1&b=1&s=612x612&w=0&k=20&c=hY1w2XHyibbStNiktKi-kfIOAQkSDGmc6Gr62mA_koM="
                  alt="Teacher Training"
                  className="program-image"
                />
              </div>
              <div className="program-info">
                <h3>Teacher Training</h3>
                <p>
                  Teen Yoga is currently working with Leeds, York and Sheffield
                  universities to conduct research into how mindfulness in
                  schools could be most effective for young people.
                </p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
          </div>

          <div className="events-content">
            <div className="event-images">
              <img
                /*src="https://media.istockphoto.com/id/1304571085/photo/portrait-of-a-beautiful-woman-training-at-home-and-watching-online-lessons-in-the-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=HHoY8hoLPMHbsNBS2xm1hUxUL23TjxUIDK0zRpr6Rcs="*/
                src={apply}
                alt="Event 1"
                className="event-image"
              />
              <div className="event-controls">
                <button className="event-nav-btn">
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle
                      cx="35"
                      cy="35"
                      r="35"
                      fill="#F96F00"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M20.4156 32.0835H42.5531L32.9281 22.4877C32.3789 21.9385 32.0703 21.1936 32.0703 20.4169C32.0703 19.6402 32.3789 18.8953 32.9281 18.346C33.4773 17.7968 34.2222 17.4883 34.9989 17.4883C35.7756 17.4883 36.5205 17.7968 37.0698 18.346L51.6531 32.9294C51.9186 33.2068 52.1268 33.5339 52.2656 33.8919C52.5573 34.602 52.5573 35.3985 52.2656 36.1085C52.1268 36.4666 51.9186 36.7937 51.6531 37.071L37.0698 51.6544C36.7986 51.9277 36.476 52.1447 36.1206 52.2928C35.7652 52.4409 35.384 52.5171 34.9989 52.5171C34.6139 52.5171 34.2327 52.4409 33.8772 52.2928C33.5218 52.1447 33.1992 51.9277 32.9281 51.6544C32.6547 51.3832 32.4377 51.0606 32.2897 50.7052C32.1416 50.3498 32.0653 49.9686 32.0653 49.5835C32.0653 49.1985 32.1416 48.8173 32.2897 48.4619C32.4377 48.1064 32.6547 47.7839 32.9281 47.5127L42.5531 37.9169H20.4156C19.642 37.9169 18.9002 37.6096 18.3532 37.0626C17.8062 36.5156 17.4989 35.7738 17.4989 35.0002C17.4989 34.2267 17.8062 33.4848 18.3532 32.9378C18.9002 32.3908 19.642 32.0835 20.4156 32.0835Z"
                      fill="#F96F00"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="event-images-right">
              <img
                src="https://images.unsplash.com/photo-1666478042293-17ea55f33b52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Routine Yoga 1"
                className="routine-image1"
              />
              <img
                src="https://images.unsplash.com/photo-1659176988433-4bb271684f28?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Routine Yoga 2"
                className="routine-image2"
              />
            </div>
          </div>

          <div className="events-cta">
            {/*
            <button 
            className={`cta-button nav-link ${location.pathname === "/registration" ? "active" : ""}`}
            onClick={() => navigate("/registration")}
            >
            Click to Registrations
            </button>
            */}
            <Link to="/registration"
                className={`cta-button nav-link ${location.pathname === "/registration" ? "active" : ""}`} ref={exploreee}
            >
            Click to Registrations
            </Link>
          </div>
        </div>
      </section>

      {/* News and Updates */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>News and Update</h2>
          </div>

          <div className="news-banner">
            <div className="news-content">
              <h3>1. Learning Now Begins – Yoga Sutra Course.</h3>
              <p>
                2. Note: Students are expected to achieve at least 80%
                attendance (both online and offline) to qualify for the
                certification.
              </p>
              <center><button className="cta-button">View All</button></center>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <center>
          <div className="final-cta-content">
            <h2>Take the next step in your yoga journey</h2>
            <p>
              Be part of a transformative journey for yourself and the next
              generation.
            </p>
            <center><button className="cta-button">Join Now</button></center>
          </div>
          </center>
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
    </>
  );
};

export default App;
