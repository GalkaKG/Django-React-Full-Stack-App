import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import api from "../services/api";
import "./styles/LoginForm.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use api.js instance to make the request
      const response = await api.post("/users/login/", {
        username,
        password,
      });

      // Save the access token to localStorage or state
      localStorage.setItem("accessToken", response.data.access);

      // Optionally, save the refresh token
      localStorage.setItem("refreshToken", response.data.refresh);

      setAccessToken(response.data.access);
      setError("");
      navigate("/")
    } catch (err) {
      setError("Invalid credentials");
      setAccessToken("");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {accessToken && (
        <div className="alert alert-success">Logged in successfully</div>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
