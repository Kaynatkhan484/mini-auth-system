# Mini Authentication System (JWT-Based)

**Project**: Mini Authentication System — Option 4 (Security Focus)  
**For**: Slanup Full-Stack Development Internship (Submission)  
**Author**: Kaynat Khan  

---

## Summary
This project is a **secure full-stack authentication system** built using the **MERN stack (MongoDB, Express, React, Node.js)**.

It demonstrates the complete JWT-based authentication flow — including **user registration, login, protected routes, and logout** — with clean folder structure, token handling, and frontend-backend integration.

---

## Features

### Backend (Node.js + Express)
- `POST /api/auth/register` → Register new user (email + password)
- `POST /api/auth/login` → Login user and return JWT
- `GET /api/auth/me` → Protected route (requires token)
- Passwords hashed securely using `bcrypt`
- Token validation using JWT middleware
- MongoDB (Mongoose) for user storage

### Frontend (React + Vite)
- Registration page  
- Login page  
- Protected Dashboard  
- Logout functionality  
- Token stored in `localStorage`  
- Axios instance auto-attaches token  
- Redirects if not authenticated  

---

## Tech Stack

| Layer | Technology Used |
|-------|------------------|
| Frontend | React (Vite), Axios, React Router |
| Backend | Node.js, Express.js, JWT, bcryptjs |
| Database | MongoDB (Local/Atlas) |
| Tools | VS Code, Postman, Git & GitHub |

---

## Project Structure

mini-auth-system/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── package.json
│ └── .env.example
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── api.js
│ │ └── components/
│ │ ├── Register.jsx
│ │ ├── Login.jsx
│ │ └── Dashboard.jsx
│ ├── vite.config.js
│ ├── package.json
│ └── .env.example
├── .gitignore
└── README.md

## Setup & Run Instructions

### Step 1: Clone Repository

```bash
git clone https://github.com/Kaynatkhan484/mini-auth-system.git
cd mini-auth-system

🔹Step 2: Setup Backend
cd backend
npm install

Create a .env file in the backend folder with the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Now run the backend:
npm run dev


Backend runs on: http://localhost:5000
You can test it in Postman using the routes:

POST http://localhost:5000/api/auth/register

POST http://localhost:5000/api/auth/login

GET http://localhost:5000/api/auth/me

🔹Step 3: Setup Frontend

Open a new terminal and run:

cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173
When you open this in your browser, you’ll see the Login page.

Register → Login → You’ll be redirected to the Dashboard.

Click Logout to return to the login page.

🧪 Testing Flow

Register a new user

Log in with the same credentials

Access the Dashboard (protected route)

Try logging out → redirected back to Login page

🧾 Author

Developed by: Kaynat Khan
GitHub Repository: https://github.com/Kaynatkhan484/mini-auth-system