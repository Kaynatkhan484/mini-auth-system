import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMsg("✅ Login Successful!");
        localStorage.setItem("token", data.token);
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        setMsg("❌ " + (data.message || "Invalid Credentials"));
      }
    } catch (error) {
      console.error("Login error:", error);
      setMsg("⚠️ Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to continue your journey</p>

        <form onSubmit={handleLogin}>
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
            Login
          </button>

          <p className="redirect-text">
            Don’t have an account?{" "}
            <span className="link" onClick={() => navigate("/register")}>
              Register
            </span>
          </p>

          <p className="msg">{msg}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMsg("Login successful!");
//         localStorage.setItem("token", data.token);
//         navigate("/dashboard");
//       } else {
//         setMsg(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMsg("Something went wrong");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Welcome Back 👋</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         <p>
//           Don’t have an account?{" "}
//           <a
//             href="/register"
//             onClick={(e) => {
//               e.preventDefault();
//               navigate("/register");
//             }}
//           >
//             Register
//           </a>
//         </p>
//         <p id="msg">{msg}</p>
//       </form>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import API from "../api";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await API.post("/login", { email, password });
//       localStorage.setItem("token", data.token);
//       setMessage("Login successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
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
//         <button type="submit">Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Login;
