import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <div className="hero-section">
      <h1>Learn, Share, and Collaborate on Skills with SkillSphere</h1>
      <p>A collaborative platform for learners, mentors, and creators to grow together.</p>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate("/register")}>
        Get Started
      </Button>
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => navigate("/courses")}>
        Explore Courses
      </Button>
    </div>
  );
}

export default HeroSection;
