# Minati AI - Full Stack User Management

## Overview

Minati AI is a full-stack application featuring user authentication, profile management, and advanced user search. The project is built with a Node.js/Express backend (MongoDB) and a React/Tailwind frontend, with Redux for state management.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Backend API](#backend-api)
  - [Authentication](#authentication)
  - [Profile](#profile)
  - [User Search](#user-search)
- [Frontend Usage](#frontend-usage)
- [Customization](#customization)
- [Contributing](#contributing)

---

## Features

- User registration, login, and email verification (OTP)
- Secure JWT authentication
- Password reset via email
- User profile with all fields (except sensitive data)
- Advanced user search by name, email, contact, or ID
- Responsive, modern UI with Tailwind CSS
- Protected routes and session management

---

## Project Structure

```
Minati-AI-main/
  backend/
    config/           # DB and environment config
    controllers/      # Express controllers (auth, profile)
    middleware/       # JWT auth middleware
    models/           # Mongoose User model
    routes/           # Express routes (auth, profile)
    utils/            # Mailer, crypto, JWT helpers
    server.js         # Main Express app
  frontend/
    src/
      app/            # Redux store and slices
      components/     # React components (UserSearchForm, Layout, etc.)
      pages/          # React pages (Dashboard, Auth, UserSearchPage, etc.)
    public/
    tailwind.config.js
    vite.config.js
  README.md
```

---

## Setup & Installation

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB

### 1. Clone the repository

```bash
git clone <repo-url>
cd Minati-AI-main
```

### 2. Backend Setup

```bash
cd backend
npm install
# Create a .env file (see below)
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
# Create a .env file (see below)
npm run dev
```

---

## Environment Variables

### Backend (.env example)

```
MONGO_URI=mongodb://localhost:27017/minati-ai
JWT_SECRET=your_jwt_secret
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_password
PORT=8080
```

### Frontend (.env example)

```
VITE_API_BASE_URL=http://localhost:8080
```

---

## Backend API

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `POST /api/auth/verify-otp` — Verify email with OTP
- `POST /api/auth/forgot-password` — Request password reset
- `POST /api/auth/reset-password` — Reset password

### Profile

- `GET /api/profile` — Get the logged-in user's profile (requires JWT in `Authorization` header)
  - **Response:**
    ```json
    {
      "_id": "...",
      "email": "...",
      "fullname": "...",
      "contact": "...",
      "isVerified": true,
      "createdAt": "...",
      "updatedAt": "...",
      "__v": 0
    }
    ```

### User Search

- `POST /api/profile/search` — Search users by name, email, contact, or ID
  - **Request Body:**
    ```json
    { "query": "searchValue" }
    ```
  - **Response:**
    ```json
    {
      "users": [
        {
          "_id": "...",
          "email": "...",
          "fullname": "...",
          "contact": "...",
          "isVerified": true,
          "createdAt": "...",
          "updatedAt": "...",
          "__v": 0
        }
        // ...more users
      ]
    }
    ```

---

## Frontend Usage

- Register, login, and manage your profile from the UI.
- Use the **User Search** page to find users by any field.
- The Dashboard displays all profile fields for the logged-in user.
- All forms and tables are fully responsive and styled with Tailwind CSS.

---

## Customization

- Update theme colors in `tailwind.config.js`.
- Add new fields to the User model and update forms/pages as needed.
- Extend search logic in `profileControllers.js` for more advanced queries.

---

## Contributing

1. Fork the repo and create your branch.
2. Commit your changes and push.
3. Open a pull request with a clear description.

---

## License

MIT
