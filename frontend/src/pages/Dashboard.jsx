import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Dashboard() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email") || "user@example.com";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <h1 className="dashboard-title">Welcome to Your Dashboard 🌟</h1>

        <div className="dashboard-section welcome">
          <h2>Access Granted ✅</h2>
          <p>You’ve successfully logged in to your protected route.</p>
        </div>

        <div className="dashboard-section info">
          <p>
            <strong>Logged in as:</strong> {userEmail}
          </p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       window.location.href = "/login"; // redirect if no token
//       return;
//     }

//     axios
//       .get("http://localhost:5000/api/auth/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setUser(res.data.user))
//       .catch((err) => {
//         console.error("Dashboard error:", err);
//         setError("Session expired or invalid token");
//         localStorage.removeItem("token");
//         setTimeout(() => (window.location.href = "/login"), 2000);
//       });
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {user ? (
//         <>
//           <h2>Dashboard</h2>
//           <p>Access granted ✅</p>
//           <p>Logged in as: {user.email}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

export default Dashboard;
