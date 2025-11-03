import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMsg("✅ Registration Successful!");
        setTimeout(() => navigate("/login"), 1200);
      } else {
        setMsg("❌ " + (data.message || "Registration failed"));
      }
    } catch (error) {
      console.error("Register error:", error);
      setMsg("⚠️ Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account ✨</h2>
        <p className="subtitle">Join our secure mini-auth platform</p>

        <form onSubmit={handleRegister}>
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Register
          </button>

          <p className="redirect-text">
            Already have an account?{" "}
            <span className="link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>

          <p className="msg">{msg}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
// import React, { useState } from "react";
// import API from "../api";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await API.post("/register", { email, password });
//       setMessage(data.message || "Registration successful!");
//       navigate("/login");
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br /><br />
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br /><br />
//         <button type="submit">Register</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Register;
