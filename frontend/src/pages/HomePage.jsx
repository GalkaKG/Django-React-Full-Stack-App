import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CoreFeatures from "../components/CoreFeatures";
import HowItWorks from "../components/HowItWorks";
import FeaturedCourses from "../components/FeaturedCourses";
// import Testimonials from "../components/Testimonials";
// import Community from "../components/Community";
// import Gamification from "../components/Gamification";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import "./styles/HomePage.scss";
import "./styles/responsive.scss";

function HomePage() {
  return (
    <div className="home-page">
      <NavBar /> {/* Add the NavBar */}
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>
      {/* Core Features */}
      <section id="features">
        <h2>Core Features</h2>
        <CoreFeatures />
      </section>
      {/* How It Works */}
      <section id="how-it-works">
        <h2>How SkillSphere Works</h2>
        <HowItWorks />
      </section>
      {/* Featured Courses */}
      <section id="featured-courses">
        <h2>Featured Courses and Workshops</h2>
        <FeaturedCourses />
      </section>
      {/* Testimonials
      <section id="testimonials">
        <h2>What Our Users Say</h2>
        <Testimonials />
      </section> */}
      {/* Community and Collaboration
      <section id="community">
        <h2>Join the SkillSphere Community</h2>
        <Community />
      </section> */}
      {/* Gamification and Achievements
      <section id="gamification">
        <h2>Earn Badges and Achievements</h2>
        <Gamification />
      </section> */}
      {/* Call to Action */}
      <section id="cta">
        <CallToAction />
      </section>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
