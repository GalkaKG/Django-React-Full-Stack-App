import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./styles/RegisterForm.scss";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    if (!acceptTerms) {
      setError("You must accept the terms and conditions.");
      setSuccess("");
      return;
    }

    try {
      const response = await api.post("users/register/", {
        username,
        email,
        password,
        confirm_password: confirmPassword,
        accept_terms: acceptTerms,
      });
      setSuccess(response.data.message);
      setError("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAcceptTerms(false);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="form-group terms">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="acceptTerms">
            I accept the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
