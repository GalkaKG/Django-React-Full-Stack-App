import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // Your axios instance
import "./styles/Profile.scss"; // Optional for styling

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          navigate("/login"); // Redirect to login if not authenticated
          return;
        }

        const response = await api.get("/users/profile/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (err) {
        setError("Failed to load profile");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.put("/users/profile/", profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(response.data);
      setSuccess("Profile updated successfully");
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="profile-button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
