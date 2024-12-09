import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register"; // Import the Register page
import HomePage from "./pages/HomePage";
import CoreFeatures from "./components/CoreFeatures";
import HowItWorks from "./components/HowItWorks";
import FeaturedCourses from "./components/FeaturedCourses";
import CallToAction from "./components/CallToAction";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/features" element={<CoreFeatures />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/courses" element={<FeaturedCourses />} />
        <Route path="call-to-action" element={<CallToAction />} />
      </Routes>
    </Router>
  );
}

export default App;
