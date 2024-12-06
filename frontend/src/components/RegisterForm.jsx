// import React, { useState } from "react";
// import api from "../services/api"; 
// function RegisterForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post("users/register/", {
//         username,
//         password,
//         email,
//       });
//       setSuccess(response.data.message);
//       setError(""); // Clear any previous error
//     } catch (err) {
//       setError(err.response?.data?.error || "An error occurred");
//       setSuccess(""); // Clear any previous success message
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {success && <p style={{ color: "green" }}>{success}</p>}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;



import React, { useState } from "react";
import api from "../services/api"; 
import "./styles/RegisterForm.scss";


function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("users/register/", {
        username,
        password,
        email,
      });
      setSuccess(response.data.message);
      setError("");
      setUsername("");
      setPassword("");
      setEmail("");
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
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button className="submit-button" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;